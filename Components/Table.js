/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import styles from "../styles/Table.module.css";
import Link from 'next/link'
import Chart from "../Components/Chart";
function Table({ data }) {




  const [users, setUsers] = useState(data.slice(0, 100));
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <style jsx>{`
        table thead #table-head-name{
          position: sticky;
          left: 0;
          
        }
        table tbody th {
          position: sticky;
          left: 0;
          z-index: 1;
           background:  rgb(12 74 110)
        }
        table tbody tr:hover > th {
          background: rgb(125 211 252);
         
        }
      `}</style>
      <div className="bg-sky-900 text-white rounded-lg">
        <div className="overflow-x-auto relative">
          <table className="w-full text-sm text-left  ">
            <thead
              className='text-xs uppercase border-b border-t '

            >
              <tr>
                <th scope="col" className="py-3 px-6 bg-sky-900">
                  #
                </th>
                <th scope="col" className="py-3 text-center px-6 bg-sky-900" id="table-head-name">
                  Name
                </th>
                <th scope="col" className="py-3 text-center px-6">
                  Price
                </th>
                <th scope="col" className="py-3 text-center px-6">
                  Market Cap
                </th>
                <th scope="col" className="py-3 text-center px-6">
                  Volume
                </th>
                <th scope="col" className="py-3 px-6 text-center">
                  Circulating Supply
                </th>
                <th scope="col" className="py-3 px-6 text-center">
                  Graph
                </th>
              </tr>
            </thead>

            <tbody>
              {data
                .slice(pagesVisited, pagesVisited + usersPerPage)
                .map((bit) => (
                  <tr
                    key={bit.id}
                    className='border-b  border-sky-300 hover:bg-sky-300
                        hover:text-black'
                     

                  >
                    <th
                      className='py-4 px-6'

                    >
                      {bit.market_cap_rank}
                    </th>
                    <th
                      scope="row"
                      className='py-4 px-6 font-medium  whitespace-nowrap'

                    >
                      <div className="flex">
                        <img width={22} src={bit.image} />
                        <span className="ml-2 hover:text-sky-600 ">
                          <b><Link href={`/coin/${bit.name.toLowerCase()}`}>{bit.name}</Link></b>
                        </span>
                        <span className="text-white ml-1">
                          {bit.symbol.toUpperCase()}
                        </span>
                      </div>
                    </th>
                    <td className="py-4 px-6">
                      <b>${bit.current_price.toLocaleString()}</b>
                    </td>
                    <td className="py-4 px-6">
                      ${bit.market_cap.toLocaleString()}
                    </td>
                    <td className="py-4 px-6">
                      ${bit.total_volume.toLocaleString()}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {bit.circulating_supply.toLocaleString()}{" "}
                      <span className="font-medium">
                        {bit.symbol.toUpperCase()}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <Chart />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>


        <div
          className='pt-5 flex items-center justify-center overflow-x-hidden'

        >
          <ReactPaginate
            previousLabel={"Prev"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={styles.paginationBttns}
            previousLinkClassName={styles.previousBttn}
            nextLinkClassName={styles.nextBttn}
            disabledClassName={styles.paginationDisabled}
            activeClassName={styles.paginationActive}
          />
        </div>
      </div>
    </>
  );
}

export default Table;