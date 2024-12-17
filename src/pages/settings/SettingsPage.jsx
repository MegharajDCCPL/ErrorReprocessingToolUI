import React, { useEffect, useState, useRef } from "react";
import { Button, OverlayTrigger, Tooltip, Form } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import TableUtility from "../../components/common/data-table/TableUtility";
import styles from "./SettingsPage.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import ApiMethods from "../../utils/ApiMethods";
import ERT_API_URLS from "../../utils/ERTConfig";
import ErrorLogger from "../../components/common/ErrorLogger";

const SettingsPage = () => {
  const [formData, setFormData] = useState({
    interfaceId: null,
    interfaceName: "",
    username: "",
    emailId: "",
  });
  const [loading, setLoading] = useState(false);
  const [interfaceApiResponse, setInterfaceApiResponse] = useState([]);
  const [gridData, setGridData] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [isInterfaceSelected, setIsInterfaceSelected] = useState(false);
  const [selectInterfaceId, setSelectInterfaceId] = useState([]);
  const [usersToUpdate, setUsersToUpdate] = useState([]);
  const [userOption, setUserOption] = useState([]);
  const [interfaceUsersToRemove, setInterfaceUsersToRemove] = useState([]);

  const [errors, setErrors] = useState({});
  const typeaheadInterfaceRef = useRef();
  const typeaheadUserRef = useRef();
  let retryPatchCount = 0;
  useEffect(() => {
    fetchInterfaceList();
  }, []);

  const fetchUsersForInterface = async (selectInterfaceId) => {
    setLoading(true);
    try {
      const response = await ApiMethods.handleApiGetAction(
        `${ERT_API_URLS.UsersList_URL}/${selectInterfaceId}`,
        "Users Not found",
        0,
        setLoading,
        setGridData
      );
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchInterfaceList = async () => {
    await ApiMethods.handleApiGetAction(
      ERT_API_URLS.InterfaceList_URL,
      "Interface Not found",
      0,
      setLoading,
      setInterfaceApiResponse
    );
    if (interfaceApiResponse.length > 0) {
      setFormData((prevState) => ({
        ...prevState,
        interfaceId: interfaceApiResponse[0]?.interfaceId || null,
        interfaceName: interfaceApiResponse[0]?.interfaceName || "",
      }));
    }
  };

  const handleInterfaceChange = async (e) => {
    if (e[0]) {
      setIsInterfaceSelected(true);
      const selectedId = e[0].interfaceId;
      setSelectInterfaceId(selectedId);
      setFormData((prevState) => ({
        ...prevState,
        interfaceId: selectedId,
      }));
      fetchUsersForInterface(selectedId);
    }
  };

  const handleUserSelection = (selected) => {
    if (selected && selected[0]) {
      setFormData((prevState) => ({
        ...prevState,
        username: selected[0].username,
        emailId: selected[0].emailId,
      }));
    }
    setSelectedUsers(selected);
  };

  const handleAddUser = () => {
    const { interfaceId, username, emailId } = formData;

    // Validate input
    if (interfaceId && username) {
      // Update the grid data with the new user
      setGridData((prevGridData) => [
        ...prevGridData,
        { interfaceId, username, emailId },
      ]);

      // Reset formData
      setFormData((prevFormData) => ({
        ...prevFormData,
        username: "",
        emailId: "",
      }));

      // Maintain state for added users
      const newUserToUpdate = {
        interfaceId: interfaceId,
        username: username,
        emailId: emailId,
        isDeleted: undefined,
        isAdded: true,
      };

      setUsersToUpdate((prevUsersToUpdate) => {
        // Avoid adding duplicates
        if (!prevUsersToUpdate.some((user) => user.username === username)) {
          return [...prevUsersToUpdate, newUserToUpdate];
        }
        return prevUsersToUpdate;
      });

      // Clear the Typeahead after adding the user
      if (typeaheadRef.current && typeaheadRef.current[1]) {
        typeaheadRef.current[1].clear();
      }
    } else {
      console.log("Please select valid interfaceId and username");
    }
  };

  const handleDeleteUser = (row) => {
    try {
      const userIdInGridToRemove = row.original.interfaceUserId;

      // If `interfaceUserId` exists, add it to `interfaceUsersToRemove`
      if (userIdInGridToRemove !== undefined) {
        setInterfaceUsersToRemove((prevIds) => [
          ...prevIds,
          userIdInGridToRemove,
        ]);
      }

      // Removing the user from `gridData`
      const updatedGridUsers = gridData.filter(
        (user) => user.interfaceUserId !== userIdInGridToRemove
      );
      setGridData(updatedGridUsers);

      // Update `usersToUpdate` for added and deleted users
      const updatedUsersToUpdate = usersToUpdate.map((user) => {
        if (user.interfaceUserId === userIdInGridToRemove) {
          if (user.isAdded) {
            return { ...user, isAdded: undefined };
          }
          return { ...user, isDeleted: true };
        }
        return user;
      });
      setUsersToUpdate(updatedUsersToUpdate);
    } catch (error) {
      ErrorLogger(error);
    }
  };

  const userOptions = [
    { username: "Yathish", emailId: "Yathish@dhruvts.com" },
    { username: "Sanoj", emailId: "Sanoj@dhruvts.com" },
    { username: "Sujit Kumar", emailId: "Sujit@dhruvts.com" },
    { username: "Megharaj", emailId: "Megharaj@dhruvts.com" },
  ];

  const filteredUserOptions = userOptions.filter(
    (user) => !gridData.some((gridUser) => gridUser.username === user.username)
  );

  const gridColumns = [
    { Header: "interface Id", accessor: "interfaceId" },
    { Header: "interface user Id", accessor: "interfaceUserId" },
    { Header: "Username", accessor: "username" },
    { Header: "Email", accessor: "emailId" },
    {
      Header: "Action",
      accessor: "action",
      Cell: ({ row }) => (
        <div className={`${styles["btn-wrapper"]} d-flex `}>
          <OverlayTrigger
            placement="right"
            overlay={<Tooltip id="delete-tooltip">Delete</Tooltip>}
          >
            <Button
              className={`${styles["btn-delete"]}`}
              variant="outline-danger"
              onClick={() => handleDeleteUser(row)} // Pass row data here
            >
              <DeleteIcon className={`${styles["btn-delete-icon"]}`} />
            </Button>
          </OverlayTrigger>
        </div>
      ),
    },
    // console.log("myintid", row.interfaceUserId),
  ];

  const resetForm = () => {
    try {
      setFormData({
        interfaceId: null,
        interfaceName: "",
        username: "",
        emailId: "",
      });
      setGridData([]);
      setIsInterfaceSelected(false);
      setSelectedUsers([]);
      setUsersToUpdate([]);
      setInterfaceUsersToRemove([]);
      if (typeaheadInterfaceRef.current) {
        typeaheadInterfaceRef.current.clear();
      }
      if (typeaheadUserRef.current) {
        typeaheadUserRef.current.clear();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {};
      const interfaceUserListToAdd = [];

      gridData.forEach((data) => {
        if (data.interfaceUserId === undefined) {
          interfaceUserListToAdd.push({
            interfaceUserId: 0,
            interfaceId: data.interfaceId,
            username: data.username,
            emailId: data.emailId,
          });
        }
      });

      payload["interfaceUserListToAdd"] = interfaceUserListToAdd;
      payload["interfaceUsersToRemove"] = interfaceUsersToRemove; // Use the state here

      await ApiMethods.handleApiPatchAction(
        ERT_API_URLS.UsersList_URL,
        formData,
        "",
        retryPatchCount,
        payload,
        setErrors,
        setLoading,
        `Userslist updated`,
        `failed to update`,
        resetForm
      );

      console.log(payload);
    } catch (error) {
      ErrorLogger(error);
    }
  };

  return (
    <>
      <div
        style={{ height: "87vh" }}
        className={`${styles["Settings-page"]} d-flex flex-column overflow-auto ms-3 me-3 mt-3 mb-2 gap-3`}
      >
        <div>
          <h5>Enable Auto Services</h5>
          <div className={`${styles["Settings"]} d-flex flex-row`}>
            <Form.Check className="ms-3" type="checkbox" label="Archive All" />
            <Form.Check className="ms-3" type="checkbox" label="Purge All" />
          </div>
        </div>
        <div className="d-flex flex-column ">
          <h5>Interface Group Management</h5>
          <div className={`${styles["Settings-interface"]} w-auto`}>
            <div>
              <Form.Group style={{ width: "14rem" }}>
                <Form.Label>Select Interface</Form.Label>
                <Typeahead
                  id="interfaceId"
                  labelKey="interfaceName"
                  options={interfaceApiResponse}
                  placeholder="Choose an Interface..."
                  onChange={handleInterfaceChange}
                  isLoading={loading}
                  ref={typeaheadInterfaceRef}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Select Users</Form.Label>
                <div className="d-flex">
                  <Typeahead
                    id="userId"
                    labelKey="username"
                    options={filteredUserOptions}
                    placeholder="Choose Users..."
                    onChange={handleUserSelection}
                    ref={typeaheadUserRef}
                  />
                  <Button
                    variant="outline-success"
                    size="sm"
                    className="ms-2"
                    onClick={handleAddUser}
                  >
                    Add
                  </Button>
                </div>
              </Form.Group>
              <Form.Group>
                <TableUtility
                  gridColumns={gridColumns.filter(
                    (column) => column.show !== false
                  )}
                  gridData={gridData}
                  pageSizes={[5, 10, 20]}
                />
              </Form.Group>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end  me-3 mb-2">
        <Button variant="outline-secondary" size="sm" onClick={resetForm}>
          Reset
        </Button>
        <Button
          variant="outline-success"
          size="sm"
          onClick={async (e) => await handleSubmit(e)}
        >
          Submit
        </Button>
      </div>
    </>
  );
};

export default SettingsPage;
