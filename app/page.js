import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/api/auth/[...nextauth]/route";
import Greeting from "@/components/Greeting";
import SearchBar from "@/components/SearchBar"

export default async function Home() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect(`/login`)
  } else if (session.user.branch) {
    switch (session.user.branch) {
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
        <Greeting name={session.user.name} />
        <div className="flex flex-col gap-4 text-center [&>*]:p-3 [&>*]:border [&>*]:rounded-md">
          <SearchBar />
          {Object.keys(branches).map(branch => (
            <Link key={branch} href={`/${branch}`} prefetch={false}>
              <div>
                <h2>{branches[branch]}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
