import React, {useState} from 'react';
import Footer from "../components/footer";
import {Link} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import axios from "axios";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

const ForgotPassword = () => {

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
          Already have an account? <a href="signin.html">Sign in</a>
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
                                    src="../assets/images/svg-graphics/fp-g.svg"
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <div
                                className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1 d-flex align-items-center">
                                <div>
                                    <div className="mb-lg-9 mb-5">
                                        {/* heading */}
                                        <h1 className="mb-2 h2 fw-bold">Forgot your password?</h1>
                                        <p>
                                            Please enter the email address associated with your account
                                            and We will email you a link to reset your password.
                                        </p>
                                    </div>
                                    <Formik
                                        initialValues={{
                                            email: ''
                                        }}
                                        onSubmit={(value, {setSubmitting}) => {
                                            let sendEmail = {
                                                email: value.email
                                            }
                                            Swal.fire({
                                                title: 'Reset password already',
                                                text: 'Please check your email to get new password',
                                                icon: 'success',
                                                confirmButtonText: 'OK'
                                            }).then((result) => {
                                                if (result.isConfirmed) {
                                                    window.location.reload();
                                                }
                                            });
                                            const url = "http://localhost:8080/reset-password";
                                            axios
                                                .post(url, sendEmail)
                                                .then(() => {

                                            })
                                                .catch((err) => {
                                                    Swal.fire({
                                                        icon: 'error',
                                                        title: 'Oops...',
                                                        text: 'Email does not exist',
                                                    })
                                                    console.log(err)
                                                })
                                            setSubmitting(false);
                                        }}
                                        enableReinitialize={true}
                                    >
                                        {({errors, touched, isSubmitting}) => (
                                            <Form>
                                                {/* row */}
                                                <div className="row g-3">
                                                    {/* col */}
                                                    <div className="col-12">
                                                        {/* input */}
                                                        <Field
                                                            type="text"
                                                            id="email"
                                                            name="email"
                                                            className="form-control"
                                                            placeholder="Email"
                                                        />
                                                        {errors.email && touched.email && (
                                                            <div className="error-message">{errors.email}</div>
                                                        )}
                                                    </div>
                                                    {/* btn */}
                                                    <div className="col-12 d-grid gap-2">
                                                        <button
                                                            type="submit"
                                                            className="btn btn-primary"
                                                            disabled={isSubmitting}
                                                            >
                                                            Reset Password
                                                        </button>

                                                        <Link to={"/signin"} className="btn btn-light">
                                                            Back
                                                        </Link>
                                                    </div>
                                                </div>

                                            </Form>
                                        )}
                                    </Formik>

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

export default ForgotPassword;