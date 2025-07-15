import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import JoinTheCommunity from "./pages/JoinTheCommunity";
import StudentLogin from "./pages/StudentLogin";
import EducatorLogin from "./pages/EducatorLogin";
import AdminLogin from "./pages/AdminLogin";
import InstitutionLogin from "./pages/InstitutionLogin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/join-the-community" element={<JoinTheCommunity />} />
      <Route path="/student-login" element={<StudentLogin />} />
      <Route path="/educator-login" element={<EducatorLogin />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/institution-login" element={<InstitutionLogin />} />
    </Routes>
  );
}

export default App;
