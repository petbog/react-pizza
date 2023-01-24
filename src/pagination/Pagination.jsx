import ReactPaginate from 'react-paginate'
import classes from './Pagination.module.css'


const Pagination = ({onChangePage}) => {
    return (
        <>
            <ReactPaginate
                className={classes.Pagination}
                breakLabel="..."
                nextLabel=">"
                onPageChange={e => { onChangePage(e.selected + 1 )}}
                pageRangeDisplayed={3}
                pageCount={4}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </>
    )
}

export default Pagination