import React from 'react';
import ErrorHandler from './common/ErrorHandler';
import NavigationComponent from './navigation/NavigationComponent';

class RootComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <ErrorHandler>
                    <NavigationComponent/>
                </ErrorHandler>
            </div>
        );
    }
}

export default RootComponent;