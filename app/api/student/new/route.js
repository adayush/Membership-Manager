import { getServerSession } from "next-auth";
import { authOptions } from "@/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import supabase from "@/utils/supabase";

export async function POST(request) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: "Unauthorized"}, { status: 401 });
  }

  const formData = await request.json();

  const data = await supabase
    .from("Receipts")
    .insert([formData]);

  if (data.error !== null) {
    console.error("Inserting row failed")
  } else {
    console.log('Successfully inserted row')
  }
  return NextResponse.json(data.statusText, { status: data.status });
}
