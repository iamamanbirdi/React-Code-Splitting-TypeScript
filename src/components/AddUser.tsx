import React from "react";
import { Link } from "react-router-dom";

interface AddUserProps {
  username: string;
}

const AddUser = (props: AddUserProps) => {
  console.log(props);
  const greeting = "Add User Component!";
  return (
    <div>
      <h1>{greeting}</h1>
      <ul>
        <li>
          <Link to="/admin">Go Back</Link>
        </li>
      </ul>
    </div>
  );
};

export default AddUser;
