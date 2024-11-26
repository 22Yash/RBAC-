import React, { useState } from "react";

const RoleTable = ({ roles, onEdit, onDelete }) => {
  const [editRoleId, setEditRoleId] = useState(null);
  const [roleData, setRoleData] = useState({
    name: "",
    description: "",
    permissions: {
      read: false,
      write: false,
      delete: false,
    },
  });

  // Handle checkbox changes for permissions
  const handleCheckboxChange = (e) => {
    setRoleData({
      ...roleData,
      permissions: {
        ...roleData.permissions,
        [e.target.name]: e.target.checked,
      },
    });
  };

  // Pre-fill the modal with role data when editing
  const handleEditClick = (role) => {
    setEditRoleId(role.id);
    setRoleData({
      name: role.name,
      description: role.description,
      permissions: {
        read: role.permissions.includes("Read"),
        write: role.permissions.includes("Write"),
        delete: role.permissions.includes("Delete"),
      },
    });
  };

  // Handle saving the changes
  const handleSave = () => {
    // Here you can handle saving the updated role data
    const updatedRole = {
      id: editRoleId,
      name: roleData.name,
      description: roleData.description,
      permissions: Object.keys(roleData.permissions).filter(
        (key) => roleData.permissions[key]
      ),
    };

    console.log("Updated Role: ", updatedRole);

    // Reset the edit state after saving
    setEditRoleId(null);
  };

  return (
    <div className="w-[420px] xl:w-full p-6  ml-[-20px] xl:ml-[0px] rounded-lg bg-[#263180]">
      <h2 className="text-white font-bold text-lg mb-4">Roles Table</h2>
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
            <th className="py-2 px-4 text-center w-1/4">Role Name</th>
            <th className="py-2 px-7 text-center w-1/4">Permissions</th>
            <th className="py-2 px-4 text-center w-1/4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr
              key={role.id}
              className="text-center border-b border-gray-700 hover:bg-gray-800 transition-all"
            >
              <td
                
              >
               <span
            className={`px-5 py-3 rounded-[10px] text-sm font-semibold ${
              role.name === "Admin"
                ? "bg-blue-500 text-white"
                : role.name === "Editor"
                ? "bg-green-500 text-white"
                : "bg-gray-400 text-white"
            }`}
          >
            {role.name}
          </span>
              </td>
              <td className="py-4 px-4 text-white text-sm w-1/4">
                {role.permissions.join(", ")}
              </td>
              <td className="py-4 px-4 xl:w-1/4 w-[120px] flex flex-col gap-[10px] xl:flex-row">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded mx-1"
                  onClick={() => handleEditClick(role)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded mx-1"
                  onClick={() => onDelete(role.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Role Modal */}
      {editRoleId && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setEditRoleId(null)}
        >
          <div
            className="bg-white p-6 rounded-lg w-96"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl mb-4">Edit Role</h3>

            {/* Role Name */}
            <div className="mb-4">
              <label htmlFor="roleName" className="text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="roleName"
                value={roleData.name}
                onChange={(e) =>
                  setRoleData({ ...roleData, name: e.target.value })
                }
                className="mt-2 w-full p-2 border rounded"
              />
            </div>

            {/* Role Description */}
            <div className="mb-4">
              <label htmlFor="roleDescription" className="text-gray-700">
                Description
              </label>
              <textarea
                id="roleDescription"
                value={roleData.description}
                onChange={(e) =>
                  setRoleData({ ...roleData, description: e.target.value })
                }
                className="mt-2 w-full p-2 border rounded"
              />
            </div>

            {/* Permissions */}
            <div className="space-y-4 mb-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="read"
                  name="read"
                  checked={roleData.permissions.read}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <label htmlFor="read" className="text-gray-700">
                  Read
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="write"
                  name="write"
                  checked={roleData.permissions.write}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <label htmlFor="write" className="text-gray-700">
                  Write
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="delete"
                  name="delete"
                  checked={roleData.permissions.delete}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <label htmlFor="delete" className="text-gray-700">
                  Delete
                </label>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 flex justify-end">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => setEditRoleId(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoleTable;
