const initialStateApi = {
    dataProduct: null,
    dataDetailProduct: null,
};

const productReducer = (state = initialStateApi, action) => {
    if (action.type === "SET_DATA_PRODUCTS") {
        return {
            ...state,
            dataProduct: action.payload,
        };
    }
    if (action.type === "SET_DETAIL_PRODUCT") {
        return {
            ...state,
            dataDetailProduct: action.payload,
        };
    }

    return state;
};

export default productReducer;
