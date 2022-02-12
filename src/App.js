import react, { Component } from "react";
import ColorPicker from './ColorPicker';
import KanyeQuoter from './KanyeQuoter';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            color1: '',
            color2: ''
        }
    }
    OnColorPickerChange = (event) => {
        if (event.target.className === "color1") {
            this.setState({ color1: event.target.value})
        } else if (event.target.className === "color2") {
            this.setState({ color2: event.target.value})
        }
        console.log(this.state)
    }
    render() {
        const { color1, color2 } = this.state;
        return (
            <>
            <div className='tc' style={{background: 'linear-gradient(to right, ${color1}, ${color2})'}}>
                <h1>Gradient Background Generator</h1>
                <ColorPicker colorChange={this.OnColorPickerChange}/>
                <KanyeQuoter />
            </div>
            </>
        )
    }
}

export default App;