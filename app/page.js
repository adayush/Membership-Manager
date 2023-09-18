"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import Greeting from "@/components/Greeting";
import SearchBar from "@/components/SearchBar"

export default function Home() {
  const session = useSession();

  if (session.status === "loading") {
    return null
  } else if (session.status === "unauthenticated") {
    redirect(`/login`)
  } else if (session.data.user.branch) {
    switch (session.data.user.branch) {
      case "indravihar":
        redirect('/indravihar');
      case "talwandi":
        redirect('/talwandi');
      case "dadabari":
        redirect('/dadabari');
    }
  }

  const branches = {
    "indravihar": "Indra Vihar",
    "talwandi": "Talwandi",
    "dadabari": "Dadabari",
  }

  return (
    <main className="p-12 pb-20 md:p-24 text-lg">
      <div className="flex flex-col gap-20 max-w-lg m-auto">
        <Greeting name={session.data.user.name} />
        <div className="flex flex-col gap-4 text-center [&>*]:p-3 [&>*]:border [&>*]:rounded-md">
          <SearchBar />
          {Object.keys(branches).map(branch => (
            <Link key={branch} href={`/${branch}`}>
              <div>
                <h2>{branches[branch]}</h2>
              </div>
            </Link>
          ))}
          <Link href={`/staff`} prefetch={false}>
            <div>
              <h2>Manage Staff</h2>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
