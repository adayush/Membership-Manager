import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/api/auth/[...nextauth]/route";
import Link from "next/link";
import Greeting from "@/components/Greeting";
import SearchBar from "@/components/SearchBar";

export default async function Branch({ params }) {
  const session = await getServerSession(authOptions)
  
  if (!session) {
    redirect(`/login?callbackUrl=/${params.branch}/`)
  } else if (session.user.branch && session.user.branch !== params.branch) {
    redirect(`/${session.user.branch}`)
  }

  return (
    <main className="p-12 pb-20 md:p-24 text-lg">
      <div className="flex flex-col gap-20 max-w-lg m-auto">
        <Greeting name={session.user.name} branch={session.user.branch} />
        <div className="flex flex-col gap-4 text-center [&>*]:p-3 [&>*]:border [&>*]:rounded-md">
          <SearchBar />
          <Link href={`/${session.user.branch}/added`} prefetch={false}>
            <div>
              <h2>Recently Added</h2>
            </div>
          </Link>
          <Link href={`/${session.user.branch}/expired`} prefetch={false}>
            <div>
              <h2>Recently Expired</h2>
            </div>
          </Link>
          <Link href={`/${session.user.branch}/expiring`} prefetch={false}>
            <div>
              <h2>Expiring soon</h2>
            </div>
          </Link>
          <Link href={`/student/new?branch=${session.user.branch}`} prefetch={false} className="bg-yellow-200">
            <div>
              <h2>➕ Add new student</h2>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
