import React, { useState, useEffect } from "react";

const Modal = ({ isOpen, onClose, onSubmit, type, initialData }) => {
  const [permissionName, setPermissionName] = useState("");

  // Initialize the state if we are editing an existing permission
  useEffect(() => {
    if (initialData) {
      setPermissionName(initialData); // Set permission name if editing
    } else {
      setPermissionName(""); // Reset for new permission
    }
  }, [initialData]);

  const handleSubmit = () => {
    if (!permissionName) return; // Do not submit if the permission name is empty

    const updatedPermission = permissionName.trim(); // Update or create new permission
    onSubmit(updatedPermission);
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div
          className="bg-white p-6 rounded-lg w-96"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-xl mb-4">
            {initialData ? `Edit ${type}` : `Create New ${type}`}
          </h3>
          <div className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="permissionName" className="text-gray-700 mb-2">
                Permission Name
              </label>
              <input
                type="text"
                id="permissionName"
                value={permissionName}
                onChange={(e) => setPermissionName(e.target.value)}
                className="border border-gray-400 p-2 rounded"
                placeholder="Permission Name"
              />
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
              onClick={handleSubmit}
            >
              {initialData ? "Save Changes" : "Add Permission"}
            </button>
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
