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
            const res = await axios.get("http://localhost:8800/products")
            const filteredProduct = res.data.find(product => product.productID === Number(id))

            if (filteredProduct) {
                setProductName(filteredProduct.product_name)
                setProductCategory(filteredProduct.product_category)
                setProductDescription(filteredProduct.product_description)
                setProductCode(filteredProduct.product_code)
                setProductBigImage(filteredProduct.product_big_image)
                setProductSmallImage(filteredProduct.product_small_image)
                setProductLink(filteredProduct.product_link)
                setProductBrand(filteredProduct.product_brand)
                //console.log('Nome: ', productName)
            } else {
                console.log("Produto não encontrado")
            }
        } catch (error) {
            console.error("Erro ao buscar o produto:", error)
        }
    }

    return {
        getProduct,

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


