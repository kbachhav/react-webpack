import React, { Component } from 'react';

class ErrorHandler extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="row">
                    <h2 className="text-danger">Something went wrong!</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            );
        }
        return this.props.children || <h1 className="text-info">No Components to render!</h1>
    }

    componentDidCatch(error, info) {
        this.setState({
            hasError: true, error: error, errorInfo: info
        });
    }
}

export default ErrorHandler;

// import React, { Component } from 'react';

// class ErrorHandler extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { hasError: false };
//     }

//     render() {
//         if (this.state.hasError) {
//             //Fallback Component
//             return <h1 className="text-danger">Something went wrong!</h1>
//         }
//         return this.props.children;
//     }

//     componentDidCatch(error, info) {
//         this.setState({ hasError: true });
//         // Log the error to error service
//     }
// }

// export default ErrorHandler;