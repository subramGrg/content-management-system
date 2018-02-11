import store from "../store/store";

function uiLoader(){
    const { recipes, } = store.getState();
    const recipeHTML = recipe => `<li>${recipe.name}</li>`;

    return recipes.map(recipeHTML);
}

function loadUI() {
    document.querySelector("#app").innerHTML = uiLoader();
}

export default loadUI;
