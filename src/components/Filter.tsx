import { FilterIcon } from "lucide-react";
import { expenseCategories, availableMonths } from "../data/mockData"
import { useState } from "react";

const months = [...availableMonths, "All"]
const categories = [...expenseCategories, "All"]

interface FilterProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    selectedMonth: string;
    selectedCategory: string;
}

function Filter({handleSubmit, selectedMonth, selectedCategory}: FilterProps) {
    const [showForm, setShowForm] = useState(false)

    const handleFromSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        handleSubmit(event)
        setShowForm(false)
    }

    return (
        <>
            {!showForm &&
                <button 
                    className="flex justify-between items-center bg-blue-400 border-blue-900 border px-1 rounded w-18 text-sm font-medium" 
                    onClick={() => setShowForm(true)}
                >
                    Filters <FilterIcon fill="blue" size="16"/>
                </button>
            }
            {showForm &&
                <form method="post" onSubmit={handleFromSubmit} className="absolute top-0 right-0 flex flex-col align-left bg-slate-200 opacity-95 p-4 rounded shadow z-20">
                    <h1>Filters</h1>
                    <label htmlFor="month" className="text-gray-700 text-sm mt-2">Select a month:</label>
                    <select name="month" id="month" defaultValue={selectedMonth} className="text-sm border border-gray-400 rounded">
                        {months.map(month => <option key={month} value={month}>{month}</option>)}
                    </select>
                    <label htmlFor="month" className="text-gray-700 text-sm mt-2">Select a category:</label>
                    <select name="category" id="category" defaultValue={selectedCategory} className="text-sm border border-gray-400 rounded">
                        {categories.map(category => <option key={category} value={category}>{category}</option>)}
                    </select>
                    <button type="submit" className="bg-blue-400 rounded font-bold text-sm mt-2">Apply filters</button>
                </form>
            }
        </>
    )
}

export default Filter;