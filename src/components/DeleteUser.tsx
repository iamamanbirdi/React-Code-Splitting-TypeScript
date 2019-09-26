import React from "react";
import { Link } from "react-router-dom";

interface DeleteUserProps {
  username: string;
  match: { params: {} };
}

const DeleteUser = (props: DeleteUserProps) => {
  console.log(props.match.params);
  const greeting = "Delete User  Component!";
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

export default DeleteUser;
