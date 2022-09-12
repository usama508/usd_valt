import Link from "next/link";
import React from "react";
import { useRouter } from 'next/router'
import { useState } from 'react'
import { list } from "postcss";




function Navbar() {



  
  
        
const [open,setOpen] =useState(false)




  return (
    <div className="sticky top-0 z-10">
      <header className="p-5 bg-sky-900 shadow text-sky-100 md:flex md:items-center md:justify-between">
        <div className="container w-full flex justify-between h-8 mx-auto ">
          <Link href="/">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Back to homepage"
              className="flex items-center p-2"
            >

              <p className="ml-2 text-2xl font-semibold">USD_Valt</p>
            </a>

          </Link>
          <div onClick={()=>setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden ">
          

            <ion-icon  name={open ? 'close' : 'menu'}></ion-icon>
          
          </div>
          <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute  md:static md:z-auto z-[-1]  bg-sky-900 w-full left-0 md:w-auto
                md:pl-0 pl-9  transition-all ease-in duration-500 ${open ? 'top-20':'top-[-490px]'}`} >
            <li className="md:ml-8 text-xl md:my-0 my-7">
              <Link href="/contact">
                <a
                  rel="noopener noreferrer"
                  href=""
                  className="text-xl hover:text-sky-500 duration-500"
                >
                  Contact
                </a>
              </Link>
            </li>
            <li className="md:ml-8 text-xl md:my-0 my-7">
              <Link href="/about">
                <a
                  rel="noopener noreferrer"
                  href=""
                  className="text-xl hover:text-sky-500 duration-500"
                >
                  About us
                </a>
              </Link>
            </li>
            <li className="md:ml-8 text-xl md:my-0 my-7"><Link href='/signup'><a rel="noopener noreferrer"
              href=""
              className="text-xl hover:text-sky-500 duration-500"
            >
              SignUp</a>
            </Link>
            </li>

            <li className="md:ml-8 text-xl md:my-0 my-7"><Link href='/login'><a
              rel="noopener noreferrer"
              href=""
              className="text-xl hover:text-sky-500 duration-500"
            >
              Login
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
