import React from 'react';
import { Modal, Button, ListGroup } from 'react-bootstrap';
import './Style.css';

const SavedCollectionsModal = ({ show, onClose, arrayLove, arrayHate }) => {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Saved Dog Collections</Modal.Title>
      </Modal.Header>
      <Modal.Body className="centrify">
        <div>
          <p>You loved:</p>
          <ListGroup className="centrify">
            {arrayLove.map((image, index) => (
              <ListGroup.Item key={index}>
                <img className="modalinsidecontSavedCol" src={image} alt={`Loved Dog ${index + 1}`} />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
        <div>
          <p>You didn't like so much:</p>
          <ListGroup className="centrify">
            {arrayHate.map((image, index) => (
              <ListGroup.Item key={index}>
                <img className="modalinsidecontSavedCol" src={image} alt={`Hated Dog ${index + 1}`} />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" className="btn" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SavedCollectionsModal;