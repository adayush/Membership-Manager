"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import Greeting from "@/components/Greeting";
import SearchBar from "@/components/SearchBar"
import config from "@/config";

export default function Home() {
  const session = useSession();

  if (session.status === "loading") {
    return null
  } else if (session.status === "unauthenticated") {
    redirect(`/login`)
  } else if (config.branch_list[session.data.user.branch]) {
    redirect(`/${session.data.user.branch}`);
  }

  return (
    <main className="p-12 pb-20 md:p-24 text-lg">
      <div className="flex flex-col gap-20 max-w-lg m-auto">
        <Greeting name={session.data.user.name} />
        <div className="flex flex-col gap-4 text-center [&>*]:p-3 [&>*]:border [&>*]:rounded-md">
          <SearchBar />
          {Object.keys(config.branch_list).map(branch => (
            <Link key={branch} href={`/${branch}`} className="hover:bg-gray-100">
              <div>
                <h2>{config.branch_list[branch]}</h2>
              </div>
            </Link>
          ))}
          <Link href={`/staff`} prefetch={false} className="hover:bg-gray-100">
            <div>
              <h2>Manage Staff</h2>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
