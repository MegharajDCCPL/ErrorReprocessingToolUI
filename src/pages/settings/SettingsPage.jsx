import React from "react";
import { Button, OverlayTrigger, Tooltip, Form } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import TableUtility from "../../components/common/modified-datatable/TableUtility";
import styles from "./SettingsPage.module.css";
// import DeleteIcon from "@mui/icons-material/Delete";
import DeleteIcon from "@mui/icons-material/Delete";
const SettingsPage = () => {
  const gridColumns = [
    { Header: "Username", accessor: "Username" },
    { Header: "Email", accessor: "EmailId" },
    {
      Header: "Action",
      accessor: "action",
      Cell: ({}) => (
        <div className={`${styles["btn-wrapper"]} d-flex gap-2`}>
          <OverlayTrigger
            placement="right"
            overlay={<Tooltip id="delete-tooltip">Delete</Tooltip>}
          >
            <Button
              id="delete-user-btn"
              className={`${styles["btn-delete"]}`}
              variant="outline-danger"
              onClick={() => handleDeleteApp()}
            >
              <DeleteIcon className={`${styles["btn-delete-icon"]} `} />
              {/* <DeleteIcon className={`${styles["btn-delete-icon"]} h-100`} /> */}
            </Button>
          </OverlayTrigger>
        </div>
      ),
    },
  ];

  const interfaceOptions = ["product", "lot", "componentIssue"];
  const userOptions = ["Dhruv1", "Dhruv2", "Dhruv3"];

  const gridData = [
    {
      Username: "Yathish",
      EmailId: "yathish123@gmail.com",
    },
    {
      Username: "Sanoj",
      EmailId: "Sanoj123@gmail.com",
    },
    {
      Username: "Sujit",
      EmailId: "Sujit123@gmail.com",
    },
    {
      Username: "Megharaj",
      EmailId: "Megharaj123@gmail.com",
    },
  ];

  return (
    <>
      {/* overflow-auto */}
      <div className="d-flex flex-column gap-4 overflow-auto d-flex flex-column h-75 ms-3 me-3 mt-3 mb-2 position-relative">
        <div className="">
          <h5>Enable Auto Services</h5>
          <div className={`${styles["Settings"]}`}>
            <div className="d-flex flex-row gap-3">
              <Form.Check
                className={`${styles["selected-object"]} ms-3`}
                custom="true"
                type="checkbox"
                id="reference-custom-checkbox"
                label="Archive All"
                // checked={isExportReferenceChecked}
                // onChange={(e) => handleExportReferenceCheck(e.target.checked)}
              />

              <Form.Check
                className={`${styles["selected-object"]} ms-3`}
                custom="true"
                type="checkbox"
                id="reference-custom-checkbox"
                label="Purge All"
                // checked={isExportReferenceChecked}
                // onChange={(e) => handleExportReferenceCheck(e.target.checked)}
              />
            </div>
          </div>
        </div>
        <div className="d-flex flex-column gap-2">
          <h5>Interface Group Management</h5>
          <div className={`${styles["Settings"]}`}>
            <Form.Group className="mb-4 gap-3 ">
              <div className="d-flex flex-column">
                <Form.Label className={`${styles["user-role-form-label"]}`}>
                  Select Interface
                </Form.Label>
                <Typeahead
                  // ref={(ref) => (typeaheadRef.current[1] = ref)}
                  className={`${styles["user-role-form-control"]} me-2`}
                  id="interfaceId"
                  labelKey="InterfaceName"
                  options={interfaceOptions}
                  filterBy={() => true}
                  inputProps={{ readOnly: true }}
                  placeholder="Choose an Interface..."
                  // onChange={handleAppChange}
                />
              </div>
              <div>
                <Form.Label className={`${styles["user-role-form-label"]}`}>
                  Select User
                </Form.Label>
                <div className="d-flex flex-row">
                  <Typeahead
                    // ref={(ref) => (typeaheadRef.current[1] = ref)}
                    className={`${styles["user-role-form-control"]} me-2`}
                    id="userId"
                    labelKey="userName"
                    options={userOptions}
                    filterBy={() => true}
                    inputProps={{ readOnly: true }}
                    placeholder="Choose a User..."
                    // onChange={handleAppChange}
                  />
                  <Button
                    id="add-app-btn"
                    variant="outline-success"
                    size="sm"
                    type="button"
                    className="ms-2"
                    // onClick={handleAddApp}
                  >
                    Add
                  </Button>
                </div>
              </div>
              <TableUtility
                gridColumns={gridColumns}
                gridData={gridData}
                pageSizes={[5, 10, 20]}
              />
            </Form.Group>
          </div>
        </div>
      </div>
      <div
        className={`${styles["buttons"]} d-flex justify-content-end gap-3 me-3 mb-2 ms-3 pt-2 border-top border-subtle`}
        id="Buttons"
      >
        <Button
          id="user-role-reset-btn"
          variant="outline-secondary"
          size="sm"
          // onClick={async () => await resetForm()}
        >
          Reset
        </Button>
        <Button
          id="user-role-create-btn"
          variant="outline-success"
          size="sm"
          type="submit"
          // onClick={async (e) => await handleSubmit(e)}
        >
          Submit
        </Button>
      </div>
    </>
  );
};

export default SettingsPage;
