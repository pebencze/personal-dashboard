import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { categoryColorsHex, defaultColorHex } from '../lib/categoryColors'
import type { ExpenseCategory } from '../types/types'

function CategoryPieChart({categories} : {categories: ExpenseCategory[]}) {

  const getChartData =(expenseItems: ExpenseCategory[]) => {
    let data: { name: string; amountSpent: number; fill: string }[] = []
    expenseItems.forEach((item) => {
      data.push({
        name: item.category,
        amountSpent: Math.abs(item.amountSpent),
        fill: categoryColorsHex.get(item.category) || defaultColorHex
      })
    })
    return data
  }

  const chartData = getChartData(categories)
  console.log(chartData)

  return (
    <ResponsiveContainer width="100%" height="100%">
        <PieChart>
            <Pie data={chartData} 
                    dataKey="amountSpent"
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    fill={defaultColorHex}
                    label/>
            <Tooltip />
        </PieChart>
    </ResponsiveContainer>
  )
}

export default CategoryPieChart