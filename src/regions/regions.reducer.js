import {
    FETCH_REGIONS,
    SET_REGIONS,
    LOAD_SPINNER,
    STOP_SPINNER
} from "../actionTypes";

const initState = {
    regions: [],
    loadSpinner: true,
};

export const regionsReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_REGIONS:
            return { ...state, regions: [...action.payload], };
        case LOAD_SPINNER:
            return { ...state, loadSpinner: action.loadSpinner, };
        default:
            return state;
    }
};
