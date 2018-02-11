import recipeReducer from "./recipes";

const rootReducer = (state, action) => (
    Object.assign({}, state, {
        recipes: recipeReducer(state.recipes, action),
    })
);

export default rootReducer;
