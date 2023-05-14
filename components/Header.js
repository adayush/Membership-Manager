import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black text-white">
      <div className="py-4 px-8">
        <div className="flex justify-between">
          <Link href="/">
            <div className="flex items-center">
              <Image
                src="/space21-logo.png"
                width={40}
                height={40}
                alt="Space21 Logo"
              />
              <h1 className="ml-4 text-xl">
                <span className="font-medium">Space21</span> Management
              </h1>
            </div>
          </Link>
          <div className="flex items-center bg-gray-300 rounded-full w-[40px]">
            .
          </div>
        </div>
      </div>
    </header>
  );
}
