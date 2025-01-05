import React from 'react'
import { Colour } from './Colour.jsx'

export const ColourSelector = (props) => {
    const colourNames = [
        {id: 1, colourName: "red"},
        {id: 2, colourName: "green"},
        {id: 3, colourName: "blue"},
        {id: 4, colourName: "orange"},
        {id: 5, colourName: "black"}
        // , {if: 6, colourName: "white"}   
    ]
    return (
        <div className="flex justify-center fixed bottom-10 inset-x-0 px-2 m-5 bg-white border-4 rounded-full">
            {colourNames.map(
                (colour) =>{
                    return (<Colour name={colour.colourName} changeColour={props.changeColour} key= {colour.id}/>)
                }
            )}
        </div>
    )
}
