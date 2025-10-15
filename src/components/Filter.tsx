

const availableMonths = ["2025-08", "2025-09", "2025-10"]

interface FilterProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    selectedMonth: string;
}

function Filter({handleSubmit, selectedMonth}: FilterProps) {
    return (
        <form method="post" onSubmit={handleSubmit}>
                <label htmlFor="month">Select a month:</label>
                <select name="month" id="month" defaultValue={selectedMonth}>
                    {availableMonths.map(month => <option key={month} value={month}>{month}</option>)}
                </select>
                <button type="submit">Apply filter</button>
        </form>
    )
}

export default Filter;