import styles from './ProductDetails.module.css'
import { useParams } from 'react-router-dom'
import { useProductsContext } from '../../contexts/Products'
import { Button } from 'react-bootstrap'

const ProductDetails = () => {
  const { id } = useParams()
  const { filterProduct } = useProductsContext()
  const filteredProduct = filterProduct(id)

  return (
    <>
      {filteredProduct.map((product) => (
        <div key={product.productID} className={styles.container}>
          <div className={styles.imageContainer}>
            <img src={product.product_image_big} alt={product.product_name} />
          </div>
          <div className={styles.detailsContainer}>
            <h1>{product.product_name}</h1>
            <p dangerouslySetInnerHTML={{ __html: product.formatted_description }}></p>
            <p>Código(s) do produto: {product.product_code}</p>

            <a href={product.product_link} target='_blank'>
              <Button className={styles.btnLink}>Link do Produto</Button>
            </a>
          </div>
        </div>
      ))}
    </>
  )
}

export default ProductDetails