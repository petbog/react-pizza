import ReactPaginate from 'react-paginate'
import classes from './Pagination.module.css'


const Pagination = ({onChangePage,curentPage}) => {
    return (
        <>
            <ReactPaginate
                className={classes.Pagination}
                breakLabel="..."
                nextLabel=">"
                onPageChange={(event) => { onChangePage(event.selected + 1 )}}
                pageRangeDisplayed={3}
                pageCount={4}
                previousLabel="<"
                renderOnZeroPageCount={null}
                forcePage={curentPage - 1}
            />
        </>
    )
}

export default Pagination