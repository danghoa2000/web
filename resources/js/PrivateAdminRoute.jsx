import React from "react";
import { useNavigate } from "react-router-dom";
import { ADMIN_INFO } from "./utils/sessionHelper";

const PrivateAdminRoute = ({ children, roles }) => {
    const navigate = useNavigate();
    const adminInfo = window.sessionStorage.getItem(ADMIN_INFO);
    const roleRequired =
        !!adminInfo && !!adminInfo.role && roles.includes(adminInfo.role);
    if (!roleRequired) {
        return navigate("/admin");
    }
    return children;
};

export default PrivateAdminRoute;
