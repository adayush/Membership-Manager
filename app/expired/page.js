import { StudentCard } from "@/app/Components/Student";

export default async function Expired() {
  // const res = await fetch(`${process.env.PUBLIC_URL}/data.json`);
  const res = await fetch(`${process.env.PUBLIC_URL}/api/expired`);
  
  await timeout(1000);
  function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const data = await res.json();

  if (data !== [])
    return (
      <main className="p-6 md:p-24 flex flex-col">
        <p className="text-right text-gray-500">{data.length} students</p>
        <div className="w-full grid md:grid-cols-2 gap-4">
          {data.map((student) => (
            <StudentCard key={student["Key"]} student={student} />
          ))}
        </div>
        {/* <div className="hidden first-letter:fixed top-0 left-0 h-full w-full bg-black bg-opacity-20 backdrop-blur-sm">
        </div> */}
      </main>
    );
  else
    return (
      <main className="flex p-6 md:p-24">
        <h2 className="m-auto w-60 text-center text-lg text-gray-700">No students&apos; membership expiring within the next week.</h2>
      </main>
    );
}
