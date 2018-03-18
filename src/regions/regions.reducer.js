import {
    FETCH_REGIONS,
    SET_REGIONS,
    LOAD_SPINNER,
    STOP_SPINNER
} from "../actionTypes";

const initState = {
    payload: null,
    loadSpinner: true,
};

export const regions = (region = initState, action) => {
    switch (action.type) {
        case FETCH_REGIONS:
            return { region, ...action.payload, };
        case LOAD_SPINNER:
            return { region, ...action.loadSpinner, };
        default:
            return region;
    }
};
