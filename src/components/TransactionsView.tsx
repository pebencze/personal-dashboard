import Card from "./Card"
import Filter from "./Filter"
import TransactionsTable from "./TransactionsTable"
import { useState, useMemo } from 'react'
import { transactions } from '../data/mockData'

function TransactionsView() {
    const [selectedMonth, setSelectedMonth] = useState("All")
    const [selectedCategory, setSelectedCategory] = useState("All")
    const filteredTransactions = useMemo(() => {
        // console.log("re-render")
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

    return (
        <Card title="Transactions" filter={<Filter handleSubmit={handleSubmit} selectedMonth={selectedMonth} selectedCategory={selectedCategory}/>}>
            <TransactionsTable transactions={filteredTransactions} />
        </Card>
    )
}

export default TransactionsView;