import React, { useState } from 'react'


function Details(props) {
    console.log(props.nobelPrizeDetailList)
   
  return (
    <div className='p-5'>
        <div className='bg-gray-300 w-screen h-screen text-3xl'>
            Details
        </div>
        {props.nobelPrizeDetailList.map((nobelPrizeDetail) => {
          
        })}
    </div>
  )
}

export default Details