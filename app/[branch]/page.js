import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/api/auth/[...nextauth]/route";
import ManagerHome from "@/components/ManagerHome";

export default async function Home({ params }) {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect(`/login?callbackUrl=/${params.branch}/`)
  }

  return (
    <ManagerHome branch={params.branch} />
  );
}
