/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useState, useEffect } from 'react'

import Chart from '../../../Components/Chart'



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

function info() {
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


          </div>

        </div>

      </main>
     

    </div>
    
  )
}
export default info