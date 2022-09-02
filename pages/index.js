import Head from "next/head";


import Table from "../Components/Table";
import Card from "../Components/Card";



export default function Home() {

  return (
    <div className="z-0">
      

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
        <Table />
      </div>
     
    </div>
  );
}
