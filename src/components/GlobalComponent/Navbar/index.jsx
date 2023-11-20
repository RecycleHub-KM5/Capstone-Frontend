import React from "react";
import "./style.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const status = localStorage.getItem("status_login");
    const token = localStorage.getItem("token");
    const userName = localStorage.getItem("userName");
    console.log(token, status, userName);

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid p-0">
                <Link className="navbar-brand color-light poppins-bold" to="/">
                    RecycleHub
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <img src="/icons/bar.svg" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="wrapper">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    className="navlink ms-4 poppins-medium"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/gallery"
                                    className="navlink ms-4 poppins-medium"
                                >
                                    Galeri
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/information"
                                    className="navlink ms-4 poppins-medium"
                                >
                                    Informasi
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/products"
                                    className="navlink ms-4 me-5 poppins-medium"
                                >
                                    Produk
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    {status == null && (
                        <div className="wrapper ms-3" id="btn-wrapper-auth">
                            <NavLink
                                to="/login"
                                id="btn-login"
                                className="navlink poppins-semiBold"
                            >
                                Masuk
                            </NavLink>
                            <Link
                                id="btn-register"
                                className="poppins-semiBold"
                                to="register"
                            >
                                Daftar
                            </Link>
                        </div>
                    )}
                    {status && (
                        <div
                            className="wrapper btn-wrapper-none ms-3"
                            id="btn-wrapper-user"
                        >
                            <button id="btn-user">
                                <h3 className="poppins-medium color-light font-paragraph mt-2">
                                    {userName}
                                </h3>
                                <img
                                    src="https://i.ibb.co/gZyqXvV/dummy-ava.png"
                                    alt=""
                                />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
