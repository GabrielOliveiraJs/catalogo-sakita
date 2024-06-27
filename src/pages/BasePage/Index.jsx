import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Outlet } from 'react-router-dom'
import styles from './BasePage.module.css'
import NavbarSite from '../../components/NavbarSite/Index'

const BasePage = () => {
  return (
    <main className={styles.mainContainer}>
      <NavbarSite />
      <div>
        <Outlet />
      </div>
    </main>
  )
}

export default BasePage