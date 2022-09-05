import Head from "next/head";


import Table from "../Components/Table";
import Card from "../Components/Card";
import ScrollToTop from "../Components/ScrollToTop";
import Swipper from "../Components/Swipper";



export default function Home({data}) {

  return (
    <div className="z-0">
      <div className="mt-6">
        <Swipper/>
        
        </div>
      
      
      

      <div className="m-4 ">
        <div className="md:flex  space-x-0.5 mb-3">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="md:flex space-x-0.5">
          <Card />
          <Card />
        </div>
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
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
  const data = await response.json()
  return{
    props:{
      data
    }
  }

}