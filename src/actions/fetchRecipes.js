const fetchRecipes = () => ({
    type: "api",
    payload: {
        url: "/orders.json",
        success: "SET-RECIPE",
    },
});

export default fetchRecipes;
