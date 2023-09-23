"use client";
import Link from "next/link";
import StaffCard from "@/components/StaffCard";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

export default function Staff() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_PUBLIC_URL}/api/staff`)
      .then(response => response.json())
      .then(data => setData(data))
  }, [])

  if (data === undefined) {
    return <Loader />
  } else {
    return (
      <main className="p-6 md:p-24">
        <div className="flex flex-col gap-4 max-w-2xl m-auto">
          <h1 className="text-2xl mb-2 text-center font-medium">
            Manage Staff
          </h1>
          <Link href={`/staff/new`} prefetch={false} className="mb-2 p-3 border rounded-md bg-blue-100 text-center">
            <div>
              <h2>➕ Add new staff member</h2>
            </div>
          </Link>
          <div className="flex flex-col gap-4">
            {data?.map(staff => (
              <StaffCard key={staff.id} staff={staff} />
            ))}
            {data.length === 0 && (
              <h2 className="m-auto w-60 text-center text-lg text-gray-700">No staff available</h2>
            )}
          </div>
        </div>
      </main>
    );
  }
}
