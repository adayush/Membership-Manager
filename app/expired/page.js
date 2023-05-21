import { getServerSession } from "next-auth";
import { authOptions } from "@/api/auth/[...nextauth]/route";
import { StudentCard } from "@/components/Student";

export default async function Expired() {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/login');

  const res = await fetch(`${process.env.NEXT_PUBLIC_PUBLIC_URL}/api/expired`, { next: { revalidate: 60 }});
  const data = await res.json();

  if (res.status === 200 && data.length !== 0)
    return (
      <main className="p-6 md:p-20">
        <h1 className="text-xl sm:text-2xl font-medium mb-8 text-center">
          Expired in last 7 days
        </h1>
        <div className="max-w-2xl m-auto">
          <p className="text-right text-gray-500">{data.length} students</p>
          <div className="w-full grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {data?.map((student) => (
              <StudentCard key={student["receipt_number"]} student={student} />
            ))}
          </div>
        </div>
      </main>
    );
  else
    return (
      <main className="flex p-6 md:p-24">
        <h2 className="m-auto w-60 text-center text-lg text-gray-700">No students&apos; membership expiring within the next week.</h2>
      </main>
    );
}
