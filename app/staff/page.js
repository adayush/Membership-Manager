"use client";
import Link from "next/link";
import StaffCard from "@/components/StaffCard";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Staff() {
  const session = useSession();
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_PUBLIC_URL}/api/staff`)
      .then(response => response.json())
      .then(data => setData(data))
  }, [])

  if (session.status === "loading") {
    return null
  } else if (session.status === "unauthenticated") {
    redirect(`/login?callbackUrl=/staff`)
  } else if (session.status == "loading") {
    return null
  } else if (session.data.user.branch) {
    redirect(`/${session.data.user.branch}`)
  }

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
        </div>
      </div>
    </main>
  )
}
