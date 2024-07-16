import styles from './PaginationTest.module.css'
import { useProductsContext } from '../../contexts/Products'
import { useFilter } from '../../Hooks/useFilter'
import Filter from '../../components/Filter/Index'
import AlertMessage from '../../components/AlertMessage/Index'
import ProductCard from '../../components/ProductCard/Index'
import { useEffect, useState } from 'react'
import { Pagination } from 'react-bootstrap'

const PaginationTest = () => {
    const { productsList } = useProductsContext()
    const { selectedCategory, setSelectedCategory, filterProducts, categories, setSearchQuery } = useFilter()
    const filteredProducts = filterProducts(productsList)

    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 12
    const indexOfFirstItem = (currentPage - 1) * itemsPerPage
    const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfFirstItem + itemsPerPage)
    const [totalPages, setTotalPages] = useState([])

    //!Teste 1:
    // const [totalItems, setTotalItems] = useState(0)
    // const [numberOfPages, setNumberOfPages] = useState(0)

    // useEffect(() => {
    //     setTotalItems(filteredProducts.length)
    //     console.log('totalItems:', totalItems)
    // }, [filteredProducts])

    // useEffect(() => {
    //     setNumberOfPages(Math.ceil(totalItems / itemsPerPage))
    //     console.log('numberOfPages:', numberOfPages)
    // }, [filteredProducts])

    // useEffect(() => {
    //     setTotalPages(Array.from({ length: numberOfPages }, (_, index) => index + 1))
    // }, [filterProducts])

    // useEffect(() => {
    //     setNumberOfPages(Math.ceil(totalItems / itemsPerPage))
    //     setTotalPages(Array.from({ length: numberOfPages }, (_, index) => index + 1))
    // }, [filteredProducts, itemsPerPage])
    //!Teste 2:
    // useEffect(() => {
    //     const totalItems = filteredProducts.length
    //     const numberOfPages = Math.ceil(totalItems / itemsPerPage)
    //     setTotalPages(Array.from({ length: numberOfPages }, (_, index) => index + 1))
    // }, [filteredProducts, itemsPerPage])

    //!Teste 3 (Funcional):
    const updateTotalPages = (totalItems, itemsPerPage) => {
        const numberOfPages = Math.ceil(totalItems / itemsPerPage)
        if (totalPages.length !== numberOfPages) {
            setTotalPages(Array.from({ length: numberOfPages }, (_, index) => index + 1))
        }
    }
    
    useEffect(() => {
        const totalItems = filteredProducts.length
        updateTotalPages(totalItems, itemsPerPage)
    }, [filteredProducts, itemsPerPage])

    const paginate = (pageNumber) => {
        if (pageNumber !== currentPage) {
            setCurrentPage(pageNumber)
        }
    }

    return (
        <>
            <Filter
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                categories={categories}
                setSearchQuery={setSearchQuery}
            />
            <ul className={styles.container}>
                {
                    currentItems.length === 0 ? <AlertMessage variant='light'>Nenhum resultado encontrado.</AlertMessage>
                        :
                        currentItems.map(product => (
                            <li key={product.productID}>
                                <ProductCard product={product} />
                            </li>
                        ))
                }
            </ul>
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
        </>
    )
}

export default PaginationTest