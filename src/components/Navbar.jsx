import React from "react";
import { MdAccountCircle } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className=" mt-[30px] text-white py-3 px-6 flex items-center h-[50px] xl:h-[100px] justify-between shadow-md">
      <h1 className="sm:text-2xl font-bold">RBAC Dashboard</h1>
      <button className="flex items-center space-x-2 bg-blue-700 px-3 py-2 rounded-lg hover:bg-blue-800 transition-all">
        <MdAccountCircle size={24} />
        <span>Admin</span>
      </button>
    </nav>
  );
};

export default Navbar;
