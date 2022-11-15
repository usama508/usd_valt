/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useState, useEffect } from 'react'


import Chart from '../../Components/Chart'
import PriceConvertor from '../../Components/PriceConvertor'



const styles = {
  activeTab: 'p-1 px-2 mr-2  rounded-lg  bg-sky-900',
  tabItem: 'px-2 ',
  tabContainer: 'flex items-center p-2 m-6  rounded-xl bg-sky-900 border border-gray-100/10 text-sm',
  info: 'text-white mx-auto overflow-hidden max-w-screen-2xl ',
  flexStart: 'flex  items-start',
  flexBetween: 'flex  justify-between',
  flexBetweenCenter: 'flex justify-between items-center ',
  tabContainerWrapper: 'p-10 pl-0 pr-0 w-2/3 ',
  flexCenter: 'flex  items-center'
}

function info({ coin }) {
  console.log(coin)



  const [coinName, setCoinName] = useState('')
  const [coinSymbol, setCoinSymbol] = useState('')
  const [price, setPrice] = useState('')


  useEffect(() => {
    getURLData()
  })

  const getURLData = async () => {
    const queryString = window.Location.search
    const urlParams = new URLSearchParams(queryString)

    setCoinName(urlParams.get('coin'))
    setCoinName(urlParams.get('price'))
    setCoinName(urlParams.get('symbol'))
  }
  return (
    <>
      <div className='p-4'>
        <nav className=" flex " aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">

            <li className='flex items-center'>

              {/*<svg
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
  </svg>*/}
              <a
                href="#"
                className={`
                inline-flex items-center text-sm font-medium`}
              >
                Coin
              </a>

            </li>
            <li aria-current="page">
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

                <span
                  className='ml-1 text-sm font-medium md:ml-2'

                >
                  {coin.name}

                </span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="flex justify-between  ">
          <div className="flex items-center justify-start ">

            <div
              className='flex mt-6 '

            >
              <span>
                <img src={coin.image.small} alt="" />
              </span>
              <span className="text-2xl md:text-4xl font-semibold  flex items-center justify-center ml-2">
                {coin.name}
              </span>
            </div>

            <div className="ml-2 mt-6">
              <span className=" bg-sky-300 text-sky-800 text-xs font-bold mr-2  px-2.5 py-1.5 rounded">
                {coin.symbol.toUpperCase()}
              </span>
            </div>

          </div>

          <div className="flex pb-3 ">
            <div className="flex items-end mb-1 font-semibold text-2xl md:text-4xl">
              ${coin.market_data.current_price.usd.toLocaleString()}
            </div>

            <div className="bg-sky-600 mt-8  text-white font-semibold flex items-center p-1 ml-2 rounded-md">
              {coin.market_data.price_change_percentage_24h.toFixed(2)}%
            </div>
          </div>
        </div>

        <div className="flex justify-between  mt-1.5">
          <div className="flex">
            <div className="bg-sky-400 mr-2 rounded-md flex items-center justify-center p-1">
              Rank# {coin.market_cap_rank}
            </div>

          </div>

          <div className="w-1/6  ">
            <div className="w-full rounded-full h-1.5 bg-sky-300">
              <div
                className="bg-sky-500 h-1.5 rounded-full"
                style={{ width: "20%" }}
              ></div>
            </div>
          </div>
        </div>












        

            {/*<div className={styles.flexStart}>
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
                <br />
                <div className='flex m-6'>
                  <Chart />
                </div>
                <br />
                <div className={styles.flexBetweenCenter}>
                  <div className='flex m-6'>
                    <div className={` text-sky-900 ${styles.flexCenter}`}>
                      <input className='outline-none ' type='checkbox' /> &nbsp; USD

                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div className={` text-sky-900 ${styles.flexCenter}`}>
                      <input type='checkbox' /> &nbsp; BTC

                    </div>

                  </div>
                  <p className='text-sky-900'>
                    Want more data?{''}
                    <span className='text-[#6188FF]'>Check out our API</span>
                  </p>

                </div>
                <br />
                <br />*/}


<div className={styles.info}>
          

                <div className='m-2 '>
                  <div className='text-xl md:text-3xl  text-black font-bold mb-3 mt-20 ml-3'>
                    <h1>{coin.name} to USD Convertor</h1>
                  </div>

                  <PriceConvertor
                 
                    from={coin.name}
                    fromSymbol={coin.symbol}
                    fromLogo={coin.image.small}
                    price={coin.market_data.current_price.usd}
                    to='United States Dollars'
                    toSymbol='USD'
                  />

                </div>


              </div>
            </div>
          
       
        













      

    </>
  )
}
export default info

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
  const data = await res.json();

  return {
    props: {
      coin: data
    }
  }
}

{/*import React from 'react'
import CoinDetail from '../../../Components/CoinDetail'

function DetailPage() {
  return (
    <div className='wrapper-container mt-10'>
      <CoinDetail/>

    </div>
 
  )
}

export default DetailPage*/}
/* eslint-disable @next/next/no-img-element */



{/*import React from 'react'

function Coin({coin}) {
  return (
   
        <div >
            <div >
                <img 
                src={coin.image.small}
                alt={coin.name}
                
                />
                <h1 >{coin.name}</h1>
                <p >{coin.symbol}</p>
                <p >
                    {coin.market_data.current_price.usd}
                </p>


            </div>

        </div>
    
  )
}

export default Coin

*/}

