const reducer = (state, action) => {
    switch(action.type) {
        case "ADD-RECIPE":
            return Object.assign({}, state, {
                recipes: state.recipes.concat({ name: action.name, }),
            });
        default:
            // nothing
    }

    return state;
};

export default reducer;
