import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useFilter } from '../../Hooks/useFilter'

const CreateProductForm = () => {
  const { categories } = useFilter()

  return (
    <>
      <h1>Adicionar um novo produto</h1>
      <Form>
        <Form.Group className="mb-3" controlId="product_name">
          <Form.Label>Nome do Produto</Form.Label>
          <Form.Control type="text" placeholder="Digite..." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="product_category">
          <Form.Label>Categoria</Form.Label>
          <Form.Select type="text" placeholder="Digite...">
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
          <Form.Control as="textarea" type="text" placeholder="Digite..." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="product_code">
          <Form.Label>Código</Form.Label>
          <Form.Control type="text" placeholder="Digite..." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="product_image1">
          <Form.Label>Imagem</Form.Label>
          <Form.Control type="file" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="product_link">
          <Form.Label>Link externo</Form.Label>
          <Form.Control type="text" placeholder="Digite..." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="product_price">
          <Form.Label>Preço</Form.Label>
          <Form.Control type="text" placeholder="Digite..." />
        </Form.Group>

        <Button variant="primary" type="submit">
          Adicionar
        </Button>
      </Form>
    </>
  )
}

export default CreateProductForm