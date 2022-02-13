import react, { Component, createRef } from "react";
import ColorPicker from './ColorPicker';
import KanyeQuoter from './KanyeQuoter';
import MagicButton from './MagicButton';
import ErrorBoundry from './ErrorBoundry';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            color1: '#FF0000',
            color2: '#FFFF00',
            quote: ''
        }
    }
    OnColorPickerChange = (event) => {
        if (event.target.className === "color1") {
            this.setState({ color1: event.target.value})
        } if (event.target.className === "color2") {
            this.setState({ color2: event.target.value})
        }
        document.body.style.background = `linear-gradient(to right, ${this.state.color1}, ${this.state.color2}`
    }
    MagicColorButtonClicked = (event) => {
        this.getKanyeQuote();
        this.assignRandomColors();
    }
    assignRandomColors() {
        const randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
        const randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
        this.setState({ color1: `#${randomColor1}`, color2: `#${randomColor2}` }, function () {
            document.body.style.background = `linear-gradient(to right, ${this.state.color1}, ${this.state.color2}`;
        });
    }
    getKanyeQuote() {
        fetch('https://api.kanye.rest/')
            .then(response => response.json())
            .then(json => this.setState({ quote: json.quote }));
    }
    render() {
        return (
            <>
            <div className='tc'>
                <h1>Gradient Background Generator</h1>
                <ColorPicker colorChange={this.OnColorPickerChange} color1={this.state.color1} color2={this.state.color2}/>
                <MagicButton magicButton={this.MagicColorButtonClicked}/>
                <ErrorBoundry>
                    <KanyeQuoter quote={this.state.quote}/>
                </ErrorBoundry>
            </div>
            </>
        )
    }
}

export default App;