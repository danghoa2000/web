import React from "react";
import { createRoot } from "react-dom/client";
import '../../sass/app.scss'
import '../../sass/common.scss'

function HomePage() {
    return (
        <div className="container-fluid d-flex p-0">
            <div className="site__bar">
                <div className="logo">
                    <img
                        src="http://mirora3.demo.towerthemes.com/image/catalog/logo/logo.png"
                        alt=""
                    />
                </div>
                <ul className="menu">
                    <li>
                        <a herf="">{"Home"}</a>
                    </li>
                    <li>
                        <a herf="">{"Shop"}</a>
                    </li>
                    <li>
                        <a herf="">{"accessories"}</a>
                    </li>
                    <li>
                        <a herf="">{"About us"}</a>
                    </li>
                    <li>
                        <a herf="">{"Contact us"}</a>
                    </li>
                    <li>
                        <a herf="">{"Blog"}</a>
                    </li>
                </ul>
                <div className="news__letter">
                    <h3 className="news__letter__title text__header">
                        {"Newsletter"}
                    </h3>
                    <p>{"Sign up for our newsletter."}</p>
                    <div className="custom__form" id="subscribeForm">
                        <form action="">
                            <input
                                type="text"
                                className="form-control form__no__bored"
                                placeholder="Enter you email address here..."
                            />
                            <span className="btn">
                                <i className="fa fa-paper-plane"></i>
                            </span>
                        </form>
                    </div>
                </div>
                <div className="">
                    <ul className="menu follow d-flex">
                        <li>
                            <a href="">
                                <span>
                                    <i className="fa-brands fa-twitter"></i>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span>
                                    <i className="fa-brands fa-google-plus-g"></i>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span>
                                    <i className="fa-brands fa-facebook-f"></i>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                    <p className="coppy__right">
                        {"Copyright © 2022"}
                        <br />
                        <a style={{ color: "#a8741a" }} href="">
                            {"Hoa.ND"}
                        </a>
                        {".All Right Reserved."}
                    </p>
                </div>
            </div>
            <div className="wrapper">
                <div className="top__bar">
                    <div className="top__bar__language">
                        <div
                            style={{ width: "200px" }}
                            className="d-flex align-items-center"
                        >
                            <label
                                htmlFor="language"
                                className="form-label mb-0 mr-2"
                            >
                                {"Language:"}
                            </label>
                            <div className="custom-select">
                                <select name="" id="">
                                    <option value="1">
                                        <div>
                                            <label htmlFor="" className="mr-2">
                                                <img
                                                    src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                                                    alt=""
                                                />
                                            </label>
                                            <span>VIE</span>
                                        </div>
                                    </option>
                                    <option value="2">
                                        <div>
                                            <label htmlFor="" className="mr-2">
                                                <img
                                                    src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                                                    alt=""
                                                />
                                            </label>
                                            <span>ENG</span>
                                        </div>
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="top__bar__box">
                        <div className="custom__form" id="subscribeForm">
                            <form action="">
                                <input
                                    type="text"
                                    className="form-control form__no__bored"
                                    placeholder="Search entire store here..."
                                />
                                <span className="btn">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
