import { useEffect, useState } from 'react'
import './App.css'
import MyButton from './components/buttonExample'
import { MyChart } from './components/chart'
import InputExpense from './components/input'
import { ExpensesTable } from './components/ExpensesTable'


export interface ChartData {
  name: string
  price: number
  fill: string
}

function App() {

  let chartData: Array<ChartData> = []

  const [chart, setChart] = useState<Array<ChartData>>(chartData)
  const [storeColor,setStoreColor] =useState('var(--color-primary)')

  function SaveExpense(expense: string, price: number) {
    const newExpense: ChartData = { name: expense, price: price, fill: storeColor }
    setChart([...chart, newExpense])
    
  }


  return (
    <>
      <div className='main-content'>
        <div className='container '>
          <MyChart chartData={chart} />

        </div>
        <div className='container'>
          <InputExpense saveExpense={SaveExpense} setColor={setStoreColor} />
          
          <ExpensesTable expenses={chart} />
        </div>
      </div>
    </>
  )
}

export default App
