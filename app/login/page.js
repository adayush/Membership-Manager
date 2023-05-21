'use client';
import { signIn } from "next-auth/react";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await getServerSession(authOptions);
  if (session) redirect('/');

  return (
    <main className="p-12 pb-20 md:p-24 text-lg">
      <div className="flex flex-col gap-20 max-w-lg m-auto">
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/images/space21-logo.png"
            width={100}
            height={100}
            alt="Space21 Logo"
          />
          <h1 className="text-xl sm:text-2xl font-medium text-center">
            Login to<br />Space21 Management
          </h1>
        </div>
        <div className="flex flex-col gap-4 text-center [&>*]:p-3 [&>*]:border [&>*]:rounded-md">
          <div onClick={() => signIn('google', { callbackUrl: '/'})}>
            <Image className="inline mr-2" src="/images/google.png" width={24} height={24} alt="Google logo" />
            <span>Login with Google</span>
          </div>
          {/* <div className="mb-6 flex justify-between gap-2">
            <input
              placeholder="email"
              className="w-full p-2 focus:outline-none"
            />
          </div>
          <div>
            <h2>Recently Added</h2>
          </div> */}
        </div>
      </div>
    </main>
  );
}
