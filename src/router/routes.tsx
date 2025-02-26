import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "@/pages/Login";
import HomePage from "@/pages/Home";
import ComponentShowcasePage from "@/pages/ComponentShowcase";
import EditUserPage from "@/pages/admin/EditUser";

const AppRoutes = () => {
    return (
        <Routes>
            {/* Redirect root path to home */}
            <Route path="/" element={<Navigate to="/home" replace />} />

            {/* Public Routes */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/register" element={<HomePage />} /> {/* TODO: change to register page */}
            <Route path="/showcase" element={<ComponentShowcasePage />} />
            <Route path="/edit" element={<EditUserPage />} />
        </Routes>
    );
};

export default AppRoutes;

