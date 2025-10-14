import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { categoryColorsHex, defaultColorHex } from '../lib/categoryColors'
import type { ExpenseCategory } from '../types/types'

const categories = [
  {
    "category": "Groceries",
    "budget": 300,
    "amountSpent": 125.50,
    "amountLeft": "174.50"
  },
  {
    "category": "Entertainment",
    "budget": 200,
    "amountSpent": 240,
    "amountLeft": "-40.00"
  },
  {
    "category": "Health & Fitness",
    "budget": 100,
    "amountSpent": 73.20,
    "amountLeft": "26.80"
  },
  {
    "category": "Transportation",
    "budget": 100,
    "amountSpent": 117.15,
    "amountLeft": "-17.15"
  },
  {
    "category": "Rent",
    "budget": 600,
    "amountSpent": 500.00,
    "amountLeft": "100.00"
  },
  {
    "category": "Shopping",
    "budget": 150,
    "amountSpent": 200.00,
    "amountLeft": "-50.00"
  },
  {
    "category": "Food & Drinks",
    "budget": 120,
    "amountSpent": 71.00,
    "amountLeft": "49.00"
  },
  {
    "category": "Travel",
    "budget": 300,
    "amountSpent": 250.00,
    "amountLeft": "50.00"
  },
  {
    "category": "Other",
    "budget": 75,
    "amountSpent": 50.00,
    "amountLeft": "25.00"
  }
]

function CategoryPieChart() {

  const getChartData =(categories: ExpenseCategory[]) => {
    let data: { name: string; amountSpent: number; fill: string }[] = []
    categories.forEach((category) => {
      data.push({
        name: category.category,
        amountSpent: category.amountSpent,
        fill: categoryColorsHex.get(category.category) || defaultColorHex
      })
    })
    return data
  }

  const chartData = getChartData(categories)

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