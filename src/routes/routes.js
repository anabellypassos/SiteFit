import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Formulario from "../Pagesroutes/form";
import Home from "../Pagesroutes/Home/homePage";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Formulario" element={<Formulario/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
