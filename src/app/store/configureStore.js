// import { createStore } from "redux";
// import rootReducer from "../reducers/index";

// export default function configureStore(preloadedState) {
//     return createStore(rootReducer, preloadedState);
// }

// 2. With Thunk
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import rootReducer from "../reducers/index";

export default function configureStore(preloadedState) {
    return createStore(rootReducer, preloadedState, applyMiddleware(thunk));
}