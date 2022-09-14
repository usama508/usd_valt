import React, {useState} from 'react'

const Latest = () => {
    const [animation, setAnimation] = useState('running')
  return (<>
    {/*<style jsx>{`
        @keyframes example {
            0%   {transform: translate(-50%);}
            100% {transform: translate(100%);}
          }
          
          .idk{
            animation-name: example;
            animation-duration: 15s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
            animation-play-state: ${animation};
          }
        `}</style>*/}
    <div         onMouseEnter={() => setAnimation('paused')}
        onMouseLeave={() => setAnimation('running')} className='border-b overflow-x-hidden'
         >
        <div className='idk   w-full flex flex-row py-2 text-xs'>
            <div className='flex'>
                <span className='pl-4'>Coins:&nbsp;</span>
                <span className='text-sky-600'>13,174</span>
            </div>
            <div className='flex'>
                <span className='pl-4'>Market&nbsp;Cap:&nbsp;</span>
                <span className='text-sky-600'>$1,046.88 USD</span>
            </div>
            <div className='flex'>
                <span className='pl-4'>24H&nbsp;Change:&nbsp;</span>
                <span className='text-sky-600'>-6.46%</span>
            </div>
            <div className='flex'>
                <span className='pl-4'>24H&nbsp;Volume:&nbsp;</span>
                <span className='text-sky-600'>$98.81 B USD</span>
            </div>
            <div className='flex'>
                <span className='pl-4'>Dominance:&nbsp;</span>
                <span className='text-sky-600'>BTC:&nbsp;37.09%&nbsp;ETH:&nbsp;18.81%</span>
            </div>
            <div className='flex'>
                <span className='pl-4'>ETH&nbsp;Gas:&nbsp;</span>
                <span className='text-sky-600'>8&nbsp;Gwei</span>
            </div>

        </div>
    </div>
    </>
  )
}

export default Latest



