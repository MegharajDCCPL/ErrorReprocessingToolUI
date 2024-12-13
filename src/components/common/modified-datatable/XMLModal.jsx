import React from "react";
import { Modal, Button } from "react-bootstrap";
import { UnControlled as CodeMirror } from "react-codemirror2"; // Import CodeMirror
import "codemirror/lib/codemirror.css"; // Import CodeMirror styles
import "codemirror/mode/xml/xml"; // Import XML mode for CodeMirror
import xmlFormatter from "xml-formatter"; // Import xml-formatter to prettify XML

const XMLModal = ({ show, handleClose, xmlData }) => {
  let formattedXML = "";

  // Try formatting the XML data and handle errors
  try {
    // Ensure xmlData is valid and format it
    formattedXML = xmlFormatter(xmlData || "");
  } catch (error) {
    console.error("Failed to parse XML:", error);
    formattedXML = "<error>Invalid XML data</error>"; // Show a simple error message if XML is invalid
  }

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header className="custom-modal-header" closeButton>
        <Modal.Title className="custom-modal-title">Detailed XML</Modal.Title>
      </Modal.Header>
      <Modal.Body
        className="custom-modal-body bg-light"
        style={{ height: "350px", overflowY: "auto" }}
      >
        <CodeMirror
          value={formattedXML}
          options={{
            mode: "xml",
            readOnly: true,
            lineNumbers: true,
            theme: "default",
            lineWrapping: true,
            indentUnit: 2,
          }}
        />
      </Modal.Body>
      <Modal.Footer className="custom-modal-footer d-flex">
        <Button variant="outline-secondary" size="sm" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default XMLModal;
