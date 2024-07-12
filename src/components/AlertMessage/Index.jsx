import { useEffect, useState } from 'react'
import { Alert } from 'react-bootstrap'

const AlertMessage = ({ children, variant }) => {
    const [showAlert, setShowAlert] = useState(false)

    useEffect(() => {
        setShowAlert(true)
        setTimeout(() => {
            setShowAlert(false)
        }, 5000)
    }, [])

    return (
        <Alert
            show={showAlert}
            onClose={() => setShowAlert(false)}
            variant={variant}
            className='fs-6 my-3 fs-5 w-100 text-center'
        >
            {children}
        </Alert>
    )
}

export default AlertMessage