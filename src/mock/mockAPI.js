export const mockUsers = [
    { id: 1, name: "Alice", role: "Admin", active: true },
    { id: 2, name: "Bob", role: "Editor", active: false },
    { id: 3, name: "Charlie", role: "Viewer", active: true },
  ];
  
  export const mockRoles = [
    { 
      id: 1, 
      name: "Admin", 
      permissions: ["Read", "Write", "Delete"], 
      description: "Full system access, including the ability to read, write, and delete data."
    },
    { 
      id: 2, 
      name: "Editor", 
      permissions: ["Read", "Write"], 
      description: "Can read and write content, but cannot delete data."
    },
    { 
      id: 3, 
      name: "Viewer", 
      permissions: ["Read"], 
      description: "Can only view content, with no permission to write or delete."
    }
  ];
  
  
  export const mockPermissions = ["Read", "Write", "Delete"];
  