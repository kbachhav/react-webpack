import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import * as counterActions from '../../actions/counterActions';
import CounterComponent from '../../components/counter/CounterComponent';

class CounterContainer extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <CounterComponent {...this.props} />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        count: state.counterReducer
    };
}

// function mapDispatchToProps(dispatch) {
//     // var incAction = counterActions.incCounter();
//     return {
//         inc: (by) => dispatch(counterActions.incCounter(by)),
//         dec: (by) => dispatch(counterActions.decCounter(by))
//     };
// }

function mapDispatchToProps(dispatch) {
    return bindActionCreators(counterActions, dispatch);
}

// var componentEnhancer = connect(mapStateToProps, mapDispatchToProps);
// var enhanceCounterContainer = componentEnhancer(CounterContainer);
// export default enhanceCounterContainer;

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);