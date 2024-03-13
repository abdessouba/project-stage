"use client";
import React from "react";
import Link from "next/link";
import logo from "../../public/images/chat.png";
import user from "../../public/images/user.png";
import write from "../../public/images/write.png";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";


const NavBar = () => {
  const { data: session } = useSession();
  return (
    <menu className="text-lg w-[80%] m-auto py-10 mb-10 semibold">
      <ul className="flex justify-between items-center">
        <li className="flex items-center gap-2">
          <Image src={logo} className="w-[32px]" />
          <p className="font-bold text-2xl mr-1">leafChat</p>
          <input
            type="text"
            placeholder="Search..."
            name="search"
            className="border-2 rounded-full py-2 px-4"
          />
        </li>
        <li>
          <ul className="flex justify-center items-center gap-3">
            <li>
              <Link
                href="/write"
                className="flex items-center w-[40px] hover:w-[84px] gap-1 group border-[2px] border-green-300 py-2 px-2 rounded-full hover:bg-green-200 hover:border-green-200 cursor-pointer transition-all duration-200 active:scale-90"
              >
                <Image src={write} alt="write" className="w-[24px]"/>
                <p className=" group-hover:opacity-100 text-sm opacity-0 duration-100 ease-in pointer-events-none">Write</p>
              </Link>
            </li>
            <li><Link href="/">Home</Link></li>
            {!session && (<Link href="/login">login</Link>)}
            {session && (<li><button>Posts</button></li>)}
            {session && (<li><button>Chat</button></li>)}
            <li>
              {!session && <Link href="/register">Join us</Link>}
              {session && (
                <div>
                  <div className="p-[2px] rounded-full bg-green-200">
                    <Image src={user} alt="l" className="w-[43px] h-[43px] rounded-full box-border border-2 border-white"/>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </li>
      </ul>
    </menu>
  );
};

export default NavBar;
