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
  const [table,setTable] = useState<Array<ChartData>>(chartData)

  const [chart, setChart] = useState<Array<ChartData>>(chartData)

  const [count, setCount] = useState(0)

  const colors: Array<string> = [
    "var(--color-primary)",
    "var(--color-secondary)",
    "var(--color-blue)",
    "var(--color-green)",
    "var(--color-yellow)",
  ]
  const [colorIndex, setColorIndex] = useState(0)
  function SaveExpense(expense: string, price: number) {
    const expenseIndex = chart.findIndex(chartExpense => chartExpense.name == expense)
    const newColors: string = colors[colorIndex]
    const newExpense: ChartData = { name: expense, price: price, fill: newColors }
    
    
    //如果存在费用，更新价格
    if (expenseIndex !== -1) {
      const updatedChart = [...chart]
      updatedChart[expenseIndex].price += price
      setChart(updatedChart)
    } else {
      // 如果费用不存在，添加到列表中
      setColorIndex((colorIndex) => colorIndex + 1)
      setChart([...chart, newExpense])
    }
    setTable([...table,newExpense])
  }

  function DeleteExpense(){}


  return (
    <>
      <div className='main-content'>
        <div className='container '>
          <MyChart chartData={chart} />

        </div>
        <div className='container'>
          <InputExpense saveExpense={SaveExpense} />
          <ExpensesTable expenses={table} />
        </div>
      </div>
    </>
  )
}

export default App
