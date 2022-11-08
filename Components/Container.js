import React from 'react'
import Card from './Card'




function Container() {
  return (
    <div className='bg-gradient-to-r  from-gray-100 to-gray-50 h-full'>
       {/* <div className='px-8 py-1'>
            <p className='text-gray-500 text-lg'>
               Elrond
            </p>
            <p className='font-bold text-2xl  transform -translate-y-2'>
                Hei!
            </p>
<div className=''>
  </div>*/}

  <div className='space-x-6 md:flex md:justify-center md:items-center p-7'>
        
           <Card title="Trending" balance={409.0790} icon={0} /> 
           <Card title="AVAILABLE" balance={300.0790} icon={1}/> 
           <Card title="CLAIMABLE REWARD" balance={100.0790} icon={2} /> 
           <Card title="DELEGATED" balance={339.0790} icon={3}/> 
</div>
       
        
        
    </div>
  )
}

export default Container