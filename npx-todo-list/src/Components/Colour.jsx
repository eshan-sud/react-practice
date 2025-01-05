import React from 'react'

export const Colour = (props) => {
    return (
        <>
            <button style={{backgroundColor: props.name, textTransform: 'capitalize'}}
            className="w-full py-4 px-10 text-white m-5 text-lg rounded-full hover:opacity-70"
            onClick={(event) => props.changeColour(event.target.innerHTML)}>{props.name}</button>
        </>
    )
}