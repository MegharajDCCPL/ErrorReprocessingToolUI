import axios from "axios";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import ErrorLogger from "../components/common/ErrorLogger";
import showToast from "./ToastMessages";

//general method for Post api action
const handleApiPostAction = async (
  formData,
  schema,
  apiUrl,
  successMessage,
  errorMessage,
  setErrors,
  setLoading,
  resetForm,
  retryCount,
  postData,
  uuid,
  setUuid
) => {
  try {
    if (formData != "" && schema != "") {
      await schema.validate(formData, { abortEarly: false });
    }

    // Send form data to backend using Axios
    const postResponse = await axios.post(apiUrl, postData, {
      headers: {
        "Content-Type": "application/json",
        UUID: uuid,
      },
      withCredentials: true,
    });

    if (Object.keys(postResponse.data).length != 1)
      showToast(postResponse.data);
    retryCount = 0;
    setLoading(false);
    setUuid(uuidv4());
    if (resetForm) {
      resetForm();
    }
    return postResponse.data;
  } catch (error) {
    ErrorLogger(error);
    if (error.name === "ValidationError") {
      // Form validation failed, set errors
      const errors = {};
      error.inner.forEach((validationError) => {
        errors[validationError.path] = validationError.message;
      });
      setErrors(errors);
    }
    // Network errors
    else if (
      error.response &&
      (error.response.status === 502 ||
        error.response.status === 503 ||
        error.response.status === 504)
    ) {
      if (retryCount < 10) {
        retryCount++;
        // Set loading to true to display loading indicator
        setLoading(true);
        // Retry sending request with the same data after 1 second
        setTimeout(
          () =>
            handleApiPostAction(
              formData,
              schema,
              apiUrl,
              successMessage,
              errorMessage,
              setErrors,
              setLoading,
              resetForm,
              retryCount,
              postData,
              uuid,
              setUuid
            ),
          1000
        );
      } else {
        // Exceeded retry attempts, display network issue message
        toast.error("Network issue. Please try again later.");
        // Set loading to false
        setLoading(false);
        setUuid(uuidv4());
      }
    }
    // Handled errors
    else if (error.response) {
      if (error.response.status === 400) {
        toast.error("Bad request. Please check your inputs.");
      } else if (error.response.status === 500) {
        toast.error(
          `An error has occurred. ERROR : ${error.response.data} Please contact Administrator and check log files for more information.`
        );
      } else if (error.response.status === 401) {
        if (error.response.data) toast.error(error.response.data);
        else toast.error("You are not authorized to make this request.");
      } else showToast(error.response.data);
      // Set loading to false
      setLoading(false);
      setUuid(uuidv4());
    } else {
      // toast.error(errorMessage);
      showToast(errorMessage);
    }
  }
};

//general method for Get api action
const handleApiGetAction = async (
  url,
  errorMessage,
  retryGetActionCount,
  setLoading,
  setApiResponse,
  setStatusCode
) => {
  try {
    const response = await axios.get(url, { withCredentials: true });
    if (response.status === 200) {
      setApiResponse(response.data);

      setLoading(false);
      if (setStatusCode) {
        setStatusCode(200);
      }
      retryGetActionCount = 0;
    }
    return response.data;
  } catch (error) {
    ErrorLogger(error);
    if (
      error.response &&
      (error.response.status === 502 ||
        error.response.status === 503 ||
        error.response.status === 504)
    ) {
      if (retryGetActionCount < 10) {
        retryGetActionCount++;
        // Set loading to true to display loading indicator
        setLoading(true);
        // Retry sending request with the same URL
        setTimeout(
          () =>
            handleApiGetAction(
              url,
              errorMessage,
              retryGetActionCount,
              setLoading,
              setApiResponse
            ),
          1000
        ); // Retry after 1 second
      } else {
        // Exceeded retry attempts, display network issue message
        toast.error("Network issue. Please try again later.");
        setLoading(false);
      }
    } else if (error.response) {
      if (error.response.status === 500) {
        toast.error(
          `An error has occurred. ERROR : ${error.response.data} Please contact Administrator and check log files for more information.`
        );
      } else if (error.response.status === 401) {
        if (error.response.data) showToast(error.response.data);
        else toast.error("You are not authorized to make this request.");
      } else if (error.response) showToast(error.response.data);
      else {
        toast.error(errorMessage);
      }

      setLoading(false);
    }
    return null;
  }
};

// creating this method for license-check

