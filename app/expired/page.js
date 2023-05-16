import { StudentCard } from "@/app/Components/Student";

export default async function Expired() {
  // const res = await fetch(`${process.env.PUBLIC_URL}/data.json`);
  const res = await fetch(`${process.env.PUBLIC_URL}/api/expired`, { next: { revalidate: 60 }});
  const data = await res.json();

  if (res.status === 200 && data.length !== 0)
    return (
      <main className="p-6 md:p-20 flex flex-col">
        <p className="text-right text-gray-500">{data.length} students</p>
        <div className="w-full grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {data?.map((student) => (
            <StudentCard key={student["receipt_number"]} student={student} />
          ))}
        </div>
      </main>
    );
  else
    return (
      <main className="flex p-6 md:p-24">
        <h2 className="m-auto w-60 text-center text-lg text-gray-700">No students&apos; membership expiring within the next week.</h2>
        {typeof data}
        {res.status}
      </main>
    );
}
