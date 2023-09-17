import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/api/auth/[...nextauth]/route";
import Avatar from "./Avatar";

export default async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <header className="bg-black text-white">
      <div className="p-4 max-w-xl m-auto">
        <div className="flex justify-between">
          <Link href="/">
            <div className="flex items-center">
              <Image
                src="/images/space21-logo.png"
                width={40}
                height={40}
                alt="Space21 Logo"
              />
              <h1 className="ml-4 text-lg sm:text-xl">
                <span className="font-medium">Space21</span> Management
              </h1>
            </div>
          </Link>
          {session && (
            <Avatar name={session.user.name} image={session.user.image} />
          )}
        </div>
      </div>
    </header>
  );
}
