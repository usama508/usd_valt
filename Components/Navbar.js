import Link from "next/link";
import React from "react";
import { useRouter } from 'next/router'
import {useState} from 'react'



function Navbar() {
  const router = useRouter()
  const [search, setSearch]=useState("")

  const handleSearch=(e)=>{
    e.preventDefault()
  }
  console.log(search)
 
  

 


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

          <ul className="items-stretch  flex flex-wrap space-x-3 md:flex">
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
                  About us
                </a>
              </Link>
            </li>
            <li className="flex"><Link href='/signup'><a rel="noopener noreferrer"
              href=""
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
            >
              SignUp</a>
            </Link>
            </li>

            <li className="flex"><Link href='/login'><a
              rel="noopener noreferrer"
              href=""
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
            >
              Login
            </a>
            </Link>
            </li>

            <li className="flex items-center">
            <input type="text" id="simple-search" className="bg-gray-50 border border-sky-300 text-sky-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 
             bg-white-700 border-sky-600 placeholder-sky-400 text-white focus:ring-sky-500 focus:border-sky-500" value={search} onChange={(e)=>{setSearch(e.target.value)}} placeholder="Search" required/>
            <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 bg-sky-600
             hover:bg-sky-700 focus:ring-sky-800" onClick={handleSearch}>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        <span className="sr-only">Search</span>
    </button>
            
            </li>
          </ul>

          

          


          

       

          


        </div>
      </header>
    </div>
  );
}

export default Navbar;
