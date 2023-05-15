import Link from "next/link";

export function StudentCard({ student }) {
  return (
    <Link href={`/student/${student["Receipt Number"]}`}>
      <div className="flex flex-col border rounded-md p-3 hover:bg-gray-100 [&>div]:my-1 [&>div]:flex [&>div]:justify-between [&>div]:items-end">
        <div>
          <p className="text-gray-800 font-medium">{student["name"]}</p>
          <p className="text-sm">Receipt: {student["receipt_number"]}</p>
        </div>
        <div>
          <p className="text-sm w-full">Expiring: {new Date(student["expiry_date"]).toLocaleDateString('IN')}</p>
        </div>
        <div>
          <div className="w-full flex justify-end gap-2">
            <button>📞</button>
            <button>📝</button>
          </div>
        </div>
      </div>
    </Link>
  );
}
