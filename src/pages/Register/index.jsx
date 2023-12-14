import React, { useState } from "react";
import MainLayout from "../../layout/MainLayout";
import styles from "./style.module.css";
import "./common-style.css";
import { Link } from "react-router-dom";
import { AuthRegister } from "../../redux/actions/AuthAction";
import ClipLoader from "react-spinners/ClipLoader";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        password: "",
        email: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const submitRegister = async (e) => {
        e.preventDefault();
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;
        const confirmPassword =
            document.querySelector("#confirmPassword").value;

        const re =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!re.test(email)) {
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
                icon: "error",
                title: "Format email tidak sesuai!",
            });

            return 0;
        }

        if (password !== confirmPassword) {
            console.log(password, confirmPassword);
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
                icon: "error",
                title: "Password tidak sama!",
            });
            return 0;
        }

        try {
            setIsLoading(true);

            await AuthRegister(formData);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(showPassword ? false : true);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowPassword2(showPassword2 ? false : true);
    };

    return (
        <MainLayout>
            <section className="register">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-xl-6">
                            <img
                                src="/images/bg-register.png"
                                draggable="false"
                                id={styles.bgRegister}
                            />
                        </div>
                        <div className="col-sm-12 col-md-6 col-xl-6">
                            <form onSubmit={submitRegister}>
                                <div className="col-sm-6 col-md-6 col-xl-6 mx-auto">
                                    <div className="header mb-5">
                                        <h1
                                            className={`${styles.fontTitle} poppins-bold color-light`}
                                        >
                                            Daftar dan bergabung bersama kami!
                                        </h1>
                                        <p className="font-paragraph poppins-medium color-light">
                                            Daftarkan dirimu dan bergabung untuk
                                            lingkungan yang lebih baik di masa
                                            depan!
                                        </p>
                                    </div>

                                    <label
                                        htmlFor="name"
                                        className="font-smaller color-light poppins-medium"
                                    >
                                        Nama Lengkap
                                    </label>
                                    <div className="input-group mb-3">
                                        <span
                                            className={`input-group-text color-placeholder ${styles.iconInput} `}
                                            id="basic-addon1"
                                        >
                                            <i className="fa-solid fa-circle-user"></i>
                                        </span>
                                        <input
                                            autoComplete="off"
                                            type="text"
                                            name="name"
                                            className={`form-control p-2 ${styles.input}`}
                                            placeholder="Masukkan Nama Lengkap"
                                            id="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                        ></input>
                                    </div>

                                    <label
                                        htmlFor="email"
                                        className="font-smaller color-light poppins-medium"
                                    >
                                        Email
                                    </label>
                                    <div className="input-group mb-3">
                                        <span
                                            className={`input-group-text color-placeholder ${styles.iconInput} `}
                                            id="basic-addon1"
                                        >
                                            <i className="fa-solid fa-at"></i>
                                        </span>
                                        <input
                                            autoComplete="off"
                                            type="text"
                                            name="email"
                                            className={`form-control p-2 ${styles.input}`}
                                            placeholder="Masukkan Email"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        ></input>
                                    </div>

                                    <label
                                        htmlFor="password"
                                        className="font-smaller color-light poppins-medium"
                                    >
                                        Kata Sandi
                                    </label>
                                    <div className="input-group mb-3">
                                        <span
                                            className={`input-group-text color-placeholder ${styles.iconInput} `}
                                            id="basic-addon1"
                                        >
                                            <i className="fa-solid fa-key"></i>
                                        </span>
                                        <input
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            name="password"
                                            className={`form-control ${styles.inputWithAppend}`}
                                            placeholder="Masukkan Password"
                                            id="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                        />
                                        <div className="input-group-append">
                                            <span
                                                className={`input-group-text color-placeholder p-3 ${styles.iconInputAppend}`}
                                                onClick={
                                                    togglePasswordVisibility
                                                }
                                                id="basic-addon1"
                                            >
                                                {showPassword ? (
                                                    <FontAwesomeIcon
                                                        icon={faEyeSlash}
                                                    />
                                                ) : (
                                                    <FontAwesomeIcon
                                                        icon={faEye}
                                                    />
                                                )}
                                            </span>
                                        </div>
                                    </div>

                                    <label
                                        htmlFor="confirmPassword"
                                        className="font-smaller color-light poppins-medium"
                                    >
                                        Konfirmasi Kata Sandi
                                    </label>
                                    <div className="input-group mb-3">
                                        <span
                                            className={`input-group-text color-placeholder ${styles.iconInput} `}
                                            id="basic-addon1"
                                        >
                                            <i className="fa-solid fa-key"></i>
                                        </span>
                                        <input
                                            type={
                                                showPassword2
                                                    ? "text"
                                                    : "password"
                                            }
                                            name="confirmPassword"
                                            className={`form-control ${styles.inputWithAppend}`}
                                            placeholder="Masukkan Ulang Password"
                                            id="confirmPassword"
                                        />
                                        <div className="input-group-append">
                                            <span
                                                className={`input-group-text color-placeholder p-3 ${styles.iconInputAppend}`}
                                                onClick={
                                                    toggleConfirmPasswordVisibility
                                                }
                                                id="basic-addon1"
                                            >
                                                {showPassword2 ? (
                                                    <FontAwesomeIcon
                                                        icon={faEyeSlash}
                                                    />
                                                ) : (
                                                    <FontAwesomeIcon
                                                        icon={faEye}
                                                    />
                                                )}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="text-end mb-3">
                                        <Link className="btnText font-smaller poppins-light">
                                            Lupa Password?
                                        </Link>
                                    </div>

                                    <button
                                        className={`${styles.btnRegister} bgr-primary poppins-bold font-paraprah p-2 w-100 rounded`}
                                        disabled={isLoading}
                                    >
                                        {isLoading ? (
                                            <ClipLoader
                                                color="#fefefe"
                                                loading={isLoading}
                                                size={14}
                                                className="me-2"
                                            />
                                        ) : null}
                                        {isLoading ? "Loading..." : "Register"}
                                    </button>

                                    <div className="d-flex justify-content-center mt-3">
                                        <p className="color-light font-paragraph poppins-medium me-2">
                                            Sudah punya akun?
                                        </p>
                                        <Link
                                            to="/login"
                                            className="btnText font-paragraph poppins-light"
                                        >
                                            Masuk sekarang
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default Register;
