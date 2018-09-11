import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

function reducer (state, action) {
    if(action.type === "changeState") {
        return action.payload.newState;
    }

    return 'State';
    
}

function productReducer(state = [], action) {
    return state;
}

function userReducer(state = '', { type, payload }) {
    switch(type) {
        case "updateUser":
            return payload;
    }

    // return initial state
    return state;
}

const allReducers = combineReducers({
    products: productReducer,
    user: userReducer
})

// determine initial values for the states
const store = createStore(
    allReducers, {
    products: [{name: 'iphone'}],
    user: 'Michael'
    },
    window.devToolsExtension && window.devToolsExtension()
);

console.log("State in store: " + store.getState());

ReactDOM.render(<Provider store={store}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
