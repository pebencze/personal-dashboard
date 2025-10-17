
import CategoryPieChart from "./CategoryPieChart"
import Card from "./Card"
import { monthlyBudget, expenseCategories } from "../data/mockData"
import type { ExpenseCategory, Transaction } from "../types/types"
import CategoryTable from "./CategoryTable"
import { transactions, availableMonths } from '../data/mockData';
import { useState, useMemo } from "react";
import Filter from "./Filter";
import type { FilterOption } from "./Filter";

function getCategories(transactions: Transaction[]): ExpenseCategory[] {
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
    const defaultMonth = availableMonths[availableMonths.length - 1];
    const [selectedMonth, setSelectedMonth] = useState(defaultMonth)
    const filteredTransactions = useMemo(() => {
        const transactionCopy = [...transactions]
        return transactionCopy.filter(t => t.date.startsWith(selectedMonth))
    }, [selectedMonth])

    const categories = getCategories(filteredTransactions)

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setSelectedMonth(event.currentTarget.month.value)
    }

    function handleClear(event: React.MouseEvent<HTMLFormElement>) {
        event.preventDefault()
        setSelectedMonth(defaultMonth)
    }

    const filterOptions: FilterOption[] = [
        {
            values: availableMonths,
            defaultValue: selectedMonth,
            name: "month",
            label: "Select a month:"
        }
    ]

    return(
        <Card title="Categories" filter={<Filter handleSubmit={handleSubmit} handleClear={handleClear} filterOptions={filterOptions}/>}>
            <CategoryTable categories={categories} />
            <CategoryPieChart categories={categories} />
        </Card>
    )
}

export default CategoryBreakdown