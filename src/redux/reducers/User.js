const initialStateApi = {
    dataUser: null,
};

const userReducer = (state = initialStateApi, action) => {
    if (action.type === "SET_DATA_USERS") {
        return {
            ...state,
            dataUser: action.payload,
        };
    }

    return state;
};

export default userReducer;
