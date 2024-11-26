import React, { useState, useEffect } from "react";
import UserTable from "../components/UserTable";

const Users = () => {
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : mockUsers; // Fallback to mockUsers if no data in localStorage
  });

  const [currentUser, setCurrentUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Save users to localStorage whenever the users array changes
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleEdit = (user) => {
    setCurrentUser(user);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser((prevUser) => ({
      ...prevUser,
      [name]: name === "active" ? value === "true" : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // If we are editing an existing user
    if (currentUser.id) {
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === currentUser.id ? currentUser : user))
      );
    } else {
      // If we're adding a new user, create a new user object
      const newUser = { id: Date.now(), ...currentUser };
      setUsers([...users, newUser]);
    }

    // Close the modal and reset currentUser
    setCurrentUser(null);
    setIsModalOpen(false);
  };

  return (
    <div className="sm:p-6 min-h-screen">
      <div className="flex xl:justify-between xl:items-center xl:flex-row flex-col mb-6">
        <h2 className="text-3xl font-bold text-white">Users</h2>
        <button
          onClick={() => {
            setCurrentUser({ name: "", role: "", active: true }); // Initialize a new user
            setIsModalOpen(true); // Open modal for adding new user
          }}
          className="bg-green-500 text-white xl:px-6 xl:py-2 w-[120px] xl:w-[200px] p-[4px] mt-[10px] xl:mt-[0px] rounded-md hover:bg-green-600 shadow-lg"
        >
         + Add User
        </button>
      </div>
      <UserTable users={users} onEdit={handleEdit} onDelete={handleDelete} />

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md w-96 shadow-xl">
            <h3 className="text-2xl mb-4">
              {currentUser?.id ? "Edit User" : "Add New User"}
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2 ">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={currentUser?.name || ""}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 w-full rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
              <label className="block mb-2">Role:</label>
              <select
                name="role"
                value={currentUser?.role || "Viewer"} // Default to "Viewer"
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full rounded-md"
              >
                <option value="Admin">Admin</option>
                <option value="Editor">Editor</option>
                <option value="Viewer">Viewer</option>
              </select>
            </div>
              <div className="mb-4">
                <label className="block mb-2">Status:</label>
                <select
                  name="active"
                  value={currentUser?.active || true}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 w-full rounded-md"
                >
                  <option value={true}>Active</option>
                  <option value={false}>Inactive</option>
                </select>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded-md"
                >
                  {currentUser?.id ? "Save Changes" : "Add User"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
