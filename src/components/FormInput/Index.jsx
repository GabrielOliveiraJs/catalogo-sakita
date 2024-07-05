import { Form } from "react-bootstrap"
import { useFilter } from "../../Hooks/useFilter"

const FormInput = ({ controlId, label, required, type, placeholder, onChange, value = '' }) => {
    const { categories } = useFilter()

    return (
        <Form.Group className="mb-3" controlId={controlId}>
            <Form.Label>{label}</Form.Label>

            {type === "select" ? (
                <Form.Select
                    required={required}
                    onChange={onChange}
                >
                    <option value={value}>Selecione</option>
                    {categories.map(category => (
                        <option key={category.categoryID} value={category.category_name}>
                            {category.category_name}
                        </option>
                    ))}
                </Form.Select>
            ) :
                (
                    <Form.Control
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

export default FormInput