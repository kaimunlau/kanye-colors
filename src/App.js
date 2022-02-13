import react, { Component } from "react";
import ColorPicker from './ColorPicker';
import KanyeQuoter from './KanyeQuoter';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            color1: 'red',
            color2: 'yellow'
        }
    }
    OnColorPickerChange = (event) => {
        if (event.target.className === "color1") {
            this.setState({ color1: event.target.value})
        } if (event.target.className === "color2") {
            this.setState({ color2: event.target.value})
        }
        document.body.style.background = `linear-gradient(to right, ${this.state.color1}, ${this.state.color2}`
        console.log(this.state)
    }
    render() {
        return (
            <>
            <div className='tc'>
                <h1>Gradient Background Generator</h1>
                <ColorPicker colorChange={this.OnColorPickerChange}/>
                <KanyeQuoter />
            </div>
            </>
        )
    }
}

export default App;