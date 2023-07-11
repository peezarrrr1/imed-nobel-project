import React from 'react'
import Header from './Component/Header'
import Filters from './Component/Filters'
import Details from './Component/Details'



function App() {
  
  return (
    <div>
    
    <Header />
    <div className='flex flex-row' >
    <Filters />
    <Details />
    
    </div>
    </div>
  )
}

export default App
