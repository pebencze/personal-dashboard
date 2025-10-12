import React from 'react';
import { transactions }from '../data/mockData'
import TransactionsTable from './TransactionsTable';
import Card from './Card';

const MainContent = React.forwardRef<HTMLDivElement>((props, ref) => {
    return(
        <div ref={ref} className="p-4 w-screen bg-slate-100">
            <h1 className="text-3xl mb-4">Personal Finance Tracker</h1>
            <Card title="Transactions" 
                children={<TransactionsTable transactions={transactions}/>}
            />
        </div>
    )
})

export default MainContent