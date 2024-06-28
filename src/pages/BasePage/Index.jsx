import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Outlet } from 'react-router-dom'
import styles from './BasePage.module.css'
import NavbarSite from '../../components/NavbarSite/Index'

const BasePage = () => {
  return (
    <div className={styles.mainContainer}>
      <NavbarSite />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default BasePage