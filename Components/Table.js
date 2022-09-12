/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import {useEffect,useState} from 'react'
import Chart from "../Components/Chart";



function Table({ data }) {


  return (
    <>
      <style jsx>{`
    table tbody th {
      position: sticky;
      left: 0;
      z-index: 1; 
      background: rgb(12 74 110)
    }
    table tbody tr:hover > th{
      background: #4496d0
   
      

    }
          `}</style>
      <div>
        <div className="container p-2 mx-auto rounded-md sm:p-4 text-sky-100 bg-sky-900">
          <h2 className="mb-3 text-2xl font-semibold leading-tight">Today's Cryptocurrency Prices </h2>
          <div className="overflow-x-auto relative">
            <table className="w-full text-sm text-left">
              <thead className="rounded-t-lg bg-sky-700 text-left ">
                <tr className="text-right ">
                  <th scope="col" className="py-3 px-6 text-left">
                    #
                  </th>
                  <th scope="col" className="py-3 px-6 text-left">
                    Name
                  </th>
                  <th scope="col" className="py-3 px-6 text-left">
                    Price
                  </th>
                  <th scope="col" className="py-3 px-6 text-left">
                    Market Cap
                  </th>
                  <th scope="col" className="py-3 px-6 text-left">
                    volume
                  </th>
                  <th scope="col" className="py-3 px-6 text-left">
                    Circulating Supply
                  </th>
                  <th scope="col" className="py-3 px-6 text-left">
                    Graph
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map(bit => {
                    return ( <>
                   
                        <tr >
                          <th className="py-4 px-6 flex flex-col space-y-2 ">
                            {bit.market_cap_rank}

                          </th>
                          <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap ">
                            <div className="flex" >
                              <img width={22} src={bit.image} />
                              {bit.name}
                            </div>
                          </th>
                          <td className="py-4 px-6 ">${bit.current_price.toLocaleString()}</td>
                          <td className="py-4 px-6 ">${bit.market_cap.toLocaleString()}</td>
                          <td className="py-4 px-6 ">${bit.total_volume.toLocaleString()}</td>
                          <td className="py-4 px-6 ">${bit.circulating_supply.toLocaleString()}{" "}<span className="font-medium">{bit.symbol.toUpperCase()}</span></td>
                          <td className="py-4 px-6 "><Chart/></td>

                        </tr>



                      
                     </>
                    )
                  })
                }
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;