const apiStart = () => ({
    type: "LOAD-SPINNER",
});

const apiEnd = () => ({
    type: "END-SPINNER",
});

export { apiStart, apiEnd };
