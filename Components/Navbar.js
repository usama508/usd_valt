/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";




import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsSearch } from 'react-icons/bs';
import SearchBar from "./SearchBar";
import SearchM from "./SearchM";





import Accordion from "./Accordion";



const Navbar = ({ count, filteredCoins }) => {
  const [dropDown, setDropDown] = useState(false);
  const [nav, setNav] = useState(false);
  const [search, setSearch] = useState(false)
  const [searchHidden, setSearchHidden] = useState('hidden')

  const hideSearch = () => {
    if (searchHidden == 'hidden') {
      setSearchHidden('block')
    }
    else if (searchHidden == 'block') {
      setSearchHidden('hidden')
    }
  }

  const displaySearch = () => {
    setSearch(!search)
  }








  const display = () => {
    setNav(!nav);
    if (count == false) {
      setCount(true)
    }
    else if (count == true) {
      setCount(false)
    }

  };

  const hideNavRes = () => {
    setNav(false)
  }







  return (
    <>
      <nav
        className='sticky text-white top-0 z-50  bg-sky-900    '

      >
        <div className="  flex flex-col">
          <div className="lg:order-2 flex  justify-between items-center px-1 py-1 lg:py-4 lg:-mt-3 h-13">
            <Link href="/">
              <a>
                <div className="flex flex-row">

                  <span onClick={hideNavRes}
                    className='flex text-2xl mt-1  ml-2'>
                    USD_VALT
                  </span>
                </div>
              </a>
            </Link>



            {nav === false ? (

              <>
                <div className="flex">
                  <div className="flex justify-center text-white items-center p-2 mr-2 rounded-full md:hidden cursor-pointer">
                    <BsSearch onClick={hideSearch} />
                  </div><span
                    className=' border border-white md:border-0 rounded p-1'

                  >
                    <GiHamburgerMenu
                      className='md:hidden text-white  cursor-pointer'

                      onClick={display}
                      size={20} />
                  </span></div></>
            ) : (
              <AiFillCloseCircle
                onClick={display}
                size={20}
                className='drop-shadow text-white cursor-pointer'

              />
            )}





            <div className="hidden w-full -mt-2 md:block md:w-auto" id="navbar-default">
              <ul
                className=
                'md:flex md:items-center mt-2 md:static absolute w-full left-0 md-w-auto md:py-0 py-4 md:pl-96  md:opacity-100 opacity-0   duration-500  '
              >


                <li className="mx-4 my-6 md:my-0">
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
                      className='text-xl duration-500  text-white hover:text-sky-600 '

                    >
                      Coins
                    </a>

                    {dropDown && (
                      <div className=" absolute top-13 right-30 bg-sky-200  rounded-md p-5 w-1/4 z-50">
                        <div className=" bg-sky-200 transform w-7 h-6 absolute -mt-1 top-0 rounded-sm  right-300 rotate-45 "></div>
                        <ul >
                          <Link href={"/category"}>
                            <a>
                              <li className="text-base text-black flex pb-2 pt-1">


                                All Categories
                              </li>
                            </a>
                          </Link>
                          <Link href={"/gainer"}>
                            <a>
                              <li className="text-base text-black flex pb-2">

                                Top Gainers
                              </li>
                            </a>
                          </Link>

                          <Link href={"/loser"}>
                            <a>
                              <li className="text-base text-black flex pb-2">

                                Top Losers
                              </li>
                            </a>
                          </Link>
                          <Link href={"/add"}>
                            <a>
                              <li className="text-base text-black flex pb-2">


                                Recently Added
                              </li>
                            </a>
                          </Link>
                          <Link href={"/trending"}>
                            <a>

                              <li className="text-base text-black flex pb-2" >

                                Trending
                              </li>
                            </a>
                          </Link>

                        </ul>
                      </div>
                    )}
                  </span>
                </li>
                <li className="mx-4 my-6 md:my-0">
                  <a
                    href="#"
                    className='text-xl  duration-500 text-white hover:text-sky-600'

                  >
                    NFT
                  </a>
                </li>
                <li className="mx-4 my-6 md:my-0">
                  <a
                    href="#"
                    className='text-xl duration-500 text-white hover:text-sky-600'

                  >
                    Resources
                  </a>
                </li>

                <li className="mx-4 my-6 md:my-0">
                  <a
                    href="#"
                    className='text-xl duration-500 text-white hover:text-sky-600'

                  >
                    Learn
                  </a>
                </li>

                <li>
                  <SearchBar/>
                </li>
              


              </ul>






















            </div>

          </div>
        </div>
      </nav>
      <div className={`h-screen w-full z-50 top-14 ${nav === true ? 'fixed' : 'hidden'}`}>
        <Accordion />
      </div>


      <SearchM searchHidden={searchHidden} hideSearch={hideSearch} />





    </>
  );
};
export default Navbar;
