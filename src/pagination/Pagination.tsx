import ReactPaginate from 'react-paginate'
import classes from './Pagination.module.css'

type PaginationProps = {
    onChangePage:(page:number) => void ;
    curentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ onChangePage, curentPage }) => {
    return (
        <>
            <ReactPaginate
                className={classes.Pagination}
                breakLabel="..."
                nextLabel=">"
                onPageChange={(event) => { onChangePage(event.selected + 1) }}
                pageRangeDisplayed={3}
                pageCount={4}
                previousLabel="<"
                forcePage={curentPage - 1}
            />
        </>
    )
}

export default Pagination