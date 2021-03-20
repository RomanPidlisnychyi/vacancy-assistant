import { Modal, Button } from 'react-bootstrap';

export default function BSModal({ handleModal }) {
  return (
    <>
      <Modal show={true} onHide={handleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
