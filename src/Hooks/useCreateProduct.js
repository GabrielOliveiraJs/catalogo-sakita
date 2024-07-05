import axios from "axios";
import { useState } from "react";

export function useCreateProduct() {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const [productName, setProductName] = useState('')
    const [productCategory, setProductCategory] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [productCode, setProductCode] = useState('')
    //const [productImage, setProductImage] = useState(null)
    const [productBigImage, setProductBigImage] = useState('')
    const [productSmallImage, setProductSmallImage] = useState('')
    const [productLink, setProductLink] = useState('')
    const [productBrand, setProductBrand] = useState('')

    const createProduct = async (product) => {
        setIsLoading(true)
        try {
            const response = await axios.post('http://localhost:8800/api/products', product)
            setProductName('')
            setProductCategory('')
            setProductDescription('')
            setProductCode('')
            // setProductImage(null)
            setProductBigImage('')
            setProductSmallImage('')
            setProductLink('')
            setProductBrand('')

            setSuccess('Produto inserido com sucesso!')
            console.log(success)
            return response.data
            
        } catch (error) {
            setError("Erro ao inserir o produto, verifique os campos")
            console.log(error)
            return null
        } finally {
            setIsLoading(false)
            setSuccess('')
            setError('')
            console.log(success)
            console.log(error)
            console.log(isLoading)
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
        // productImage,
        // setProductImage,
        productBigImage,
        setProductBigImage,
        productSmallImage,
        setProductSmallImage,
        productLink,
        setProductLink,
        productBrand,
        setProductBrand
    }
}