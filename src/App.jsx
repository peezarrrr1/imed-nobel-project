import { useState } from 'react'
import './App.css'
import Header from './Component/Header'
import Filters from './Component/Filters'
import Details from './Component/Details'
function App() {
  const [count, setCount] = useState(0)

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
