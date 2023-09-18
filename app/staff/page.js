import Link from "next/link";
import StaffCard from "@/components/StaffCard";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/api/auth/[...nextauth]/route";
import { headers } from "next/headers";

export default async function Staff() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect(`/login?callbackUrl=/staff`)
  } else if (session.user.branch) {
    redirect(`/${session.user.branch}`)
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_PUBLIC_URL}/api/staff`, {
    method: "GET",
    // headers: headers(),
  });
  const data = await res.json()

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
