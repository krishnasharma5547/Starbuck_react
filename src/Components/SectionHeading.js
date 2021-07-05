import React from 'react'

export default function SectionHeading(props) {
    let heading = "";
    if (props.heading_classes === "" | undefined | null) {
        heading = "text-3xl font-bold ";
    } else {
        heading = "";
    }
    return (

        <div className="text-center mt-12 sm:mt-24">
            <h1 className={heading + props.heading_classes}>{props.title}</h1>
            <p className={"mt-4 text-lg mx-auto max-w-3xl " + props.child_classes}>
                {props.children}
            </p>
        </div>
    )
}
