import { Button, Form } from 'react-bootstrap'
import { useCreateProduct } from '../../Hooks/useCreateProduct'
import UncontrolledInput from '../../components/FormInput/UncontrolledInput'
//import FormInput from '../../components/FormInput/ControledInput'

const CreateProductForm = () => {
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
  } = useCreateProduct()

  //const [selectedFile, setSelectedFile] = useState(null)

  const handleInputChange = (setter, event) => {
    setter(event.target.value)
  }

  // const handleFileChange = (event) => {
  //   setSelectedFile(event.target.files[0])
  // }

  const handleCreateProduct = async (e) => {
    e.preventDefault()

    try {
      const product = {
        name: productName,
        category: productCategory,
        description: productDescription,
        code: productCode,
        smallImage: productSmallImage,
        bigImage: productBigImage,
        link: productLink,
        brand: productBrand
      }

      await createProduct(product)
      console.log(product)

    } catch (error) {
      console.log('Erro ao adicionar o produto: ', error)
    }
  }

  return (
    <div className="m-2 m-lg-5">
      <h1>Adicionar um novo produto</h1>
      <Form onSubmit={handleCreateProduct} className='p-2'>

        <UncontrolledInput
          controlId="product_name"
          label="Nome do Produto"
          required
          type="text"
          placeholder="Digite..."
          onChange={(event) => handleInputChange(setProductName, event)}
        />

        <UncontrolledInput
          controlId="product_category"
          label="Categoria"
          required
          type="select"
          placeholder="Selecione..."
          onChange={(event) => handleInputChange(setProductCategory, event)}
          value={productCategory}
        />

        <UncontrolledInput
          controlId="product_description"
          label="Descrição"
          required
          type="textarea"
          placeholder="Digite..."
          onChange={(event) => handleInputChange(setProductDescription, event)}
        />

        <UncontrolledInput
          controlId="product_code"
          label="Código"
          required
          type="text"
          placeholder="Digite..."
          onChange={(event) => handleInputChange(setProductCode, event)}
        />

        {/* <Form.Group className="mb-3" controlId="product_image1">
          <Form.Label>Imagem</Form.Label>
          <Form.Control
            type="file"
            onChange={handleFileChange}
          />
        </Form.Group> */}

        <UncontrolledInput
          controlId="product_image_big"
          label="Caminho da Imagem Grande"
          required
          type="text"
          placeholder="Digite..."
          onChange={(event) => handleInputChange(setProductBigImage, event)}
        />

        <UncontrolledInput
          controlId="product_image_small"
          label="Caminho da Imagem Pequena"
          required
          type="text"
          placeholder="Digite..."
          onChange={(event) => handleInputChange(setProductSmallImage, event)}
        />

        <UncontrolledInput
          controlId="product_link"
          label="Link externo"
          required
          type="text"
          placeholder="Digite..."
          onChange={(event) => handleInputChange(setProductLink, event)}
        />

        <UncontrolledInput
          controlId="product_brand"
          label="Marca"
          required
          type="text"
          placeholder="Digite..."
          onChange={(event) => handleInputChange(setProductBrand, event)}
        />

        <Button
          {...(isLoading && { disabled: true })}
          variant="primary"
          type="submit">
          Adicionar
        </Button>

        {isLoading && <p>Carregando...</p>}
        {error && <AlertMessage variant="danger">{error}</AlertMessage>}
        {success && <AlertMessage variant="success">Produto adicionado com sucesso!</AlertMessage>}
      </Form>
    </div>
  )
}

export default CreateProductForm