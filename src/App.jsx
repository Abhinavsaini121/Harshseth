import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout Page
import Dashboard from "./pages/Dashboard";

// Child Pages
import DashCompo from "./pages/DashCompo";
import Therapists from "./pages/Management/Therapists/Therapists";
import Listeners from "./pages/Management/Listeners/Listeners";
import Clients from "./pages/Management/Clients/Clients";
import Security from "./pages/Security/Security";
import Wallet from "./pages/Wallet/Wallet";
import Sessions from "./pages/Sessions/Sessions";
import Controls from "./pages/Controls/Controls";
import Availability from "./pages/Availability/Availability";
import Faq from "./pages/FAQ/Faq";
import Feedback from "./pages/Feedback/Feedback";
import Admin from "./pages/Admin/Admin";

// Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<DashCompo />} />
          <Route path="dashboard" element={<DashCompo />} />
          <Route path="therapists" element={<Therapists />} />
          <Route path="listeners" element={<Listeners />} />
          <Route path="clients" element={<Clients />} />
          <Route path="security" element={<Security />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="sessions" element={<Sessions />} />
          <Route path="controls" element={<Controls />} />
          <Route path="availability" element={<Availability />} />
          <Route path="faq" element={<Faq />} />
          <Route path="Feedback" element={<Feedback />} />
          <Route path="Admin" element={<Admin />} />
        </Route>
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
