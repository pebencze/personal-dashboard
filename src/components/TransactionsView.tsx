import Card from "./Card"
import Filter from "./Filter"
import TransactionsTable from "./TransactionsTable"
import { useState, useMemo } from 'react'
import { transactions } from '../data/mockData'

function TransactionsView() {
    const [selectedMonth, setSelectedMonth] = useState("2025-09")
    const filteredTransactions = useMemo(() => {
        // console.log("re-render")
        return transactions.filter(t => t.date.startsWith(selectedMonth));
    }, [selectedMonth])

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setSelectedMonth(event.currentTarget.month.value)
    }

    return (
        <Card title="Transactions" filter={<Filter handleSubmit={handleSubmit} selectedMonth={selectedMonth} />}>
            <TransactionsTable transactions={filteredTransactions} />
        </Card>
    )
}

export default TransactionsView;