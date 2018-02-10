import { createStore } from "redux";
import reducer from "../reducers/root";
import initialState from "../state/index";

const store = createStore(reducer, initialState);

export default store;
