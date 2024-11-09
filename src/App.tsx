import { useState } from 'react'
import './App.css'
import MyButton from './components/buttonExample'
import { MyChart } from './components/chart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='container '>
      <MyChart/>
     </div>
      
    </>
  )
}

export default App
