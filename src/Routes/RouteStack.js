import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "../Pages/SignInPage";
import RaviLandingPage from "../Pages/RaviLandingPage";
import GirisLandingPage from "../Pages/GirishLandingPage";
import VamshiLandingPage from "../Pages/VamshiLandingPage";

const RouteStack = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignInPage />}></Route>
                <Route path="RaviPage" element={<RaviLandingPage />}></Route>
                <Route path="GirishPage" element={<GirisLandingPage />}></Route>
                <Route path="VamshiPage" element={<VamshiLandingPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
};
export default RouteStack;