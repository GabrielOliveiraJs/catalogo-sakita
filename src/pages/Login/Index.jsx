import styles from './Login.module.css'
import { Button, Container, Form } from "react-bootstrap"

const Login = () => {
    return (
        <Container className='w-50'>
            <h1>Entrar</h1>
            <Form>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="Digite seu e-mail" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control autoComplete='off' type="password" placeholder="Digite sua senha" />
                </Form.Group>
                <Button className={styles.formBtn} type="submit">
                    Entrar
                </Button>
            </Form>
        </Container>
    )
}

export default Login