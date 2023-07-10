import React from 'react'

function Filters() {
  return (
    <div className='p-5'>
        <div className='bg-blue-400 w-96 h-screen flex justify-center items-center'>
        <label For="year" className='block mb-3 text-xl text-black'>Year</label>
        <select  id="year" className='bg-green-300 border border-white text-black text-xl round-lg focus:border-red-500 block w-full p.2.5 w-2/5'>
            <option selected> Choose Year</option>
            <option value="1">1999</option>
            <option value="2">2000</option>
            <option value="3">2001</option>
            <option value="4">2002</option>
            </select>

        </div>
       
        </div>
  )
}

export default Filters