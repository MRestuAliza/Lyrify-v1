import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-auto w-full border-t max-w-[85rem] py-3 px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="text-center">
        <div className="footer space-x-10 py-3 font-medium">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <a className="hover:underline" href="">
            Guide
          </a>
          <a className="hover:underline" href="">
            Source
          </a>
        </div>
        <div>
          <a className="font-normal logo text-4xl xl:text-5xl text-black" href="#" aria-label="Brand">
            Lyrify
          </a>
        </div>
        <div className="mt-3 text-sm">
          <p className="text-[#b4b2c4] font-semibold">
            {" "}
            Made by{" "}
            <span className="hover:text-blue-500">
              <a href="https://muhrestualizaakbar.netlify.app/">MRAA 🚀</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
