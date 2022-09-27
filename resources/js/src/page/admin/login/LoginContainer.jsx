import axios from 'axios';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { API_BASE_URL, LOGIN_API } from '../../../../constants/api';
import { useAuth } from '../../../../hooks/useAuth';
import { axiosClient } from '../../../../hooks/useHttp';
import { ADMIN_SESSION_ACCESS_TOKEN, getAccessToken, saveAccessToken } from '../../../../utils/sessionHelper';
import Login from './login';

const LoginContainer = () => {
    const { setAuth } = useAuth();
    const [isLoginFailed, setisLoginFailed] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const token = window.localStorage.getItem(ADMIN_SESSION_ACCESS_TOKEN);
        if (token) {
            navigate("/admin");
        }
    }, [])

    const login = async (data) => {
        await axiosClient.post(API_BASE_URL + LOGIN_API.LOGIN, {
            email: data.email,
            password: data.password,
        },
        ).then(res => {
            setAuth(res.data.info);
            window.localStorage.setItem(ADMIN_SESSION_ACCESS_TOKEN, res.data.access_token);
            navigate("/admin");
        }).catch(err => {
            setisLoginFailed({
                status: err.response.status,
                message: err.response.statusText
            })
        });
    }

    const handeSubmit = useCallback((data) => {
        login(data)
    }, []);

    return (
        <Login
            isLoginFailed={isLoginFailed}
            handeSubmit={handeSubmit}
        />
    );
};

export default LoginContainer;