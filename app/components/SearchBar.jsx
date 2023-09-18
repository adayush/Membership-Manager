"use client";
import { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const queryInputRef = useRef();
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    console.log("redirecting")
    router.push(`/search?query=${queryInputRef.current.value}`)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-between px-3 py-2 gap-2 border rounded-md"
    >
      <input
        placeholder="Search student or receipt"
        className="w-full p-2 focus:outline-none"
        ref={queryInputRef}
      />
      <button type="submit" className="px-1">
        <Image
          src="/images/search.png"
          width={30}
          height={30}
          alt="Search button"
        />
      </button>
    </form>
  );
}
