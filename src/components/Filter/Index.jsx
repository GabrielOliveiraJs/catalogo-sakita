import styles from './Filter.module.css'
import { Container, Form } from 'react-bootstrap'

const Filter = ({ selectedCategory, setSelectedCategory, categories, setSearchQuery }) => {

    return (
        <Container className='container-fluid d-flex gap-2 my-3'>
            <Form.Select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                aria-label='Lista de Categorias'
            >
                <option value=''>Todas</option>

                {categories.map(category => (
                    <option key={category.categoryID} value={category.category_name}>
                        {category.category_name}
                    </option>
                ))}

            </Form.Select>

            <Form.Control
                type='text'
                aria-describedby='Pesquisa por produto'
                placeholder='Buscar Produto'
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </Container>
    )
}

export default Filter