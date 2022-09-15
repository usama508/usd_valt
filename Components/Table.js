/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import styles from "../styles/Table.module.css";
import Link from 'next/link'
function Table({ data }) {

  const chart ='https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/52.svg'


  const [user, setUser] = useState(data.slice(0, 100));
  const [pageNumber, setPageNumber] = useState(0);
  const userPerPage = 10;
  const pageVisit = pageNumber * userPerPage;
  const pageCount = Math.ceil(user.length / userPerPage);

  const changePage = ({ select }) => {
    setPageNumber(select);
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
          background: rgb(125 211 252);
        }
      `}</style>
      
      <div className="text-xl md:text-3xl text-sky-900 font-bold mb-3 pt-3 ml-3 ">
        <h2>Today's Cryptocurrency Prices</h2>
      </div>
      <div className="overflow-x-auto rounded-lg bg-sky-900 relative">
        <table className="w-full text-sm text-left text-white ">
          <thead 
            className='text-xs uppercase border-b border-t border-gray-300'
              
          >
            <tr>
              <th scope="col" className="py-3 px-6">
                #
              </th>
              <th scope="col" className="py-3 px-6 " id="table-head-name">
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
            {data
              .slice(pageVisit, pageVisit + userPerPage)
              .map((bit) => (
                <tr
                  key={bit.id}
                  className='border-b hover:bg-sky-300 hover:text-black '
                  
                   
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
                        <b><Link href={`/coins/info?name=${bit.name}`}>{bit.name}</Link></b>
                      </span>
                      <span className="text-sky-500 ml-1">
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
                    {" "}
                    <img src={chart}></img>
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

    </>
  );
}

export default Table;