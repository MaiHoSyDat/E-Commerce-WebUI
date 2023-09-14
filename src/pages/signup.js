import React, {useState} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';

import Footer from "../components/footer";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

const Signup = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="border-bottom shadow-sm">
                <nav className="navbar navbar-light py-2">
                    <div className="container justify-content-center justify-content-lg-between">
                        <a className="navbar-brand" href="../index.html">
                            <img
                                src="../assets/images/logo/freshcart-logo.svg"
                                alt=""
                                className="d-inline-block align-text-top"
                            />
                        </a>
                        <span className="navbar-text">
          Already have an account? <Link to={"/signin"}>Sign in</Link>
        </span>
                    </div>
                </nav>
            </div>
            <main>
                {/* section */}
                <section className="my-lg-14 my-8">
                    {/* container */}
                    <div className="container">
                        {/* row */}
                        <div className="row justify-content-center align-items-center">
                            <div className="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
                                {/* img */}
                                <img
                                    src="../assets/images/svg-graphics/signup-g.svg"
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            {/* col */}
                            <div className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
                                <div className="mb-lg-9 mb-5">
                                    <h1 className="mb-1 h2 fw-bold">Get Start Shopping</h1>
                                    <p>Welcome to FreshCart! Enter your email to get started.</p>
                                </div>
                                {/* form */}
                                <Formik
                                    initialValues={{username: '', name: '', email: '', password: '', role: '2'}}
                                    validate={values => {
                                        const errors = {};
                                        // Kiểm tra và xử lý lỗi cho các trường

                                        if (!values.name) {
                                            errors.name = 'Username is required';
                                        }


                                        if (!values.email) {
                                            errors.email = 'Email is required';
                                        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                            errors.email = 'Invalid email address';
                                        }

                                        if (!values.password) {
                                            errors.password = 'Password is required';
                                        } else if (values.password.length < 6) {
                                            errors.password = 'Password must be at least 6 characters long';
                                        }
                                        return errors;
                                    }}
                                    onSubmit={(values, {setSubmitting}) => {
                                        const PENDING = "3";
                                        const SHOP_PENDING ="4";
                                        let status = PENDING;
                                        if (values.role != "2") {
                                            status = SHOP_PENDING;
                                        }
                                        let account = {
                                            name: values.name,
                                            email: values.email,
                                            password: values.password,
                                            username: values.username,
                                            role: {
                                                id: values.role
                                            },
                                            status: {
                                                id: status
                                            }
                                        }
                                        axios.post("http://localhost:8080/register", account).
                                        then((rep) => {
                                            Swal.fire(
                                                '',
                                                'Account successfully created',
                                                'success'
                                            )
                                            navigate("/signin")
                                        }).catch((err) => {
                                            console.log(err)
                                            Swal.fire({
                                                icon: 'error',
                                                title: 'Oops...',
                                                text: 'Account creation failed!',
                                            })
                                        })


                                        setSubmitting(false);
                                    }}
                                >
                                    <Form>
                                        <div className="row g-3">
                                            <div className="col">
                                                <Field
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Username"
                                                    required=""
                                                    name="username"
                                                />
                                                <ErrorMessage name="name" component="div" className="error-message"/>
                                            </div>
                                            <div className="col">
                                                <Field
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Name"
                                                    required=""
                                                    name="name"
                                                />
                                                <ErrorMessage name="name" component="div" className="error-message"/>
                                            </div>

                                            <div className="col-12">
                                                <Field
                                                    type="email"
                                                    className="form-control"
                                                    id="inputEmail4"
                                                    placeholder="Email"
                                                    required=""
                                                    name="email"
                                                />
                                                <ErrorMessage name="email" component="div" className="error-message"/>
                                            </div>
                                            <div className="col-12">
                                                <div className="password-field position-relative">
                                                    <Field
                                                        type="password"
                                                        id="fakePassword"
                                                        placeholder="Enter Password"
                                                        className="form-control"
                                                        required=""
                                                        name="password"
                                                    />
                                                    <span>
            <i id="passwordToggler" className="bi bi-eye-slash"/>
          </span>
                                                </div>
                                                <ErrorMessage name="password" component="div"
                                                              className="error-message"/>
                                            </div>
                                            <Field name="role"
                                                   as="select"
                                                   className="form-control"
                                                  >
                                                <option value="" disabled></option>
                                                <option value="2">
                                                    Customer
                                                </option>
                                                <option value="3">
                                                    Shop
                                                </option>
                                                ))
                                            </Field>
                                            <ErrorMessage name="status" component="div"/>
                                            <div className="col-12 d-grid">
                                                <button type="submit" className="btn btn-primary">
                                                    Register
                                                </button>
                                            </div>
                                            <p>
                                                <small>
                                                    By continuing, you agree to our <a href="#!"> Terms of
                                                    Service</a> &amp;{" "}
                                                    <a href="#!">Privacy Policy</a>
                                                </small>
                                            </p>
                                        </div>
                                        <ErrorMessage name="general" component="div" className="error-message"/>
                                    </Form>
                                </Formik>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </>

    );
};

export default Signup;