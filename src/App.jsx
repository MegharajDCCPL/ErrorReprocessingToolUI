import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/home/HomePage";
import DashboardPage from "./pages/dashboard/DashBoardPage";
import ReprocessPage from "./pages/reprocess/ReprocessPage";
import ArchivePage from "./pages/archive/ArchivePage";
import ReOpenErrorsPage from "./pages/reopenerrors/ReOpenErrorsPage";
import InterfaceGroupManagement from "./pages/General Configuration/InterfaceGroupManagement";
import PurgePage from "./pages/purge/PurgePage";
import LaunchPage from "./pages/launch/LaunchPage";
import InterfaceManagement from "./pages/General Configuration/InterfaceManagement";
import ActionReportPage from "./pages/actionreport/ActionReportPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LaunchPage />} />
        <Route path="/homepage" element={<HomePage />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="actionreport" element={<ActionReportPage />} />
          <Route path="reprocesserrors" element={<ReprocessPage />} />
          <Route path="archive" element={<ArchivePage />} />
          <Route path="reopenerrors" element={<ReOpenErrorsPage />} />
          <Route path="purge" element={<PurgePage />} />
          <Route
            path="InterfaceGroupManagement"
            element={<InterfaceGroupManagement />}
          />
          <Route path="InterfaceManagement" element={<InterfaceManagement />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
