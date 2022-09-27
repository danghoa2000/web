import { Avatar, Breadcrumb, Button, Layout, Menu, Typography } from "antd";
import {
    LaptopOutlined,
    LoginOutlined,
    NotificationOutlined,
    UserOutlined,
} from "@ant-design/icons";
import React, { Suspense, useCallback, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "../../../../sass/admin.scss";
import { ADMIN_SESSION_ACCESS_TOKEN } from "../../../utils/sessionHelper";
import Loading from "../../../components/partial/Loading";
import axios from "axios";
import { API_BASE_URL, LOGIN_API } from "../../../constants/api";
import { useAuth } from "../../../hooks/useAuth";
import { axiosClient } from "../../../hooks/useHttp";

const AdminLayout = () => {
    const navigate = useNavigate();
    const { Header, Sider } = Layout;
    const { setAuth } = useAuth();

    useEffect(() => {
        const adminToken = window.localStorage.getItem(
            ADMIN_SESSION_ACCESS_TOKEN
        );
        if (!adminToken) {
            navigate("/admin/login");
        }
    }, [])

    const logout = useCallback(async () => {
        await axiosClient.get(API_BASE_URL + LOGIN_API.LOGOUT);
        setAuth({});
        window.localStorage.clear(ADMIN_SESSION_ACCESS_TOKEN);
        navigate("/admin/login");
    }, [])

    const items1 = ["1", "2", "3"].map((key) => ({
        key,
        label: `nav ${key}`,
    }));

    const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
        (icon, index) => {
            const key = String(index + 1);

            return {
                key: `sub${key}`,
                icon: React.createElement(icon),
                label: `subnav ${key}`,

                children: new Array(4).fill(null).map((_, j) => {
                    const subKey = index * 4 + j + 1;
                    return {
                        key: subKey,
                        label: `option${subKey}`,
                    };
                }),
            };
        }
    );
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
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                        items={items2}
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
