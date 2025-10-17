import type { ExpenseCategory } from "../types/types";
import CategoryCard from "./CategoryCard";
import { CircularProgress } from '@mui/material';

function CategoryTable({categories} : {categories: ExpenseCategory[]}) {
    return (
       <table className="w-full text-left">
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Budget</th>
                    <th>Amount spent</th>
                    <th>Amount left</th>
                    <th>Budget used in %</th>
                </tr>
            </thead>
            <tbody>
                {categories.map((category, index) => {
                    const progressInPercent = category.amountSpent === 0 ? 0 : ((category.amountSpent + Number.EPSILON) / category.budget) * 100
                    const color = category.amountLeft < 0 ? 'error' : category.amountLeft == 0 ? 'info' : 'success'

                    return (
                        <tr key={index} className='border-y border-slate-200 hover:bg-blue-100'>
                            <td>{<CategoryCard category={category.category}/>}</td>
                            <td>{category.budget}</td>
                            <td>{category.amountSpent}</td>
                            <td>{category.amountLeft}</td>
                            <td>{
                                <div className="relative inline-flex items-center justify-center py-2">
                                    <CircularProgress 
                                        variant="determinate" 
                                        value={progressInPercent < 100 ? progressInPercent : 100}
                                        color={color}
                                        size={50}/>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-gray-600 text-xs">{`${Math.round(progressInPercent)}`}</span>
                                    </div>
                                    </div>
                            }</td>                  
                        </tr>
                    )}
                )}
            </tbody>
        </table>
    );
}

export default CategoryTable