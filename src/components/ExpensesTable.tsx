import { ChartData } from "@/App"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useEffect, useState } from "react"
  
interface ExpensesTableProps{
    expenses:Array<ChartData>
    
}

export function ExpensesTable({expenses}:ExpensesTableProps) {
  const [totalVisitors, setTotalVisitors] = useState(0)

  useEffect(() => {
    const total = expenses.reduce((acc, curr) => acc + curr.price, 0)
    setTotalVisitors(total)
  }, [expenses])
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Expense</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {expenses.map((expense, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{expense.name}</TableCell>
            <TableCell className="text-right">{expense.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">{totalVisitors.toLocaleString()}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
