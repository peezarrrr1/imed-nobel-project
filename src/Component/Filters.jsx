import React, { useRef, useState } from 'react'
import { Select } from 'antd';
import { Button} from 'antd';
import axios from 'axios'


function Filters(props) {

  const [currentyear, setCurrentYear] = useState(new Date().getFullYear());
  let years = [];
    for(let i = new Date().getFullYear();i >= 1901;i--){
      years.push(i);
      
    }
    
  let awardYearSorted = years.map((result,index)=>{
    return { value: result , label : result}
  })
 
  // const [yearSelect, take] = useState([]);
  const getData = async (currentyear) =>{
    const response = await axios.get(`https://api.nobelprize.org/2.1/nobelPrizes?nobelPrizeYear=${currentyear}`)
    
   props.setDetailList(response.data.nobelPrizes);
   
   props.setYear(currentyear);
  }
  

  
  
 
  return (
    <div className='p-5'>
        <div className='bg-blue-400 w-96 h-screen flex justify-center items-center'>
       
    <Select
      defaultValue={currentyear}
      style={{
        width: 120,
      }}
      onChange={(result) => setCurrentYear(result)}
      options={
       awardYearSorted
      }
    />
    <Button className='bg-green-500' onClick={() => getData(currentyear)}>Apply</Button>
        </div>
       
        </div>
  )
}

export default Filters