/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import React from 'react'
import { useState, useEffect } from 'react'
import { AiFillCaretDown } from 'react-icons/ai';
import { AiFillCaretUp } from 'react-icons/ai';

function Cards({ heading }) {
    const [user, setUser] = useState([]);
    useEffect(() => {
        url();

    }, []);
    const url = () => {
        fetch(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=3&page=1&sparkline=false"
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {

                setUser(data);
            });
    }




    return (
        <>
            <div className='z-0 w-full m-2'>
                <div className='rounded-md border shadow-md shadow-gray-200 border-gray-300 p-5'>

               

<table>

                        <thead className="text-lg font-semibold items-baseline">
                            {heading}
                            </thead>
                            <tbody>
                      
{
    user.map((coin)=>
                    <tr
                    key={coin.id  }
                    className='  hover:text-black '
                      
                  >
                    <th
                      className='py-4 px-6 text-right ' 
                       
                    >
                     {coin.market_cap_rank } 
                    </th>
  
                    <th
                      scope="row"
                      className=' font-medium  whitespace-nowrap'
                       
                    >
                      <div className="flex  ">
                        <img width={22} src={coin.image} className='mr-1 text-left' />
  
  
                        <span className=" hover:text-sky-600 text-left">
                         
                          <b><Link href={`/coins/${coin.id}`}>{coin.name}</Link></b>
                        </span>
                        <span className="text-gray-300 text-left text-xs mt-1 ml-1">
                          {coin.symbol.toUpperCase()}
                        </span>
                      </div>
                    </th>
                   
                    {coin.price_change_percentage_24h>0 && <td className="flex   mt-0 text-green-400 py-4 px-6">
                      <AiFillCaretUp className=" mt-1 "/>{coin.price_change_percentage_24h.toFixed(2)}%
                    </td>}
                    {coin.price_change_percentage_24h<0 && <td className="flex flex-items-end	 mt-0 text-red-400 py-4 px-6">
                     <AiFillCaretDown className=" mt-1  " />{coin.price_change_percentage_24h.toFixed(2)}%
                    </td>}
                   
                   
                  
                    
                 </tr>) 
}

                                   
                                    
                                   
                                   
                                 

</tbody>



                                
                            
                          </table>
</div>
              

            </div></>
    )
}

export default Cards




