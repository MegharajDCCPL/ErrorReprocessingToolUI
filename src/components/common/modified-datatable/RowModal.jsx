import { Modal, Button, Form } from "react-bootstrap";
import { UnControlled as CodeMirror } from "react-codemirror2"; // Import CodeMirror
import "codemirror/lib/codemirror.css"; // Import CodeMirror styles
import "codemirror/mode/xml/xml"; // Import XML mode for CodeMirror
import xmlFormatter from "xml-formatter"; // Import xml-formatter to prettify XML

const RowModal = ({ show, handleClose, rowData }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      size="lg"
      centered
    >
      <Modal.Header closeButton className="custom-modal-header">
        <Modal.Title className="custom-modal-title">Error Data</Modal.Title>
      </Modal.Header>
      <Modal.Body className="custom-modal-body bg-light">
        <Form>
          {rowData &&
            Object.keys(rowData).map((key) => {
              // Check if the value is XML data (e.g., request, response, or originalMessage)
              const isXML =
                key === "request" ||
                key === "response" ||
                key === "originalMessageContent" ||
                key === "errorXML";

              return (
                <Form.Group key={key} className="mb-3">
                  <Form.Label>{key}</Form.Label>
                  {isXML ? (
                    // Format XML to add indentation and line breaks
                    <div style={{ height: "300px" }}>
                      <CodeMirror
                        value={xmlFormatter(rowData[key] || "")} // Format the XML
                        options={{
                          mode: "xml",
                          readOnly: true,
                          theme: "default", // You can customize the theme here
                          lineNumbers: true,
                          indentUnit: 2, // Adjust indentation size if needed
                          lineWrapping: true, // Wrap lines if needed
                        }}
                      />
                    </div>
                  ) : (
                    // Display other data in a textbox (single-line input)
                    <Form.Control
                      type="text"
                      value={rowData[key] || ""}
                      readOnly
                    />
                  )}
                </Form.Group>
              );
            })}
        </Form>
      </Modal.Body>
      <Modal.Footer className="custom-modal-footer d-flex">
        <Button size="sm" variant="outline-secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RowModal;
