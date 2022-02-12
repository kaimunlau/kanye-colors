const ColorPicker = ({ colorChange }) => {
    return(
        <div>
            <input 
            className="color1" 
            type="color" 
            name="color1"
            onChange={colorChange}
            ></input>
            <input 
            className="color2" 
            type="color" 
            name="color2"
            onChange={colorChange}
            ></input><br/>
            <button>I want some magic</button>
        </div>
    )
}

export default ColorPicker;