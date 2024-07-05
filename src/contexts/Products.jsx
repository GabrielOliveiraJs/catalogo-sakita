import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const ProductsContext = createContext()
ProductsContext.displayName = 'Products'


export default function ProductsProvider({ children }) {
    const [productsList, setProductsList] = useState([])

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const res = await axios.get("http://localhost:8800/products")
                setProductsList(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllProducts()
    }, [])

    const filterProduct = (id) => {
        const filteredProduct = productsList.filter(product => product.productID === Number(id))

        if (filteredProduct.length > 0) {
            filteredProduct[0].formatted_description = filteredProduct[0].formatted_description || filteredProduct[0].product_description.replace(/\n/g, '<br />');
        }

        return filteredProduct
    }
    
    return (
        <ProductsContext.Provider value={{ productsList, setProductsList, filterProduct }}>
            {children}
        </ProductsContext.Provider>
    )
}

export function useProductsContext() {
    const { productsList, setProductsList, filterProduct } = useContext(ProductsContext)

    return {
        productsList,
        setProductsList,
        filterProduct
    }
}