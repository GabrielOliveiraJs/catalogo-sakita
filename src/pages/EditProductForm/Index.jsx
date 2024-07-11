import { useEffect } from "react"
import { Button, Container, Form } from 'react-bootstrap'
import { useNavigate, useParams } from "react-router-dom"
import { useEditProduct } from "../../Hooks/useEditProduct"
import ControlledInput from "../../components/FormInput/ControledInput"
import AlertMessage from "../../components/AlertMessage/Index"
import { useDeleteProduct } from "../../Hooks/useDeleteProduct"

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
    }

    const handleEditProduct = async (e) => {
        e.preventDefault()
        try {
            await updateProduct(id)
        } catch (error) {
            console.log('Erro ao alterar informações do produto: ', error)
        }
    }

    const { deleteProduct } = useDeleteProduct()
    const navigate = useNavigate()
    const handleDeleteProduct = async (e) => {
        try {
            e.preventDefault()
            await deleteProduct(Number(id))
            //!Redirecionamento não funcionando
            navigate('/')
        } catch (error) {
            console.log('Erro ao excluir o produto: ', error)
        }
    }

    return (
        <div className="m-2 m-lg-5">
            <h1>Editando: {productName}</h1>
            <Form onSubmit={handleEditProduct} className="p-2">
                <ControlledInput
                    controlId="product_name"
                    label="Nome do Produto"
                    required
                    type="text"
                    placeholder="Digite..."
                    value={productName}
                    onChange={(event) => handleInputChange(setProductName, event)}
                />

                <ControlledInput
                    controlId="product_category"
                    label="Categoria"
                    required
                    type="select"
                    placeholder="Selecione..."
                    onChange={(event) => handleInputChange(setProductCategory, event)}
                    value={productCategory}
                    selectedCategory={productCategory}
                />

                <ControlledInput
                    controlId="product_description"
                    label="Descrição"
                    required
                    type="textarea"
                    placeholder="Digite..."
                    value={productDescription}
                    onChange={(event) => handleInputChange(setProductDescription, event)}
                />

                <ControlledInput
                    controlId="product_code"
                    label="Código"
                    required
                    type="text"
                    placeholder="Digite..."
                    value={productCode}
                    onChange={(event) => handleInputChange(setProductCode, event)}
                />

                <ControlledInput
                    controlId="product_image_big"
                    label="Caminho da Imagem Grande"
                    required
                    type="text"
                    placeholder="Digite..."
                    value={productBigImage}
                    onChange={(event) => handleInputChange(setProductBigImage, event)}
                />

                <ControlledInput
                    controlId="product_image_small"
                    label="Caminho da Imagem Pequena"
                    required
                    type="text"
                    placeholder="Digite..."
                    value={productSmallImage}
                    onChange={(event) => handleInputChange(setProductSmallImage, event)}
                />

                <ControlledInput
                    controlId="product_link"
                    label="Link externo"
                    required
                    type="text"
                    placeholder="Digite..."
                    value={productLink}
                    onChange={(event) => handleInputChange(setProductLink, event)}
                />

                <ControlledInput
                    controlId="product_brand"
                    label="Marca"
                    required
                    type="text"
                    placeholder="Digite..."
                    value={productBrand}
                    onChange={(event) => handleInputChange(setProductBrand, event)}
                />

                <Container className="container-fluid d-flex gap-3">
                    <Button
                        {...(isLoading && { disabled: true })}
                        variant="primary"
                        type="submit">
                        Alterar
                    </Button>

                    <Button
                        {...(isLoading && { disabled: true })}
                        variant="danger"
                        type="button"
                        onClick={handleDeleteProduct}
                    >
                        Excluir Produto
                    </Button>
                </Container>

                {isLoading && <p>Carregando...</p>}
                {error && <AlertMessage variant="danger">{error}</AlertMessage>}
                {success && <AlertMessage variant="success">Alterações realizadas com sucesso!</AlertMessage>}
            </Form>
        </div>
    )
}

export default EditProductForm