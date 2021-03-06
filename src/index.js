import React from "react";
import { render } from "react-dom";
import Root from './views/Root';
import MainTemplate from './templates/MainTemplate';
import './index.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers/reducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

function App() {
    return(
        <>
            <Provider store={store}>
                <MainTemplate>
                    <Root />
                </MainTemplate>
            </Provider>
        </>
    )
}

render(<App />, document.getElementById("root"));