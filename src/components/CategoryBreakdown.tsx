
import CategoryPieChart from "./CategoryPieChart"
import Card from "./Card"
import { transactions, monthlyBudget, expenseCategories } from "../data/mockData"
import type { ExpenseCategory, Transaction } from "../types/types"
import CategoryTable from "./CategoryTable"

function getCategories(): ExpenseCategory[] {
    let spendingsPerCategory = new Map<string, number>()
    
    transactions
    .filter((transaction: Transaction) => transaction.amount < 0)
    .forEach((transaction: Transaction) => {
        let category = transaction.category
        if (!expenseCategories.includes(category)) {
            category = "Other"
        }
        const previousAmount = spendingsPerCategory.get(category) || 0
        spendingsPerCategory.set(category, previousAmount + transaction.amount) 
    })
    
    const expenseCategoriesData: ExpenseCategory[] = expenseCategories.map(category => {
        const budget = monthlyBudget[category] || 0
        const amountSpent = Math.abs(spendingsPerCategory.get(category) || 0)
        const amountLeft = budget - amountSpent
        
        return {
            category,
            budget,
            amountSpent,
            amountLeft,
        }
    })

    return expenseCategoriesData
}

function CategoryBreakdown(){
    const categories = getCategories()
    console.log(categories)

    return(
        <Card title="Categories">
            <CategoryTable categories={categories} />
            <CategoryPieChart categories={categories} />
        </Card>
    )
}

export default CategoryBreakdown