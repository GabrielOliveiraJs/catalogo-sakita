import { Button, Card } from 'react-bootstrap'
import styles from './ProductCard.module.css'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  return (
    <Card className={styles.card}>
      <Card.Img src={product.product_image_small} alt={product.product_name} />
      <div className={styles.body}>
        <Card.Title>{product.product_name}</Card.Title>
        <Card.Text>Marca: {product.product_brand}</Card.Text>
        <Link to={`/product/${product.productID}`}>
          <Button>Mais Detalhes</Button>
        </Link>
      </div>
    </Card>
  )
}

export default ProductCard