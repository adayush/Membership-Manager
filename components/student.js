export function StudentCard({ student }) {
  console.log(student);
  return (
    <div className="flex flex-col border rounded-md p-3 hover:bg-gray-100 [&>div]:my-1 [&>div]:flex [&>div]:justify-between [&>div]:items-end">
      <div>
        <p className="text-gray-800 font-medium">{student["Name"]}</p>
        <p className="text-sm">Receipt: {student["Receipt Number"]}</p>
      </div>
      <div>
        <p className="text-sm w-full">Expiring: {student["Membership Expiry Date"]}</p>
      </div>
      <div>
        <div className="w-full flex justify-end gap-2">
          <button>📞</button>
          <button>📝</button>
        </div>
      </div>
    </div>
  );
}

export function Details({ student }) {
  return (
    <div></div>
  )
}
