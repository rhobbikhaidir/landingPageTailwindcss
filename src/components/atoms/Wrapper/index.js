import React from "react";

const WrapperFull = (props) => {
  return <div className="h-max">{props.children}</div>;
};

const WrapperContent = (props) => {
  return <div className="sm:px-20 px-6">{props.children}</div>;
};

export { WrapperContent, WrapperFull };
