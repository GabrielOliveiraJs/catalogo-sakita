import axios from "axios";
import { useState } from "react";

export function useEditProduct() {
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

    const getProduct = async (id) => {
        try {
            const res = await axios.get(`http://localhost:8800/products/${id}`)
            const { product_name, product_category, product_description, product_code, product_image_big, product_image_small, product_link, product_brand } = res.data

            setProductName(product_name)
            setProductCategory(product_category)
            setProductDescription(product_description)
            setProductCode(product_code)
            setProductBigImage(product_image_big)
            setProductSmallImage(product_image_small)
            setProductLink(product_link)
            setProductBrand(product_brand)
        } catch (error) {
            console.error("Erro ao buscar o produto:", error)
        }
    }

    const updateProduct = async (id) => {
        setIsLoading(true)

        try {
            await axios.put(`http://localhost:8800/products/${id}`, {
                product_name: productName,
                product_category: productCategory,
                product_description: productDescription,
                product_code: productCode,
                product_image_big: productBigImage,
                product_image_small: productSmallImage,
                product_link: productLink,
                product_brand: productBrand
            })
            setSuccess("Produto atualizado com sucesso")
            setIsLoading(false)

        } catch (error) {
            console.error("Erro ao atualizar o produto:", error)
        }
    }

    return {
        getProduct,
        updateProduct,

        productName,
        productCategory,
        productDescription,
        productCode,
        productBigImage,
        productSmallImage,
        productLink,
        productBrand,

        setProductName,
        setProductCategory,
        setProductDescription,
        setProductCode,
        setProductBigImage,
        setProductSmallImage,
        setProductLink,
        setProductBrand,

        isLoading,
        error,
        success,
    }
}


