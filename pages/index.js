/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";


import Table from "../Components/Table";

import ScrollToTop from "../Components/ScrollToTop";
import Swipper from "../Components/Swipper";
import { useState, useEffect } from "react";

import LatestData from '../Components/LatestData'
import Cards from "../Components/Cards";












export default function Home({ filteredCoins }) {
  

  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      // only execute all the code below in client side
      if (typeof window !== 'undefined') {
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
      
        // Add event listener
        window.addEventListener("resize", handleResize);
       
        // Call handler right away so state gets updated with initial window size
        handleResize();
      
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

  const size = useWindowSize();

  //setting the width props
  let w=4
  console.log(size.width)
  if(size.width<=640){
    w=1
  }

const [search, setSearch] = useState('');
const allCoins= filteredCoins.filter(coin=>
  coin.name.toLowerCase().includes(search.toLowerCase())
  )


  return (
    <div className="z-0">
     <div className="m-3 ml-7">
          <LatestData/>

        </div>
      

      
      <div className="mt-3  lg:ml-20 ml-28 mr-24 ">
        <Swipper w={w}/>
        
        </div>

        
    
      

      <div className="md:flex md:justify-center   md:items-center  p-5">
      
       < Cards heading={'Trending'}  />
       < Cards heading={'Biggest Gainers'}/>
       < Cards heading={'Recently Added'}/>
      </div>

      <div className="m-2">
      <div className="text-xl md:text-3xl text-sky-900 font-bold mb-3 pt-3 ml-3 ">
        <h2>Today's Cryptocurrency Prices  </h2>
       
      </div>
        <Table  filteredCoins={filteredCoins}  />
       
      </div>
      <div>
        <ScrollToTop/>
      </div>
     
    </div>
  );
}
export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false"
  );

  const filteredCoins = await res.json();
  console.log(filteredCoins)

  return {
    props: {
      filteredCoins,
    },
  };
};

