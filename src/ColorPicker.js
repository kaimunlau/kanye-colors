import { Component } from "react";

const ColorPicker = ({ colorChange, color1, color2 }) => {
    return(
        <div>
            <input 
            className="color1" 
            type="color" 
            name="color1"
            onChange={colorChange}
            value={color1}
            ></input>
            <input 
            className="color2" 
            type="color" 
            name="color2"
            onChange={colorChange}
            value={color2}
            ></input>
        </div>
    )
}

export default ColorPicker;