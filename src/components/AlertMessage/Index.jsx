import { Alert } from 'react-bootstrap'

const AlertMessage = ({ children, variant }) => {
    return (
        <Alert variant={variant} className='fs-6'>
            {children}
        </Alert>
    )
}

export default AlertMessage