'use client';
import Image from "next/image";
import { useRef } from "react";

export default async function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

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
        <div className="flex flex-col gap-4 [&>div>*]:w-full ">
          <div>
            <label>Email:</label>
            <input type="email" ref={emailRef} className="p-3 mt-1 mb-4 border rounded-md" />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" ref={passwordRef} className="p-3 mt-1 mb-4 border rounded-md" />
          </div>
          <button onClick={() => console.log("Login")} className="p-3 mt-1 mb-4 border rounded-md bg-black text-white font-medium">Login</button>
          {/* <div onClick={() => signIn('google', { callbackUrl: '/'})}>
            <Image className="inline mr-2" src="/images/google.png" width={24} height={24} alt="Google logo" />
            <span>Login with Google</span>
          </div> */}
        </div>
      </div>
    </main>
  );
}
