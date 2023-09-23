"use client";
import Image from "next/image";

export default function Loader() {
  return (
    <main className="flex">
      <Image
        className="m-auto"
        src="/loader.svg"
        width={45}
        height={45}
        alt="loading spinner"
      />
    </main>
  );
}
