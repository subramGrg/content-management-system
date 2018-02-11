import recipeReducer from "./recipes";
import iconReducer from "./icon";

const rootReducer = (state, action) => (
    Object.assign({}, state, {
        recipes: recipeReducer(state.recipes, action),
        loading: iconReducer(state.loading, action),
    })
);

export default rootReducer;
