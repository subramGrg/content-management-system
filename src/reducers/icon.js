const iconReducer = (status, action) => {
    if(action.type==="LOAD-SPINNER") {
        return true;
    }

    if(action.type==="END-SPINNER") {
        return false;
    }

    return status;
};

export default iconReducer;
