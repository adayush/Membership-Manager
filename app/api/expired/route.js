import supabase from "@/utils/supabase";
import { NextResponse } from "next/server";

export async function GET() {
  const today = new Date().toISOString().split('T')[0].replaceAll('-', '/');
  let week = new Date();
  week.setDate(week.getDate() - 7)
  week = week.toISOString().split('T')[0].replaceAll('-', '/')

  console.log(today, week)

  const data = await supabase
    .from("Receipts")
    .select(
      "receipt_number, branch, name, phone_number, expiry_date, created"
    )
    // .eq('branch', 'Talwandi')
    .lt('expiry_date', today)
    .gte('expiry_date', week);

  if (data.error === 'null') {
    return NextResponse.json({}, { status: 404 });
  } else {
    return NextResponse.json(data.data);
  }
}
