import store from "./store/store";
import { add } from "./actions/addRecipes";
import fetchRecipes from "./actions/fetchRecipes";
import loadUI from "./ui/main";

store.dispatch(add("Laksa"));
store.dispatch(fetchRecipes());
// loadUI();
window.store = store;
