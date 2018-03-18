import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "../reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { RegionConnected } from "../regions";

const store = createStore(reducers, applyMiddleware(logger, thunk));

export default () => (
    <React.Fragment>
        <Provider store={store}>
            <RegionConnected />
        </Provider>
    </React.Fragment>
);
