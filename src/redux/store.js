import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/User";
import productReducer from "./reducers/Product";
import transactionReducer from "./reducers/Transaction";

export default configureStore({
    reducer: {
        userReducer,
        productReducer,
        transactionReducer,
    },
});
