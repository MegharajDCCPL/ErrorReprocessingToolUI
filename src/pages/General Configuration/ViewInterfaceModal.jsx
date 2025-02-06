import React, { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

function ViewInterfaceModal({ show, onHide, currentRowData, onUpdate }) {
  const [formData, setFormData] = useState({
    interfaceName: "",
    interfaceType: "",
    serverName: "",
    description: "",
  });

  useEffect(() => {
    if (currentRowData) {
      setFormData({
        interfaceName: currentRowData.interfaceName || "",
        interfaceType: currentRowData.interfaceType || "",
        serverName: currentRowData.nxServerName || "",
        description: currentRowData.description || "",
      });
    }
  }, [currentRowData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.interfaceName || !formData.interfaceType) {
      toast.error("Message Type Name and Type are required!");
      return;
    }

    if (currentRowData?.interfaceId) {
      onUpdate(currentRowData.interfaceId, formData);
    }
    onHide();
    setFormData((prevData) =>
      prevData.map((item) =>
        item.interfaceId === currentRowData.interfaceId ? formData : item
      )
    );
  };

  return (
    <Modal show={show} onHide={onHide} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Edit Interface</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="interfaceName">
            <Form.Label>Message Type Name</Form.Label>
            <Form.Control
              name="interfaceName"
              value={formData.interfaceName}
              placeholder="Message Type Name"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="interfaceType" className="mt-3">
            <Form.Label>Interface Type</Form.Label>
            <Form.Select
              name="interfaceType"
              value={formData.interfaceType}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="inbound">Inbound</option>
              <option value="outbound">Outbound</option>
            </Form.Select>
          </Form.Group>
          <Form.Group controlId="serverName" className="mt-3">
            <Form.Label>Server Name</Form.Label>
            <Form.Control
              name="serverName"
              value={formData.serverName}
              readOnly
            />
          </Form.Group>
          <Form.Group controlId="description" className="mt-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              placeholder="Enter a description (optional)"
              rows={3}
              value={formData.description}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ViewInterfaceModal;
