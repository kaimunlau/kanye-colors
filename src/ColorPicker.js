const ColorPicker = ({ colorChange }) => {
    return(
        <div>
            <input 
            className="color1" 
            type="color" 
            name="color1"
            onChange={colorChange}
            defaultValue='#FF0000'
            ></input>
            <input 
            className="color2" 
            type="color" 
            name="color2"
            onChange={colorChange}
            defaultValue='#FFFF00'
            ></input><br/>
            <button>I want some magic</button>
        </div>
    )
}

export default ColorPicker;