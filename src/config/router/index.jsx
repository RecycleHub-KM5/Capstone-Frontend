import React from "react";
import { Route, Routes } from "react-router";
import LandingPage from "../../pages/LandingPage";
import Gallery from "../../pages/Gallery";
import Information from "../../pages/Information";
import Product from "../../pages/Product";
import Login from "../../pages/Login";
import Register from "../../pages/Register";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/gallery" element={<Gallery />}></Route>
            <Route path="/information" element={<Information />}></Route>
            <Route path="/produts" element={<Product />}></Route>

            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
        </Routes>
    );
};

export default Router;
