import { Container, Nav, Navbar } from 'react-bootstrap'
import styles from './NavbarSite.module.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/Logo_Sakita.png'

const NavbarSite = () => {
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
                    </Nav>
                    <Nav>
                        <Link to="/login" className='nav-link'>
                            <span className={styles.navLink}>Entrar</span>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarSite