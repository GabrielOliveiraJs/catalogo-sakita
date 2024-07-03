import { Button, Form } from 'react-bootstrap'
import { useFilter } from '../../Hooks/useFilter'
import { useCreateProduct } from '../../Hooks/useCreateProduct'
import { useState } from 'react'

const CreateProductForm = () => {
  const { categories } = useFilter()
  const {
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
  } = useCreateProduct()

  const [selectedFile, setSelectedFile] = useState(null)

  const handleInputChange = (setter, event) => {
    setter(event.target.value)
  }

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0])
  }

  const handleCreateProduct = async (e) => {
    e.preventDefault()

    try {
      const product = {
        name: productName,
        category: productCategory,
        description: productDescription,
        code: productCode,
        image: selectedFile,
        link: productLink,
        price: productPrice
      }

      await createProduct(product)
      console.log(product)

    } catch (error) {
      console.log('Erro ao adicionar o produto: ', error)
    }
  }

  return (
    <>
      <h1>Adicionar um novo produto</h1>
      <Form onSubmit={handleCreateProduct}>

        <Form.Group className="mb-3" controlId="product_name">
          <Form.Label>Nome do Produto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite..."
            onChange={(event) => handleInputChange(setProductName, event)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="product_category">
          <Form.Label>Categoria</Form.Label>
          <Form.Select
            type="text"
            onChange={(event) => handleInputChange(setProductCategory, event)}
          >
            <option value=''>Selecione</option>
            {categories.map(category => (
              <option key={category.categoryID} value={category.category_name}>
                {category.category_name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="product_description">
          <Form.Label>Descrição</Form.Label>
          <Form.Control as="textarea"
            type="text"
            placeholder="Digite..."
            onChange={(event) => handleInputChange(setProductDescription, event)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="product_code">
          <Form.Label>Código</Form.Label>
          <Form.Control
            type="text" placeholder="Digite..."
            onChange={(event) => handleInputChange(setProductCode, event)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="product_image1">
          <Form.Label>Imagem</Form.Label>
          <Form.Control
            type="file"
            onChange={handleFileChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="product_link">
          <Form.Label>Link externo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite..."
            onChange={(event) => handleInputChange(setProductLink, event)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="product_price">
          <Form.Label>Preço</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite..."
            onChange={(event) => handleInputChange(setProductPrice, event)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Adicionar
        </Button>
      </Form>
    </>
  )
}

export default CreateProductForm