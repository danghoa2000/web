import React, { lazy, useCallback, useEffect, useState } from "react";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import AdminLayout from "./src/layout/admin/AdminLayout";
import HomePage from "./components/HomePage";
import { createRoot } from "react-dom/client";
import { AuthContext } from "./hooks/useAuth";
import { ROLE } from "./constants/constants";
import PrivateAdminRoute from "./PrivateAdminRoute"
import { createBrowserHistory } from "history";

const AdminLoginContainer = lazy(() => import("./src/page/admin/login/LoginContainer"));
const AdminHomeContainer = lazy(() => import("./src/page/admin/Home/HomeContainer"));
const AdminCategoryContainer = lazy(() => import("./src/page/admin/categories/CategoryContainer"));

const App = () => {
    const [auth, setAuth] = useState({});
    const urlNotExist = useCallback(() => {
        return <Navigate to="/elite" replace />;
    }, []);

    return (
        <>
            {/* Admin route  */}
            <BrowserRouter>
                <AuthContext.Provider value={{ auth, setAuth }}>
                    <Routes>
                        <Route path="/" element={<Outlet />} >
                            <Route index element={<Navigate to="/elite" replace />} />
                            <Route path="/elite" element={<HomePage />} >
                                <Route index element={<div>HOME</div>} />
                                <Route path="blogs" element={<div>blogs</div>} />
                                <Route path="contact" element={<div>contact</div>} />
                            </Route>
                            <Route path="*" element={urlNotExist} />

                            {/* admin route */}
                            <Route path="admin/*" element={<AdminLayout />}>
                                <Route index element={<AdminHomeContainer />} />
                                <Route path="blogs"
                                    element={
                                        <PrivateAdminRoute roles={[ROLE.MANAGER, ROLE.EMPLOYEE]}>
                                            <div>blogs</div>
                                        </PrivateAdminRoute>
                                    }
                                />
                                <Route path="categories"
                                    element={
                                        <PrivateAdminRoute roles={[ROLE.MANAGER]}>
                                            <AdminCategoryContainer />
                                        </PrivateAdminRoute>
                                    }
                                />
                                <Route path="contact" element={<div>contact</div>} />
                            </Route>
                            <Route path="admin/login" element={<AdminLoginContainer />} />

                        </Route>
                    </Routes>

                </AuthContext.Provider>
            </BrowserRouter>
        </>
    );
};

export default App;

if (document.getElementById("App")) {
    createRoot(document.getElementById("App")).render(<App />);
}
