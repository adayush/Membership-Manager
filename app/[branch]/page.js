"use client";
import { redirect } from "next/navigation";
import Link from "next/link";
import Greeting from "@/components/Greeting";
import SearchBar from "@/components/SearchBar";
import { useSession } from "next-auth/react";

export default function Branch({ params }) {
  const session = useSession();

  if (session.status === "loading") {
    return null
  } else if (session.status === "unauthenticated") {
    redirect(`/login?callbackUrl=/${params.branch}/`)
  } else if (session.status == "loading") {
    return null
  } else if (session.data.user.branch && session.data.user.branch !== params.branch) {
    redirect(`/${session.data.user.branch}`)
  }

  const branch = session.data.user.branch || params.branch;

  return (
    <main className="p-12 pb-20 md:p-24 text-lg">
      <div className="flex flex-col gap-20 max-w-lg m-auto">
        <Greeting name={session.data.user.name} branch={session.data.user.branch} />
        <div className="flex flex-col gap-4 text-center [&>*]:p-3 [&>*]:border [&>*]:rounded-md">
          <SearchBar />
          <Link href={`/${branch}/added`} prefetch={false}>
            <div>
              <h2>Recently Added</h2>
            </div>
          </Link>
          <Link href={`/${branch}/expired`} prefetch={false}>
            <div>
              <h2>Recently Expired</h2>
            </div>
          </Link>
          <Link href={`/${branch}/expiring`} prefetch={false}>
            <div>
              <h2>Expiring soon</h2>
            </div>
          </Link>
          <Link href={`/student/new?branch=${branch}`} prefetch={false} className="bg-yellow-200">
            <div>
              <h2>➕ Add new student</h2>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
