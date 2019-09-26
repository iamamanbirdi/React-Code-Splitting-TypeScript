import React from "react";
import { Link } from "react-router-dom";
interface HomeProps {
  username: string;
}

const Home = (props: HomeProps) => {
  const greeting = "Hello from Home  Component!";
  return (
    <div>
      <h1>{greeting}</h1>
      <ul className="">
        <li>
          <Link to="/home">Go Back</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
