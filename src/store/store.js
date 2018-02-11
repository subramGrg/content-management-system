import { createStore } from "redux";
import { state } from "../state/state";
import reducer from "../reducers/root";

const store = createStore(reducer, state);

export default store;
