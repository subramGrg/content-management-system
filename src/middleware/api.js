import {
    apiStart,
    apiEnd
} from "../actions/api";

const BASE_URL = "https://online-products-api.herokuapp.com/api/v1/";

const apiMiddleware = ({ dispatch, }) => next => (action) => {
    if(action.type !== "api") {
        return next(action);
    }

    const { payload, } = action;

    dispatch(apiStart());

    fetch(BASE_URL + payload.url)
        .then(response => response.json())
        .then((data) => {
            dispatch({
                type: payload.success, data,
            });

            dispatch(apiEnd());
        });

    return next(action);
};

export { apiMiddleware };
