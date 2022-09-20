/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import styles from "../styles/Table.module.css";
import Link from 'next/link'

function Table({  filteredCoins }) {

  const Chart ='https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/52.svg'


  const [users, setUsers] = useState(filteredCoins.slice(0, 100));
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
         background: rgb(12 74 110);
        }
        table tbody th {
          position: sticky;
          left: 0;
          z-index: 1;
          background: rgb(12 74 110);
        }
        table tbody tr:hover > th {
          background: rgb(125 211 252)
        }
      `}</style>
      
      <div className="overflow-x-auto bg-sky-900 relative">
        <table className="w-full text-sm text-left text-white ">
          <thead 
            className='text-xs uppercase border-b border-t border-sky-300'
              
          >
            <tr>
              <th scope="col" className="py-3 px-6">
                #
              </th>
              <th scope="col" className="py-3 px-6" id="table-head-name">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                Price
              </th>
              <th scope="col" className="py-3 px-6">
                Market Cap
              </th>
              <th scope="col" className="py-3 px-6">
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
            {filteredCoins
              .slice(pagesVisited, pagesVisited + usersPerPage)
              .map((coin) => (
                <tr
                  key={coin.id}
                  className='border-b hover:bg-sky-300 hover:text-black '
                    
                >
                  <th
                    className='py-4 px-6'
                     
                  >
                    {coin.market_cap_rank}
                  </th>
                  <th
                    scope="row"
                    className='py-4 px-6 font-medium  whitespace-nowrap'
                     
                  >
                    <div className="flex">
                      <img width={22} src={coin.image} />
                      <span className="ml-2 hover:text-sky-600">
                        <b><Link href={`/coins/${coin.id}`}>{coin.name}</Link></b>
                      </span>
                      <span className="text-sky-500 ml-1">
                        {coin.symbol.toUpperCase()}
                      </span>
                    </div>
                  </th>
                  <td className="py-4 px-6">
                    <b>${coin.current_price.toLocaleString()}</b>
                  </td>
                  <td className="py-4 px-6">
                    ${coin.market_cap.toLocaleString()}
                  </td>
                  <td className="py-4 px-6">
                    ${coin.total_volume.toLocaleString()}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {coin.circulating_supply.toLocaleString()}{" "}
                    <span className="font-medium">
                      {coin.symbol.toUpperCase()}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    {" "}
                    <img src={Chart}></img>
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
          previousLabel="<<"
          nextLabel=">>"
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={styles.paginationBttns}
          previousLinkClassName={styles.previousBttn}
          nextLinkClassName={styles.nextBttn}
          disabledClassName={styles.paginationDisabled}
          activeClassName={styles.paginationActive}
        />
      </div>

    </>
  );
}

export default Table;