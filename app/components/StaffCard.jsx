import Link from "next/link";
import config from "@/config";

export default function StaffCard({ staff }) {
  return (
    <Link href={`/staff/${staff.id}`}>
      <div className="flex flex-col border rounded-md p-3 hover:bg-gray-100 [&>div]:my-1 [&>div]:flex [&>div]:justify-between [&>div]:items-end">
        <div>
          <p className="text-gray-800 font-medium">{staff.name}</p>
          <p className="text-sm">{config.branch_list[staff.branch]}</p>
        </div>
        <div>
          <div>
            <p
              className={`text-sm font-medium w-full ${
                staff.is_active ? "text-green-600" : "text-gray-400"
              }`}
            >
              {staff.is_active ? "Active" : "Inactive"}
            </p>
          </div>
          <div className="w-full flex justify-end gap-2">
            <button>📞</button>
          </div>
        </div>
      </div>
    </Link>
  );
}
