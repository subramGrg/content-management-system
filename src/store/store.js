import {
    createStore,
    applyMiddleware
} from "redux";
import { state } from "../state/state";
import reducer from "../reducers/root";
import api from "../middleware/api";

const store = createStore(reducer, state, applyMiddleware(api));

export default store;
