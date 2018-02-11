import {
    createStore,
    applyMiddleware
} from "redux";
import { state } from "../state/state";
import reducer from "../reducers/root";
import { apiMiddleware as api } from "../middleware/api";
import logger from "redux-logger";

const store = createStore(reducer, state, applyMiddleware(api, logger));

export default store;
