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
              const rowError = key === "error";

              const isXML =
                key === "request" ||
                key === "response" ||
                key === "originalMessageContent" ||
                key === "errorXML";

              let formattedXML = rowData[key];

              if (isXML) {
                try {
                  formattedXML = xmlFormatter(rowData[key] || "");
                } catch (error) {
                  formattedXML = "<error>Invalid XML data</error>";
                }
              }

              return (
                <Form.Group key={key} className="mb-3">
                  <Form.Label style={{ fontWeight: "bold" }}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </Form.Label>

                  {rowError ? (
                    <Form.Control
                      as="textarea"
                      value={rowData[key] || ""}
                      readOnly
                      style={{ height: "200px" }}
                    />
                  ) : isXML ? (
                    <div style={{ height: "300px" }}>
                      <CodeMirror
                        value={formattedXML}
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
