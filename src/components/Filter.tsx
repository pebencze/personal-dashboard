import { FilterIcon } from "lucide-react";
import { useState } from "react";

interface FilterProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    handleClear: (event: React.MouseEvent<HTMLFormElement>) => void;
    filterOptions: FilterOption[];
}

export interface FilterOption {
    values: string[], //months
    defaultValue: string, //selectedMonth, selectedCategory
    name: string, //month
    label: string, //Select a month:
}

function Filter({handleSubmit, handleClear, filterOptions}: FilterProps) {
    const [showForm, setShowForm] = useState(false)

    const handleFromSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        handleSubmit(event)
        setShowForm(false)
    }

    const handleClearFilters = (event: React.MouseEvent<HTMLFormElement>) => {
        handleClear(event)
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
                <form method="post" onSubmit={handleFromSubmit} onReset={handleClearFilters} className="absolute top-0 right-0 flex flex-col align-left bg-slate-200 opacity-95 p-4 rounded shadow z-20">
                    <h1>Filters</h1>
                    {filterOptions.map(filterOption => {
                        const {values, defaultValue, name, label} = filterOption
                        return (
                            <>
                                <label htmlFor={name} className="text-gray-700 text-sm mt-2">{label}</label>
                                <select name={name} id={name} defaultValue={defaultValue} className="text-sm border border-gray-400 rounded">
                                    {values.map(value => <option key={value} value={value}>{value}</option>)}
                                </select>
                            </>
                        )}
                    )}
                    <button type="submit" className="bg-blue-400 rounded font-bold text-sm mt-2">Apply filters</button>
                    <button type="reset" className="bg-blue-400 rounded font-bold text-sm mt-2">Clear filters</button>
                </form>
            }
        </>
    )
}

export default Filter;