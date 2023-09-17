import { getServerSession } from "next-auth";
import { authOptions } from "@/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import supabase from "@/utils/supabase";

export async function GET(request) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: "Unauthorized"}, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const receipt = searchParams.get("receipt");

  const data = await supabase
    .from("Receipts")
    .select()
    .eq("receipt_number", receipt);

  if (data.error) {
    return NextResponse.json({}, { status: 404 });
  } else {
    delete data.data[0]["Key"];
    return NextResponse.json(data.data[0]);
  }
}
