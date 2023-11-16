import React from "react";
import { Route, Routes } from "react-router";
import LandingPage from "../../pages/LandingPage";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />}></Route>
        </Routes>
    );
};

export default Router;
