import axios from "axios";
import { BASE_URL } from "../../config/network";

export const GetProduct = () => (dispatch) => {
    axios
        .get(BASE_URL + "/api/products")
        .then((response) => {
            const result = response.data;
            dispatch({
                type: "SET_DATA_PRODUCTS",
                payload: result,
            });
        })
        .catch((error) => {
            console.log(error);
        });
};

export const GetDetailProduct = (param) => (dispatch) => {
    axios
        .get(BASE_URL + `/api/product/${param}/details`)
        .then((response) => {
            const result = response.data;
            dispatch({
                type: "SET_DETAIL_PRODUCT",
                payload: result,
            });
        })
        .catch((error) => {
            console.log(error);
        });
};
