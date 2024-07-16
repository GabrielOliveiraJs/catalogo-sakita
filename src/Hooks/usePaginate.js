import { useEffect, useState } from "react"
import { useProductsContext } from "../contexts/Products"
import { useFilter } from "./useFilter"

export default function usePaginate() {
    const { productsList } = useProductsContext()
    const { filterProducts } = useFilter()
    const filteredProducts = filterProducts(productsList)

    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 12
    const indexOfFirstItem = (currentPage - 1) * itemsPerPage
    const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfFirstItem + itemsPerPage)
    const [totalPages, setTotalPages] = useState([])

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

    return {
        currentPage,
        setCurrentPage,
        currentItems,
        totalPages
    }
}