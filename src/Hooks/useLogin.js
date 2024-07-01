import axios from "axios";
import { useEffect, useState } from "react";

export default function useLogin() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = async () => {
        try {
            const response = await axios.get(`http://localhost:8800/users`)
            const users = response.data;

            const matchingUser = users.find(user => user.user_email === email && user.user_password === password)

            if (matchingUser) {
                localStorage.setItem('userData', JSON.stringify({ userId: matchingUser.userID, username: matchingUser.user_name }))
                setIsLoggedIn(true)

            } else {
                setError('Endereço de email e/ou senha incorreto(s), por favor, verifique suas informações')
            }
        } catch (error) {
            setError('Um erro ocorreu durante a tentativa de login')
        }
    }

    const logout = () => {
        localStorage.removeItem('userData');
        setIsLoggedIn(false);
    }

    //! Fazer alterações aqui
    setInterval(() => {
        if (localStorage.getItem('userData')) {
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
        }
    }, 1000)
    //!==============================

    return {
        isLoggedIn,
        login,
        error,
        email,
        password,
        setEmail,
        setPassword,
        setIsLoggedIn,
        logout
    }

}