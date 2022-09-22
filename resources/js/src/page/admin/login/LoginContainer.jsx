import React, { useCallback, useEffect, useState } from 'react';
import Login from './login';

const LoginContainer = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(0); // 0 => not remember , 1 => remember
    const [disableSubmit, setDisableSubmit] = useState(true);
    const [error, setError] = useState({});
    const [credentials, setCredentials] = useState(() => {
        return {
            email: email,
            password: password,
            remember: remember
        }
    })

    const checkValidate = (input) => {
        const inputs = Object.keys(input);
        inputs.forEach(element => {
            // switch (element) {
            //     case "email":
            //         if (element) {
            //             setError(error => ({...error, element: "Email is required" }))
            //         }


            // }
            console.log(input[element]);
        });
        return;
    }

    const handeSubmit = async () => {
        console.log(credentials);
        const result = await checkValidate(credentials);
        if (result) {
            // call api
        }
        return;
    }

    useEffect(() => {
        if (email && password) {
            setDisableSubmit(false);
        }
    }, [email, password]);

    return (
        <Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            remember={remember}
            setRemember={setRemember}
            disableSubmit={disableSubmit}
            setDisableSubmit={setDisableSubmit}
            handeSubmit={handeSubmit}
            credentials={credentials}
            setCredentials={setCredentials}
        />
    );
};

export default LoginContainer;