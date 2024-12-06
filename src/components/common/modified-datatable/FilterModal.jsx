import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const FilterModal = ({ show, onHide, columns, applyFilters, resetFilters }) => {
  const [filters, setFilters] = useState({});
  console.log("columns", columns);

  const handleFilterChange = (Header, value) => {
    setFilters((prev) => ({
      ...prev,
      [Header]: value,
    }));
  };

  const handleApply = () => {
    applyFilters(filters);
    onHide();
  };

  const handleReset = () => {
    setFilters({});
    resetFilters();
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Filters</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {columns.map((column) => (
            <Form.Group key={column.accessor} className="mb-3">
              <Form.Label>{column.Header}</Form.Label>
              <Form.Control
                type="text"
                placeholder={`Filter by ${column.Header}`}
                value={filters[column.accessor] || ""}
                onChange={(e) =>
                  handleFilterChange(column.accessor, e.target.value)
                }
              />
            </Form.Group>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" size="sm" onClick={handleReset}>
          Reset
        </Button>
        <Button variant="outline-primary" size="sm" onClick={handleApply}>
          Apply Filters
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FilterModal;
