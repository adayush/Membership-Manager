"use client";
import StudentCard from "@/components/StudentCard";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

export default function Expiring({ params }) {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_PUBLIC_URL}/api/expiring?branch=${params.branch}`)
      .then(response => response.json())
      .then(data => setData(data))
  }, [params.branch])

  if (data === undefined) {
    return <Loader />
  } else if (data && data.length !== 0) {
    return (
      <main className="flex p-6 md:p-24">
        <h2 className="m-auto w-60 text-center text-lg text-gray-700">No students&apos; membership expiring within the next week.</h2>
      </main>
    );
  }
  else {
    return (
      <main className="p-6 md:p-20">
        <h1 className="text-xl sm:text-2xl font-medium mb-8 text-center">
          Expiring in 7 days
        </h1>
        <div className="max-w-2xl m-auto">
          <p className="text-right text-gray-500">{data.length} students</p>
          <div className="w-full grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {data?.map((student) => (
              <StudentCard key={student.receipt_number} student={student} />
            ))}
          </div>
        </div>
      </main>
    )
  }
}