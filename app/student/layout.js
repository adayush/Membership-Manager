"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function StudentLayout({ children }) {
  const session = useSession();

  // TODO: Redirect to branch home depending on role
  if (session.status === "loading") {
    return null
  } else if (session.status === "unauthenticated") {
    redirect(`/login`)
  }

  return children
}