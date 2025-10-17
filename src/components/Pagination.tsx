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

    function handlePagination(event: React.MouseEvent<HTMLButtonElement>, number: number) {
        event.preventDefault();
        setCurrentItem(number);
    }

    return (
        <nav >
            <ul className="flex justify-between">
                {pageNumbers.map(number => {
                    return (
                        <li key={number} className="rounded bg-indigo-500 px-2">
                            <a  onClick={(e) => handlePagination(e, number)}
                                href="!#" 
                                className={number === currentItem ? "text-white underline" : ""}
                            >
                                {number}
                            </a>
                        </li>
                    )
                })}
            </ul>
            Page <span className="text-blue-500">{currentItem}</span> of {pageCount}.
        </nav>
    )
}

export default Pagination;