import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateData, // This is a custom function that we supplied to our table instance
  type, // This is know what type of editable cell textbox or checkbox.
}) => {
  // We need to keep and update the state of the cell normally
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    if (type === "checkbox") {
      setValue(e.target.checked);
      updateData(index, id, e.target.checked);
    } else {
      setValue(e.target.value);
    }
  };

  // We'll only update the external data when the input is blurred
  const onBlur = () => {
    updateData(index, id, value);
  };

  // If the initialValue is changed external, sync it up with our state
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  if (type === "checkbox") {
    return <Form.Check checked={value} onChange={onChange} />;
  }

  return <Form.Control value={value} onChange={onChange} onBlur={onBlur} />;
};

export default EditableCell;
