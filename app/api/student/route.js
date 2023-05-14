import { NextResponse } from 'next/server';
import data from "@/public/data.json"
 
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const receipt = searchParams.get('receipt');
  // const res = await fetch('https://data.mongodb-api.com/...', {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'API-Key': process.env.DATA_API_KEY,
  //   },
  // });
  // const data = await res.json();

  const student = data.find(item => item["Receipt Number"] === parseInt(receipt))

  if (student) {
    delete student["Key"]
    return NextResponse.json( student );
  } else {
    return NextResponse.json([], { status: 404 })
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