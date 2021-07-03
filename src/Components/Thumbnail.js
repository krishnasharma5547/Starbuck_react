import React from "react";
import img from "../images/1.jpg";
export default function Thumbnail(props) {
  let img_size = "w-12"
  if (props.type !== "number"){
      img_size = "w-28";
  }
  return (
    <div className="flex flex-row md:flex-col space-y-8 max-w-sm">
      <div className="flex justify-center items-center mr-4 flex-shrink-0">
        <img className= {img_size } src={props.img} alt="Img Not Found" />
      </div>
      <div className="space-y-4 md:text-center text-justify">
        <h1 className="text-xl font-medium">{props.title}</h1>
        <p className="text-lg mt-40">{props.children}</p>
      </div>
    </div>
  );
}
