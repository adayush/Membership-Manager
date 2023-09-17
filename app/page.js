import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/api/auth/[...nextauth]/route";
import Greeting from "@/components/Greeting";

export default async function Home() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect(`/login`)
  } else if (!session.user.branch) {
    switch (session.user.branch) {
      case "indravihar":
        redirect('/indravihar');
      case "talwandi":
        redirect('/talwandi');
      case "dadabari":
        redirect('/dadabari');
    }
  }

  const branches = [
    {
      title: "Indra Vihar",
      value: "indravihar"
    },
    {
      title: "Talwandi",
      value: "talwandi"
    },
    {
      title: "Dadabari",
      value: "dadabari"
    }
  ]

  return (
    <main className="p-12 pb-20 md:p-24 text-lg">
      <div className="flex flex-col gap-20 max-w-lg m-auto">
        <Greeting />
        <div className="flex flex-col gap-4 text-center [&>*]:p-3 [&>*]:border [&>*]:rounded-md">
          <div className="mb-6 flex justify-between gap-2">
            <input
              placeholder="Search student or receipt"
              className="w-full p-2 focus:outline-none"
            />
            <button className="px-1">
              <Image src="/images/search.png" width={30} height={30} alt="Search button" />
            </button>
          </div>
          {branches.map(branch => (
            <Link key={branch.value} href={`/${branch.value}`} prefetch={false}>
              <div>
                <h2>{branch.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
