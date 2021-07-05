import React from "react";

export default function Pera(props) {
    return (
        <div>
            <p className={" text-base  max-w-3xl " + props.classes}>{props.children}</p>
        </div>
    );
}
