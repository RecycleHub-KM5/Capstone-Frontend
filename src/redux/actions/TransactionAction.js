import axios from "axios";
import { BASE_URL } from "../../config/network";

export const GetTransaction = (token) => async (dispatch) => {
    try {
        const response = await axios.get(
            BASE_URL + "/api/payment/transaction",
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        if (response.status === 200) {
            const result = response.data;
            dispatch({
                type: "SET_DATA_TRANSACTIONS",
                payload: result,
            });
        } else {
            console.error("Error: Unexpected status code", response.status);
        }
    } catch (error) {
        console.error("Error:", error);
        dispatch({
            type: "GET_TRANSACTION_FAILURE",
            payload:
                error.message ||
                "Terjadi kesalahan saat mengambil data transaksi.",
        });
    }
};

export const ClearTransactionData = () => (dispatch) => {
    dispatch({
        type: "CLEAR_TRANSACTION_DATA",
    });
};
