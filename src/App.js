import react, { Component } from "react";
import ColorPicker from './ColorPicker';
import KanyeQuoter from './KanyeQuoter';

class App extends Component {
    render() {
        return (
            <>
            <div className='tc'>
                <h1>Gradient Background Generator</h1>
                <ColorPicker />
                <KanyeQuoter />
            </div>
            </>
            
        )
    }
}

export default App;