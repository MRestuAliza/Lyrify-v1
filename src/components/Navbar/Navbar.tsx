import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="my-7">
      <ul className="flex space-x-11 justify-end px-20 text-xl">
        <li className="hover:underline">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:underline">
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
