const initialStateApi = {
    dataTransaction: null,
};

const transactionReducer = (state = initialStateApi, action) => {
    if (action.type === "SET_DATA_TRANSACTIONS") {
        return {
            ...state,
            dataTransaction: action.payload,
        };
    }

    return state;
};

export default transactionReducer;
