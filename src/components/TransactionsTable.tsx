import { useState, useEffect } from 'react';
import { ArrowUpDown, ArrowDownUp } from 'lucide-react';
import CategoryCard from './CategoryCard';
import type { Transaction } from '../types/types';

function TransactionsTable({transactions}: {transactions: Transaction[]}) {
    const [sorted, setSorted] = useState(transactions)
    const [isAscendingAmount, setIsAscendingAmount] = useState(false)
    const [isAscendingDate, setIsAscendingDate] = useState(false)

    useEffect(() => {
      setSorted(transactions);
    }, [transactions]);

    const handleSort = (columnName: string) => {
        const listData = [...sorted]
        if (columnName === 'date'){
            if (isAscendingDate) {
                listData.sort((a, b) => a.date.localeCompare(b.date))
            } else {
                listData.sort((a, b) => b.date.localeCompare(a.date))
            }
            setIsAscendingDate(!isAscendingDate)
        } 
        if (columnName === 'amount') {
            if (isAscendingAmount) {
                listData.sort((a, b) => a.amount - b.amount)
            } else {
                listData.sort((a, b) => b.amount - a.amount)
            }
            setIsAscendingAmount(!isAscendingAmount)
        }
        setSorted(listData)
        console.log("rerender")
    }

    return (
       <table className="w-full text-left">
            <thead>
                <tr>
                    <th onClick={() => handleSort("date")}
                        className="flex gap-2">
                        Date
                        {isAscendingAmount ? <ArrowDownUp className="w-4" /> : <ArrowUpDown className="w-4" />}
                    </th>
                    <th>Description</th>
                    <th>Category</th>
                    <th onClick={() => handleSort("amount")} 
                        className="flex gap-2">
                        Amount
                        {isAscendingAmount ? <ArrowDownUp className="w-4" /> : <ArrowUpDown className="w-4" />}
                    </th>
                </tr>
            </thead>
            <tbody>
                {sorted.map((transaction) =>
                    <tr key={transaction.id} className='border-y border-slate-200 hover:bg-blue-100'>
                        <td>{transaction.date}</td>
                        <td>{transaction.description}</td>
                        <td>{<CategoryCard category={transaction.category}/>}</td>
                        <td className={transaction.amount < 0 ? 'text-blue-500' : 'text-emerald-500'}>{transaction.amount}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default TransactionsTable;
