import rootReducer from "../rootReducer/rootReducer"
import {createStore ,applyMiddleware,compose} from "redux"
import thunk from "redux-thunk";


// to see reducer in redux dev tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// middleware to help async call
const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);

const store = createStore(rootReducer,enhancer)

export default store;