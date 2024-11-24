import { useEffect, useState } from 'react'
import './App.css'
import MyButton from './components/buttonExample'
import { MyChart } from './components/chart'
import InputExpense from './components/input'
import { ExpensesTable } from './components/ExpensesTable'
import ColorInput from './components/colorInput'

export interface ChartData {
  name: string
  price: number
  fill: string
}

function App() {

  let chartData: Array<ChartData> = []


  const [chart, setChart] = useState<Array<ChartData>>(chartData)

  const [count, setCount] = useState(0)


  const [colorIndex, setColorIndex] = useState(0)
  function SaveExpense(expense: string, price: number) {
    const newExpense: ChartData = { name: expense, price: price, fill: "" }

    setColorIndex((colorIndex) => colorIndex + 1)
    setChart([...chart, newExpense])

  }

  function DeleteExpense() { }


  return (
    <>
      <div className='main-content'>
        <div className='container '>
          <MyChart chartData={chart} />

        </div>
        <div className='container'>
          <InputExpense saveExpense={SaveExpense} />
          <ColorInput />
          <ExpensesTable expenses={chart} />
        </div>
      </div>
    </>
  )
}

export default App
