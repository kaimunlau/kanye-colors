import { render } from "@testing-library/react";
import react, { Component } from "react";

class ColorPicker extends Component {
    render() {
        return(
            <div>
                <input type='color'></input>
                <input type='color'></input><br/>
                <button>I want some magic</button>
            </div>
        )
    }
}

export default ColorPicker;