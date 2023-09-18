import { getServerSession } from "next-auth";
import { authOptions } from "@/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import supabase from "@/utils/supabase";

export async function PUT(request) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await request.json();

  // console.log('\nForm data received', formData, "\n");

  const data = await supabase
    .from("Receipts")
    .update({
      receipt_number: formData.receipt_number,
      name: formData.name,
      branch: formData.branch,
      phone_number: formData.phone_number,
      expiry_date: formData.expiry_date
    })
    .eq("key", formData.key)

  if (data.error !== null) {
    console.error("Updating row failed")
  } else {
    console.error('Successfully updated row')
  }
  return NextResponse.json(data.statusText, { status: data.status === 204 ? 200 : 400 });
}
