import Link from "next/link";
import Greeting from "@/app/Components/Greeting";
import Image from "next/image";

export default function ManagerHome() {
  return (
    <main className="p-12 pb-20 md:p-24 text-lg">
      <div className="flex flex-col gap-20 max-w-lg m-auto">
        <Greeting />
        <div className="flex flex-col gap-4 text-center [&>*]:p-3 [&>*]:border [&>*]:rounded-md">
          <div className="mb-6 flex justify-between gap-2">
            <input
              placeholder="Search student or receipt"
              className="w-full p-2 focus:outline-none"
            />
            <button className="px-1">
              <Image src="/images/search.png" width={30} height={30} alt="Search button" />
            </button>
          </div>
          <Link href="/added">
            <div>
              <h2>Recently Added</h2>
            </div>
          </Link>
          <Link href="/expired">
            <div>
              <h2>Recently Expired</h2>
            </div>
          </Link>
          <Link href="/student/new"  className="bg-yellow-200">
            <div>
              <h2>➕ Add new student</h2>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
