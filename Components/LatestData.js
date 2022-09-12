import React from 'react'



function LatestData() {

    return (<>


        
            <div className='idk   w-full flex flex-row py-2 text-xs '
            >
                <div className='flex'>
                    <span className='pl-4 ' >Coins:&nbsp;</span>
                    <span className='text-sky-600'>13,142</span>
                </div>
                 <div className='flex'>
                    <span className='pl-4'>Market&nbsp;Cap:&nbsp;</span>
                    <span className='text-sky-600'>$1,100.27 B USD</span>
                </div>
                <div className='flex'>
                    <span className='pl-4'>24H&nbsp;:Change:&nbsp;</span>
                    <span className='text-sky-600'>+0.30%</span>
                </div>
               
                <div className='flex'>
                    <span className='pl-4'  >24H&nbsp;Volume:&nbsp;</span>
                    <span className='text-sky-600'>$77.1 B USD</span>
                </div>
                <div className='flex'>
                    <span className='pl-4'>Dominance:&nbsp;</span>
                    <span className='text-sky-600'>BTC:&nbsp;37.14%&nbsp;,ETH:&nbsp;19.13%</span>
                </div>
                <div className='flex'>
                    <span className='pl-4'>ETH&nbsp;Gas:&nbsp;</span>
                    <span className='text-sky-600'>13&nbsp;Gwei</span>
                </div>
            </div>


      

    </>
    )
}

export default LatestData



