import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { PrivateRoute } from "./privateRoute";
import { Login } from "../pages/Login";
import { Homepage } from "../pages/Homepage";
import { Register } from "../pages/Register";
import { Works } from "../pages/Works";
import { Contactpage } from "../pages/Contact";
import { Aboutpage } from "../pages/About";
import { Servicespage } from "../pages/Services";

export function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/signin" element={<Login />} />
                    <Route path="/signup" element={<Register />} />
                    <Route path="/works" element={<Works />} />
                    <Route path="/contact" element={<Contactpage />} />
                    <Route path="/about" element={<Aboutpage />} />
                    <Route path="/services" element={<Servicespage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
