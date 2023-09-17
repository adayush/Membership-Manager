import { NextResponse } from "next/server";
import supabase from "@/utils/supabase";

export async function PUT(request) {
  const formData = await request.json();

  // console.log('\nForm data received', formData, "\n");

  const data = await supabase
    .from("Receipts")
    .update({
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
