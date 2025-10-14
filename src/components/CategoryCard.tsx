import { categoryColors } from "../lib/categoryColors";

function CategoryCard({category}: {category: string}){
    const defaultColor =  "slate-300"
    const color = categoryColors.get(category) || defaultColor

    return (
        <div className={`bg-${color} rounded-4xl w-max px-2 my-1 `}>
            {category}
        </div>
    )
}

export default CategoryCard;