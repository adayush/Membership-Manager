import { getServerSession } from "next-auth";
import { authOptions } from "@/api/auth/[...nextauth]/route";
import supabase from "@/utils/supabase";
import { NextResponse } from "next/server";

export async function GET(request) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const data = await supabase
    .from("users")
    .select(
      "id, name, branch, is_active"
    )
    .eq("role", "manager")
    .order("branch", { ascending: false })

  if (data.error) {
    return NextResponse.json({ statusText: data.statusText}, { status: data.status });
  } else {
    return NextResponse.json(data.data);
  }
}
