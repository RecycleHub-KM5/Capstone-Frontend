import React from "react";
import { Route, Routes } from "react-router";
import LandingPage from "../../pages/LandingPage";
import Gallery from "../../pages/Gallery";
import Information from "../../pages/Information";
import Product from "../../pages/Product";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Transaction from "../../pages/UserMenu/Transaction";
import Settings from "../../pages/UserMenu/Settings";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/information" element={<Information />} />
            <Route path="/products" element={<Product />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* User Menu */}
            <Route path="/users/transaction" element={<Transaction />} />
            <Route path="/users/settings" element={<Settings />} />
        </Routes>
    );
};

export default Router;
