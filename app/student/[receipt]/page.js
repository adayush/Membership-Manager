"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import getBranchName from "@/utils/getBranchName";
import Loader from "@/components/Loader";

export default function Student({ params }) {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_PUBLIC_URL}/api/student?receipt=${params.receipt}`)
      .then(response => response.json())
      .then(data => setData({
        ...data,
        branch: getBranchName(data.branch)
      }))
  }, [params.receipt])


  if (data === undefined) {
    return <Loader />
  } else if (data.length === 0) {
    return (
      <main className="p-6 md:p-24">
        <p className="text-lg">Sorry, this student's data is not available.</p>
      </main>
    )
  } else {
    return (
      <main className="p-6 md:p-24">
        <div className="flex flex-col gap-5 max-w-2xl m-auto">
          <div>
            <p className="text-sm text-gray-500 mb-1">Receipt Number</p>
            <p className="text-gray-800 text-xl">{data.receipt_number}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Branch</p>
            <p className="text-gray-800 text-xl">{data.branch}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Name</p>
            <p className="text-gray-800 text-xl">{data.name}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Phone Number</p>
            <a href={`tel:+91${data.phone_number}`}>
              <p className="text-gray-800 text-xl">{data.phone_number}</p>
            </a>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Membership Expiry Date</p>
            <p className="text-gray-800 text-xl">{data.expiry_date}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Creation Date</p>
            <p className="text-gray-800 text-xl">{data["created"]}</p>
          </div>
        </div>
        <Link href={`${process.env.NEXT_PUBLIC_PUBLIC_URL}/student/${data.receipt_number}/edit`}>
          <div className="absolute right-8 bottom-8 p-5 [clip-path:circle()] [shape-outside:circle()] bg-black text-white rounded-full">
            <Image src="/images/editsmall.png" width={24} height={24} alt="Edit button" />
          </div>
        </Link>
      </main>
    );
  }
}
