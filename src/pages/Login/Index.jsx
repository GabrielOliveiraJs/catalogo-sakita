import { useState } from 'react'
import useLogin from '../../Hooks/useLogin'
import styles from './Login.module.css'
import { Button, Container, Form } from "react-bootstrap"

const Login = () => {
    const { login, error, email, password, setEmail, setPassword } = useLogin()


    const handleSubmit = (e) => {
        e.preventDefault()
        login()
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
                <Button className={styles.formBtn} type="submit">
                    Entrar
                </Button>
            </Form>
            {error && <p>{error}</p>}
        </Container>
    )
}

export default Login