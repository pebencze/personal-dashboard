import type { Transaction } from '../types/types';
import { useState } from 'react';
import { ArrowUpDown, ArrowDownUp } from 'lucide-react';

interface TransactionsTableProps {
    transactions: Transaction[];
}

function TransactionsTable({ transactions }: TransactionsTableProps) {
    // const amounts = transactions.map((transaction) => transaction.amount)
    const [sorted, setSorted] = useState(transactions)
    const [isAscending, setIsAscending] = useState(false)

    const handleSort = () => {
        const listData = [...sorted]
        if (isAscending) {
            listData.sort((a, b) => a.amount - b.amount)
        } else {
            listData.sort((a, b) => b.amount - a.amount)
        }
        setSorted(listData)
        setIsAscending(!isAscending)
    }

    return (
       <table className="w-full text-left">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th 
                        onClick={handleSort} 
                        className="flex gap-2">
                        Amount
                        {isAscending ? <ArrowDownUp className="w-4" /> : <ArrowUpDown className="w-4" />}
                    </th>
                </tr>
            </thead>
            <tbody>
                {sorted.map((transaction) =>
                    <tr key={transaction.id} className='border-y border-slate-200 hover:bg-blue-100'>
                        <td>{transaction.date}</td>
                        <td>{transaction.description}</td>
                        <td>{transaction.category}</td>
                        <td className={transaction.amount < 0 ? 'text-blue-500' : 'text-emerald-500'}>{transaction.amount}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default TransactionsTable;
