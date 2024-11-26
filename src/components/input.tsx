import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react";
import ColorInput from './colorInput'

interface InputExpenseProp {
 saveExpense: (expense: string, price: number) => void
 setColor: (color: string) => void
}

function InputExpense(props:InputExpenseProp) {
  const [price, setPrice] = useState(0)
  const [expense, setExpense] = useState("")

  function AddExpense() {
    // 这是从父组件 App.tsx 调用函数 SaveExpense()
    props.saveExpense(expense, price)

  }
  return (
    <div>
      <Input type="text" placeholder="Expense" value={expense} onChange={(e) => { setExpense(e.target.value) }} />
      <Input type="number" placeholder="Price" value={price} onChange={(e) => { setPrice(Number(e.target.value)) }} />
      <ColorInput changeColor={props.setColor} />
      <Button onClick={() => AddExpense()}>Add Expense</Button>
    </div>
  );
}
export default InputExpense;
