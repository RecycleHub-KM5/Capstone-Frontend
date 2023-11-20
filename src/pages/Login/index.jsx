import React, { useState } from "react";
import MainLayout from "../../layout/MainLayout";
import styles from "./style.module.css";
import "./common-style.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthLogin } from "../../redux/actions/AuthAction";
import ClipLoader from "react-spinners/ClipLoader";

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const navigate = useNavigate();

    const submitLogin = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);

            const result = await AuthLogin(formData);

            localStorage.setItem("token", result.data.token);
            localStorage.setItem("userName", result.data.name);
            localStorage.setItem("status_login", true);

            navigate("/");
        } catch (error) {
            console.error("Login gagal", error);
        } finally {
            setIsLoading(false);
        }
    };

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(showPassword ? false : true);
        console.log(showPassword);
    };
    return (
        <MainLayout>
            <section className="login">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-xl-6">
                            <img
                                src="/images/bg-login.png"
                                draggable="false"
                                id={styles.bgLogin}
                            />
                        </div>
                        <div className="col-sm-12 col-md-6 col-xl-6">
                            <form onSubmit={submitLogin}>
                                <div className="col-sm-6 col-md-6 col-xl-6 mx-auto">
                                    <div className="header mb-5">
                                        <h1 className="font-title poppins-bold color-light">
                                            Halo, Selamat Datang!
                                        </h1>
                                        <p className="font-paragraph poppins-medium color-light">
                                            Silahkan isi form dibawah untuk
                                            memulai petualangan!
                                        </p>
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
                                            required
                                        ></input>
                                        <div className="invalid-feedback">
                                            Mohon masukkan email anda
                                        </div>
                                    </div>

                                    <label
                                        htmlFor="email"
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
                                            required
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
                                                    <i
                                                        className={`fa-solid fa-eye-slash`}
                                                    ></i>
                                                ) : (
                                                    <i
                                                        className={`fa-solid fa-eye`}
                                                    ></i>
                                                )}
                                            </span>
                                        </div>
                                        <div className="invalid-feedback">
                                            Mohon masukkan password anda
                                        </div>
                                    </div>

                                    <div className="text-end mb-3">
                                        <Link className="btnText font-smaller poppins-light">
                                            Lupa Password?
                                        </Link>
                                    </div>

                                    <button
                                        type="submit"
                                        className={`${styles.btnLogin} bgr-primary poppins-bold font-paraprah p-2 w-100 rounded`}
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
                                        {isLoading ? "Loading..." : "Masuk"}
                                    </button>

                                    <div className="d-flex justify-content-center mt-3">
                                        <p className="color-light font-paragraph poppins-medium me-2">
                                            Belum punya akun?
                                        </p>
                                        <Link
                                            to="/register"
                                            className="btnText font-paragraph poppins-light"
                                        >
                                            Daftar disini
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

export default Login;
