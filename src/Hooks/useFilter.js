import axios from "axios";
import { useEffect, useState } from "react";

export function useFilter() {
    const [selectedCategory, setSelectedCategory] = useState('')
    const [categories, setCategories] = useState([])
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await axios.get("http://localhost:8800/categories")
                setCategories(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchCategories()
    }, [])

    const filterProducts = (products) => {
        let filteredProducts = products

        if (selectedCategory !== '') {
            filteredProducts = filteredProducts.filter(product => product.product_category === selectedCategory)
        }

        if (searchQuery.trim() !== '') {
            filteredProducts = filteredProducts.filter(product => product.product_name.toLowerCase().includes(searchQuery.toLowerCase()))
        }
        
        return filteredProducts
    }

    return { selectedCategory, setSelectedCategory, categories, filterProducts, searchQuery, setSearchQuery }
}

