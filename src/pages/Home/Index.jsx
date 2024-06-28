import styles from './Home.module.css'
import ProductCard from '../../components/ProductCard/Index'
import Filter from '../../components/Filter/Index'
import { useProductsContext } from '../../contexts/Porducts'
import { useFilter } from '../../Hooks/useFilter'
import NoResultsFound from '../../components/NoResultsFound/Index'

const Home = () => {

  const { productsList } = useProductsContext()
  const { selectedCategory, setSelectedCategory, filterProducts, categories, setSearchQuery } = useFilter()
  const filteredProducts = filterProducts(productsList)

  return (
    <>
      <Filter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
        setSearchQuery={setSearchQuery}
      />
      <ul className={styles.container}>
        {
          filteredProducts.length === 0 ? <NoResultsFound />
            :
            filteredProducts.map(product => (
              <li key={product.productID}>
                <ProductCard product={product} />
              </li>
            ))
        }
      </ul>
    </>
  )
}

export default Home