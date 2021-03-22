import { Modal, Button } from 'react-bootstrap';

export default function MyModal({
  handleSubmit,
  handleModal,
  title,
  children,
}) {
  return (
    <>
      <Modal show={true} onHide={handleModal}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
