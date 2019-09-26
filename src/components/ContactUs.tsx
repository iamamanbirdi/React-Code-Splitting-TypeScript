import React from "react";
import { Link } from "react-router-dom";

interface ContactUsProps {
  username: string;
}

const ContactUs = (props: ContactUsProps) => {
  const greeting = "Hello from Contact Us!";
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

export default ContactUs;
