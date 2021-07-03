import React from 'react'

export default function Button(props) {
    return (
      <div {...props.align}>
        <a
            className={"border  text-sm rounded-3xl py-1.5 px-5 h-9 " + props.classes}
            href={props.link}
        >
          {props.children}
        </a>
      </div>
    );
}
