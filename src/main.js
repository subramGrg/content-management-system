import store from "./store/store";
import { add } from "./actions/addRecipes";
import loadUI from "./ui/main";

store.dispatch(add("Laksa"));
loadUI();
window.store = store;
