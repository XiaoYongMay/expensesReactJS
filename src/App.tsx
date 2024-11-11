import { useState } from 'react'
import './App.css'
import MyButton from './components/buttonExample'
import { MyChart } from './components/chart'
import InputExpense from './components/input'

function App() {
  const [count, setCount] = useState(0)
  function SaveExpense(expense: string, price: number) {
    console.log(expense);
    console.log(price)

  }

  return (
    <>
      <div className='main-content'>
        <div className='container '>
          <MyChart />

        </div>
        <div className='container'>
          <InputExpense saveExpense={SaveExpense} />
        </div>
      </div>
    </>
  )
}

export default App
