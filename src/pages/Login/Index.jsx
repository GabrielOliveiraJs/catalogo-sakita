import useLogin from '../../Hooks/useLogin'
import AlertMessage from '../../components/AlertMessage/Index'
import styles from './Login.module.css'
import { Button, Container, Form } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const { login, error, email, password, setEmail, setPassword } = useLogin()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await login()
        const userData = localStorage.getItem('userData')
        if (userData) {
            navigate('/')
        }
    }

    return (
        <Container className='w-50'>
            <h1>Entrar</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                        autoComplete='off'
                        type="password"
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                {error && <AlertMessage variant='danger'>{error}</AlertMessage>}

                <Button className={styles.formBtn} type="submit">
                    Entrar
                </Button>
            </Form>
        </Container>
    )
}

export default Login