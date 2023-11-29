import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/User";
import productReducer from "./reducers/Product";

export default configureStore({
    reducer: {
        userReducer,
        productReducer,
    },
});
