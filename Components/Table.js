/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";


function Table({ data }) {

  return (
    <div>
      <div className="container p-2 mx-auto rounded-md sm:p-4 text-sky-100 bg-sky-900">
        <h2 className="mb-3 text-2xl font-semibold leading-tight">Standings</h2>
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
                  return (
                    <>
                      <tr >
                        <th className="py-4 px-6">
                          {bit.market_cap_rank}

                        </th>
                        <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap">
                          <div className="flex" >
                            <img width={22} src={bit.image} />
                            {bit.name}
                          </div>
                        </th>
                        <td className="py-4 px-6">{bit.current_price}</td>
                        <td className="py-4 px-6">{bit.market_cap}</td>
                        <td className="py-4 px-6">{bit.total_volume}</td>
                        <td className="py-4 px-6">{bit.circulating_supply}{""}<span className="font-medium">{bit.symbol}</span></td>
                        <td className="py-4 px-6">graph</td>

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
  );
}

export default Table;