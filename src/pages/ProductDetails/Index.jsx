import { useParams } from 'react-router-dom'
import styles from './ProductDetails.module.css'
import { useProductsContext } from '../../contexts/Porducts'

const ProductDetails = () => {
  const { id } = useParams()
  const { filterProduct } = useProductsContext()
  const filteredProduct = filterProduct(id)

  return (
    <div>
      {filteredProduct.map((product) => (
        <div key={product.productID}>
          <img src={product.product_image1} alt={product.product_name} />
          <h2>{product.product_name}</h2>
          <p>{product.product_description}</p>
          <p>{product.product_price}</p>
          <p>{product.product_category}</p>
        </div>
      ))}
    </div>
  )
}

export default ProductDetails