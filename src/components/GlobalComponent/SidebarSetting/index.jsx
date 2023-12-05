import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const SidebarSettings = () => {
    return (
        <>
            <div className="wrapper p-4">
                <h1 className="poppins-bold font-subtitle color-light">
                    RecycleHub
                </h1>
                <div className="setting-menu mt-5">
                    <NavLink
                        to="/users/settings"
                        className="sidelink mb-4 poppins-medium color-light"
                        end
                    >
                        <div className="wrapper d-flex align-items-center">
                            <i className="fa-solid fa-user"></i>
                            <h3 className="font-paragraph my-auto ms-2">
                                Detail Profil
                            </h3>
                        </div>
                    </NavLink>
                    <NavLink
                        to="/users/settings/password"
                        className="sidelink mb-4 poppins-medium color-light"
                        end
                    >
                        <div className="wrapper d-flex align-items-center">
                            <i className="fa-solid fa-key"></i>
                            <h3 className="font-paragraph my-auto ms-2">
                                Ubah Password
                            </h3>
                        </div>
                    </NavLink>
                    <NavLink
                        to="/users/transaction"
                        className="sidelink mb-4 poppins-medium color-light"
                    >
                        <div className="wrapper d-flex align-items-center">
                            <i className="fa-solid fa-right-from-bracket"></i>
                            <h3 className="font-paragraph my-auto ms-2">
                                Kembali
                            </h3>
                        </div>
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default SidebarSettings;
