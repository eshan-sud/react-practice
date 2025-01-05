import React from 'react'

export const Checkbox = (props) => {
    return (
        <>
        <div className="p-2 flex items-center gap-x-1">
            <input className="blue-500 cursor-pointer" id={props.name} type="checkbox"
            defaultChecked={props.state}
            onChange={(event) => {props.setState((prevState) => !prevState);}} />
            <label className="text-blue-500 cursor-pointer" htmlFor={props.name}>{props.name}</label>
        </div>
        </>
    )
}
