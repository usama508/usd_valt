import Head from "next/head";


import Table from "../Components/Table";

import ScrollToTop from "../Components/ScrollToTop";
import Swipper from "../Components/Swipper";
import { useState, useEffect } from "react";
import Container from "../Components/Container";
import LatestData from '../Components/LatestData'




export default function Home({data}) {

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

  return (
    <div className="z-0">
     <div className="m-4">
          <LatestData/>

        </div>
      

      
      <div className="mt-6 ml-20 lg:ml-16 ">
        <Swipper w={w}/>
        
        </div>

        
      
      <div className="text-xl md:text-3xl text-sky-900 font-bold mb-3 pt-3 ml-3 ">
        <h2>Top Movers🔥</h2>
      </div>
      

      <div className="m-4">
      
        <Container/>
      </div>

      <div className="m-4">
        <Table data={data} />
      </div>
      <div>
        <ScrollToTop/>
      </div>
     
    </div>
  );
}

export async function getServerSideProps(){
  const response = await fetch(
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false")
  const data = await response.json()
  return{
    props:{
      data
    }
  }

}