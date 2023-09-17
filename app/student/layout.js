import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/api/auth/[...nextauth]/route";

export default async function StudentLayout({ children }) {
  const session = await getServerSession(authOptions)

  // TODO: Redirect to branch home depending on role
  if (!session) {
    redirect(`/login`)
  }

  return (
    {children}
  )
}