const handleApiGetLicenseCheck = async (
  url,
  errorMessage,
  retryGetActionCount,
  setLoading,
  setApiResponse,
  errorMessageWithoutStatus,
  setStatusCode
) => {
  try {
    const response = await axios.get(url, { withCredentials: true });

    if (setStatusCode != undefined) setStatusCode(response.status);

    if (response.status === 200) {
      if (setApiResponse !== "") {
        setApiResponse(response.data);
      }
      setLoading(false);
      retryGetActionCount = 0;
    }
    return response.data;
  } catch (error) {
    ErrorLogger(error);
    if (
      error.response &&
      (error.response.status === 502 ||
        error.response.status === 503 ||
        error.response.status === 504)
    ) {
      if (setStatusCode) {
        setStatusCode(error.response.status);
      }
      if (retryGetActionCount < 10) {
        retryGetActionCount++;
        // Set loading to true to display loading indicator
        setLoading(true);
        // Retry sending request with the same URL
        setTimeout(
          () =>
            handleApiGetAction(
              url,
              errorMessage,
              retryGetActionCount,
              setLoading,
              setApiResponse,
              errorMessageWithoutStatus
            ),
          1000
        ); // Retry after 1 second
      } else {
        // Exceeded retry attempts, display network issue message
        toast.error("Network issue. Please try again later.");
        setLoading(false);
      }
    } else if (error.response) {
      if (setStatusCode) {
        setStatusCode(error.response.status);
      }
      if (error.response.status === 204) {
        // toast.error(errorMessage);
        showToast(errorMessage);
      } else if (error.response.status === 500) {
        toast.error(
          `An error has occurred. ERROR : ${error.response.data} Please contact Administrator and check log files for more information.`
        );
      } else if (error.response.status === 401) {
        if (error.response.data) toast.error(error.response.data);
        else toast.error("You are not authorized to make this request.");
      } else {
        toast.error(errorMessageWithoutStatus);
      }
      showToast(error.response.data);
      setLoading(false);
    }
    return null;
  }
};

//general method for Delete api action
const handleApiDeleteAction = async (
  url,
  successMessage,
  errorMessage,
  name,
  retryDeleteActionCount,
  setLoading,
  errorMessageForConflict
) => {
  try {
    // Send request to API endpoint
    await axios["delete"](url, { withCredentials: true });
    toast.success(successMessage);
    setLoading(false);
    retryDeleteActionCount = 0;
    return true;
  } catch (error) {
    ErrorLogger(error);
    if (
      error.response &&
      (error.response.status === 502 ||
        error.response.status === 503 ||
        error.response.status === 504)
    ) {
      if (retryDeleteActionCount < 10) {
        retryDeleteActionCount++;
        // Set loading to true to display loading indicator
        setLoading(true);
        // Retry sending request with the same URL
        return new Promise((resolve, reject) => {
          setTimeout(async () => {
            try {
              const result = await handleApiDeleteAction(
                url,
                successMessage,
                errorMessage,
                name,
                retryDeleteActionCount,
                setLoading,
                errorMessageForConflict
              );
              resolve(result);
            } catch (retryError) {
              reject(retryError);
            }
          }, 1000); // Retry after 1 second
        });
      } else {
        // Exceeded retry attempts, display network issue message
        toast.error("Network issue. Please try again later.");
        setLoading(false);
        return false;
      }
    } else if (error.response) {
      // if (error.response.status === 409) {
      //   if (errorMessageForConflict !== "") {
      //     toast.error(errorMessageForConflict);
      //   } else {
      //     toast.error(error.response.data);
      //   }
      // } else
      // if (error.response.status === 404) {
      //   toast.error(name + " is not found.");
      // } else
      if (error.response.status === 500) {
        toast.error(
          `An error has occurred. ERROR : ${error.response.data} Please contact Administrator and check log files for more information.`
        );
      }
    } else if (error.response.status === 401) {
      if (error.response.data) showToast(error.response.data);
      else toast.error("You are not authorized to make this request.");
    } else {
      showToast(error.response.data);
    }
    showToast(error.response.data);
    setLoading(false);
  }
  return false;
};

