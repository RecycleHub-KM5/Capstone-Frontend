import React, { useState } from "react";
import MainLayout from "../../layout/MainLayout";
import styles from "./style.module.css";
import "./common-style.css";
import { Link } from "react-router-dom";

const Register = () => {
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
                                id={styles.bgLogin}
                            />
                        </div>
                        <div className="col-sm-12 col-md-6 col-xl-6">
                            <form action="">
                                <div className="col-sm-6 col-md-6 col-xl-6 mx-auto">
                                    <div className="header mb-5">
                                        <h1 className="font-title poppins-bold color-light">
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
                                            required
                                        ></input>
                                        <div className="invalid-feedback">
                                            Mohon masukkan email anda
                                        </div>
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
                                            required
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
                                        className={`${styles.btnLogin} bgr-primary poppins-bold font-paraprah p-2 w-100 rounded`}
                                    >
                                        Daftar
                                    </button>

                                    <div className="d-flex justify-content-center mt-3">
                                        <p className="color-light font-paragraph poppins-medium me-2">
                                            Sudah punya akun?
                                        </p>
                                        <Link className="btnText font-paragraph poppins-light">
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
