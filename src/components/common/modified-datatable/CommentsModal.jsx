import { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const CommentsModal = ({ show, handleClose, initialComment, onSave }) => {
  const [comment, setComment] = useState("");

  useEffect(() => {
    setComment(initialComment || "");
  }, [initialComment]);

  const handleSave = () => {
    onSave(comment);
    handleClose();
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header className="custom-modal-header" closeButton>
        <Modal.Title className="custom-modal-title">
          Add/Edit Comment
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="custom-modal-body bg-light">
        <Form.Group>
          <Form.Label style={{ fontWeight: "bold" }}>Comment</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer className="custom-modal-footer d-flex">
        <Button variant="outline-secondary" size="sm" onClick={handleClose}>
          Close
        </Button>
        <Button variant="outline-success" size="sm" onClick={handleSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CommentsModal;
