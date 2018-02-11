const recipeReducer = (recipe = [], action) => {
    switch (action.type) {
        case "ADD-RECIPE":
            return recipe.concat({
                name: action.name,
            });
        default:
            // nothing
    }

    return recipe;
};

export default recipeReducer;
