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
  const key = searchParams.get("key");

  const data = await supabase
    .from("Receipts")
    .select()
    .eq("key", key);

  if (data.error) {
    return NextResponse.json({}, { status: 404 });
  } else {
    return NextResponse.json(data.data[0]);
  }
}
