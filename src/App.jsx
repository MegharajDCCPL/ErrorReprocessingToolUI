import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/home/HomePage";
import DashboardPage from "./pages/dashboard/DashBoardPage";
import ReprocessPage from "./pages/reprocess/ReprocessPage";
import ArchivePage from "./pages/archive/ArchivePage";
import CloseErrorsPage from "./pages/closederrors/CloseErrorsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/homepage" element={<HomePage />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="reprocess" element={<ReprocessPage />} />
          <Route path="archive" element={<ArchivePage />} />
          <Route path="close" element={<CloseErrorsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
