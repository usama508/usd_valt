/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'


function SearchM({ searchHidden, hideSearch }) {
    const [search, setSearch] = useState("")
    const [currency, setCurrency] = useState([])


    useEffect(() => {
        console.log('hello')
        fetchingData();
    }, [])

    const fetchingData = () => {
        fetch(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false"
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setCurrency(data);
            });

    }

    const getValue = (e) => {
        setSearch(e.target.value)
    }


    return (
        <div className={`${searchHidden} fixed -mt-10 z-50 h-screen w-full bg-sky-200`}>
            <form className='bg-sky-300 -mt-1 py-2'>
                <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-normal  sr-only ">
                    Search
                </label>
                <div className='flex justify-between'>
                    <div className='relative'>
                        <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                            <svg aria-hidden='true' className='ml-5 w-5 h-5 text-sky-500 ' fill='none'
                                stroke='currentColor' viewBox='0 0 24 24' xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap='rounded' strokeLinejoin='rounded' strokeWidth='2'
                                    d='M21 211-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'>

                                </path>
                            </svg>
                        </div>

                        <input autoComplete='off' onChange={getValue} type='search' id='default-search'
                            className='ml-5 block py-1.5 pl-10 w-full text-sky-700 text-sm rounded-lg boreder border-sky-500
                             outline-offset-1' placeholder='Search Coin...' required />

                    </div>
                    <div className='bg-white px-2 rounded-lg mr-3 flex items-center justify-center font-semibold
                      border-2 border-sky-500 z-50' onClick={hideSearch}>
                        Cancel
                    </div>
                </div>
            </form>
            
            <div className='h-screen  mx-12 my-2 overflow-scroll'>
            <div className="  mx-2 my-2   text-black">
            <p>Cryptoassets</p>
          </div>
                {
                    currency.filter((val) => {
                        if (search == "") {
                            return val
                        }
                        else if (val.name.toLowerCase().includes(search.toLowerCase())) {
                            return val
                        }
                    })
                        .map((val, key) => {
                            return (
                                <div key={val.id}>
                                    <span className='hover:text-blue-600'>
                                        <Link href={`/coins/${val.id}`} >
                                            <a>
                                                <div className='flex ' onClick={hideSearch}>
                                                    <img className='mr-2 mb-2 hover:text-slate-200' width='25' src={val.image} />
                                                    {val.name}
                                                    <span className="mr-2 mb-2 bg-sky-200 text-sky-800 text-xs font-bold px-2.5 py-1.5  rounded">

                                                        ${val.current_price}
                                                    </span>

                                                </div>

                                            </a>
                                        </Link>
                                    </span>

                                </div>
                            )
                        })
                }

            </div>








        </div>
    )
}

export default SearchM