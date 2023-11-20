import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/User";
import thunk from "redux-thunk";

export default configureStore({
    reducer: {
        userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
