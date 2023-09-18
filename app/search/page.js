"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { redirect, useSearchParams } from "next/navigation";
import StudentCard from "@/components/StudentCard";
import { useSession } from "next-auth/react";

export default function Search() {
  const { data } = useSession();

  if (!data) {
    redirect(`/login?callbackUrl=/search`)
  }

  const [results, setResults] = useState();
  const params = useSearchParams();
  const query = params.get('query');

  const queryInputRef = useRef(query || null);

  useEffect(() => {
    if (query) {
      handleSubmit();
    }
  }, [])

  const handleSubmit = async (e) => {
    if (e) {
      e.preventDefault();
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_PUBLIC_URL}/api/search?receipt=${queryInputRef.current.value}`);
    const data = await res.json()
    setResults(data)
  }

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
            <StudentCard student={student} key={i} />
          ))}
        </div>
      </div>
    </main>
  )
}
