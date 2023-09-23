"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function BranchLayout({ params, children }) {
  const session = useSession();

  if (session.status === "loading") {
    return null;
  } else if (session.status === "unauthenticated") {
    redirect(`/login?callbackUrl=/staff`)
  } else if (session.data.user.role === "manager") {
    redirect(`/${session.data.user.branch}`)
  }

  return children
}