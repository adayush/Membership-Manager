"use client";
import Image from "next/image";
import Link from "next/link";
import Avatar from "./Avatar";
import { useSession } from "next-auth/react";

export default function Header() {
  const session = useSession();

  if (session.status === "loading") {
    return null
  }

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
          {session.data && (
            <Avatar name={session.data.user.name} image={session.data.user.image} />
          )}
        </div>
      </div>
    </header>
  );
}
