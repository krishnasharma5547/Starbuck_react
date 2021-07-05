import React from "react";

export default function Heading(props) {
    return (
        <div>
            <h1 className={"text-2xl md:text-3xl font-bold " + props.classes}>
                {props.children}
            </h1>
        </div>
    );
}
