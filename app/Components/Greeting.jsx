'use client';

import { useState, useEffect } from "react";

export default function Greeting() {
  const greetings = ["Namaste", "Hello", "Hey", "Hi"];

  return (
    <div>
      <h1 className="text-3xl mb-2 text-center font-medium" suppressHydrationWarning={true}>
        {greetings[Math.floor(Math.random() * greetings.length)]} Ayush!
      </h1>
      <p className="text-center text-base">Manager, Space21</p>
    </div>
  )
}