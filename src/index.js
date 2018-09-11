import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import productReducer from './reducers/product-reducer';
import userReducer from './reducers/user-reducer';

function reducer (state, action) {
    if(action.type === "changeState") {
        return action.payload.newState;
    }

    return 'State';
    
}

const allReducers = combineReducers({
    products: productReducer,
    user: userReducer
})

const store = createStore(
    allReducers, {
    // determine initial values for the states
    products: [{name: 'iphone'}],
    user: 'Michael'
    },
    window.devToolsExtension && window.devToolsExtension()
);

console.log("State in store: " + store.getState());

ReactDOM.render(<Provider store={store}><App randomProps="whatever"/></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
