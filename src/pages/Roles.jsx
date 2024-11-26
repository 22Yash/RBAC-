import React, { useState } from "react";
import RoleTable from "../components/RoleTable";
import { mockRoles } from "../mock/mockAPI";
import Modal from "../components/Modal";

const Roles = () => {
  const [roles, setRoles] = useState(mockRoles);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  const handleEdit = (role) => {
    setSelectedRole(role);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    setRoles(roles.filter((role) => role.id !== id));
  };

  const handleModalSubmit = (updatedRole) => {
    if (selectedRole) {
      setRoles(
        roles.map((role) =>
          role.id === selectedRole.id ? { ...role, ...updatedRole } : role
        )
      );
    } else {
      setRoles([...roles, { id: Date.now(), ...updatedRole }]);
    }
  };

  // Handle saving updated permissions from the RoleTable
  const handleSavePermissions = (roleId, updatedPermissions) => {
    setRoles(
      roles.map((role) =>
        role.id === roleId ? { ...role, permissions: updatedPermissions } : role
      )
    );
  };

  return (
    <div className="p-6  min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-white">Roles</h2>
      </div>
      <RoleTable
        roles={roles}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onSave={handleSavePermissions}
      />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleModalSubmit}
        type="Role"
        initialData={selectedRole}
      />
    </div>
  );
};

export default Roles;
