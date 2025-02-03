import React, { useEffect, useState } from "react";
import { Button, OverlayTrigger, Tooltip, Form } from "react-bootstrap";
import TableUtility from "../../components/common/data-table/TableUtility";
import styles from "./Interface.Module.css";
import EditIcon from "@mui/icons-material/Edit";
import ApiMethods from "../../utils/ApiMethods";
import ERT_API_URLS from "../../utils/ERTConfig";
import ErrorLogger from "../../components/common/ErrorLogger";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUser } from "../../components/common/UserProvider.jsx";
import ViewInterfaceModal from "./ViewInterfaceModal.jsx";

const ViewInterface = () => {
  const [gridData, setGridData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [interfaceModule, setInterfaceModule] = useState(false);
  const [currentRowData, setCurrentRowData] = useState(null);
  const { userDetails } = useUser();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    interfaceId: null,
    interfaceName: "",
    interfaceType: "",
    description: "",
  });

  let retryPatchCount = 0;

  useEffect(() => {
    fetchInterfaceList();
  }, []);

  const fetchInterfaceList = async () => {
    try {
      const response = await ApiMethods.handleApiGetAction(
        `${ERT_API_URLS.InterfaceList_URL}/15`, //serverId has to be updated once userdetails updated with server Id
        "Interface Not Found",
        0,
        setLoading,
        setGridData
      );
      if (response?.length) {
        setGridData(response);
      }
    } catch (error) {
      ErrorLogger(error);
      toast.error("Error fetching interface list.");
    }
  };
  const resetForm = () => {
    try {
      setFormData({
        interfaceId: null,
        interfaceName: "",
        interfaceType: "",
        description: "",
      });
      handleClose;
    } catch (error) {
      ErrorLogger(error);
    }
  };

  const updateInterface = async (interfaceId, formData) => {
    const payload = {
      serverId: userDetails?.serverId || 15, // server Id should be added once Nexus api is updated with that server
      interfaceName:
        formData.interfaceName !== currentRowData.interfaceName
          ? formData.interfaceName
          : "",
      interfaceType:
        formData.interfaceType !== currentRowData.interfaceType
          ? formData.interfaceType
          : "",
      description:
        formData.description !== currentRowData.description
          ? formData.description
          : "",
    };
    try {
      await ApiMethods.handleApiPatchAction(
        `${ERT_API_URLS.InterfaceList_URL}/${interfaceId}`,
        formData,
        "",
        retryPatchCount,
        payload,
        setErrors,
        setLoading,
        "",
        `failed to update Interface`,
        resetForm
      );
      fetchInterfaceList();
    } catch (error) {
      ErrorLogger(error);
      toast.error("Error updating interface.");
    }
  };

  const handleInterfaceModules = (rowData) => {
    setCurrentRowData(rowData);
    setInterfaceModule(true);
  };

  const handleClose = () => {
    fetchInterfaceList();
    setInterfaceModule(false);
    setCurrentRowData(null);
    resetForm();
  };

  const gridColumns = [
    { Header: "Interface Id", accessor: "interfaceId", show: false },
    { Header: "Interface Name", accessor: "interfaceName" },
    { Header: "Interface Type", accessor: "interfaceType" },
    // { Header: "Server Name", accessor:"serverName" },
    {
      Header: "Server Name",
      Cell: () => <>{userDetails?.serverName || "N/A"}</>,
    },
    { Header: "Description", accessor: "description" },
    {
      Header: "Edit Interface",
      accessor: "edit",
      Cell: ({ row }) => (
        <OverlayTrigger
          placement="right"
          overlay={<Tooltip>Edit Interface</Tooltip>}
        >
          <Button
            variant="outline-primary"
            onClick={() => handleInterfaceModules(row.original)}
          >
            <EditIcon className="h-100" />
          </Button>
        </OverlayTrigger>
      ),
    },
  ];

  return (
    <>
      <div className="d-flex flex-column gap-3 ps-2 pe-2">
        <ToastContainer />
        <TableUtility
          gridColumns={gridColumns.filter((column) => column.show !== false)}
          gridData={gridData}
          pageSizes={[5, 10, 20]}
        />
      </div>
      {interfaceModule && (
        <ViewInterfaceModal
          show={interfaceModule}
          onHide={handleClose}
          currentRowData={currentRowData}
          onUpdate={updateInterface}
        />
      )}
    </>
  );
};

export default ViewInterface;
