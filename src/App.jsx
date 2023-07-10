import { useState } from 'react'
import './App.css'
import Header from './Component/Header'
import Filters from './Component/Filters'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
   
    <Header />
    <div>
    <Filters />
    </div>
    </div>
  )
}

export default App
