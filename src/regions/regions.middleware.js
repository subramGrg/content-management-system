import axios from "axios";

export const fetchRegions = async({
        ...rest
    }) => {
        const data = await http({ ...rest, });
        return data;
    };

const http = (spread) => {
    const {
        domain,
        apiToken,
        origin,
        authorization,
    } = spread;

    return axios({
        url: "/regions",
        baseURL: domain,
        method: "GET",
        headers: {
            "api-token": apiToken,
            "authorization": authorization,
        },
    }).then(response => response.data);
};
