import axios from "axios";
import Swal from "sweetalert2";
import { BASE_URL } from "../../config/network";

console.log(BASE_URL);

export const AuthLogin = (datas) => {
    let data = {
        email: datas.email,
        password: datas.password,
    };
    return axios
        .post(BASE_URL + "/api/users/auth/login", data)
        .then((response) => {
            const result = response.data;

            return result;
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

export const AuthRegister = (datas) => {
    let data = {
        name: datas.name,
        email: datas.email,
        password: datas.password,
    };
    return axios
        .post(BASE_URL + "/api/users/auth/register", data)
        .then((response) => {
            const result = response.data;

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
                title: result.message,
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
                    customClass: {
                        container:
                            "background-color: #414444; color: #fefefe; font-size: 20px;",
                    },
                });
            }
            throw error;
        });
};
