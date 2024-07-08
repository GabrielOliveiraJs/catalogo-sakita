import { Button, Card } from 'react-bootstrap'
import styles from './ProductCard.module.css'
import { Link } from 'react-router-dom'
import { HiOutlinePencilSquare } from "react-icons/hi2"
import useLogin from '../../Hooks/useLogin'

const ProductCard = ({ product }) => {
  const { isLoggedIn } = useLogin()

  return (
    <Card className={styles.card}>
      {
        isLoggedIn && <Link to={`/product/edit/${product.productID}`}> <i className={styles.icon}><HiOutlinePencilSquare /></i> </Link>
      }
      <div className={styles.imageContainer}>
        <Card.Img src={product.product_image_small} alt={product.product_name} />
      </div>
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