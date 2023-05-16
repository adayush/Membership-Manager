import Link from "next/link";

export default async function Student({ params }) {
  const res = await fetch(`${process.env.PUBLIC_URL}/api/student?receipt=${params.receipt}`);
  const data = await res.json()

  if (data.length !== 0)
    return (
      <main className="p-6 md:p-24">
        <div className="flex flex-col gap-5">
          <div>
            <p className="text-sm text-gray-500 mb-1">Receipt Number</p>
            <p className="text-gray-800 text-xl">{data["receipt_number"]}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Branch</p>
            <p className="text-gray-800 text-xl">{data["branch"]}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Name</p>
            <p className="text-gray-800 text-xl">{data["name"]}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Phone Number</p>
            <p className="text-gray-800 text-xl">{data["phone_number"]}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Membership Expiry Date</p>
            <p className="text-gray-800 text-xl">{data["expiry_date"]}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Creation Date</p>
            <p className="text-gray-800 text-xl">{data["created"]}</p>
          </div>
        </div>
        <Link href={`${process.env.PUBLIC_URL}/student/edit/${data["receipt_number"]}`}>
          <div className="absolute right-8 bottom-8 p-5 [clip-path:circle()] [shape-outside:circle()] bg-black text-white rounded-full">
            📝
          </div>
        </Link>
      </main>
    );
  else
    return (
      <main className="p-6 md:p-24">
        <p className="text-lg">404: Receipt Not Found</p>
      </main>
    )
}
