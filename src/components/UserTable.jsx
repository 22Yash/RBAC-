import React from "react";

const UserTable = ({ users, onEdit, onDelete }) => (
  <div className="xl:w-full w-[340px] sm:w-[460px]  sm:ml-[-90px] xl:ml-[-20px] p-2 xl:p-6 rounded-lg bg-[#263180] ">
    <h2 className="text-white font-bold text-lg mb-4">User Table</h2>
    <table
  className="xl:w-full text-left  border-collapse table-fixed"
  style={{
    backdropFilter: "blur(120px)",
    width: "100%",
    padding: "22px 22px 0px",
    borderRadius: "20px",
    background: `linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)`,
  }}
>
  <thead>
    <tr className="text-gray-400  text-center text-sm border-b border-gray-700 h-[70px]">
      <th className="py-2 px-4 text-center w-[80px]  xl:w-1/4">Name</th> 
      <th className="py-2 px-7  text-center w-[80px]  xl:w-1/4 ">Role</th> 
      <th className="py-2 px-4 text-center w-[80px]  xl:w-1/4">Status</th> 
      <th className="py-2 px-4 text-center w-[80px]  xl:w-1/4">Actions</th> 
    </tr>
  </thead>
  <tbody>
    {users.map((user) => (
      <tr
        key={user.id}
        className="text-center  border-b border-gray-700 hover:bg-gray-800 transition-all"
      >
        <td className="xl:py-4 w-[80px]  xl:w-2/4   py-9 px-4 text-white font-medium flex items-center text-center   space-x-3 ">
          
          <div>
            <p className="font-bold text-center" >{user.name}</p>
            <p className="text-gray-400 text-sm">{user.email}</p>
          </div>
        </td>

        <td className="ml-[-10px]  w-[80px]  xl:w-2/4  ">
          <span
            className={`px-5 py-3 rounded-[10px] text-sm font-semibold ${
              user.role === "Admin"
                ? "bg-blue-500 text-white"
                : user.role === "Editor"
                ? "bg-green-500 text-white"
                : "bg-gray-400 text-white"
            }`}
          >
            {user.role}
          </span>
        </td>

        <td className={`py-4 px-4 font-semibold w-[80px]  xl:w-2/4    ${user.active ? "text-green-500" : "text-red-500"}`}>
          {user.active ? "Active" : "Inactive"}
        </td>

        <td className="py-4 px-4 xl:w-1/4 ml-[-10px] w-[110px] flex flex-col gap-[10px] xl:flex-row">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mx-1"
            onClick={() => onEdit(user)}
          >
            Edit
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded mx-1"
            onClick={() => onDelete(user.id)}
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

export default UserTable;



