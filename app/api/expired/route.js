import supabase from "@/utils/supabase";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await supabase
    .from("Receipts")
    .select(
      "receipt_number, branch, name, phone_number, expiry_date, created"
    );

  if (data.error === 'null') {
    return NextResponse.json({}, { status: 404 });
  } else {
    return NextResponse.json(data.data);
  }
}
