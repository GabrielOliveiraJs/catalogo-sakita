import axios from "axios";
import { useState } from "react";

export function useCreateProduct() {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(false)

    const [productName, setProductName] = useState('')
    const [productCategory, setProductCategory] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [productCode, setProductCode] = useState('')
    const [productImage, setProductImage] = useState(null)
    const [productLink, setProductLink] = useState('')
    const [productPrice, setProductPrice] = useState('')

    const createProduct = async (product) => {
        setIsLoading(true)
        try {
            const response = await axios.post('http://localhost:8800/api/products', product)
            setSuccess(true)
            setProductName('')
            setProductCategory('')
            setProductDescription('')
            setProductCode('')
            setProductImage(null)
            setProductLink('')
            setProductPrice('')

            return response.data
            
        } catch (error) {
            setError("Erro ao inserir o produto: ", error.message)
        } finally {
            setIsLoading(false)
        }
    }

    return {
        isLoading,
        error,
        success,
        createProduct,
        productName,
        setProductName,
        productCategory,
        setProductCategory,
        productDescription,
        setProductDescription,
        productCode,
        setProductCode,
        productImage,
        setProductImage,
        productLink,
        setProductLink,
        productPrice,
        setProductPrice
    }
}