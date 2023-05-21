import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/api/auth/[...nextauth]/route";
import ManagerHome from "@/components/ManagerHome";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/login');

  return (
    <ManagerHome />
  );
}
