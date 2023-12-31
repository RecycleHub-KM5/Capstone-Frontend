import React from "react";
import { Route, Routes } from "react-router";
import LandingPage from "../../pages/LandingPage";
import Gallery from "../../pages/Gallery";
import Information from "../../pages/Information";
import Product from "../../pages/Product";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Transaction from "../../pages/UserMenu/Transaction";
import DetailProduct from "../../pages/DetailProduct";
import ChangeName from "../../pages/UserMenu/Settings/ChangeName";
import ChangePassword from "../../pages/UserMenu/Settings/ChangePassword";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/information" element={<Information />} />
            <Route path="/products" element={<Product />} />
            <Route path="/products/:param" element={<DetailProduct />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* User Menu */}
            <Route path="/users/transaction" element={<Transaction />} />
            <Route path="/users/settings" element={<ChangeName />} />
            <Route
                path="/users/settings/password"
                element={<ChangePassword />}
            />
        </Routes>
    );
};

export default Router;
