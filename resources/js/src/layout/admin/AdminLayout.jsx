import { Avatar, Breadcrumb, Button, Layout, Menu, Typography } from "antd";
import {
    LaptopOutlined,
    LoginOutlined,
    UserOutlined,
    AppstoreOutlined,
    AuditOutlined,
    ShoppingCartOutlined,
    UngroupOutlined,
    PictureOutlined,
    HeartOutlined,
    UsergroupAddOutlined,
} from "@ant-design/icons";
import React, { Suspense, useCallback, useEffect, useMemo } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "../../../../sass/admin.scss";
import { ADMIN_SESSION_ACCESS_TOKEN } from "../../../utils/sessionHelper";
import Loading from "../../../components/partial/Loading";
import axios from "axios";
import { API_BASE_URL, LOGIN_API } from "../../../constants/api";
import { useAuth } from "../../../hooks/useAuth";
import { axiosClient } from "../../../hooks/useHttp";
import { MENU_MAPPING } from "../../../constants/constants";
import { replace } from "lodash";

const AdminLayout = () => {
    const navigate = useNavigate();
    const { Header, Sider } = Layout;
    const { setAuth } = useAuth();

    useEffect(() => {
        const adminToken = window.sessionStorage.getItem(
            ADMIN_SESSION_ACCESS_TOKEN
        );
        if (!adminToken) {
            navigate("/admin/login");
        }
    }, [])

    const logout = useCallback(async () => {
        await axiosClient.get(API_BASE_URL + LOGIN_API.LOGOUT);
        setAuth({});
        window.sessionStorage.clear(ADMIN_SESSION_ACCESS_TOKEN);
        navigate("/admin/login");
    }, [])

    const redirect = useCallback((item) => navigate(item), []);

    const MENU = [
        "Dashboard",
        "Categories",
        "Products",
        "Orders",
        "Manufacturer",
        "Banner",
        "Blogs",
        "Account",
        "Customer",
    ]

    const icons = useMemo(() => [
        AppstoreOutlined,
        AuditOutlined,
        LaptopOutlined,
        ShoppingCartOutlined,
        UngroupOutlined,
        PictureOutlined,
        HeartOutlined,
        UserOutlined,
        UsergroupAddOutlined,
    ].map((item, index) => {
        return {
            key: index,
            icon: React.createElement(item),
            label: MENU[index],
            onClick: () => redirect(MENU_MAPPING[index]),
        };
    }), []);

    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <div className="account">
                    <div className="account__info">
                        <div className="account__info__avatar">
                            <img src="http://mirora3.demo.towerthemes.com/image/catalog/logo/logo.png" alt="" className="img-fluid" />
                        </div>
                        <span className="account__info__name">{"Nguyen Dang Hoa"}</span>
                    </div>
                    <div className="account__logout" onClick={logout}>
                        <LoginOutlined className="mx-1" />{"Logout"}
                    </div>
                </div>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        // defaultSelectedKeys={['0']}
                        style={{ height: '100%', borderRight: 0 }}
                        items={icons}
                    />
                </Sider>
                <Layout style={{ padding: '0 24px 24px', minHeight: "calc(100vh - 64px)" }}>
                    <Suspense fallback={<Loading />}>
                        <Outlet />
                    </Suspense>
                </Layout>
            </Layout>
        </Layout>

    );
};

export default AdminLayout;
