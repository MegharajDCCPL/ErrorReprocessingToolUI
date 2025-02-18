import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import styles from "./Interface.module.css";
import { useUser } from "../../components/common/UserProvider.jsx";
import { v4 as uuidv4 } from "uuid";
import { toast, ToastContainer } from "react-toastify";
import ErrorLogger from "../../components/common/ErrorLogger";
import ApiMethods from "../../utils/ApiMethods";
import ERT_API_URLS from "../../utils/ERTConfig";

function CreateInterface() {
  const options = { className: "toastify-font-sora" };
  const { userDetails } = useUser();
  const [loading, setLoading] = useState(false);
  const [uuid, setUuid] = useState(uuidv4());
  const [formData, setFormData] = useState({
    interfaceName: "",
    interfaceType: "",
    description: "",
  });
  const handleCreateInterface = async (e) => {
    e.preventDefault();
    if (!formData.interfaceName || !formData.interfaceType) {
      toast.error("Message Type Name and Type are required", options);
      return;
    }
    const payload = {
      interfaceId: 0,
      interfaceName: formData.interfaceName,
      interfaceType: formData.interfaceType,
      serverId: userDetails?.serverId,
      description: formData.description,
    };
    console.log("payload", payload);
    try {
      setLoading(true);
      await ApiMethods.handleApiPostAction(
        "",
        "POST",
        ERT_API_URLS.InterfaceList_URL,
        "",
        "Error in Creating Interface",
        "",
        setLoading,
        "",
        0,
        payload,
        uuid,
        setUuid
      );
      // toast.success("Interface created successfully!");
    } catch (error) {
      ErrorLogger(error);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      interfaceName: "",
      interfaceType: "",
      description: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Form
        id="interface-form"
        className={`${styles["form-group"]}d-flex flex-column overflow-auto ms-3 me-3 mt-3 mb-2 gap-3 h-100 position-relative`}
        // onSubmit={handleCreateInterface} // Handle form submission
      >
        <ToastContainer />
        <div
          style={{ height: "74vh" }}
          className="d-flex flex-column ps-2 overflow-auto"
        >
          <div className="d-flex flex-wrap align-items-center gap-3 ">
            <Form.Group className="mb-4" controlId="interfaceName">
              <Form.Label className={`${styles["form-label"]}`}>
                Message Type Name<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                className={`${styles["form-control-limited"]}`}
                name="interfaceName"
                placeholder="Enter Message Type Name"
                value={formData.interfaceName}
                onChange={handleInputChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Interface Name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-4" controlId="interfaceType">
              <Form.Label className={`${styles["form-label"]}`}>
                Interface Type<span className="text-danger">*</span>
              </Form.Label>
              <Form.Select
                className={`${styles["form-control-limited"]}`}
                name="interfaceType"
                value={formData.interfaceType}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Interface Type</option>
                <option value="inbound">Inbound</option>
                <option value="outbound">Outbound</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please select an Interface Type.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-4" controlId="serverName">
              <Form.Label className={`${styles["form-label"]}`}>
                Server Name<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                className={`${styles["form-control-limited"]} ${styles["read-only-field"]}`}
                name="serverName"
                value={userDetails?.serverName || ""}
                readOnly
                style={{ backgroundColor: "#f8f9fa", cursor: "not-allowed" }}
              />
            </Form.Group>
          </div>
          <div>
            <Form.Group className="mb-4" controlId="description">
              <Form.Label className={`${styles["form-label"]}`}>
                Description
              </Form.Label>
              <Form.Control
                as="textarea"
                className={`${styles["form-control-limited"]}`}
                name="description"
                rows={4}
                placeholder="Enter a description (optional)"
                value={formData.description}
                onChange={handleInputChange}
              />
            </Form.Group>
          </div>
        </div>
        <div
          className={`d-flex justify-content-end gap-3 mb-2 me-3 ms-3 pt-2 border-top border-subtle`}
          id="Buttons"
        >
          <Button
            id="user-role-reset-btn"
            variant="outline-secondary"
            size="sm"
            onClick={resetForm}
          >
            Reset
          </Button>
          <Button
            id="user-role-create-btn"
            variant="outline-success"
            size="sm"
            type="submit"
            disabled={loading}
            onClick={handleCreateInterface}
          >
            Submit
          </Button>
        </div>
      </Form>
    </>
  );
}

export default CreateInterface;
