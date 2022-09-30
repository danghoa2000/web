import React, { lazy, useCallback, useEffect, useState } from "react";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import AdminLayout from "./src/layout/admin/AdminLayout";
import HomePage from "./components/HomePage";
import { createRoot } from "react-dom/client";
import { AuthContext } from "./hooks/useAuth";
import { ROLE } from "./constants/constants";
import PrivateAdminRoute from "./PrivateAdminRoute"
import { createBrowserHistory } from "history";

// admin
const AdminLoginContainer = lazy(() => import("./src/page/admin/login/LoginContainer"));
const AdminHomeContainer = lazy(() => import("./src/page/admin/Home/HomeContainer"));
const AdminCategoryContainer = lazy(() => import("./src/page/admin/categories/CategoryContainer"));
const AdminCategoryCreateContainer = lazy(() => import("./src/page/admin/categories/create/CategoryCreateContainer"));
const AdminCategoryUpdateContainer = lazy(() => import("./src/page/admin/categories/Update/CategoryUpdateContainer"));

// ====


const App = () => {
    const [auth, setAuth] = useState({});
    const [user, setUser] = useState({});
    const urlNotExist = useCallback(() => {
        return <Navigate to="/elite" replace />;
    }, []);
    console.log(auth);
    return (
        <>
            {/* Admin route  */}
            <BrowserRouter>
                <AuthContext.Provider value={{ auth, setAuth, user, setUser }}>
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
                                    element={<Outlet />}
                                >
                                    <Route index element={
                                        <PrivateAdminRoute roles={[ROLE.MANAGER, ROLE.EMPLOYEE]}>
                                            <AdminCategoryContainer />
                                        </PrivateAdminRoute>
                                    } />

                                    <Route path="create"
                                        element={
                                            <PrivateAdminRoute roles={[ROLE.MANAGER, ROLE.EMPLOYEE]}>
                                                <AdminCategoryCreateContainer />
                                            </PrivateAdminRoute>
                                        }
                                    />
                                    <Route path="update"
                                        element={
                                            <PrivateAdminRoute roles={[ROLE.MANAGER, ROLE.EMPLOYEE]}>
                                                <AdminCategoryUpdateContainer />
                                            </PrivateAdminRoute>
                                        }
                                    />
                                </Route>
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
