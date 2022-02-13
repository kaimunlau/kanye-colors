import { Component } from "react/cjs/react.production.min";

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: ''
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true, error: error })
    }

    render() {
        if (this.state.hasError) {
            console.log(this.state.error)
            return <h1>Ooooops. Kanye's got nothing to say :/</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry;