import { useEffect } from "react"
import { Button, Form } from 'react-bootstrap'
import { useParams } from "react-router-dom"
import { useEditProduct } from "../../Hooks/useEditProduct"
import FormInput from "../../components/FormInput/Index"
import AlertMessage from "../../components/AlertMessage/Index"

const EditProductForm = () => {
    const { id } = useParams()
    const {
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
        editProduct,

    } = useEditProduct()

    useEffect(() => {
        window.scrollTo(0, 0)
        getProduct(Number(id))
    }, [])

    const handleInputChange = (setter, event) => {
        setter(event.target.value)
        console.log('Evento: ', event.target.value)
    }

    const handleEditProduct = async (e) => {
        e.preventDefault()
        //!Verificar Lógica:
        try {
            const product = {
                name: productName,
                category: productCategory,
                description: productDescription,
                code: productCode,
                bigImage: productBigImage,
                smallImage: productSmallImage,
                link: productLink,
                brand: productBrand
            }

            await updateProduct(id)
        } catch (error) {
            console.log('Erro ao alterar informações do produto: ', error)
        }
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

                <FormInput
                    controlId="product_description"
                    label="Descrição"
                    required
                    type="textarea"
                    placeholder="Digite..."
                    value={productDescription}
                    onChange={(event) => handleInputChange(setProductDescription, event)}
                />

                <FormInput
                    controlId="product_code"
                    label="Código"
                    required
                    type="text"
                    placeholder="Digite..."
                    value={productCode}
                    onChange={(event) => handleInputChange(setProductCode, event)}
                />

                <FormInput
                    controlId="product_image_big"
                    label="Caminho da Imagem Grande"
                    required
                    type="text"
                    placeholder="Digite..."
                    value={productBigImage}
                    onChange={(event) => handleInputChange(setProductBigImage, event)}
                />

                <FormInput
                    controlId="product_image_small"
                    label="Caminho da Imagem Pequena"
                    required
                    type="text"
                    placeholder="Digite..."
                    value={productSmallImage}
                    onChange={(event) => handleInputChange(setProductSmallImage, event)}
                />

                <FormInput
                    controlId="product_link"
                    label="Link externo"
                    required
                    type="text"
                    placeholder="Digite..."
                    value={productLink}
                    onChange={(event) => handleInputChange(setProductLink, event)}
                />

                <FormInput
                    controlId="product_brand"
                    label="Marca"
                    required
                    type="text"
                    placeholder="Digite..."
                    value={productBrand}
                    onChange={(event) => handleInputChange(setProductBrand, event)}
                />

                <Button
                    {...(isLoading && { disabled: true })}
                    variant="primary"
                    type="submit">
                    Alterar
                </Button>

                {isLoading && <p>Carregando...</p>}
                {error && <AlertMessage variant="danger">{error}</AlertMessage>}
                {success && <AlertMessage variant="success">Produto adicionado com sucesso!</AlertMessage>}
            </Form>
        </>
    )
}

export default EditProductForm