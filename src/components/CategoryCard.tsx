const categoryColors = new Map([
    ["Groceries", "bg-fuchsia-300"],
    ["Entertainment", "bg-cyan-300"],
    ["Income", "bg-emerald-300"],
    ["Health & Fitness", "bg-pink-300"],
    ["Shopping", "bg-orange-300"],
    ["Food & Drinks", "bg-yellow-300"],
    ["Transportation", "bg-indigo-300"],
    ["Rent", "bg-red-300"],
    ["Other", "bg-slate-300"]
]);

function CategoryCard({category}: {category: string}){
    const defaultColor = "bg-slate-300"
    const color = categoryColors.get(category) || defaultColor

    return (
        <div className={`${color} rounded-4xl w-max px-2 my-1 `}>
            {category}
        </div>
    )
}

export default CategoryCard;