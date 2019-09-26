import React from "react";
import { Link } from "react-router-dom";

interface AdminModuleProps {
  name: string;
}

const AdminModule = ({ name }: AdminModuleProps) => {
  const greeting = "Welcome(Admin Module)";
  return (
    <div>
      <h1>{greeting}</h1>
      <ul>
        <li>
          <Link
            to={{
              pathname: "/admin/adduser",
              state: {
                fromNotifications: true
              }
            }}
          >
            Add User
          </Link>
        </li>
        <li>
          <Link to="/admin/deleteuser">Delete User</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminModule;
