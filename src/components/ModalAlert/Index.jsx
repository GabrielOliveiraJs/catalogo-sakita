import { Button, Modal } from 'react-bootstrap'

const ModalAlert = ({ onclick, productName, setShowModal, showModal }) => {
    const handleClose = () => {
        setShowModal(false)
    }
    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Excluindo: {productName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Deseja realmente excluir este produto?</Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                    Não
                </Button>
                <Button variant="primary" onClick={onclick}>
                    Sim
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalAlert