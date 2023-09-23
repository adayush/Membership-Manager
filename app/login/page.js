'use client';
import Image from "next/image";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import config from '@/config'


export default function Login() {
  const session = useSession();

  if (session.status === "loading") {
    return null;
  } else if (session.status === "authenticated") {
    if (session.data.user.role === "manager") {
      redirect(`/${session.data.user.branch}`)
    }
    redirect(`/`)
  }

  return (
    <main className="p-12 pb-20 md:p-24 text-md">
      <div className="flex flex-col gap-20 max-w-md m-auto">
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/images/space21-logo.png"
            width={100}
            height={100}
            alt="Business Logo"
          />
          <h1 className="text-xl sm:text-2xl font-medium text-center">
            Login to<br />{config.app_title}
          </h1>
        </div>
        <div className="flex flex-col gap-4 [&>div>div]:w-full ">
          <div className="flex p-3 mt-1 mb-4 border rounded-md font-medium cursor-pointer" onClick={() => signIn('google', { callbackUrl: '/' })}>
            <Image className=" mr-3 h-[24px] flex w-auto" src="/images/google.png" width={24} height={24} alt="Google logo" />
            <span>Login with Google</span>
          </div>
        </div>
      </div>
    </main>
  );
}
