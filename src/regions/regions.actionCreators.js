import {
    FETCH_REGIONS,
    SET_REGIONS,
    LOAD_SPINNER,
    STOP_SPINNER
} from "../actionTypes";
import { fetchRegions } from "./regions.middleware";

const regions = (type, payload = null) => (
    {
        type: FETCH_REGIONS,
        payload: payload || null,
    }
);

const spinner = (spinner, load) => (
    {
        type: spinner,
        loadSpinner: load,
    }
);

export const getRegions = () => ((dispatch) => {
    dispatch(spinner(LOAD_SPINNER, true));

    fetchRegions({
        domain: "https://ahoyclub-dev-api.azurewebsites.net",
        apiToken: process.env.API_TOKEN,
        origin: "http://localhost:3000",
        authorization: process.env.AUTHORIZATION,
    }).then((data) => {
        dispatch(regions(SET_REGIONS, data));
        dispatch(spinner(LOAD_SPINNER, false));
    });
});
