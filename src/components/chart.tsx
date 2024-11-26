"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { ChartData } from "@/App"


const chartConfig = {
  price: {
    label: "Price",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
  secondary: {
    label: "Secondary",
    color: "hsl(var(--secondary))"
  },
  blue: { // 给颜色变量命名 example var(--color-blue)
    label: "Blue", // 给颜色变量命名
    color: "#0ea5e9" // 给颜色变量命名

  },
  green:{
    label:"Green",
    color:"green"
  },
  yellow:{
    label:"Yellow",
    color:"yellow"
  }
} satisfies ChartConfig


interface ChartDataProps {
  chartData: Array<ChartData>
}

const colors: Array<string> = [
  "var(--color-primary)", // 0 => colorIndex
  "var(--color-secondary)", // 1
  "var(--color-blue)", // 2
  "var(--color-green)", // 3
  "var(--color-yellow)", // 4
]

export function MyChart({ chartData }: ChartDataProps) {
  const [totalVisitors, setTotalVisitors] = React.useState(0)
  const [newData, setNewData] = React.useState<Array<ChartData>>([])

  React.useEffect(() => {
    const total = chartData.reduce((previous, current) => previous + current.price, 0)
    setTotalVisitors(total)
   

    const newData: Array<ChartData> = []
    chartData.forEach((item) => {
      const expenseIndex = newData.findIndex(data => data.name === item.name)

      if (expenseIndex !== -1) {
        // if expense already exists no need add new color
        //如果费用存在不需要添加新的颜色
        newData[expenseIndex].price += item.price
      } else {
        // if expense does not exists add color and increment color index
        //如果费用不存在添加新的颜色和增加颜色索引 
       
        newData.push({
          name: item.name,
          price: item.price,
          fill:item.fill
        })
      }

    })

    setNewData(newData)

  }, [chartData])


  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>每年开支费用</CardTitle>
        <CardDescription>2024/1</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={newData}
              dataKey="price"
              nameKey="name"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          ¥{totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          花费
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          每个月开支 <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  )
}
