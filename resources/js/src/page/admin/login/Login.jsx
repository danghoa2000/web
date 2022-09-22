import React, { useState } from 'react';
import '../../../../../sass/app.scss';
import './login.scss';

const Login = (props) => {
    const {
        email,
        setEmail,
        password,
        setPassword,
        remember,
        setRemember,
        disableSubmit,
        setDisableSubmit,
        handeSubmit,
        credentials,
        setCredentials,
    } = props;

    return (
        <div className="content">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 order-md-2">
                        <img src="https://preview.colorlib.com/theme/bootstrap/login-form-08/images/undraw_file_sync_ot38.svg" alt="Image" className="img-fluid" />
                    </div>
                    <div className="col-md-6 contents">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="mb-4">
                                    <h3>{"Sign In to"} <strong>{"ELITE"}</strong></h3>
                                    <p className="mb-4">{"Wellcome To Our System"}</p>
                                </div>
                                <form onSubmit={}>
                                    <div className="form-group first">
                                        <label htmlFor="email">{"email"}</label>
                                        <input type="text" className="form-control" id="email"
                                            value={email}
                                            onChange={(e) => {
                                                setCredentials((credentials) => ({ ...credentials, email: email }))
                                                return setEmail(e.target.value);
                                            }}
                                        />
                                    </div>
                                    <div className="form-group last mb-4">
                                        <label htmlFor="password">{"Password"}</label>
                                        <input type="password" className="form-control" id="password"
                                            value={password}
                                            onChange={(e) => {
                                                setCredentials((credentials) => ({ ...credentials, password: password }))
                                                return setPassword(e.target.value);
                                            }}
                                        />
                                    </div>
                                    <div className="d-flex mb-5 align-items-center justify-content-between">
                                        <label className="control control--checkbox mb-0">
                                            <span className="caption">{"Remember me"}</span>
                                            <input type="checkbox" defaultChecked={false} />
                                            <div className="control__indicator"></div>
                                        </label>
                                        <span className="ml-auto"><a href="#" className="forgot-pass">{"Forgot Password"}</a></span>
                                    </div>
                                    <input type="submit" value="Log In" className="btn text-white btn-block btn-primary"
                                        disabled={disableSubmit}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            return () => handeSubmit();
                                        }}
                                    />
                                    <span className="d-block text-left my-4 text-muted"> {"or sign in with"}</span>
                                    <div className="social-login">
                                        <a href="#" className="facebook">
                                            <span className="icon-facebook mr-3"></span>
                                        </a>
                                        <a href="#" className="twitter">
                                            <span className="icon-twitter mr-3"></span>
                                        </a>
                                        <a href="#" className="google">
                                            <span className="icon-google mr-3"></span>
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;