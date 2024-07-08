import { useEffect } from "react"
import { Button, Form } from 'react-bootstrap'
import { useParams } from "react-router-dom"
import { useEditProduct } from "../../Hooks/useEditProduct"
import FormInput from "../../components/FormInput/Index"

const EditProductForm = () => {
    const { id } = useParams()

    const {
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
        editProduct,

    } = useEditProduct()

    useEffect(() => {
        window.scrollTo(0, 0)
        getProduct(id)
    }, [])

    console.log(productName)
    const handleInputChange = (setter, event) => {
        setter(event.target.value)
    }

    const handleEditProduct = async (e) => {
        e.preventDefault()
    }

    return (
        <>
            <h1>Editando: {productName}</h1>
            <Form onSubmit={handleEditProduct}>
                <FormInput
                    controlId="product_name"
                    label="Nome do Produto"
                    required
                    type="text"
                    placeholder="Digite..."
                    value={productName}
                    onChange={(event) => handleInputChange(setProductName, event)}
                />

                <FormInput
                    controlId="product_category"
                    label="Categoria"
                    required
                    type="select"
                    placeholder="Selecione..."
                    onChange={(event) => handleInputChange(setProductCategory, event)}
                    value={productCategory}
                    selectedCategory={productCategory}
                />

            </Form>
        </>
    )
}

export default EditProductForm