import React from 'react';
import Footer from "../components/footer";
import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
const SignIn = () => {
    const navigate = useNavigate();
    const [account, setAccount] = useState({
        username: '',
        password: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setAccount({ ...account, [name]: value });
    };
    const handleError = () => {

    }
    const handleLogin = () => {
        axios
            .post('http://localhost:8080/login', account)
            .then((response) => {

                localStorage.setItem('token', 'Bearer ' + response.data.token);
                localStorage.setItem('account', JSON.stringify(response.data));
                navigate("/index")

            })
            .catch((error) => {
                console.log(error);
                Swal.fire('Invalid username or password')

            });
    };

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
        }
    }, []);

    return (
        <>
            <div className="border-bottom shadow-sm">
                <nav className="navbar navbar-light py-2">
                    <div className="container justify-content-center justify-content-lg-between">
                        <Link to={"/index"}>
                        <a className="navbar-brand" href="">
                            <img
                                src="/assets/images/logo/freshcart-logo.svg"
                                alt=""
                                className="d-inline-block align-text-top"
                            />
                        </a>
                        </Link>
                        <span className="navbar-text">
          Already have an account? <a href="signin.html">Sign in</a>
        </span>
                    </div>
                </nav>
            </div>
            <main>
                {/* section */}
                <section className="my-lg-14 my-8">
                    <div className="container">
                        {/* row */}
                        <div className="row justify-content-center align-items-center">
                            <div className="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
                                {/* img */}
                                <img
                                    src="/assets/images/svg-graphics/signin-g.svg"
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            {/* col */}
                            <div className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
                                <div className="mb-lg-9 mb-5">
                                    <h1 className="mb-1 h2 fw-bold">Sign in to FreshCart</h1>
                                    <p>Welcome back to FreshCart! Enter your email to get started.</p>
                                </div>

                                    <div className="row g-3">
                                        {/* row */}
                                        <div className="col-12">
                                            {/* input */}
                                            <h6>Enter username:</h6>
                                            <input
                                                type="text"
                                                name= "username"
                                                onChange={handleInputChange}
                                                className="form-control"
                                                id="inputEmail4"
                                                placeholder="Enter username"
                                                required=""
                                            />
                                        </div>
                                        <div className="col-12">
                                            {/* input */}
                                            <div className="password-field position-relative">
                                                <h6>Enter password:</h6>
                                                <input
                                                    type="password"
                                                    name= "password"
                                                    onChange={handleInputChange}
                                                    id="fakePassword"
                                                    placeholder="Enter password"
                                                    className="form-control"
                                                    required=""
                                                />
                                                <span>
                      <i id="passwordToggler" className="bi bi-eye-slash" />
                    </span>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            {/* form check */}
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    id="flexCheckDefault"
                                                />
                                                {/* label */}{" "}
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckDefault"
                                                >
                                                    Remember me
                                                </label>
                                            </div>
                                            <div>
                                                {" "}
                                                Forgot password? <a href="forgot-password.html">Reset It</a>
                                            </div>
                                        </div>
                                        {/* btn */}
                                        <div className="col-12 d-grid">
                                            <button type="submit" className="btn btn-primary" onClick={handleLogin}>
                                                Log In
                                            </button>
                                        </div>
                                        {/* link */}
                                        <div>
                                            Don’t have an account? <Link to={"/signup"}> Sign Up</Link>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </>

    );
};

export default SignIn;