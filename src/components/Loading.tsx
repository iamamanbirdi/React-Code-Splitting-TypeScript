import React, { FunctionComponent } from "react";
import Loadable from "react-loadable";

interface LoadingProps extends Loadable.LoadingComponentProps {
  greeting?: string;
}

// const Loading = (props: LoadingProps) => {
const Loading: FunctionComponent<LoadingProps> = props => {
  console.log(props);
  const greeting = props.greeting ? props.greeting : "Loading...";
  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};

export default Loading;
