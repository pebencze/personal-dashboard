interface PaginationProps {
    itemsPerPage: number;
    totalItems: number;
    currentItem: number;
    setCurrentItem: (item: number) => void;
}

const Pagination = (
    {itemsPerPage, 
    totalItems,
    currentItem,
    setCurrentItem}: PaginationProps) => {

    const pageCount = Math.ceil(totalItems / itemsPerPage);
    const pageNumbers = [];

    for (let i = 1; i <= pageCount; i++) {
        pageNumbers.push(i);
    }

    function handlePagination(event: React.MouseEvent<HTMLAnchorElement>, number: number) {
        event.preventDefault();
        setCurrentItem(number);
    }

    return (
        <nav>
            <ul className="flex gap-2 mt-8">
                {pageNumbers.map(number => {
                    return (
                        <li key={number} className={`${number === currentItem ? "bg-indigo-500" : "bg-white"} rounded border border-indigo-500 px-2`}>
                            <a  onClick={(e) => handlePagination(e, number)}
                                href="!#" 
                                className={number === currentItem ? "text-white" : "text-indigo-500"}
                            >
                                {number}
                            </a>
                        </li>
                    )
                })}
            </ul>
            <p className="mt-4">Page <span className="text-indigo-500">{currentItem}</span> of {pageCount}.</p>
        </nav>
    )
}

export default Pagination;