import Link from "next/link";

export default function ManagerHome() {
  const greetings = ["Namaste", "Hello", "Hey", "Hi"];
  return (
    <main className="p-12 pb-20 md:p-24 flex flex-col text-lg justify-around">
      <div className="flex flex-col gap-20">
        <div>
          <h1 className="text-3xl mb-2 text-center font-medium">
            {greetings[Math.floor(Math.random() * greetings.length)]} Ayush!
          </h1>
          <p className="text-center text-base">Manager, Space21</p>
        </div>
        <div className="flex flex-col gap-4 text-center [&>*]:p-3 [&>*]:border [&>*]:rounded-md">
          <div className="mb-6 flex justify-between gap-2">
            <input
              placeholder="Search student or receipt no."
              className="w-full p-2 focus:outline-none"
            />
            <button className="px-1">🔍</button>
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
              <h2>+ Add new student</h2>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
