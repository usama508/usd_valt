/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unknown-property */
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import OutsideClickHandler from 'react-outside-click-handler';
//import {FiSearch} from 'react-icons/fi'

const SearchBar = () => {

  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");
  const [hide, setHide] = useState('hidden')



  const ref = useRef();
  const reff = useRef();
  //const clickPoint = useRef();
  //const handleFocus = () => {
  //clickPoint.current.style.display = "none";
  // };

  //const handleBlur = () => {
  //  clickPoint.current.style.display = "block";
  // };

  const fetchUrl = () => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUser(data);
      });
  };

  useEffect(() => {
    fetchUrl();
  }, []);

  const getValue = () => {
    setSearch(ref.current.value);
    if (ref.current.value != "") {
      setHide("block");
    } else {
      setHide("hidden");
    }


  };

  return (
    <>
      <form className="order-first mb-10 md:mb-0 md:order-last md:pr-8">
        <div className="items-center px-1 flex justify-center" >
          <div className="relative mt-3 ml-0">
            <div className="absolute top-3 left-3 items-center" >
              <svg className="w-5 h-5 text-sky-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
            </div>
            <input
              type="text"
              className="block p-2 pl-10 w-70 text-sky-900 bg-sky-50 rounded-lg border border-sky-300 "
              placeholder='Search Coin...'
              // onFocus={handleFocus}
              //onBlur={handleBlur}
              ref={ref}
              onChange={getValue}
              required
            />
          </div>
        </div></form>
      <OutsideClickHandler
        onOutsideClick={() => {

          setHide("hidden")

        }}
      >
        <div
          className={`${hide} absolute top-30 mt-1 ml-1 drop-shadow bg-sky-200 w-96 px-8 py-3 rounded-md`}
        >
          <div className="  mx-2 my-2  text-xs text-black">
            <p>Cryptoassets</p>
          </div>
          {user
            .filter((val) => {
              if (search == "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(search.toLowerCase())

              ) {
                return val;
              }
            })
            .map((val, key) => {
              return (
                <div key={val.id}>
                  <span className="text-black " >
                    <Link href={`/coins/${val.id}`}>
                      <a>
                        <div className="flex ">
                          <img className="mx-2 my-1 text-xs " width='22' height='22' src={val.image} />
                          {val.name}
                          <span className="">

                            <span className=" bg-sky-200 text-sky-800 justify-end text-xs  mr-2  px-2.5 py-1.5 rounded">

                              ${val.current_price}
                            </span></span>
                        </div>


                      </a>
                    </Link>

                  </span>

                </div>
              );
            })}

        </div>
      </OutsideClickHandler>

    </>
  );
}

export default SearchBar