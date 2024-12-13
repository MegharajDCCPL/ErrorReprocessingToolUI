import { toast } from "react-toastify";

const showToast = (response) => {
  if (response) {
    const { text, type } = response; // Adjust to match API response structure

    switch (type !== undefined && type.toLowerCase()) {
      case "error":
        toast.error(text);
        break;
      case "success":
        toast.success(text);
        break;
      case "info":
        toast.info(text);
        break;
      case "warning":
        toast.warn(text);
        break;
      default:
        toast(text);
        break;
    }
  } else {
    console.warn("No message available in response");
  }
};

export default showToast;
