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

  let date = new Date()
  date.setDate(date.getDate() + 1)
  date = date.toISOString().split('T')[0].replaceAll('-', '/');

  const data = await supabase
    .from("Receipts")
    .select()
    .eq('branch', branch)
    .lt('created', date)
    .order('created', { ascending: false })
    .limit(10)

  if (data.error === 'null') {
    return NextResponse.json({}, { status: 404 });
  } else {
    return NextResponse.json(data.data);
  }
}
