import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black text-white">
      <div className="p-4 max-w-xl m-auto">
        <div className="flex justify-between">
          <Link href="/">
            <div className="flex items-center">
              <Image
                src="/space21-logo.png"
                width={40}
                height={40}
                alt="Space21 Logo"
              />
              <h1 className="ml-4 text-lg sm:text-xl">
                <span className="font-medium">Space21</span> Management
              </h1>
            </div>
          </Link>
          <div className="w-[40px] [clip-path:circle()] [shape-outside:circle()] bg-gray-300 rounded-full">
          </div>
        </div>
      </div>
    </header>
  );
}
