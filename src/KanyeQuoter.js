import react, { Component } from "react";

class KanyeQuoter extends Component {
    componentDidMount() {
        console.log('kanye mounted')
    }
    render() {
        return (
            <>
                <p>
                    'This is a very inspirational quote'
                </p>
                <p>-Kanye</p>
            </>
        )
        
    }
}

export default KanyeQuoter;