import React from 'react'

function Skeleton({skl}) {
  return (
    <div className='animate-pulse'>
        <div className={`bg-gray-300 rounded-md ${skl}`}></div>

    </div>
  )
}

export default Skeleton