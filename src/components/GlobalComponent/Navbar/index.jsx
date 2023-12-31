import React from "react";
import "./style.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const status = localStorage.getItem("status_login");
    const userName = localStorage.getItem("userName");

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid p-0 my-auto">
                <Link className="navbar-brand color-light poppins-bold" to="/">
                    <div className="wrapper d-flex justify-content-center align-items-center">
                        <img
                            src="https://cdn.discordapp.com/attachments/1164510335114428526/1179740777547579392/image.png?ex=657ae237&is=65686d37&hm=0f8279fbb3e6350a497862e02719333f91030ec351bef2726cd2021972d774f2&"
                            className="brand-image"
                        />
                        <h1 className="font-paragraph m-0 ms-1">RecycleHub</h1>
                    </div>
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
                                    to={status ? "/products" : "/login"}
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
                            <Link
                                id="btn-user"
                                to="/users/transaction"
                                className="text-decoration-none"
                            >
                                <h3 className="poppins-medium color-light font-paragraph mt-2">
                                    {userName}
                                </h3>
                                <img
                                    src="https://i.ibb.co/gZyqXvV/dummy-ava.png"
                                    alt=""
                                />
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
