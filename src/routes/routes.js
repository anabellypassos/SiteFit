import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pagesroutes/Home/homePage";
import Formulario from "../Pagesroutes/Form/form";
import Planoseprecos from "../Pagesroutes/PlanosEPrecos/planoseprecos";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Formulario" element={<Formulario/>} />
                <Route path="/PlanosePrecos" element={<Planoseprecos/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
