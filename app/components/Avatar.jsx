'use client';
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { signOut } from "next-auth/react";

export default function Avatar({ name, image }) {
  const [showMenu, setShowMenu] = useState(false);
  const avatarRef = useRef();
  
  useEffect(() => {
    const handler = (e) => {
      if(!avatarRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    }
    
    document.addEventListener('click', handler);
  });

  return (
    <div className="relative" ref={avatarRef} >
      <Image onClick={() => setShowMenu(!showMenu)} className="rounded-full" src={image} width={40} height={40} alt="User avatar" />
      {showMenu &&
        <div className="absolute right-0 mt-6 p-2 py-3 w-40 text-center bg-black shadow-lg rounded-md">
          <p className="text-gray-200">{name}</p>
          <div className="border-gray-400 border-b-2 mt-2 mb-4 h-[1px]"></div>
          <button onClick={signOut}>Logout</button>
        </div>
      }
    </div>
  )
}