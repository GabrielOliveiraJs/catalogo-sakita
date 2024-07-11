import { Form } from "react-bootstrap"
import { useFilter } from "../../Hooks/useFilter"

const UncontrolledInput = ({ controlId, label, required, type, placeholder, onChange, value, selectedCategory = '' }) => {
    const { categories } = useFilter()

    return (
        <Form.Group className="mb-3" controlId={controlId}>
            <Form.Label>{label}</Form.Label>

            {type === "select" ? (
                <Form.Select
                    required={required}
                    onChange={onChange}
                >
                    <option value={selectedCategory ? selectedCategory : value}>{selectedCategory ? selectedCategory : 'Selecione'}</option>
                    {categories.map(category => (
                        category.category_name !== selectedCategory &&
                        (
                            <option key={category.categoryID} value={category.category_name}>
                                {category.category_name}
                            </option>
                        )
                    ))}
                </Form.Select>
            ) :
                (
                    <Form.Control as={type === "textarea" ? "textarea" : "input"}
                        required={required}
                        type={type}
                        placeholder={placeholder}
                        onChange={onChange}
                    />
                )
            }

        </Form.Group>
    )
}

export default UncontrolledInput