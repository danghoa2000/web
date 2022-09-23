import { useFormik } from 'formik';
import React, { useState } from 'react';
import '../../../../../sass/app.scss';
import './login.scss';
import * as Yup from "yup";
import { EMAIL_PATTERN, MAX_EMAIL_CHARACTERS, MIN_PASSWORD_CHARACTERS } from '../../../../constants/constants';

const Login = (props) => {


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            remember: false, // false => not remember , true => remember
        },

        validationSchema: Yup.object({
            email:
                Yup.string()
                    .required(),
            // .max(MAX_EMAIL_CHARACTERS)
            // .matches(EMAIL_PATTERN),
            password:
                Yup.string()
                    .required(),
            // .min(MIN_PASSWORD_CHARACTERS)
            // .matches(/[a-z0-9]/),
        }),

        onSubmit: values => {
            console.log(values)
            console.log("Errors: ", formik.errors);
            // handleSubmit(values);
            alert(JSON.stringify(values, null, 2));
        },
    })

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
                                <form onSubmit={formik.handleSubmit}>
                                    <div className="form-group first">
                                        <label htmlFor="email">{"email"}</label>
                                        <input type="text" className="form-control" id="email"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.errors.email && formik.touched.email && (
                                            <p>{formik.errors.email}</p>
                                        )}
                                    </div>
                                    <div className="form-group last mb-4">
                                        <label htmlFor="password">{"Password"}</label>
                                        <input type="password" className="form-control" id="password"
                                            value={formik.values.password}
                                            onChange={formik.handleChange}
                                        />
                                        {formik.errors.email && formik.touched.email && (
                                            <p>{formik.errors.email}</p>
                                        )}
                                    </div>
                                    <div className="d-flex mb-5 align-items-center justify-content-between">
                                        <label className="control control--checkbox mb-0">
                                            <span className="caption">{"Remember me"}</span>
                                            <input name='remember' type="checkbox" value={formik.values.remember} onChange={formik.handleChange} />
                                            <div className="control__indicator"></div>
                                        </label>
                                        <span className="ml-auto"><a href="#" className="forgot-pass">{"Forgot Password"}</a></span>
                                    </div>
                                    <input type="submit" value="Log In" className="btn text-white btn-block btn-primary"
                                    // disabled={formik.isSubmitting}
                                    />
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