const handleApiPatchAction = async (
  apiUrl,
  formData,
  schema,
  retryPatchCount,
  patchData,
  setErrors,
  setLoading,
  successMessage,
  errorMessage,
  resetForm
) => {
  try {
    if (formData != "" && schema != "") {
      await schema.validate(formData, { abortEarly: false });
    }
    const patchResponse = await axios.patch(apiUrl, patchData, {
      withCredentials: true,
    });
    if (patchResponse.status === 200) {
      // Reset error state for all fields
      if (setErrors !== null) {
        setErrors({});
      }

      toast.success(successMessage);
      setLoading(false);
      retryPatchCount = 0;
      if (resetForm !== "" && resetForm !== undefined) {
        resetForm();
      }
      return patchResponse.status; // Return the response object if status is 200
    }
  } catch (error) {
    ErrorLogger(error);
    if (error.name === "ValidationError") {
      // Form validation failed, set errors
      const errors = {};
      error.inner.forEach((validationError) => {
        errors[validationError.path] = validationError.message;
      });
      setErrors(errors);
    } else if (
      error.response &&
      (error.response.status === 502 ||
        error.response.status === 503 ||
        error.response.status === 504)
    ) {
      if (retryPatchCount < 10) {
        retryPatchCount++;
        // Set loading to true to display loading indicator
        setLoading(true);
        // Retry sending request with the same URL
        setTimeout(
          () =>
            handleApiPatchAction(
              apiUrl,
              formData,
              schema,
              retryPatchCount,
              patchData,
              setErrors,
              setLoading,
              successMessage,
              errorMessage,
              resetForm
            ),
          1000
        ); // Retry after 1 second
      } else {
        // Exceeded retry attempts, display network issue message
        toast.error("Network issue. Please try again later.");
        setLoading(false);
      }
    } else if (error.response) {
      if (error.response.status === 500) {
        toast.error(
          `An error has occurred. ERROR : ${error.response.data} Please contact Administrator and check log files for more information.`
        );
      } else if (error.response.status === 401) {
        if (error.response.data) showToast(error.response.data);
        else toast.error("You are not authorized to make this request.");
      } else {
        showToast(errorMessage);
      }
      showToast(error.response.data);
      setLoading(false);
    }
    // Return null if the status is not 200
    return null;
  }
};

const handleApiGetLicenseAction = async (
  url,
  errorMessage,
  retryGetActionCount,
  setLoading,
  setApiResponse,
  errorMessageWithoutStatus,
  setStatusCode
) => {
  try {
    const response = await axios.get(url, { withCredentials: true });
    if (setStatusCode !== undefined) setStatusCode(response.status);
    if (response.status === 200) {
      if (setApiResponse) setApiResponse(response.data);
      setLoading(false);
      retryGetActionCount = 0;
      return response.data;
    }
  } catch (error) {
    ErrorLogger(error);
    if (error.response) {
      const { status, data } = error.response;

      if ([502, 503, 504].includes(status)) {
        // Retry logic for network-related errors
        if (retryGetActionCount < 10) {
          retryGetActionCount++;
          setLoading(true);
          setTimeout(
            () =>
              handleApiGetLicenseAction(
                url,
                errorMessage,
                retryGetActionCount,
                setLoading,
                setApiResponse,
                errorMessageWithoutStatus,
                setStatusCode
              ),
            1000
          );
        } else {
          toast.error("Network issue. Please try again later.");
          setLoading(false);
        }
      } else {
        // Handle other HTTP errors
        if (status === 204) {
          showToast(errorMessage);
        } else if (status === 500) {
          toast.error(
            `An error has occurred. ERROR: ${data} Please contact Administrator and check log files for more information.`
          );
        } else if (status === 403 || status === 404) {
          let status = getStatusMessageFromError(data);
          let expirationDate = getExpirationDateFromError(data);
          let daysRemaining = data.toLowerCase().includes("expired") ? 0 : "-";
          setApiResponse({
            error: data,
            status,
            expirationDate,
            daysRemaining,
          });
        } else if (status === 401) {
          if (data) toast.error(data);
          else toast.error("You are not authorized to make this request.");
        } else {
          toast.error(getStatusMessageFromError(data));
        }
        setLoading(false);
      }
    } else {
      toast.error("An unknown error occurred.");
      setLoading(false);
    }
    return null;
  }
};

// Function to determine the status message based on keywords
const getStatusMessageFromError = (errorMessage) => {
  const lowerCaseMessage = errorMessage.toLowerCase();
  if (lowerCaseMessage.includes("expired")) {
    return "Expired";
  } else if (lowerCaseMessage.includes("not valid")) {
    return "Not valid";
  } else if (lowerCaseMessage.includes("not found")) {
    return "Not found";
  } else {
    return "An error has occurred.";
  }
};

const getExpirationDateFromError = (errorMessage) => {
  const lowerCaseMessage = errorMessage.toLowerCase();
  if (lowerCaseMessage.includes("expired")) {
    const parts = lowerCaseMessage.split(/on\s+/);
    if (parts.length > 1) return parts[1].trim().slice(0, -1).trim();
  }

  return "-";
};

const ApiMethods = {
  handleApiDeleteAction,
  handleApiPostAction,
  handleApiGetAction,
  handleApiPatchAction,
  handleApiGetLicenseCheck,
  handleApiGetLicenseAction,
};

export default ApiMethods;
