import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaGasPump, FaStar } from "react-icons/fa";

function LatestData() {
  return (
      <div className="lg:order-1 flex bg-gray-100 items-center px-4 lg:px-3 h-10 py-2 justify-between lg:p-7 ">
        <div className="flex text-xs space-x-3 overflow-auto scrollbar-hide items-center dark:opacity-50">
          <span className="flex font-semibold ">
            <span>Coins:</span>
            <a className="text-sky-800   ml-2" href="#">
              13,219
            </a>
          </span>
        
          <span className="flex font-semibold">
            <span>Market&nbsp;Cap:</span>
            <a className="text-sky-800   ml-2" href="#">
              {" "}
              $1,017.06&nbsp;B&nbsp;USD

            </a>
          </span>
          <span className="flex font-semibold ">
            <span>24H&nbsp;Change:</span>
            <a className="text-sky-800   ml-2" href="#">
            +0.44%


            </a>
            </span>
          <span className="flex font-semibold ">
            <span>24H&nbsp;Volume:</span>
            <a className="text-sky-800   ml-2" href="#">
            $49.28&nbsp;B&nbsp;USD

            </a>
          </span>
          <span className="flex  font-semibold">
            <span>Dominance:</span>
            <a className="text-sky-800   ml-2" href="#">
              {" "}
              BTC:&nbsp;37.62%&nbsp;ETH:&nbsp;17.28%
            </a>
          </span>
          <span className="flex items-center font-semibold">
            <FaGasPump className="text-1xl mr-1 " />
            <span>ETH&nbsp;Gas:</span>
            <a
              className="text-sky-800  font-semibold ml-2 flex items-center"
              href="#"
            >
              5&nbsp;Gwei
              <RiArrowDropDownLine className="text-2xl mt-1" />
            </a>
          </span>
        </div>
        </div>
  )
}

export default LatestData
      



