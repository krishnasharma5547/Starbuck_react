import React from "react";

export default function ImportantText(props) {
  return (
    <span class={"underline text-primary-400 hover:no-underline cursor-pointer " + props.classes}>
      {props.children}
    </span>
  );
}
