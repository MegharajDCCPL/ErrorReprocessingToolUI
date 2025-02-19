import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const showToast = (response) => {
  if (response) {
    const { text, type } = response;

    const options = { className: "toastify-font-sora" };

    switch (type !== undefined && type.toLowerCase()) {
      case "error":
        toast.error(text, options);
        break;
      case "success":
        toast.success(text, options);
        break;
      case "info":
        toast.info(text, options);
        break;
      case "warning":
        toast.warn(text, options);
        break;
      default:
        toast(text, options);
        break;
    }
  } else {
    console.warn("No message available in response");
  }
};

export default showToast;
