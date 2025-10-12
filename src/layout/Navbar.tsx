import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="">
      <ul className="flex space-x-4 text-lg justify-center">
        <li className="hover:underline">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:underline">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:underline">
          <Link href="/guide">Guide</Link>
        </li>
        <li className="hover:underline">
          <Link href="https://github.com/MRestuAliza/Lyrify-v1.git" target="_blank">Source Code</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;