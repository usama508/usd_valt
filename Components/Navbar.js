/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";




import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import SearchBar from "./SearchBar";



import Accordion from "./Accordion";


const Navbar = ({count,data}) => {
  const [dropDown, setDropDown] = useState(false);
  const [nav, setNav] = useState(false);
  const [search, setSearch] = useState(false)
  const [ShowSearch, setShowSearch] = useState("hidden");

  const [DropD, setDropD] = useState(false);
  const menuClick = () => {
    setDropD(!DropD);
  };

  const searchClick = () => {
    ShowSearch === "hidden" ? setShowSearch("block") : setShowSearch("hidden");
  };


  const display = () => {
    setNav(!nav);
    if (count == false) {
      setCount(true)
    }
    else if (count == true) {
      setCount(false)
    }

  };



  const displaySearch = () => {
    setSearch(!search);
  };




  return (
    <>
      <nav
        className='sticky md:relative top-0 z-50 border-sky-200 px-2 sm:px-4 py-1 drop-shadow-md bg-sky-900 flex flex-col '

      >
        <div className="lg:order-2 flex justify-between items-center px-3 py-3 lg:py-4 lg:mt-1 h-13">
          <Link href="/">
            <a>
              <div className="flex flex-row">

                <span
                  className='self-center text-2xl flex justify-center items-center mr-1 text-white leading-10 font-semibold whitespace-nowrap font-pacifico tracking-wider'>
                  USD_VALT
                </span>
              </div>
            </a>
          </Link>



          {nav === false ? (
            <span
              className=' border border-black md:border-0 rounded p-1'

            >
              <GiHamburgerMenu
                className='md:hidden cursor-pointer'

                onClick={display}
                size={20}
              />
            </span>
          ) : (
            <AiFillCloseCircle
              onClick={display}
              size={20}
              className='drop-shadow cursor-pointer'

            />
          )}



          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul
              className=
              'flex flex-col p-4 mt-4 rounded-lg border border-sky-100 md:flex-row md:space-x-5 md:mt-0 md:text-sm md:font-medium md:border-0 `  '
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
                    className='block py-2 pr-4 pl-3 rounded md:p-0 text-white hover:text-sky-600 '

                  >
                    Coins
                  </a>

                  {dropDown && (
                    <div className=" absolute top-13 right-30 bg-sky-200  rounded-md p-5 w-1/4 z-50">
                      <div className=" bg-sky-200 transform w-7 h-6 absolute -mt-1 top-0 rounded-sm  right-300 rotate-45 "></div>
                      <ul className="">
                        <Link href={"/category"}>
                          <a>
                            <li className="text-base  flex pb-2 pt-1">


                              All Categories
                            </li>
                          </a>
                        </Link>
                        <Link href={"/gainer"}>
                          <a>
                            <li className="text-base  flex pb-2">

                              Top Gainers
                            </li>
                          </a>
                        </Link>

                        <Link href={"/loser"}>
                          <a>
                            <li className="text-base  flex pb-2">

                              Top Losers
                            </li>
                          </a>
                        </Link>
                        <Link href={"/add"}>
                          <a>
                            <li className="text-base flex pb-2">


                              Recently Added
                            </li>
                          </a>
                        </Link>
                        <Link href={"/trending"}>
                          <a>

                            <li className="text-base flex pb-2" >

                              Trending
                            </li>
                          </a>
                        </Link>

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
              <li
                
                  
                  className='block py-2 pr-4 pl-3 rounded md:p-0 text-white hover:text-sky-600 -mt-2   '

                >
                  <SearchBar />
              
                



                  </li>


            </ul>



















          </div>

        </div>
      </nav>

      <div
        className={`h-screen w-full className='bg-sky-300 z-50 top-14 
         ${nav === true ? "block" : "hidden"}`}
      >
        <Accordion />
      </div>

     
    </>
  );
};
export default Navbar;
