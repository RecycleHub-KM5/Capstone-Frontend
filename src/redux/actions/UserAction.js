import axios from "axios";
import { BASE_URL } from "../../config/network";
import Swal from "sweetalert2";

export const GetUser = () => (dispatch) => {
    const token = localStorage.getItem("token");

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    axios
        .get(BASE_URL + "/api/users", config)
        .then((response) => {
            const result = response.data;
            dispatch({
                type: "SET_DATA_USERS",
                payload: result,
            });
        })
        .catch((error) => {
            console.log(error);
        });
};

export const UpdateUserName = (newName) => (dispatch) => {
    const token = localStorage.getItem("token");

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    axios
        .put(BASE_URL + "/api/users/update-name", { name: newName }, config)
        .then((response) => {
            const updatedUser = response.data;
            dispatch({
                type: "UPDATE_NAME_USERS",
                payload: updatedUser,
            });

            localStorage.removeItem("userName");
            localStorage.setItem("userName", newName);

            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener("mouseenter", Swal.stopTimer);
                    toast.addEventListener("mouseleave", Swal.resumeTimer);
                },
            });

            Toast.fire({
                icon: "success",
                title: updatedUser.message,
            });
        })
        .catch((error) => {
            console.log(error);

            if (error.response) {
                const errorMessage = error.response.data.message;
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener("mouseenter", Swal.stopTimer);
                        toast.addEventListener("mouseleave", Swal.resumeTimer);
                    },
                    customClass: {
                        container: "my-toast-container",
                        title: "my-toast-title",
                    },
                });

                Toast.fire({
                    icon: "error",
                    title: errorMessage,
                });
            }
            throw error;
        });
};
