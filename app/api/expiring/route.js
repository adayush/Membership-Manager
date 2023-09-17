import { getServerSession } from "next-auth";
import { authOptions } from "@/api/auth/[...nextauth]/route";
import supabase from "@/utils/supabase";
import { NextResponse } from "next/server";

export async function GET(request) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: "Unauthorized"}, { status: 401 });
  }

  const { searchParams } = new URL(request.url)
  const branch = searchParams.get('branch')

  const today = new Date().toISOString().split('T')[0].replaceAll('-', '/');
  let week = new Date();
  week.setDate(week.getDate() + 7)
  week = week.toISOString().split('T')[0].replaceAll('-', '/')

  const data = await supabase
    .from("Receipts")
    .select(
      "receipt_number, branch, name, phone_number, expiry_date, created"
    )
    .eq('branch', branch)
    .gte('expiry_date', today)
    .lt('expiry_date', week);

  if (data.error === 'null') {
    return NextResponse.json({}, { status: 404 });
  } else {
    return NextResponse.json(data.data);
  }
}
