import React from "react";

interface NotFoundProps {
  username: string;
  location: { key: string; pathname: string };
}

const NotFound = (props: NotFoundProps) => {
  console.log(props);
  return (
    <div>
      {!props.location.key && (
        <h2>Error 404: Page: {props.location.pathname} not found </h2>
      )}
      {/* <p>Key: {props.location.key} not found </p> */}
    </div>
  );
};
export default NotFound;
