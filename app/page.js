import Link from "next/link";
import Greeting from "@/components/Greeting";

export default async function Home() {

  const branches = [
    {
      title: "Indra Vihar",
      value: "indravihar"
    },
    {
      title: "Talwandi",
      value: "talwandi"
    },
    {
      title: "Dadabari",
      value: "dadabari"
    }
  ]

  return (
    <main className="p-12 pb-20 md:p-24 text-lg">
      <div className="flex flex-col gap-20 max-w-lg m-auto">
        <Greeting />
        <div className="flex flex-col gap-4 text-center [&>*]:p-3 [&>*]:border [&>*]:rounded-md">
          {branches.map(branch => (
            <Link href={`/${branch.value}`} prefetch={false}>
              <div>
                <h2>{branch.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
