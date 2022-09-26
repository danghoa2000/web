import React, { lazy, useCallback, useEffect, useState } from "react";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import AdminLayout from "./src/layout/admin/AdminLayout";
import HomePage from "./components/HomePage";
import { createRoot } from "react-dom/client";
import { AuthContext } from "./hooks/useAuth";
import { getAccessToken } from "./utils/sessionHelper";

const LoginContainer = lazy(() => import("./src/page/admin/login/LoginContainer"));

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
                            <Route path="login" element={<LoginContainer />} />

                            {/* admin route */}
                            <Route path="admin/*" element={<AdminLayout />}>
                                <Route index element={<div>HOME</div>} />
                                <Route path="blogs" element={<div>blogs</div>} />
                                <Route path="contact" element={<div>contact</div>} />
                            </Route>
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
