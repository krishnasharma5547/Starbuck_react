import React from 'react'

export default function SocialLink(props) {
    return (
        <a class={"text-3xl" + props.classes} href={props.link}>
            <i class={"w-20 h-20  hover:border-2  " + props.icon}></i>
        </a>
    );
}
