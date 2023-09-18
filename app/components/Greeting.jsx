'use client';

import { useState, useEffect } from "react";

export default function Greeting({ name, branch}) {
  const greetings = ["Namaste", "Hello", "Hey", "Hi"];

  const firstName = name.slice(0, name.lastIndexOf(' '))

  const branches = {
    "indravihar": "Indra Vihar",
    "talwandi": "Talwandi",
    "dadabari": "Dadabari",
  }

  return (
    <div>
      <h1 className="text-3xl mb-2 text-center font-medium" suppressHydrationWarning={true}>
        {greetings[Math.floor(Math.random() * greetings.length)]} {firstName}!
      </h1>
      <p className="text-center text-base">{branch ? 'Manager' : 'Owner'}, Space21{branch && ` ${branches[branch]}`}</p>
    </div>
  )
}