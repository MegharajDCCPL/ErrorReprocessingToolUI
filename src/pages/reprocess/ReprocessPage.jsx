import Reprocess from "../../components/reprocess/Reprocess";
import styles from "../CommonPages.module.css";

const ReprocessPage = () => {
  // const { setSelectedComponentName } = useUser();

  // useEffect(() => {
  //   setSelectedComponentName("reprocess");
  //   postMessageToParent("PageName", "/ reprocess");
  // }, []);

  return (
    <div className="bg-light ms-2 d-flex flex-column h-100">
      <Reprocess />
    </div>
  );
};

export default ReprocessPage;
