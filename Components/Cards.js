/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import React from 'react'
import { useState, useEffect } from 'react'
import { AiFillCaretDown } from 'react-icons/ai';
import { AiFillCaretUp } from 'react-icons/ai';

function Cards({ heading }) {

  const [trending, setTrending] = useState([]);


  const url = () => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=3&page=1&sparkline=false"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {

        setTrending(data);
      });
  }

  useEffect(() => {
    url();

  }, []);



  return (
    <>
      <div className='z-0 w-full m-2'>
        <div className='rounded-md border shadow-md shadow-gray-200 border-gray-300 p-3 '>



          <table>

            <thead className="text-lg font-semibold  table-caption tracking-wide">
              <tr>
                <th >
                  {heading}
                </th>
              </tr>

            </thead>
            <tbody>

              {
                trending.map((coin) => (

                  <tr
                    key={coin.id}
                    className='  hover:text-black '

                  >
                    <th
                      className='text-sm text-center w-1/12 ml-3'

                    >
                      {coin.market_cap_rank}
                    </th>

                    <th
                      scope="row"
                      className=' '

                    >
                      <div className="flex  ">
                        <img width='22' src={coin.image} className=' ml-4 ' />


                        <span className=" hover:text-sky-600 font-medium text-left ml-1">

                          <b><Link href={`/coins/${coin.id}`}>{coin.name}</Link></b>
                        </span>
                        <span className="text-gray-300 font-semibold text-left text-xs mt-1 ml-1 ">
                          {coin.symbol.toUpperCase()}
                        </span>
                      </div>
                    </th>
                    <div >
                      {coin.price_change_percentage_24h > 0 && <td className="flex  text-right ml-24  mt-0 text-green-400 py-2 px-3">
                        <AiFillCaretUp className=" mt-1 " />{coin.price_change_percentage_24h.toFixed(2)}%
                      </td>}
                      {coin.price_change_percentage_24h < 0 && <td className="flex ml-24 text-right	 mt-0 text-red-400 py-2 px-3">
                        <AiFillCaretDown className=" mt-1  " />{coin.price_change_percentage_24h.toFixed(2)}%
                      </td>}

                    </div>


                  </tr>))
              }







            </tbody>





          </table>
        </div>


      </div></>
  )
}

export default Cards




