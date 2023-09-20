"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { redirect, useSearchParams } from "next/navigation";
import StudentCard from "@/components/StudentCard";
import { useSession } from "next-auth/react";
import Loader from "@/components/Loader";

export default function Search() {
  const session = useSession();
  const [results, setResults] = useState();
  const params = useSearchParams();
  const query = params.get('query');
  const queryInputRef = useRef(query || null);

  const handleSubmit = async (e) => {
    if (e) {
      e.preventDefault();
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_PUBLIC_URL}/api/search?query=${queryInputRef.current.value}&branch=${session.data.user.branch}`);
    const data = await res.json()
    setResults(data)
  }

  useEffect(() => {
    if (query) {
      handleSubmit();
    }
  }, [query])

  if (session.status === "loading") {
    return null
  } else if (session.status === "unauthenticated") {
    redirect(`/login?callbackUrl=/search`)
  }

  if (results === undefined) {
    return <Loader />
  } else {
    return (
      <main className="p-6 md:p-24">
        <div className="flex flex-col gap-4 max-w-2xl m-auto">
          <form onSubmit={handleSubmit} className="flex justify-between px-3 py-2 gap-2 border rounded-md">
            <input
              placeholder="Search student or receipt"
              className="w-full p-2 focus:outline-none"
              ref={queryInputRef}
              defaultValue={query}
            />
            <button type="submit" className="px-1">
              <Image src="/images/search.png" width={30} height={30} alt="Search button" />
            </button>
          </form>
          <div className="border-gray-200 border-t-2"></div>
          <div className="flex flex-col gap-4">
            {results?.map((student, i) => (
              <StudentCard key={i} student={student} showBranch={true} />
            ))}
          </div>
        </div>
      </main>
    );
  }
}
