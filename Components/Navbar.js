import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="sticky top-0 z-10">
      <header className="p-4 bg-sky-900 text-sky-100 ">
        <div className="container w-full flex justify-between h-8 mx-auto ">
          <Link href="/">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Back to homepage"
              className="flex items-center p-2"
            >
              
              <p className="ml-2 text-xl font-semibold">USD_Valt</p>
            </a>
          </Link>
          <ul className="items-stretch  hidden space-x-3 md:flex">
            <li className="flex">
              <Link href="/contact">
                <a
                  rel="noopener noreferrer"
                  href=""
                  className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
                >
                  Contact
                </a>
              </Link>
            </li>
            <li className="flex">
              <Link href="/about">
                <a
                  rel="noopener noreferrer"
                  href=""
                  className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
                >
                  About
                </a>
              </Link>
            </li>
            </ul>

       
        </div>
      </header>
    </div>
  );
}

export default Navbar;
