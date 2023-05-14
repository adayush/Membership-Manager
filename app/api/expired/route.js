import { NextResponse } from 'next/server';
import data from "@/public/data.json"
 
export async function GET() {
  // const res = await fetch('https://data.mongodb-api.com/...', {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'API-Key': process.env.DATA_API_KEY,
  //   },
  // });
  // const data = await res.json();
 
  return NextResponse.json(data);
}