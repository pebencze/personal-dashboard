import React from 'react';
import { transactions }from '../data/mockData'


const MainContent = React.forwardRef<HTMLDivElement>((props, ref) => {

    return(
        <div ref={ref} className="p-4 w-screen bg-slate-100">
            <h1 className="text-3xl mb-4" >Personal Finance Tracker</h1>
            <div className="bg-white w-full h-screen rounded-lg shadow p-4">
                <h2 className="font-bold text-lg mb-4">Transactions</h2>
                <table className="w-full text-left">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction) =>
                            <tr key={transaction.id}>
                                <td>{transaction.date}</td>
                                <td>{transaction.description}</td>
                                <td>{transaction.category}</td>
                                <td>{transaction.amount}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
})

export default MainContent