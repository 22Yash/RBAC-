import React from "react";

const PermissionTable = ({ permissions, onEdit, onDelete }) => {
  return (
    <div className="w-full p-6 rounded-lg bg-gradient-to-r from-[#060B28] via-[#0A0E23] to-[#060B28]">
      <h2 className="text-white font-bold text-lg mb-4">Permissions Table</h2>
      <table
        className="w-full text-left border-collapse table-fixed"
        style={{
          backdropFilter: "blur(120px)",
          width: "100%",
          padding: "22px 22px 0px",
          borderRadius: "20px",
          background: `linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)`,
        }}
      >
        <thead>
          <tr className="text-gray-400 text-sm border-b border-gray-700 h-[70px]">
            <th className="py-2 px-4 text-center w-1/2">Permission Name</th>
            <th className="py-2 px-7 text-center w-1/2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {permissions.map((permission, index) => (
            <tr
              key={index}
              className="text-center border-b border-gray-700 hover:bg-gray-800 transition-all"
            >
              <td className="py-4 px-4 font-bold text-white text-center w-1/2">
                {permission}
              </td>
              <td className="py-4 px-4 w-1/2">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded mx-1"
                  onClick={() => onEdit(permission)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded mx-1"
                  onClick={() => onDelete(permission)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PermissionTable;
