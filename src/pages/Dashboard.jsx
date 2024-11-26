import React from "react";
import { MdDashboard } from "react-icons/md";
import bg from "../assets/img/bg.webp"

const Dashboard = () => {
  return (
    <div className="p-6   h-screen"
   >
      
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-[#000] p-6 rounded-[20px] shadow-sm shadow-gray-100 "
             style={{
              background: `linear-gradient(127.09deg, rgba(6, 11, 10, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)`,
              WebkitBackgroundClip: "border-box", // For gradient only inside the border area
              backgroundClip: "border-box",
            }}       >
          <h3 className="text-xl text-gray-300 font-bold mb-2">Users</h3>
          <p className="text-white">
            Manage all registered users in the system.
          </p>
        </div>
        <div className="bg-[#000] p-6 rounded-[20px] shadow-sm shadow-gray-100 "
         style={{
          background: `linear-gradient(127.09deg, rgba(6, 11, 10, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)`,
          WebkitBackgroundClip: "border-box", // For gradient only inside the border area
          backgroundClip: "border-box",
        }}  >
          <h3 className="text-xl text-gray-300 font-bold mb-2">Roles</h3>
          <p className="text-white">Define and assign roles to users.</p>
        </div>
        <div className="bg-white p-6 rounded-[20px] shadow-lg "
        style={{
          background: `linear-gradient(127.09deg, rgba(6, 11, 10, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)`,
          WebkitBackgroundClip: "border-box", // For gradient only inside the border area
          backgroundClip: "border-box",
        }}>
          <h3 className="text-xl  text-gray-300 font-bold mb-2">Permissions</h3>
          <p className="text-white">
            Set permissions for each role and user.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
