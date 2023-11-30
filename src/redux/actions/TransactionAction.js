import axios from "axios";
import { BASE_URL } from "../../config/network";

export const GetTransaction = (token) => (dispatch) => {
    axios
        .get(BASE_URL + "/api/payment/transaction", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {
            const result = response.data;
            dispatch({
                type: "SET_DATA_TRANSACTIONS",
                payload: result,
            });
        })
        .catch((error) => {
            console.log(error);
        });
};
