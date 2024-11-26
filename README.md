

# **RBAC Dashboard (Frontend)**

> **A frontend-only implementation of a Role-Based Access Control (RBAC) system using mock data for demonstration.**

This project showcases the design and development of an admin dashboard for managing users, roles, and permissions. The frontend is built with a focus on UI/UX, emphasizing clarity, functionality, and scalability.

---

## **Project Overview**

This RBAC dashboard is designed to provide administrators with an interface to manage users, roles, and permissions. It serves as a foundation for integrating dynamic backend functionalities in the future.

---

## **Features**

### **User Management**
- View all users in a tabular format.
- Add, edit, or delete users.
- Assign roles to users and toggle their status (Active/Inactive).

### **Role Management**
- Define new roles and edit existing ones.
- Assign permissions (e.g., Read, Write, Delete) to roles.
- Include role descriptions for clarity.

### **Permissions Management**
- View available permissions (Read, Write, Delete).
- Modify permissions dynamically through a user-friendly interface.

---

## **Tech Stack**

- **Frontend Framework:** React 
- **Styling:** Tailwind CSS 
- **Data Source:** Mock data file (`mockAPI.js`)

---

## **Getting Started**

### **Prerequisites**
- Node.js installed on your machine.
- A package manager like npm or yarn.

### **Setup Instructions**

1. **Clone the Repository**
   ```bash
   git clone https://github.com/22Yash/RBAC-.git
   cd rbac-dashboard
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Application**
   ```bash
   npm run dev
   ```

4. **Access the Application**
   - Open [http://localhost:5173](http://localhost:5173) (default Vite port) in your browser.

---

## **Project Structure**

```
src/
├── components/        # Reusable UI components
├── pages/             # Core pages (Dashboard, User Management, etc.)
├── mock/              # Mock data file (mockAPI.js)
├── App.js             # Main application file
└── index.js           # Entry point
```

---

## **Mock Data**

### **Users (`mockData.js`)**
```javascript
export const mockUsers = [
  { id: 1, name: "Alice", role: "Admin", active: true },
  { id: 2, name: "Bob", role: "Editor", active: false },
  { id: 3, name: "Charlie", role: "Viewer", active: true },
];
```

### **Roles (`mockData.js`)**
```javascript
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
  },
];
```

### **Permissions (`mockData.js`)**
```javascript
export const mockPermissions = ["Read", "Write", "Delete"];
```

---

