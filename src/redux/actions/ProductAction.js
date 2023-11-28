import axios from "axios";
import { BASE_URL } from "../../config/network";

export const GetProduct = () => (dispatch) => {
    axios
        .get(BASE_URL + "/article")
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
