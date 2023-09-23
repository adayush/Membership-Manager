import { getServerSession } from "next-auth";
import { authOptions } from "@/api/auth/[...nextauth]/route";
import supabase from "@/utils/supabase";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const data = await supabase
    .from("users")
    .select(
      "id, name, branch, phone_number, email, is_active"
    )
    .eq("role", "manager")
    .eq("id", params.id)
    .limit(1)
    .single()

  if (data.error) {
    return NextResponse.json({ statusText: data.statusText }, { status: data.status });
  } else {
    return NextResponse.json(data.data);
  }
}

export async function PUT(request, { params }) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await request.json();

  const data = await supabase
    .from("users")
    .update({
      name: formData.name,
      branch: formData.branch,
      phone_number: formData.phone_number,
      email: formData.email,
      is_active: formData.is_active
    })
    .eq("id", params.id)

  if (data.error) {
    return NextResponse.json({ statusText: data.statusText }, { status: data.status });
  } else {
    return NextResponse.json(data.data);
  }
}
