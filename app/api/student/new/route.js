import { NextResponse } from "next/server";
import supabase from "@/utils/supabase";

export async function POST(request) {
  const formData = await request.json();

  // const date = new Date().toISOString().split("T");
  // date[1] = date[1].slice(0, date[1].indexOf("."));
  // formData["created"] = `${date[0]} ${date[1]}`;

  console.log('Form data received', formData);

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
