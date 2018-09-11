import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';

function reducer (state, action) {
    if(action.type === "changeState") {
        return action.payload.newState;
    }

    return 'State';
    
}

function productReducer(state = [], action) {
    return state;
}

function userReducer(state = '', action) {
    return state;
}

const allReducers = combineReducers({
    products: productReducer,
    user: userReducer
})


const store = createStore(allReducers);

console.log("State in store: " + store.getState());

const action = {
    type: "changeState",
    payload: {
        newState: "New State"
    }
};

store.dispatch(action);

console.log("State in store: " + store.getState());

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
