import { Component } from "react";

const ColorPicker = ({ colorChange, color1, color2 }) => {
    return(
        <div className='pa2'>
            <input 
            className="color1 ma2" 
            type="color" 
            name="color1"
            onChange={colorChange}
            value={color1}
            ></input>
            <input 
            className="color2 ma2" 
            type="color" 
            name="color2"
            onChange={colorChange}
            value={color2}
            ></input>
        </div>
    )
}

export default ColorPicker;