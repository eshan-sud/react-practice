import '../index.css';
import React from 'react'

export const Slider = (props) => {
  return (
    <div className='p-2'>
        <input className="cursor-pointer" id="slider" type="range" min={6} max={50} value={props.state} onChange={(event) => {props.setState(event.target.value)}} />
        <label className="text-blue-500 lengthSlider cursor-pointer" htmlFor="slider"> Length ({props.state}) </label>
    </div>
  )}
