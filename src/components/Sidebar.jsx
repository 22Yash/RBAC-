import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdDashboard, MdPeople, MdSecurity, MdSettings } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci"; // Importing the hamburger menu icon

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false); // State to manage collapse
  const location = useLocation();
  const activePath = location.pathname;

  const getMenuItemStyle = (path) => ({
    backgroundColor: activePath === path ? "#1a1e37" : "transparent",
    padding: "10px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    transition: "background-color 0.3s, color 0.3s",
    width: collapsed ? "40px" : "200px", // Adjust width based on collapse
    height: "50px",
  });

  return (
    <aside
      className={` bg-[#070c29] bg-transparent h-screen xl:m-[30px] z-40 xl:rounded-[30px] text-white border-2 border-white xl:h-[90vh] fixed shadow-lg transition-all duration-300 ${
        collapsed ? "w-[70px]" : "w-64"
      }`}
    >
     
      <div className="p-6 text-center border-b-2 border-white">
        <h2
          className={`text-[30px] text-center mt-[30px] ${collapsed ? "hidden" : "block"}`}
        >
          <span className="font-bold">VRV</span> System
        </h2>
        
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 ml-[-10px]  rounded mt-4"
        >
          <CiMenuBurger size={25} color="white" /> {/* Toggling button icon */}
        </button>
      </div>

      
      <ul className="p-4 space-y-4 xl:ml-[0px] xl:mt-[10px]">
        <li>
          <Link to="/dashboard" className="w-[150px] h-[40px]" style={getMenuItemStyle("/dashboard")}>
            <MdDashboard
              size={20}
              style={{
                backgroundColor: activePath === "/" ? "#1e90ff" : "transparent",
                borderRadius: "50%",
              }}
            />
            <span className={`${collapsed ? "hidden" : ""}`}>Main Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/users" style={getMenuItemStyle("/users")}>
            <MdPeople
              size={20}
              style={{
                backgroundColor: activePath === "/users" ? "#1e90ff" : "transparent",
                borderRadius: "50%",
              }}
            />
            <span className={`${collapsed ? "hidden" : ""}`}>Users</span>
          </Link>
        </li>
        <li>
          <Link to="/roles" style={getMenuItemStyle("/roles")}>
            <MdSecurity
              size={20}
              style={{
                backgroundColor: activePath === "/roles" ? "#1e90ff" : "transparent",
                borderRadius: "50%",
              }}
            />
            <span className={`${collapsed ? "hidden" : ""}`}>Roles</span>
          </Link>
        </li>
        <li>
          <Link to="/permissions" style={getMenuItemStyle("/permissions")}>
            <MdSettings
              size={20}
              style={{
                backgroundColor: activePath === "/permissions" ? "#1e90ff" : "transparent",
                borderRadius: "50%",
              }}
            />
            <span className={`${collapsed ? "hidden" : ""}`}>Permissions</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
