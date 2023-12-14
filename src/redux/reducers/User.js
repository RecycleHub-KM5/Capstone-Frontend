const initialStateApi = {
    dataUser: null,
    updateNameUser: null,
};

const userReducer = (state = initialStateApi, action) => {
    if (action.type === "SET_DATA_USERS") {
        return {
            ...state,
            dataUser: action.payload,
        };
    }

    if (action.type === "UPDATE_NAME_USERS") {
        return {
            ...state,
            updateNameUser: action.payload,
        };
    }

    if (action.type === "UPDATE_PASSWORD_USERS") {
        return {
            ...state,
            updatePasswordUser: action.payload,
        };
    }

    return state;
};

export default userReducer;
