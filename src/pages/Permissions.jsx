import React, { useState } from "react";
import PermissionTable from "../components/PermissionTable";
import { mockPermissions } from "../mock/mockApi";
import Modal from "../components/Modal";

const Permissions = () => {
  const [permissions, setPermissions] = useState(mockPermissions);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPermission, setSelectedPermission] = useState(null);

  // Handle editing an existing permission
  const handleEdit = (permission) => {
    setSelectedPermission(permission);
    setIsModalOpen(true);
  };

  // Handle deleting a permission
  const handleDelete = (permission) => {
    setPermissions(permissions.filter((perm) => perm !== permission));
  };

  // Handle submitting the modal (adding or updating permissions)
  const handleModalSubmit = (updatedPermission) => {
    if (selectedPermission) {
      // Edit an existing permission
      setPermissions(
        permissions.map((perm) =>
          perm === selectedPermission ? updatedPermission : perm
        )
      );
    } else {
      // Add a new permission
      setPermissions([...permissions, updatedPermission]);
    }
    setIsModalOpen(false);
    setSelectedPermission(null); // Reset selected permission after submit
  };

  return (
    <div className=" min-h-screen">
      <div className="flex mt-[20px] flex-col xl:flex-row xl:mt-[0px] justify-between items-center mb-6">
        <h2 className="sm:text-3xl font-bold text-white">Manage Permissions</h2>
        <button
          onClick={() => {
            setSelectedPermission(null);
            setIsModalOpen(true);
          }}
          className="bg-blue-600 text-white px-2 mt-[10px] sm:px-6 py-2 rounded-md hover:bg-blue-700 shadow-lg"
        >
          + Add Permission
        </button>
      </div>
      <PermissionTable
        permissions={permissions}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleModalSubmit}
          type="Permission"
          initialData={selectedPermission}
        />
      )}
    </div>
  );
};

export default Permissions;
