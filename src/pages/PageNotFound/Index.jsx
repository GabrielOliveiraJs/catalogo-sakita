import styles from "./PageNotFound.module.css"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const PageNotFound = () => {
    const navigate = useNavigate()

  return (
    <main className="container text-center my-3">
      <h1>Página não encontrada</h1>
      <div>
      <p>Nada para ver aqui! Página não localizada.</p>
      <Button onClick={() => navigate(-1)}>Voltar</Button>
      </div>
    </main>
  )
}

export default PageNotFound