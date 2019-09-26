import React from "react";
import { Link } from "react-router-dom";

interface AboutProps {
  username: string;
  match: { params: string };
}

const About = (props: AboutProps) => {
  console.log(props.match.params);
  const greeting = "Hello from About  Component!";
  return (
    <div>
      <h1>{greeting}</h1>
      <ul>
        <li>
          <Link to="/home">Go Back</Link>
        </li>
      </ul>
    </div>
  );
};

export default About;
