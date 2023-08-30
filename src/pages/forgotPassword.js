import React from 'react';
import Footer from "../components/footer";

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
                            <div className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1 d-flex align-items-center">
                                <div>
                                    <div className="mb-lg-9 mb-5">
                                        {/* heading */}
                                        <h1 className="mb-2 h2 fw-bold">Forgot your password?</h1>
                                        <p>
                                            Please enter the email address associated with your account
                                            and We will email you a link to reset your password.
                                        </p>
                                    </div>
                                    {/* form */}
                                    <form>
                                        {/* row */}
                                        <div className="row g-3">
                                            {/* col */}
                                            <div className="col-12">
                                                {/* input */}
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="inputEmail4"
                                                    placeholder="Email"
                                                    required=""
                                                />
                                            </div>
                                            {/* btn */}
                                            <div className="col-12 d-grid gap-2">
                                                <button type="submit" className="btn btn-primary">
                                                    Reset Password
                                                </button>
                                                <a href="signup.html" className="btn btn-light">
                                                    Back
                                                </a>
                                            </div>
                                        </div>
                                    </form>
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