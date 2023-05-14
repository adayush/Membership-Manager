export default async function Student({ params }) {
  const res = await fetch(`${process.env.PUBLIC_URL}/api/student?receipt=${params.receipt}`);
  const data = await res.json()

  const labels = ["Receipt Number", "Branch", "Name", "Phone Number", "Membership Expiry Date", "Creation Date"]

  if (data.length !== 0)
    return (
      <main className="p-6 md:p-24">
        <div className="flex flex-col gap-5">
          {labels.map((label, i) => <Detail label={label} value={data[label]} key={i} />)}
        </div>
      </main>
    );
  else
    return (
      <main className="p-6 md:p-24">
        <p className="text-lg">404: Receipt Not Found</p>
      </main>
    )
}

async function Detail({ label, value }) {
  return (
    <div>
      <p className="text-sm text-gray-500 mb-1">{label}</p>
      <p className="text-gray-800 text-xl">{value}</p>
    </div>
  )
}

/*
{
  "Receipt Number":1404,
  "Branch":"Dadabari",
  "Name":"Gopal ji",
  "Phone Number":8824825703,
  "Membership Expiry Date":"21/05/2023",
  "Creation Date":"11/05/2023 13:53:36"
}
*/