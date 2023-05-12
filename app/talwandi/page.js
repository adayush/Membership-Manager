"use client";
import { useEffect, useState } from "react";

import { StudentCard, Details } from "@/components/student";

export default function Talwandi() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/data.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  if (data)
    return (
      <main className="p-6 md:p-24">
        <div className="w-full grid md:grid-cols-2 gap-4">
          {data.map((student) => (
            <StudentCard key={student["Key"]} student={student} />
          ))}
        </div>
      </main>
    );
}
