  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

  // Layout Page
  import Dashboard from "./pages/Dashboard";

  // Pages
  import DashCompo from "./pages/DashCompo";
  import Therapists from "./pages/Management/Therapists/Therapists";
  import Listeners from "./pages/Management/Listeners/Listeners";
  import Clients from "./pages/Management/Clients/Clients";
  import Security from "./pages/Security/Security";
  import Wallet from "./pages/Wallet/Wallet";
  import Sessions from "./pages/Sessions/Sessions";
  import Faq from "./pages/FAQ/Faq";
  import Login from "./pages/Login";
  import Admin from "./pages/Admin/Admin";
  import Contact from "./pages/Contact/Contact";
  import Terms from "./pages/Terms/Terms";

  // Toast
  import { ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  import Privecy from "./pages/Privecy/Privecy";

  function App() {
    return (
      <Router>
        <Routes>
          {/* Login Page */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />

          {/* Dashboard Layout with nested routes */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DashCompo />} />
            <Route path="therapists" element={<Therapists />} />
            <Route path="listeners" element={<Listeners />} />
            <Route path="clients" element={<Clients />} />
            <Route path="security" element={<Security />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="sessions" element={<Sessions />} />
            <Route path="faq" element={<Faq />} />
            <Route path="admin" element={<Admin />} />
            <Route path="contact" element={<Contact />} />
            <Route path="terms" element={<Terms />} />
            <Route path="privacy" element={<Privecy />} />
          </Route>
        </Routes>

        <ToastContainer />
      </Router>
    );
  }

  export default App;