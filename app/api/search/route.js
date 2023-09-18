import { getServerSession } from "next-auth";
import { authOptions } from "@/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import supabase from "@/utils/supabase";

export async function GET(request) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const query = searchParams.get("receipt") || searchParams.get("name");

  let data = null;

  if (!parseInt(query)) {
    data = await supabase
      .from("Receipts")
      .select("receipt_number, branch, name, phone_number, expiry_date")
      .like("name", `%${query}%`)
      .limit(20)
  } else {
    data = await supabase
      .from("Receipts")
      .select("receipt_number, branch, name, phone_number, expiry_date")
      .eq("receipt_number", parseInt(query))
      .limit(20)
  }

  if (data.error) {
    return NextResponse.json({}, { status: 404 });
  } else {
    return NextResponse.json(data.data);
  }
}
