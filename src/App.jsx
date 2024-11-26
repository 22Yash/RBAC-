import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Roles from "./pages/Roles";
import Permissions from "./pages/Permissions";
import SignupForm from "./pages/SignupForm";
import bg from "../src/assets/img/bg3.png";

function AppContent() {
  const location = useLocation();
  const isSignupPage = location.pathname === "/";
  
  // Sidebar state for toggling visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div
      className="flex min-h-screen bg-black/10"
      style={{
        background: `url(${bg}) center center / 100% 100% no-repeat`,
        backgroundPosition: "left center",
        backgroundAttachment: "fixed",
      }}
    >
     
      {!isSignupPage && (
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      )}
      
     
      <div
        className={`flex-1 ${!isSignupPage ? (isSidebarOpen ? "sm:ml-[350px] ml-[80px]" : "ml-1") : ""}`}
      >
       
        {!isSignupPage && <Navbar />}
        
       
        <main className="p-0">
          <Routes>
            <Route path="/" element={<SignupForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/permissions" element={<Permissions />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
