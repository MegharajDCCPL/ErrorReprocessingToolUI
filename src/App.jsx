import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/home/HomePage";
import DashboardPage from "./pages/dashboard/DashBoardPage";
import ReprocessPage from "./pages/reprocess/ReprocessPage";
import SettingsPage from "./pages/settings/SettingsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/homepage" element={<HomePage />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="reprocess" element={<ReprocessPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
