const initialStateApi = {
    dataProduct: null,
};

const productReducer = (state = initialStateApi, action) => {
    if (action.type === "SET_DATA_PRODUCTS") {
        return {
            ...state,
            dataProduct: action.payload,
            oriDataProduct: action.original,
        };
    }

    return state;
};

export default productReducer;
