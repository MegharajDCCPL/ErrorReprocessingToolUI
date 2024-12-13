import { useState, useRef, useEffect } from "react";
import TableUtility from "../common/modified-datatable/TableUtility";
import { Button, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-datepicker/dist/react-datepicker.css";
import ApiMethods from "../../utils/ApiMethods";
import ERT_API_URLS from "../../utils/ERTConfig";
import ErrorLogger from "../common/ErrorLogger";
import data from "../../data/Data";

const Reprocess = () => {
  const [formData, setFormData] = useState({
    MessageId: "",
    ErrorCode: "",
    Error: "",
    CriticalElement: "",
    CriticalElementName: "",
    AdapterType: "",
    MessageType: "",
    AdapterName: "",
    OriginalMessageContent: "",
  });
  const [showFilters, setShowFilters] = useState(false);
  const [isFilteredBtnClicked, setIsFilteredBtnClicked] = useState(false);
  const [initialfilteredDataApiRes, setInitialFilteredDataApiRes] = useState(
    {}
  );
  const [filteredDataApiRes, setFilteredDataApiRes] = useState({});
  const [filteredData, setFilteredData] = useState([]);
  const [dataRangeDrop, setDataRangeDrop] = useState("1-10000");
  const [allDataCount, setAllDataCount] = useState("");
  const [allDataCountApiRes, setAllDataCountApiRes] = useState([]);
  const [ranges, setRanges] = useState([]);
  const [loading, setLoading] = useState(false);
  let retryCount = 0;
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const typeaheadRef = useRef([]);

  const [selectedMessages, setSelectedMessages] = useState([]);
  const [interfaceTypeOptions, setInterfaceTypeOptions] = useState([
    { label: "Inbound" },
    { label: "Outbound" },
  ]);
  const [messageTypeOptions, setMessageTypeOptions] = useState([]);
  const [adapterTypeOptions, setAdapterTypeOptions] = useState([]);
  const [criticalElementOptions, setCriticalElementOptions] = useState([]);

  useEffect(() => {
    fetchDropdownData("MessageType");
    fetchDropdownData("AdapterType");
    fetchDropdownData("CriticalElementName");
  }, []);

  const fetchDropdownData = async (type) => {
    try {
      const apiUrl = `${ERT_API_URLS.Reprocess_URL}${type}`;
      const response = await ApiMethods.handleApiGetAction(
        apiUrl,
        "Error fetching data for dropdown",
        retryCount,
        setLoading
      );
      if (type === "MessageType") {
        setMessageTypeOptions(response || []);
      } else if (type === "AdapterType") {
        setAdapterTypeOptions(response || []);
      } else if (type === "CriticalElementName") {
        setCriticalElementOptions(response || []);
      }
    } catch (error) {
      ErrorLogger(error);
    }
  };

  useEffect(() => {
    try {
      if (allDataCount !== "") {
        generateRanges(allDataCount);
      }
    } catch (error) {
      ErrorLogger(error);
    }
  }, [allDataCount]);

  useEffect(() => {
    try {
      if (dataRangeDrop !== "") {
        const [start, end] = dataRangeDrop.split("-");
        let generateUrl = `${ERT_API_URLS.Reprocess_URL}startValue=${start}&endValue=${end}`;
        if (isFilteredBtnClicked) {
          let FilterURL = `${ERT_API_URLS.Reprocess_URL}`;
          Object.keys(formData).forEach((key) => {
            if (formData[key]) {
              FilterURL += `&${key}=${formData[key]}`;
            }
          });

          if (fromDate !== null) {
            FilterURL += `&fromDate=${formatDate(fromDate)}`;
          }
          if (toDate !== null) {
            // eslint-disable-next-line no-unused-vars
            FilterURL += `&toDate=${formatDate(toDate)}`;
          }
        }
        handleFilteredData(generateUrl);
      }
    } catch (error) {
      ErrorLogger(error);
    }
  }, [dataRangeDrop]);

  useEffect(() => {
    try {
      if (
        initialfilteredDataApiRes &&
        Object.keys(initialfilteredDataApiRes).length > 0
      ) {
        setFilteredData(initialfilteredDataApiRes["auditTrails"]);
      }
    } catch (error) {
      ErrorLogger(error);
    }
  }, [initialfilteredDataApiRes]);

  useEffect(() => {
    try {
      if (filteredDataApiRes && Object.keys(filteredDataApiRes).length > 0) {
        setFilteredData(filteredDataApiRes["auditTrails"]);
      }
    } catch (error) {
      ErrorLogger(error);
    }
  }, [filteredDataApiRes]);

  useEffect(() => {
    try {
      if (dataRangeDrop !== "") {
        const [start, end] = dataRangeDrop.split("-");
        handleFilteredDataCount(start, end);
      }
    } catch (error) {
      ErrorLogger(error);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (messageId) => {
    setSelectedMessages((prevSelected) => {
      if (prevSelected.includes(messageId)) {
        // If the message ID is already selected, uncheck it
        return prevSelected.filter((id) => id !== messageId);
      } else {
        // Otherwise, add it to the selected list
        return [...prevSelected, messageId];
      }
    });
  };

  const handleSelectAllChange = (e) => {
    if (e.target.checked) {
      setSelectedMessages(data.map((row) => row.messageId));
    } else {
      setSelectedMessages([]);
    }
  };

  const handleDropdownChange = async (selected, fieldName) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: selected.length > 0 ? selected[0].label : "",
    }));
  };

  const handleReprocess = async () => {
    console.log(selectedMessages);
  };

  const handleCloseError = async () => {
    console.log(selectedMessages);
  };

  const handleReset = () => {
    setFilteredData([]);
    setRanges([]);
    setAllDataCount("0");
    setFormData({
      MessageId: "",
      ErrorCode: "",
      Error: "",
      CriticalElement: "",
      CriticalElementName: "",
      AdapterType: "",
      MessageType: "",
      AdapterName: "",
      OriginalMessageContent: "",
    });
    typeaheadRef.current.forEach((ref) => {
      if (ref) {
        ref.clear();
      }
    });
    setFromDate(null);
    setToDate(null);
  };

  // Check if all individual checkboxes are selected
  const isAllSelected =
    data.length > 0 && selectedMessages.length === data.length;

  // Grid columns with checkboxes
  const gridColumns = [
    {
      Header: (
        <Form.Check
          custom="true"
          type="checkbox"
          id="selectAllCheckbox"
          checked={isAllSelected}
          onChange={handleSelectAllChange}
        />
      ),
      accessor: "Select",
      Cell: ({ row }) => (
        <Form.Check
          custom="true"
          type="checkbox"
          id={`checkbox-${row.original.messageId}`}
          checked={selectedMessages.includes(row.original.messageId)}
          onChange={() => handleCheckboxChange(row.original.messageId)}
        />
      ),
    },
    { Header: "Record Date", accessor: "recordDate" },
    { Header: "Message Type", accessor: "messageType" },
    { Header: "Message ID", accessor: "messageId" },
    { Header: "Critical Element", accessor: "criticalElement" },
    { Header: "Error", accessor: "error" },
    { Header: "Error Code", accessor: "errorCode" },
    { Header: "Adapter Type", accessor: "adapterType" },
    { Header: "Response", accessor: "response" },
    { Header: "Original Message Content", accessor: "originalMessageContent" },
    { Header: "Request", accessor: "request" },
  ];

  const handleFilter = async () => {
    try {
      let FilterURL = `${ERT_API_URLS.Reprocess_URL}`;

      // Append form data to URL
      Object.keys(formData).forEach((key) => {
        if (formData[key]) {
          FilterURL += `&${key}=${formData[key]}`;
        }
      });

      if (fromDate !== null) {
        FilterURL += `&fromDate=${formatDate(fromDate)}`;
      }
      if (toDate !== null) {
        FilterURL += `&toDate=${formatDate(toDate)}`;
      }

      await ApiMethods.handleApiGetAction(
        FilterURL,
        "Records doesn't exist.",
        retryCount,
        setLoading,
        setFilteredDataApiRes
      );
      // if (apiResponse !== null) {
      //   setAllDataCount(apiResponse["totalRecords"]);
      // } else {
      //   setAllDataCount("0");
      // }
    } catch (error) {
      ErrorLogger(error);
    }
  };

  const handleFilteredData = async (url) => {
    //calling Get method
    await ApiMethods.handleApiGetAction(
      url,
      "Records doesn't exist.",
      retryCount,
      setLoading,
      setInitialFilteredDataApiRes,
      "Error in fetching filtered data."
    );
  };

  const handleFilteredDataCount = async (startRow, endRow) => {
    //calling Get method
    const apiResponse = await ApiMethods.handleApiGetAction(
      `${ERT_API_URLS.Reprocess_URL}startValue=${startRow}&endValue=${endRow}`,
      "Records doesn't exist.",
      retryCount,
      setLoading,
      setAllDataCountApiRes,
      "Error in fetching filtered data count."
    );

    if (apiResponse !== null) {
      setAllDataCount(apiResponse["totalRecords"]);
    } else {
      setAllDataCount("0");
    }
  };

  const formatDate = (date) => {
    const pad = (num, size) => {
      let s = "000" + num;
      return s.substring(s.length - size);
    };
    const yyyy = date.getFullYear();
    const MM = pad(date.getMonth() + 1, 2);
    const dd = pad(date.getDate(), 2);
    const HH = pad(date.getHours(), 2);
    const mm = pad(date.getMinutes(), 2);
    const ss = pad(date.getSeconds(), 2);
    const SSS = pad(date.getMilliseconds(), 3);

    return `${yyyy}-${MM}-${dd} ${HH}:${mm}:${ss}.${SSS}`;
  };

  const handleFilterRangeDrop = (event) => {
    try {
      if (event[0] !== undefined && event.length > 0) {
        setDataRangeDrop(event[0]);
      } else {
        setDataRangeDrop("");
      }
    } catch (error) {
      ErrorLogger(error);
    }
  };

  const generateRanges = (totalCount) => {
    const rangeSize = 10000;
    const numRanges = Math.ceil(totalCount / rangeSize);
    const newRanges = [];

    if (numRanges === 1) {
      newRanges.push("1-10000");
    } else {
      for (let i = 0; i < numRanges; i++) {
        const start = i * rangeSize + 1;
        const end = Math.min((i + 1) * rangeSize, totalCount);
        newRanges.push(`${start}-${end}`);
      }
    }
    setRanges(newRanges);
  };

  return (
    <div className="">
      <div className="d-flex flex-wrap  mb-4 align-items-center gap-3">
        <div>
          <label className="module-header" style={{ fontSize: "18px" }}>
            Total Un-Processed Error (Error Count :{" "}
            {/* {allDataCount ? allDataCount : ""} */})
          </label>
        </div>
        <div className="d-flex flex-row">
          <label style={{ marginTop: "0.375rem" }}>Filtered Data Range</label>

          <Typeahead
            id="instance-range-typeahead"
            className="ms-2"
            style={{ width: "8.7rem" }}
            labelKey="name"
            options={ranges}
            defaultSelected={[{ name: "1-10000" }]}
            placeholder="Set range..."
            onChange={handleFilterRangeDrop}
            filterBy={() => true} // Disable filtering
            inputProps={{ readOnly: true }} // Make input field read-only
          />
        </div>
        <Button
          variant="outline-primary"
          size="sm"
          style={{ width: "7rem" }}
          onClick={() => setShowFilters((prev) => !prev)}
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </Button>
      </div>

      <div className="d-flex gap-3">
        {showFilters && (
          <div
            className="d-flex flex-column rounded border overflow-auto"
            style={{
              height: "76vh",
              width: "100vh",
            }}
          >
            <div className="flex-grow-1 overflow-auto">
              <Form>
                <div className="ms-2 mt-3 d-flex flex-wrap align-items-center gap-3 p-2">
                  <Form.Group controlId="MessageId">
                    <Form.Label>Message ID</Form.Label>
                    <Form.Control
                      type="text"
                      name="MessageId"
                      value={formData.MessageId}
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="ErrorCode">
                    <Form.Label>Error Code</Form.Label>
                    <Form.Control
                      type="text"
                      name="ErrorCode"
                      value={formData.ErrorCode}
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="Error">
                    <Form.Label>Error</Form.Label>
                    <Form.Control
                      type="text"
                      name="Error"
                      value={formData.Error}
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="CriticalElement">
                    <Form.Label>Critical Element</Form.Label>
                    <Form.Control
                      type="text"
                      name="CriticalElement"
                      value={formData.CriticalElement}
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="CriticalElementName">
                    <Form.Label>Critical Element Name</Form.Label>
                    <Typeahead
                      id="CriticalElementName"
                      labelKey="label"
                      options={criticalElementOptions}
                      filterBy={() => true}
                      inputProps={{ readOnly: true }}
                      selected={
                        formData.CriticalElementName
                          ? [{ label: formData.CriticalElementName }]
                          : []
                      }
                      onChange={(selected) =>
                        handleDropdownChange(selected, "CriticalElementName")
                      }
                      placeholder="Choose a Critical Element Name..."
                    />
                  </Form.Group>

                  <Form.Group controlId="AdapterType">
                    <Form.Label>Adapter Type</Form.Label>
                    <Typeahead
                      id="AdapterType"
                      labelKey="label"
                      options={adapterTypeOptions}
                      filterBy={() => true}
                      inputProps={{ readOnly: true }}
                      selected={
                        formData.AdapterType
                          ? [{ label: formData.AdapterType }]
                          : []
                      }
                      onChange={(selected) =>
                        handleDropdownChange(selected, "AdapterType")
                      }
                      placeholder="Choose an Adapter Type..."
                    />
                  </Form.Group>

                  <Form.Group controlId="AdapterName">
                    <Form.Label>Adapter Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="AdapterName"
                      value={formData.AdapterName}
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="MessageType">
                    <Form.Label>Message Type</Form.Label>
                    <Typeahead
                      id="MessageType"
                      labelKey="label"
                      options={messageTypeOptions}
                      filterBy={() => true}
                      inputProps={{ readOnly: true }}
                      selected={
                        formData.MessageType
                          ? [{ label: formData.MessageType }]
                          : []
                      }
                      onChange={(selected) =>
                        handleDropdownChange(selected, "MessageType")
                      }
                      placeholder="Choose a Message Type..."
                    />
                  </Form.Group>

                  <Form.Group controlId="InterfaceType">
                    <Form.Label>Interface Type</Form.Label>
                    <Typeahead
                      id="InterfaceType"
                      labelKey="label"
                      options={interfaceTypeOptions}
                      filterBy={() => true}
                      inputProps={{ readOnly: true }}
                      selected={
                        formData.InterfaceType
                          ? [{ label: formData.InterfaceType }]
                          : []
                      }
                      onChange={(selected) =>
                        handleDropdownChange(selected, "InterfaceType")
                      }
                      placeholder="Choose an Interface Type..."
                    />
                  </Form.Group>

                  <Form.Group controlId="OriginalMessageContent">
                    <Form.Label>Original Message Content</Form.Label>
                    <Form.Control
                      type="text"
                      name="OriginalMessageContent"
                      value={formData.OriginalMessageContent}
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <div>
                    <label className="me-2 mb-2" style={{ display: "grid" }}>
                      From Date
                    </label>
                    <DatePicker
                      id="fromDate"
                      selected={fromDate}
                      onChange={(date) => setFromDate(date)}
                      className="form-control"
                      dateFormat="MM/dd/yyyy"
                      showMonthDropdown
                      showYearDropdown
                      dropdownMode="select"
                      placeholderText="Choose a date"
                      maxDate={toDate || new Date()}
                    />
                  </div>
                  <div>
                    <label className="me-2 mb-2" style={{ display: "grid" }}>
                      To Date
                    </label>
                    <DatePicker
                      id="toDate"
                      selected={toDate}
                      onChange={(date) => setToDate(date)}
                      className="form-control"
                      dateFormat="MM/dd/yyyy"
                      showMonthDropdown
                      showYearDropdown
                      dropdownMode="select"
                      placeholderText="Choose a date"
                      minDate={fromDate}
                      maxDate={new Date()}
                    />
                  </div>
                </div>
              </Form>
            </div>
            <div className="d-flex justify-content-end gap-3 me-3 mb-2 position-sticky bottom-0 p-2">
              <Button
                variant="outline-secondary"
                size="sm"
                id="reset-btn"
                className="ms-2 mt-4"
                style={{ width: "7rem" }}
                onClick={handleReset}
              >
                Reset
              </Button>
              <Button
                variant="outline-primary"
                size="sm"
                className="mt-4"
                style={{ width: "7rem" }}
                onClick={async () => await handleFilter()}
              >
                Filter
              </Button>
            </div>
          </div>
        )}

        {/* Table Utility */}
        <div style={{ height: "76vh", overflowX: "auto" }}>
          <TableUtility
            gridColumns={gridColumns}
            gridData={data}
            pageSizes={[5, 10, 20]}
          />
        </div>
      </div>

      <div className="d-flex justify-content-end gap-3 pt-2 ms-3 me-3 border-top border-subtle">
        <Button
          id="close-errors-btn"
          variant="outline-danger"
          size="sm"
          onClick={async () => await handleCloseError()}
        >
          Close Error
        </Button>
        <Button
          id="reprocess-errors-btn"
          variant="outline-primary"
          size="sm"
          type="submit"
          onClick={async () => await handleReprocess()}
        >
          Reprocess
        </Button>
      </div>
    </div>
  );
};

export default Reprocess;
