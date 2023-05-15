import { NextResponse } from "next/server";
import supabase from "@/utils/supabase";
// import data from "@/public/data.json"

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const receipt = searchParams.get("receipt");

  const data = await supabase
    .from("Receipts")
    .select()
    .eq("Receipt Number", receipt);

  if (data.error) {
    return NextResponse.json({}, { status: 404 });
  } else {
    delete data.data[0]["Key"];
    return NextResponse.json(data.data[0]);
  }
}

// export async function POST() {
//   const res = await fetch('https://data.mongodb-api.com/...', {
//     headers: {
//       'Content-Type': 'application/json',
//       'API-Key': process.env.DATA_API_KEY,
//     },
//   });
//   const data = await res.json();

//   return NextResponse.json({ data });
// }
