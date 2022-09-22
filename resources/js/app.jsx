import React, { lazy, useCallback, useState } from "react";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import AdminLayout from "./src/layout/admin/AdminLayout";
import HomePage from "./components/HomePage";
import { createRoot } from "react-dom/client";
import { AuthContext } from "./hooks/useAuth";

const LoginContainer = lazy(() => import("./src/page/admin/login/LoginContainer"));

const App = () => {
    const urlNotExist = useCallback(() => {
        return <Navigate to="/" replace />;
    }, []);

    const [auth, setAuth] = useState();

    return (
        <>
            {/* Admin route  */}
            <BrowserRouter>
                <AuthContext.Provider value={{ auth, setAuth }}>
                    <Routes>
                        <Route path="/" element={<Outlet />} >
                            <Route path="admin" element={<AdminLayout />}>
                                <Route index element={<div>HOME</div>} />
                                <Route path="blogs" element={<div>blogs</div>} />
                                <Route path="contact" element={<div>contact</div>} />

                            </Route>
                            <Route path="*" element={urlNotExist} />
                            <Route path="login" element={<LoginContainer />} />

                        </Route>


                    </Routes>
                    {/* <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/product" element={<HomePage />} />
                    </Routes> */}
                </AuthContext.Provider>

                {/* <Routes>
                </Routes> */}

            </BrowserRouter>
        </>
    );
};

export default App;

if (document.getElementById("App")) {
    createRoot(document.getElementById("App")).render(<App />);
}
