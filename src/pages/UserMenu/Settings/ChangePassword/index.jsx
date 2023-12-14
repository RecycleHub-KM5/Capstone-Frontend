import React, { useState } from "react";
import MainLayout from "../../../../layout/MainLayout";
import SidebarSettings from "../../../../components/GlobalComponent/SidebarSetting";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { UpdateUserPassword } from "../../../../redux/actions/UserAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const ChangePassword = () => {
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const toggleShowCurrentPassword = () => {
        setShowCurrentPassword(!showCurrentPassword);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const toggleShowPassword2 = () => {
        setShowPassword2(!showPassword2);
    };

    const [formData, setFormData] = useState({
        currentPassword: "",
        newPassword: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSaveChanges = async (e) => {
        e.preventDefault();
        try {
            if (
                formData.currentPassword === "" ||
                formData.newPassword === "" ||
                confirmPassword === ""
            ) {
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
                    title: "Please fill all field.",
                });

                return 0;
            }

            if (formData.newPassword !== confirmPassword) {
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
                    title: "Password not match.",
                });

                return 0;
            }

            await dispatch(
                UpdateUserPassword(
                    formData.currentPassword,
                    formData.newPassword,
                    navigate
                )
            );
        } catch (error) {
            console.error("Update password failed.", error);
        }
    };

    return (
        <MainLayout>
            <div className="row">
                <div className="col-sm-2 col-md-2 col-lg-2">
                    <SidebarSettings />
                </div>
                <div className="col-sm-10 col-md-10 col-lg-10">
                    <div className="containerMain p-5">
                        <div className="row justify-content-lg-center">
                            <div className="col col-md-8 col-lg-8">
                                <div className="akun">
                                    <h1 className="poppins-semiBold color-light font-subtitle">
                                        Akun
                                    </h1>
                                </div>
                                <div className="containerPass justify-content-center p-3">
                                    <div className="detailUbhPass px-4">
                                        <div className="ubah-password mb-3 mt-3">
                                            <h2 className="poppins-semiBold color-light font-subtitle">
                                                Ubah Password
                                            </h2>
                                        </div>
                                        <div className="row">
                                            <div className="col col-lg-12">
                                                <div className="passCmd">
                                                    <p className=" py-3 px-3">
                                                        Isi jika ingin mengubah
                                                        password.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* password input */}
                                        <form onSubmit={handleSaveChanges}>
                                            <div className="row justify-content-lg-center">
                                                <div className="col col-lg-12 inputan my-lg-3">
                                                    <div className="mb-4  my-3 formPass">
                                                        <label
                                                            htmlFor="password"
                                                            className="password color-light"
                                                        >
                                                            Masukkan Password
                                                            Lama
                                                            <span>*</span>
                                                        </label>
                                                        <div className="inputan">
                                                            <input
                                                                type={
                                                                    showCurrentPassword
                                                                        ? "text"
                                                                        : "password"
                                                                }
                                                                id="oldPassword"
                                                                name="currentPassword"
                                                                value={
                                                                    formData.currentPassword
                                                                }
                                                                onChange={
                                                                    handleChange
                                                                }
                                                                className="container-fluid my-2 py-3 rounded-3 color-dark"
                                                                placeholder="Masukkan password lama"
                                                            />
                                                            {/* <i className="iconMata fa-solid fa-eye"></i> */}
                                                            <FontAwesomeIcon
                                                                icon={
                                                                    showCurrentPassword
                                                                        ? faEye
                                                                        : faEyeSlash
                                                                }
                                                                onClick={
                                                                    toggleShowCurrentPassword
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="mb-4  my-3 formPass">
                                                        <label
                                                            htmlFor="password"
                                                            className="password color-light"
                                                        >
                                                            Masukkan Password
                                                            Baru
                                                            <span>*</span>
                                                        </label>
                                                        <div className="inputan">
                                                            <input
                                                                type={
                                                                    showPassword
                                                                        ? "text"
                                                                        : "password"
                                                                }
                                                                id="password"
                                                                name="newPassword"
                                                                value={
                                                                    formData.newPassword
                                                                }
                                                                onChange={
                                                                    handleChange
                                                                }
                                                                className="container-fluid my-2 py-3 rounded-3 color-dark"
                                                                placeholder="Masukkan password"
                                                            />
                                                            {/* <i className="iconMata fa-solid fa-eye"></i> */}
                                                            <FontAwesomeIcon
                                                                icon={
                                                                    showPassword
                                                                        ? faEye
                                                                        : faEyeSlash
                                                                }
                                                                onClick={
                                                                    toggleShowPassword
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="mb-2 formPass">
                                                        <label
                                                            htmlFor="password"
                                                            className="password color-light"
                                                        >
                                                            Konfirmasi Password
                                                            <span>*</span>
                                                        </label>
                                                        <div className="inputan">
                                                            <input
                                                                type={
                                                                    showPassword2
                                                                        ? "text"
                                                                        : "password"
                                                                }
                                                                id="confirmPassword"
                                                                value={
                                                                    confirmPassword
                                                                }
                                                                onChange={
                                                                    handleConfirmPasswordChange
                                                                }
                                                                className="container-fluid my-2 py-3 rounded-3 color-dark"
                                                                placeholder="Konfirmasi Password"
                                                            />
                                                            {/* <i className="iconMata fa-solid fa-eye"></i> */}
                                                            <FontAwesomeIcon
                                                                icon={
                                                                    showPassword2
                                                                        ? faEye
                                                                        : faEyeSlash
                                                                }
                                                                onClick={
                                                                    toggleShowPassword2
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col col-lg-5 col-md-4">
                                                    <div className="btnSaveChange">
                                                        <button
                                                            type="submit"
                                                            className="btn bgr-primary btn-save py-3 px-5 rounded-4 color-dark poppins-semiBold mb-3"
                                                        >
                                                            Simpan Perubahan
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default ChangePassword;
