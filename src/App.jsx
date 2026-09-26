import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import ChangePassword from "./pages/ChangePassword";
import ResumeValidation from "./pages/ResumeValidation";
import InterviewQuestionsTable from "./pages/InterviewQuestionsTable";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
<Route path="/profile" element={<Profile />} />
<Route path="/change-password" element={<ChangePassword />} />
<Route path="/InterviewQuestionsTable" element={<InterviewQuestionsTable />} />
<Route path="/resume-validation" element={<ResumeValidation />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;