import store from "./store/store";
import action from "./actions/recipes";

store.dispatch(action("daal"));

window.store = store;
