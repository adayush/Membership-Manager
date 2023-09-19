"use client";
import { redirect } from "next/navigation";
import StudentCard from "@/components/StudentCard";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Added({ params }) {
  const session = useSession();
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_PUBLIC_URL}/api/added?branch=${params.branch}`)
      .then(response => response.json())
      .then(data => setData(data))
  }, [params.branch])

  if (session.status === "loading") {
    return null
  } else if (session.status === "unauthenticated") {
    redirect(`/login?callbackUrl=/${params.branch}/added`)
  } else if (session.status == "loading") {
    return null
  } else if (session.data.user.branch && session.data.user.branch !== params.branch) {
    redirect(`/${session.data.user.branch}/added`)
  }

  if (data && data?.length !== 0)
    return (
      <main className="p-6 md:p-20">
        <h1 className="text-xl sm:text-2xl font-medium mb-8 text-center">
          Recently added
        </h1>
        <div className="max-w-2xl m-auto">
          <div className="w-full grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {data?.map((student) => (
              <StudentCard key={student.receipt_number} student={student} />
            ))}
          </div>
        </div>
      </main>
    );
  else
    return (
      <main className="flex p-6 md:p-24">
        <h2 className="m-auto w-60 text-center text-lg text-gray-700">No students added recently</h2>
      </main>
    );
}
