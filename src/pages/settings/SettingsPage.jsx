import React, { useEffect, useState, useRef } from "react";
import { Button, OverlayTrigger, Tooltip, Form } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import TableUtility from "../../components/common/data-table/TableUtility";
import styles from "./SettingsPage.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import ApiMethods from "../../utils/ApiMethods";
import ERT_API_URLS from "../../utils/ERTConfig";
import ErrorLogger from "../../components/common/ErrorLogger";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const SettingsPage = () => {
  const [formData, setFormData] = useState({
    interfaceId: null,
    interfaceName: "",
    userId: null,
    userName: "",
    emailId: "",
  });
  const [loading, setLoading] = useState(false);
  const [interfaceApiResponse, setInterfaceApiResponse] = useState([]);
  const [userOptions, setUserOptions] = useState([]);
  const [gridData, setGridData] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [isInterfaceSelected, setIsInterfaceSelected] = useState(false);
  const [selectInterfaceId, setSelectInterfaceId] = useState([]);
  const [usersToUpdate, setUsersToUpdate] = useState([]);
  const [userOption, setUserOption] = useState([]);
  const [interfaceUsersToRemove, setInterfaceUsersToRemove] = useState([]);
  const [archiveAll, setArchiveAll] = useState(false);

  const [errors, setErrors] = useState({});
  const typeaheadInterfaceRef = useRef();
  const typeaheadUserRef = useRef();
  let retryPatchCount = 0;
  useEffect(() => {
    fetchInterfaceList();
    fetchUserList();
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

  const fetchUserList = async () => {
    await ApiMethods.handleApiGetAction(
      // `https://localhost:7092/interfaceUser/users`,
      ERT_API_URLS.NX_Users_URL,
      "Users Not Found",
      0,
      setLoading,
      setUserOptions
    );
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
        userId: selected[0].userId,
        userName: selected[0].userName,
        emailId: selected[0].emailId,
      }));
    }
    setSelectedUsers(selected);
  };

  const handleAddUser = () => {
    const { interfaceId, userId, userName, emailId } = formData;

    // Validate inputs
    if (!interfaceId) {
      toast.info("Please select an interface before adding a user.");
      return;
    }

    if (!userId) {
      toast.info("Please enter a username.");
      return;
    }

    // Check for duplicate entries
    if (gridData.some((user) => user.userId === userId)) {
      toast.info("User already exists in the grid.");
      return;
    }

    // Add the user to the grid data
    setGridData((prevGridData) => [
      ...prevGridData,
      { interfaceId, userId, userName, emailId },
    ]);

    // Reset formData and typeahead
    setFormData((prevFormData) => ({
      ...prevFormData,
      userId: null,
      userName: "",
      emailId: "",
    }));

    if (typeaheadUserRef.current) {
      typeaheadUserRef.current.clear();
    }

    // Add user to the state for updates
    setUsersToUpdate((prevUsersToUpdate) => [
      ...prevUsersToUpdate,
      {
        interfaceId,
        userId,
        userName,
        emailId,
        isAdded: true,
      },
    ]);

    // toast.success("User added successfully!");
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

      // Removing the specific user from `gridData`
      const updatedGridUsers = gridData.filter(
        (user, index) =>
          !(
            user.interfaceUserId === userIdInGridToRemove && index === row.index
          )
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

  const filteredUserOptions = userOptions.filter(
    (user) => !gridData.some((gridUser) => gridUser.userId === user.userId)
  );

  const gridColumns = [
    { Header: "interface Id", accessor: "interfaceId", show: false },
    { Header: "interface user Id", accessor: "interfaceUserId", show: false },
    { Header: "User Id", accessor: "userId" },
    { Header: "Username", accessor: "userName" },
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
  ];

  const resetForm = () => {
    try {
      setFormData({
        interfaceId: null,
        interfaceName: "",
        userId: null,
        userName: "",
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
            userId: data.userId,
            userName: data.userName,
            emailId: data.emailId,
          });
        }
      });

      payload["interfaceUserListToAdd"] = interfaceUserListToAdd;
      payload["interfaceUsersToRemove"] = interfaceUsersToRemove; // Use the state here
      if (
        payload["interfaceUserListToAdd"].length === 0 &&
        payload["interfaceUsersToRemove"].length === 0
      ) {
        toast.info("No changes to submit.");
        return;
      }
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
        <ToastContainer />
        <div className="d-flex flex-column ">
          <div className={`${styles["Settings-interface"]} w-auto`}>
            <h5>Interface Group Management</h5>
            <div>
              <Form.Group style={{ width: "14rem" }}>
                <Form.Label>Select Interface</Form.Label>
                <Typeahead
                  id="interfaceId"
                  labelKey="interfaceName"
                  options={interfaceApiResponse}
                  placeholder="Choose an Interface..."
                  onChange={handleInterfaceChange}
                  // isLoading={loading}
                  ref={typeaheadInterfaceRef}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Select Users</Form.Label>
                <div className="d-flex">
                  <Typeahead
                    id="userId"
                    labelKey="userName"
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
      <div
        className={`d-flex justify-content-end gap-3 mb-2 me-3 ms-3 pt-2 border-top border-subtle`}
      >
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
