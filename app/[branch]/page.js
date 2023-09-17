import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/api/auth/[...nextauth]/route";
import ManagerHome from "@/components/ManagerHome";

export default async function Branch({ params }) {
  const session = await getServerSession(authOptions)
  
  if (!session) {
    redirect(`/login?callbackUrl=/${params.branch}/`)
  } else if (session.user.branch && session.user.branch !== params.branch) {
    redirect(`/${session.user.branch}`)
  }

  return (
    <ManagerHome branch={params.branch} />
  );
}
