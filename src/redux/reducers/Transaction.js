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
    if (action.type === "CLEAR_TRANSACTION_DATA") {
        return {
            ...state,
            dataTransaction: null,
        };
    }

    return state;
};

export default transactionReducer;
