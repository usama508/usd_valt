/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { MdAllOut } from 'react-icons/md';
import { MdDone } from 'react-icons/md';
import { MdEco } from 'react-icons/md';
import { AiFillLock } from 'react-icons/ai';

const Style = "text-white text-xs"

const arrayIcon = [<MdAllOut fontSize="small" className={Style} />, <MdDone fontSize="small" className={Style} />,
<MdEco fontSize="small" className={Style} />, <AiFillLock fontSize="small" className={Style} />]
const Color = ["from-indigo-500 to-blue-500", "from-blue-400 to-blue-300", "from-sky-500 to-sky-400", "from-cyan-600 to-cyan-500"]




function Card(props) {
  var balance = props.balance
  balance = balance * 9.5;

  return (
    <>


        <div className={`transform  z-0 w-full  m-2 hover:scale-110 cursor-pointer transition delay-100  p-2 py-4 shadow-xl border rounded-xl
                    bg-gradient-to-r ${Color[props.icon]}`}>
          <div className="flex justify-between rounded-md drop-shadow-md ">
            <div className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-xl m-1 bg-opacity-30">
              {arrayIcon[props.icon]}

            </div>

          </div>
          <p className="text-gray-200 text-xs">
            {props.title}

          </p>
          <p className="text-gray-50 text-lg font-semibold">
            {props.balance} EGLD

          </p>
          <p className="text-gray-300 text-sm">
            ${balance}

          </p>




        </div>
     
    </>
  )

}



export default Card;



{/*function Card({heading, desc}) {
  return (
  <div className="z-0 w-full m-2">
    <div className="rounded-md drop-shadow-md border border-gray-300 p-5">
      <div >
        <h2 className="text-lg font-semibold tracking-wide">
          {heading}

        </h2>

      </div>
      
      <ul className="list-decimal ml-10">
        <li className="text-base">
          <span className="font-semibold">
            PanCackSwap

          </span>

        </li>

        <li className="text-base">
          <span className="font-semibold">
          Etherem

          </span>

        </li>

        <li className="text-base">
          <span className="font-semibold">
            sahiba Inu

          </span>

        </li>
      </ul>

    </div>

  </div>
  )
}

export default Card*/}