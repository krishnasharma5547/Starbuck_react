import React from 'react'

export default function H3(props) {
    return <h3 className={"text-base font-bold text-gray-500 " + props.classes}>{props.children}</h3>;
}
