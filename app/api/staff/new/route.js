import { getServerSession } from "next-auth";
import { authOptions } from "@/api/auth/[...nextauth]/route";
import supabase from "@/utils/supabase";
import { NextResponse } from "next/server";

export async function POST(request, { params }) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await request.json();

  const data = await supabase
    .from("users")
    .insert([
      {
        ...formData,
        role: "manager"
      }
    ]);

  if (data.error) {
    return NextResponse.json({ statusText: data.statusText }, { status: data.status });
  } else {
    return NextResponse.json(data.data);
  }
}
