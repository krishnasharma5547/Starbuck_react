import React from 'react'

export default function SectionHeading(props) {
    return (
            <div className="text-center">
                <h1 className="text-3xl font-bold">{props.title}</h1>
                <p className="mt-4 text-lg mx-auto max-w-3xl ">
                    {props.desc}
                </p>
            </div>
    )
}
