import { Container, Nav, Navbar } from 'react-bootstrap'
import styles from './NavbarSite.module.css'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/Logo_Sakita.png'
import useLogin from '../../Hooks/useLogin'

const NavbarSite = () => {
    const { isLoggedIn, logout } = useLogin()
    const navigate = useNavigate()
    const logoutOfTheApp = () => {
        logout()
        navigate('/')
    }

    // if (isLoggedIn) {
    //     console.log('logou')
    // } else {
    //     console.log('deslogou')
    // }


    return (
        <Navbar expand="lg" className={styles.navbar} >
            <Container>
                <Navbar.Brand className={styles.brand}>
                    <img src={logo} alt="Logo Sakita" />
                    Sakita Catálogo
                </Navbar.Brand>
                <Navbar.Toggle className={styles.collapse} aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" className='nav-link'>
                            <span className={styles.navLink}>Catálogo</span>
                        </Link>
                        {
                            isLoggedIn ?
                                (
                                    <Link to="/create-product" className='nav-link'>
                                        <span className={styles.navLink}>Adicionar</span>
                                    </Link>
                                ) : null
                        }
                    </Nav>
                    <Nav>
                        {
                            isLoggedIn ?
                                (
                                    <button className='nav-link' onClick={logoutOfTheApp}>
                                        <span className={styles.navLink}>Sair</span>
                                    </button>
                                ) : (

                                    <Link to="/login" className='nav-link'>
                                        <span className={styles.navLink}>Entrar</span>
                                    </Link>
                                )
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarSite