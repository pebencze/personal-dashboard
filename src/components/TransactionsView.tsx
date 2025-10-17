import Card from "./Card"
import Filter from "./Filter"
import TransactionsTable from "./TransactionsTable"
import { useState, useMemo } from 'react'
import { transactions, expenseCategories, availableMonths } from '../data/mockData'
import type { FilterOption } from "./Filter"

const months = [...availableMonths, "All"]
const categories = [...expenseCategories, "All"]

function TransactionsView() {
    const [selectedMonth, setSelectedMonth] = useState("All")
    const [selectedCategory, setSelectedCategory] = useState("All")
    const filteredTransactions = useMemo(() => {
        return transactions.filter(t => {
            return (
                (selectedMonth === "All" || t.date.startsWith(selectedMonth))
                && (selectedCategory === "All" || t.category === selectedCategory)
            )
        });
    }, [selectedMonth, selectedCategory])

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setSelectedMonth(event.currentTarget.month.value)
        setSelectedCategory(event.currentTarget.category.value)
    }

    function handleClear(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setSelectedMonth("All")
        setSelectedCategory("All")
    }

    const filterOptions: FilterOption[] = [
        {
            values: months,
            defaultValue: selectedMonth,
            name: "month",
            label: "Select a month:"
        },
        {
            values: categories,
            defaultValue: selectedCategory,
            name: "category",
            label: "Select a category:"
        },
    ]

    return (
        <Card title="Transactions" filter={<Filter handleSubmit={handleSubmit} handleClear={handleClear} filterOptions={filterOptions}/>}>
            <TransactionsTable transactions={filteredTransactions} />
        </Card>
    )
}

export default TransactionsView;