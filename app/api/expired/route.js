import supabase from '@/utils/supabase';
import { NextResponse } from 'next/server';
 
export async function GET() {
  // const res = await fetch(`${process.env.PUBLIC_URL}/data.json`);
  // const data = await res.json();

  const data = await supabase.from('receipts').select('*')

  console.log(data)

  // await timeout(1000);
  // function timeout(ms) {
  //   return new Promise((resolve) => setTimeout(resolve, ms));
  // }
  return NextResponse.json(data);
}