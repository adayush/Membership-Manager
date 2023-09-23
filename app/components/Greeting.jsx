'use client';
import config from "@/config";

export default function Greeting({ name, branch}) {
  const greetings = ["Namaste", "Hello", "Hey", "Hi"];

  const space_i = name.lastIndexOf(' ')
  const firstName = name.slice(0, space_i !== -1 ? space_i : name.length)
  const greeting = greetings[Math.floor(Math.random() * greetings.length)]

  return (
    <div>
      <h1 className="text-3xl mb-2 text-center font-medium">
        {greeting} {firstName}!
      </h1>
      <p className="text-center text-base">{branch ? 'Manager' : 'Owner'}, {config.business_name}{branch && ` ${config.branch_list[branch]}`}</p>
    </div>
  )
}