import store from "./store/store";
import { add } from "./actions/addRecipes";

store.dispatch(add("Laksa"));

window.store = store;
