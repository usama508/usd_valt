/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import styles from "../styles/Table.module.css";
import Link from 'next/link'
import {AiFillCaretDown} from 'react-icons/ai';
import {AiFillCaretUp} from 'react-icons/ai';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'





function Table({  filteredCoins, isLoading }) {
  console.log(filteredCoins)

  const Chart ='https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/52.svg'

 
  const [users, setUsers] = useState(filteredCoins.slice(0,100));
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(users.length / usersPerPage);
  const [data,setData] = useState(filteredCoins)
  const [order,setOrder] =useState("ASC")
  const [count,setCount] = useState(0)
  const [price,setPrice] = useState(0)
  const [cap,setCap] = useState(0)
  const [vol,setVol] = useState(0)
  const [supply,setSupply] = useState(0)
  const [h,setH] = useState(0)
  const [id,setId] = useState(0)
  const [hash, setHash] = useState(0)
  

  const sorting = (col) =>{
    if(order === "ASC"){
      const sorted = [...data].sort((a,b)=>
        a[col] > b[col] ? 1 : -1
        );
        setData(sorted);
        setOrder("DSC");
    }
    if(order === "DSC"){
      const sorted = [...data].sort((a,b)=>
        a[col] < b[col] ? 1 : -1
        );
        setData(sorted);
        setOrder("ASC");
    }
  }

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  if(isLoading){
    <Skeleton count={10} />
  }


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
              <th scope="col" className="py-3 px-6 cursor-pointer" onClick={()=>{sorting("market_cap_rank"); setHash(hash + 1); setId(7)}}>
                <span className="flex"># 
                { hash !=0 && hash%2 !==0 && id===7 && <AiFillCaretUp className="mt-1 mr-2"/>}
                  { hash !=0 &&  hash%2 ==0 && id===7 && <AiFillCaretDown className="mt-1 mr-2"/> }
                
                
                </span>
              </th>
              <th scope="col" className="py-3 px-6 cursor-pointer" id="table-head-name" onClick={()=>{sorting("name"); setCount(count + 1); setId(1) }}>
                <span className="flex">Name
                {count !=0 && count%2 !==0 && id===1 && <AiFillCaretUp className="mt-1 mr-2"/>}
                  {count !=0 && count%2 ==0 && id===1 && <AiFillCaretDown className="mt-1 mr-2"/> }
                
                
                </span>
              </th>
              <th scope="col" className="py-3 px-6 cursor-pointer " onClick={()=>{sorting("current_price"); setPrice(price+1); setId(2)}}>
                <span className="flex">Price 
                {price !=0 && price%2 !==0 && id===2 && <AiFillCaretUp className="mt-1 mr-2"/>}
                  {price !=0 && price%2 ==0 && id===2 && <AiFillCaretDown className="mt-1 mr-2"/> }
                
                
                </span>
              </th>
              <th scope="col" className="py-3 px-6 text-center cursor-pointer" onClick={()=>{sorting("price_change_percentage_24h"); setH(h + 1); setId(3)}}>
                 <span className="flex">24H
                {h !=0 && h%2 !==0 && id===3 && <AiFillCaretUp className="mt-1 mr-2"/>}
                  {h !=0 && h%2 ==0 && id===3 && <AiFillCaretDown className="mt-1 mr-2"/> }
                
                
                </span>
              </th>
              <th scope="col" className="py-3 px-6 cursor-pointer" onClick={()=>{sorting("market_cap"); setCap(cap + 1); setId(4)}}>
                <span className="flex"> Market Cap
                {cap !=0 && cap%2 !==0 && id===4 && <AiFillCaretUp className="mt-1 mr-2"/>}
                  {cap !=0 && cap%2 ==0 && id===4 && <AiFillCaretDown className="mt-1 mr-2"/> }
                
                
                </span>
              </th>
              <th scope="col" className="py-3 px-6 cursor-pointer" onClick={()=>{sorting("total_volume"); setVol(vol + 1); setId(5)}}>
                <span className="flex"> Volume
                {vol !=0 && vol%2 !==0 && id===5 && <AiFillCaretUp className="mt-1 mr-2"/>}
                  {vol !=0 && vol%2 ==0 && id===5 && <AiFillCaretDown className="mt-1 mr-2"/> }
                
                
                </span>
              </th>
              <th scope="col" className="py-3 px-6 text-center cursor-pointer" onClick={()=>{sorting("circulating_supply"); setSupply(supply + 1); setId(6)}}>
                 <span className="flex">Circulating Supply
                {supply !=0 && supply%2 !==0 && id===6 && <AiFillCaretUp className="mt-1 mr-2"/>}
                  {supply !=0 && supply%2 ==0 && id===6 && <AiFillCaretDown className="mt-1 mr-2"/> }
                
                
                </span>
              </th>
              <th scope="col" className="py-3 px-6 text-center">
                Graph
              </th>
            </tr>
          </thead>

          <tbody>
            {data
              .slice(pagesVisited, pagesVisited + usersPerPage)
              .map((coin) => (
                <tr
                  key={coin.id  }
                  className='border-b hover:bg-sky-300 hover:text-black '
                    
                >
                  <th
                    className='py-4 px-6' 
                     
                  >
                   {coin.market_cap_rank } 
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
                  {coin.price_change_percentage_24h>0 && <td className="flex mt-4 text-green-400 py-4 px-6">
                    <AiFillCaretUp className="mt-1 mr-1"/>{coin.price_change_percentage_24h.toFixed(2)}%
                  </td>}
                  {coin.price_change_percentage_24h<0 && <td className="flex mt-4 text-red-400 py-4 px-6">
                   <AiFillCaretDown className="mt-1 mr-1" />{coin.price_change_percentage_24h.toFixed(2)}%
                  </td>}
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
                  <td className="">
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

