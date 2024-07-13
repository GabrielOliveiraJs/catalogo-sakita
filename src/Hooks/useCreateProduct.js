import axios from "axios";
import { useEffect, useState } from "react";

export function useCreateProduct() {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const [productName, setProductName] = useState('')
    const [productCategory, setProductCategory] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [productCode, setProductCode] = useState('')
    const [productBigImage, setProductBigImage] = useState('')
    const [productSmallImage, setProductSmallImage] = useState('')
    const [productLink, setProductLink] = useState('')
    const [productBrand, setProductBrand] = useState('')

    const clearInputs = () => {
        setProductName('')
        setProductCategory('')
        setProductDescription('')
        setProductCode('')
        setProductBigImage('')
        setProductSmallImage('')
        setProductLink('')
        setProductBrand('')
    }

    const handleMessages = (type, message) => {
        if (type === 'success') {
            setSuccess(message)
        } else if (type === 'error') {
            setError(message)
        }
    }

    const createProduct = async (product) => {
        setIsLoading(true)

        try {
            const response = await axios.post('http://localhost:8800/api/products', product)

            //!As funções abaixo não estão sendo chamadas
            handleMessages('success', 'Produto inserido com sucesso!')
            clearInputs()
            setIsLoading(false)

            return response.data

        } catch (error) {
            if (error) {
                setError("Erro ao inserir o produto, verifique os campos")
                return null
            }
        } finally {
            setIsLoading(false)
            setSuccess('')
            setError('')
        }
    }

    return {
        isLoading,
        setIsLoading,
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