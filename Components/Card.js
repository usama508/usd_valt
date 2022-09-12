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


        <div className={`transform hover:scale-110 cursor-pointer transition delay-100 w-3/12 p-2 py-4 shadow-xl border rounded-xl
                    bg-gradient-to-r ${Color[props.icon]}`}>
          <div className="flex justify-between">
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