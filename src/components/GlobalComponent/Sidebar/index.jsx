import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const Sidebar = () => {
    return (
        <>
            <div className="wrapper p-4">
                <h1 className="poppins-bold font-subtitle color-light">
                    RecycleHub
                </h1>
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
                    <div className="sidelink mb-4 poppins-medium color-light">
                        <div className="wrapper d-flex align-items-center">
                            <i class="fa-solid fa-right-from-bracket"></i>
                            <h3 className="font-paragraph my-auto ms-2">
                                Loogut
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
