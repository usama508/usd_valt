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
      <div className='z-0 w-full h-full m-2'>
        <div className='rounded-md border shadow-md shadow-gray-200 border-gray-300 p-3'>



          <table>

            <thead className="text-lg font-semibold   items-baseline">
              <tr>
                <th>
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
                      className=' w-1/12'

                    >
                      {coin.market_cap_rank}
                    </th>

                    <th
                      scope="row"
                      className=' font-medium  '

                    >
                      <div className="flex  ">
                        <img width='22' src={coin.image} className='mr-1  ' />


                        <span className=" hover:text-sky-600  text-left ">

                          <b><Link href={`/coins/${coin.id}`}>{coin.name}</Link></b>
                        </span>
                        <span className="text-gray-300  text-xs mt-1 ml-1 ">
                          {coin.symbol.toUpperCase()}
                        </span>
                      </div>
                    </th>
                    <div className='justify-items-end'>
                      {coin.price_change_percentage_24h > 0 && <td className="flex    mt-0 text-green-400 py-4 px-6">
                        <AiFillCaretUp className=" mt-1 " />{coin.price_change_percentage_24h.toFixed(2)}%
                      </td>}
                      {coin.price_change_percentage_24h < 0 && <td className="flex  flex-items-end	 mt-0 text-red-400 py-4 px-6">
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




