import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./style.css";

const Sidebar = () => {
    const navigate = useNavigate();
    const signOut = () => {
        localStorage.removeItem("status_login");
        localStorage.removeItem("token");
        localStorage.removeItem("userName");

        navigate("/");
    };
    return (
        <>
            <div className="wrapper menu-wrapper p-4">
                <h1 className="poppins-bold font-subtitle color-light">
                    RecycleHub
                </h1>
                <div className="d-flex flex-column justify-content-between h-100">
                    <div className="user-menu mt-5">
                        <NavLink
                            to="/users/transaction"
                            className="sidelink mb-4 poppins-medium color-light"
                        >
                            <div className="wrapper d-flex align-items-center">
                                <i className="fa-solid fa-wallet"></i>
                                <h3 className="font-paragraph my-auto ms-2">
                                    Riwayat Transaksi
                                </h3>
                            </div>
                        </NavLink>
                        <NavLink
                            to="/users/settings"
                            className="sidelink mb-4 poppins-medium color-light"
                        >
                            <div className="wrapper d-flex align-items-center">
                                <i className="fa-solid fa-gear"></i>
                                <h3 className="font-paragraph my-auto ms-2">
                                    Setting
                                </h3>
                            </div>
                        </NavLink>
                        <NavLink
                            to="/"
                            className="sidelink mb-4 poppins-medium color-light"
                        >
                            <div className="wrapper d-flex align-items-center">
                                <i className="fa-solid fa-right-from-bracket"></i>
                                <h3 className="font-paragraph my-auto ms-2">
                                    Kembali ke Beranda
                                </h3>
                            </div>
                        </NavLink>
                    </div>
                    <div
                        className="sidelink mb-4 poppins-medium color-light"
                        onClick={() => signOut()}
                    >
                        <div className="wrapper d-flex align-items-center">
                            <i className="fa-solid fa-right-from-bracket"></i>
                            <h3 className="font-paragraph my-auto ms-2">
                                Logout
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
