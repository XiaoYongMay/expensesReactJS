import { useEffect, useState } from 'react'
import './App.css'
import MyButton from './components/buttonExample'
import { MyChart } from './components/chart'
import InputExpense from './components/input'

export interface ChartData{
  name: string
  price: number
  fill: string
}

function App() {
  
  let chartData: Array<ChartData> = [
    { name: "食物", price: 600.0, fill: "var(--color-chrome)" },
    { name: "衣服", price: 300.0, fill: "var(--color-safari)" },
    { name: "出行", price: 300.0, fill: "var(--color-firefox)" },
    { name: "住房", price: 1700.0, fill: "var(--color-edge" },
    
  ]
  const [chart,setChart] =useState<Array<ChartData>>(chartData)

  const [count, setCount] = useState(0)

  function SaveExpense(expense: string, price: number) {
    const newExpense: ChartData = {name: expense, price: price, fill: "val(--primary)"}
    chart.push(newExpense)
    setChart([...chart,newExpense])
  }


  return (
    <>
      <div className='main-content'>
        <div className='container '>
          <MyChart chartData={chart} />

        </div>
        <div className='container'>
          <InputExpense saveExpense={SaveExpense} />
        </div>
      </div>
    </>
  )
}

export default App
