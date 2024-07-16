import usePaginate from '../../Hooks/usePaginate'
import { Pagination } from 'react-bootstrap'
import styles from './Pagination.module.css'

const PaginationComponent = () => {
    const { filteredProducts, itemsPerPage, paginate, currentPage, totalPages } = usePaginate()
    return (
        <Pagination className='container d-flex justify-content-center gap-2 p-2'>
            <Pagination.Prev
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1 || totalPages.length === 0}
            />
            {
                totalPages.length === 0 ? <Pagination.Item disabled>0</Pagination.Item> :
                    totalPages.map(page => (
                        <Pagination.Item
                            key={page}
                            active={page === currentPage}
                            onClick={() => paginate(page)}
                        >
                            {page}
                        </Pagination.Item>
                    ))
            }
            <Pagination.Next
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === Math.ceil(filteredProducts.length / itemsPerPage) || totalPages.length === 0}
            />
        </Pagination>
    )
}

export default PaginationComponent