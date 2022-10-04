/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useState, useEffect } from 'react'

import Chart from '../../../Components/Chart'
import PriceConvertor from '../../../Components/PriceConvertor'



const styles = {
activeTab:'p-1 px-2 mr-2 rounded-lg bg-sky-900',
tabItem:'px-2',
tabContainer:'flex items-center p-2 rounded-xl bg-sky-900 border border-gray-100/10 text-sm',
info:'text-white mx-auto max-w-screen-2xl',
flexStart:'flex items-start',
flexBetween:'flex justify-between',
flexBetweenCenter:'flex justify-between items-center',
tabContainerWrapper:'p-10 pl-0 pr-0 w-2/3',
flexCenter:'flex items-center'
}

function info({coins}) {
  console.log(coins)

  

  const [coinName,setCoinName] = useState('')
  const [coinSymbol,setCoinSymbol]=useState('')
  const [price,setPrice]= useState('')

  useEffect(()=>{
    getURLData()
  })

  const getURLData = async()=>{
    const queryString = window.Location.search
    const urlParams = new URLSearchParams(queryString)

    setCoinName(urlParams.get('coin'))
    setCoinName(urlParams.get('price'))
    setCoinName(urlParams.get('symbol'))
  }
  return (
    <>
    <nav className="flex" aria-label="Breadcrumb">
    <ol className="inline-flex items-center space-x-1 md:space-x-3">
      <li className="inline-flex items-center">
        <a
          href="#"
          className={`
           inline-flex items-center text-sm font-medium`}
        >
        All Prices
        </a>
      </li>
      <li>
        <div className="flex items-center">
          <svg
            className="w-6 h-6 text-sky-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <a
            href="#"
            className={`
              ml-1 text-sm font-medium md:ml-2`}
          >
            Coins
          </a>
        </div>
      </li>
      <li aria-current="page">
        <div className="flex items-center">
         
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
         
          <span
            className='ml-1 text-sm font-medium md:ml-2'
              
          >
        
            {coins.name}
          </span>
        </div>
      </li>
    </ol>
  </nav>

  
          <div className="flex items-center justify-start">
           
            <div
              className='flex mt-6'
               
            >
              <span>
                  <img src={coins.image} alt="" />
              </span>
              <span className="text-2xl md:text-4xl font-semibold  flex items-center justify-center ml-2">
                {coins.name}
              </span>
            </div>

            
            <div className="ml-2 mt-6">
              <span className=" bg-sky-300 text-sky-800 text-xs font-bold mr-2  px-2.5 py-1.5 rounded">
                {coins.symbol}
              </span>
            </div>
          </div>

          
          <div className="flex pb-3">
            <div className="flex items-end mb-1 font-semibold text-2xl md:text-4xl">
              ${coins.market_data.current_price.usd.toLocaleString()}
            </div>

            <div className="bg-sky-600 mt-8  text-white font-semibold flex items-center p-1 ml-2 rounded-md">
              {coins.market_data.price_change_percentage_24h.toFixed(2)}%
            </div>
          </div>
    
    <div className={styles.info}>
      <main className={styles.main}>
        <div className={styles.flexStart}>
          <div className={styles.tabContainerWrapper}>
            <div className={styles.flexBetween}>
              <div className={styles.tabContainer}>
                <p className={styles.activeTab}>Price</p>
                <p className={styles.tabItem}>Market Cap</p>
                <p className={styles.tabItem}>Trading View</p>
                <p className={styles.tabItem}>History</p>

              </div>
              <div className={styles.tabContainer}>
                <p className={styles.activeTab}>1D</p>
                <p className={styles.tabItem}>2D</p>
                <p className={styles.tabItem}>1M</p>
                <p className={styles.tabItem}>3M</p>
                <p className={styles.activeTab}>1Y</p>
                <p className={styles.tabItem}>YTD</p>
                <p className={styles.tabItem}>LOG</p>
                

              </div>

            </div>
            <br/>
            <Chart/>
            <br />
            <div className={styles.flexBetweenCenter}>
              <div className='flex'>
                <div className={` text-sky-900 ${styles.flexCenter}`}>
                  <input className='outline-none ' type='checkbox'/> &nbsp; USD

                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className={` text-sky-900 ${styles.flexCenter}`}>
                  <input type='checkbox'/> &nbsp; BTC

                </div>

              </div>
              <p className='text-sky-900'>
                Want more data?{''}
                <span className='text-[#6188FF]'>Check out our API</span>
              </p>

            </div>
            <br />
            <br />
            <PriceConvertor
              from={coinName}
              fromSymbol={coinSymbol}
              price={price}
              to='United States Dollars'
              toSymbol='USD'
              />



          </div>

        </div>

      </main>
     

    </div>
    </>
  )
}
export default info


export async function getServerSideProps() {
  //const id= context.query.coins
  //const {id} = context.query.coins
  
  
  const res = await fetch(`https://api.coingecko.com/api/v3/coins`);
  const data = await res.json();
  console.log(data)                                                                                                       
  return {
    props: {
    coins:data,
    }, 
  };
}
