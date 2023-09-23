"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import config from "@/config";

export default function BranchLayout({ params, children }) {
  const session = useSession();

  if (session.status === "loading") {
    return null;
  } else if (session.status === "unauthenticated") {
    redirect(`/login?callbackUrl=/${params.branch}`)
  } else if (config.branch_list[session.data.user.branch] === undefined) {
    // redirect to error page. Invalid branch
    console.error('Branch doesn\'t exist.');
  } else if (session.data.user.role === "manager" && params.branch !== session.data.user.branch) {
    redirect(`/${session.data.user.branch}`)
  }

  return children
}