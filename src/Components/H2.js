import React from "react";

export default function H2(props) {
  return (
      <h2 className={"text-lg text-gray-500 " + props.classes}>
        {props.children}
      </h2>
  );
}
