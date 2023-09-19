'use client';

import getBranchName from "@/utils/getBranchName";

export default function Greeting({ name, branch}) {
  const greetings = ["Namaste", "Hello", "Hey", "Hi"];

  const firstName = name.slice(0, name.lastIndexOf(' '))
  const greeting = greetings[Math.floor(Math.random() * greetings.length)]

  return (
    <div>
      <h1 className="text-3xl mb-2 text-center font-medium" suppressHydrationWarning={true}>
        {greeting} {firstName}!
      </h1>
      <p className="text-center text-base">{branch ? 'Manager' : 'Owner'}, Space21{branch && ` ${getBranchName(branch)}`}</p>
    </div>
  )
}