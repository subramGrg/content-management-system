const apiMiddleware = ({dispatch,}) => next => (action) => {
    if(action.type === "ADD-RECIPE") {
        console.log("In middleware");
    }

    next(action);
};

export default apiMiddleware;
