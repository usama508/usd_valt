/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
{/*import React from 'react'
import {RiArrowLeftRightLine} from 'react-icons/ri'

const style={
    convertor:'flex items-center justify-between bg-[#171924] border border-gray-500/10 px-5 py-5 rounded-xl',
    convertButton:'bg-[#1d4ed8] p-2 px-5w-min rounded-xl mt-5  cursor-pointer hover:opacity-60'
}

const PriceConvertor=({
     from,
    to,
    fromSymbol,
    toSymbol,
    fromLogo,
    toLogo,
    price,
}) =>{
    const coinIcon = ({filteredCoins})=>{
        filteredCoins.map((coin)=>(
            <img width={22} src={coin.image} />
        ))

    }
}
   
  return (
    <>
   
    <div>
        <h2>
            {fromSymbol} to {toSymbol} Convertor
        </h2>
        <br/>
        <div className={style.convertor}>
            <div>
                <div className='flex'>
                    <div className='avatar-container'>
                        {fromLogo && fromLogo ? filteredCoins : <div></div>} 

                    </div>
                    &nbsp; &nbsp;
                    <div>
                        <p>{fromSymbol}</p>
                        <h4>{from}</h4>
                    </div>

                </div>
            </div>
            <div className='flex'>
                <p className='text-3xl'>1</p>
                &nbsp;&nbsp;
                <div>
                    <RiArrowLeftRightLine/>

                </div>
                &nbsp;&nbsp;
                <div className='flex'>
                    {toLogo}
                    &nbsp; &nbsp;
                    <div>
                        <p>{toSymbol}</p>
                        <h4>{to}</h4>
                    </div>

                </div>

            </div>
            <p className='text-3xl'>${price}</p>

        </div>
        <div className={styles.convertButton}>Convert</div>
    </div>
    
    
    </>
  )
}

export default PriceConvertor*/}



import React from 'react'
import {RiArrowLeftRightLine} from 'react-icons/ri'
import {useState} from 'react'




const styles = {
  converter: `flex items-center justify-between bg-sky-900 border border-gray-500 px-3 py-5 rounded-xl`,
  convertButton: `  rounded-xl  cursor-pointer hover:opacity-60`,
}

const CMCpriceConverter = ({
  from,
  to,
  fromSymbol,
  toSymbol,
  fromLogo,
  toLogo,
  price,
}) => {
  const [bitprice,setBitprice] = useState('')
  console.log(bitprice * price)

 

 

  return (
    <div>
      <h2>
        {fromSymbol} to {toSymbol} Converter
      </h2>
      <br />
      <div className={styles.converter}>
        <div>
          <div className='flex items-center'>
            <div className='flex items-center'>
              <div>
              <img src={fromLogo}  className="w-12 rounded-full lg:w-8 "/>
            </div>
            
            &nbsp; &nbsp;
            
            <div>

              
             
              <p>{fromSymbol}</p>
              <h4>{from}</h4>
            </div>
            </div>
          </div>
        </div>

        <div className='flex w-2/4 items-center justify-between'>
         <input className='text-left ml-4 outline-none justify-between bg-sky-900' placeholder='0'  onChange={(e)=>{setBitprice(e.target.value)}}>
            
          </input>
          
           
      
         
          &nbsp;&nbsp; 
          <div className='flex text-left' >
          <RiArrowLeftRightLine  />
          </div>
          &nbsp;&nbsp;
          <div className='flex'>
            {toLogo}
            &nbsp; &nbsp;
            <div className='flex flex-col  lg:w-1/5 ml-3' >
              <span className='text-xs '>{toSymbol}</span>
              <span className='font-semibold whitespace-nowrap'>{to}</span>
            </div>
          </div>
        </div>

        <p className='text-3xl'>${bitprice * price}</p>
       
      </div>


    
    </div>
  )
}

export default CMCpriceConverter