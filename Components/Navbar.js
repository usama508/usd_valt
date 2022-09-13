import Link from "next/link";
import { useState } from "react";


import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";




function Navbar() {
  const [dropDown, setDropDown] = useState(false);
  const [nav, setNav] = useState(false);


  const displayNav = () => {
    setNav(!nav);
  };



  return (
    <>
      <nav
        className='relative z-50 bg-sky-900 border-sky-200 px-2 sm:px-4 py-2.5 drop-shadow-md '>


        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link href="/">
            <a>
              <div className="flex flex-row">

                <span
                  className='self-center text-2xl leading-10 text-white font-semibold whitespace-nowrap font-pacifico tracking-wider'

                >
                  USD_VALT
                </span>
              </div>
            </a>
          </Link>



          {nav === false ? (
            <span
              className='border md:border-0 rounded p-1'

            >
              <GiHamburgerMenu
                className='md:hidden cursor-pointer'

                onClick={displayNav}
                size={20}
              />
            </span>
          ) : (
            <AiFillCloseCircle
              onClick={displayNav}
              size={20}
              className='drop-shadow cursor-pointer'

            />
          )}


          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul
              className='
              flex flex-col p-4 mt-4 rounded-lg border border-sky-100 md:flex-row md:space-x-5 md:mt-0 md:text-sm md:font-medium md:border-0 '
            >
              <li>
                <span
                  onMouseOver={() => {
                    setDropDown(true);
                  }}
                  onMouseLeave={() => {
                    setDropDown(false);
                  }}
                >
                  <a
                    href="#"
                    className='block py-2 pr-4 pl-3 text-white rounded md:p-0 hover:text-sky-600'

                  >
                    Coins
                  </a>

                  {dropDown && (
                    <div className=" absolute top-14 right-30 bg-sky-100  rounded-md p-5 w-1/4 z-50">
                      <div className="  transform w-9 h-6 absolute -mt-1 top-0 rounded-sm  right-64 rotate-45 "></div>
                      <ul className=''>
                        <Link href={"/category"}>
                          <a>
                            <li className="text-base  flex  pb-2 pt-1">

                              All Categories
                            </li>
                          </a>
                        </Link>
                        <Link href={"/gainers"}>
                          <a>
                            <li className="text-base flex pb-2">

                            Top Gainers
                            </li>
                          </a>
                        </Link>
                        <li className="text-base flex pb-2 ">

                        <Link href={"/losers"}>
                          <a>
                            <li className="text-base flex pb-2">

                            Top Losers
                            </li>
                          </a>
                        </Link>
                        </li>

                        <li>
                        <Link href={"/add"}>
                          <a>
                            <li className="text-base flex pb-2">

                            Recently Added
                            </li>
                          </a>
                        </Link>
                        </li>
                        <li>
                           <Link href={"/trending"}>
                          <a>
                            <li className="text-base flex pb-2">

                            Trending
                            </li>
                          </a>
                        </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </span>
              </li>
              <li>
                <a
                  href="#"
                  className='block py-2 pr-4 pl-3 rounded md:p-0 text-white hover:text-sky-600'

                >
                  NFT
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className='block py-2 pr-4 pl-3 rounded md:p-0 text-white hover:text-sky-600'

                >
                  Resources
                </a>
              </li>
              
              <li>
                <a
                  href="#"
                  className='block py-2 pr-4 pl-3 rounded md:p-0 text-white hover:text-sky-600'

                >
                  Learn
                </a>
              </li>

            </ul>


            <div
              className={`h-screen 
                  ${nav === true ? "block" : "hidden"}`}
            >
           
             
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
