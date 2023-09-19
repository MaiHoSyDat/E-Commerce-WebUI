import React from 'react';
import Footer from "../components/footer";
import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import {LoginSocialFacebook, LoginSocialGoogle} from "reactjs-social-login";
import {Field, Form, Formik} from "formik";

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



    const handleLoginFailure = () => {
        // Xử lý khi đăng nhập thất bại
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
        })
    };
    const [accountlogin , setAccountlogin] = useState({})

    const handleLoginSuccess = (data) => {
        setAccountlogin( {
            username: data.email,
            name: data.name,
            email: data.email,
        })
        callApi(data)
    };

    const callApi = ((resp) => {
        let account ={
            username: resp.email,
            name: resp.name,
            email: resp.email,
        }
        axios
            .post('http://localhost:8080/login/email', account)
            .then((response) => {
                console.log(response.data)
                if (response.data == "new account") {
                    console.log("create")
                    window.$("#abc").modal("show");
                } else {
                    localStorage.setItem('token', 'Bearer ' + response.data.token);
                    localStorage.setItem('account', JSON.stringify(response.data));
                    navigate("/")
                }
            })
            .catch((error) => {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })

            });

    })
    return (
        <>
            <div
                className="modal fade"
                id="abc"
                tabIndex={-1}
                aria-labelledby="userCustomerModal"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content p-4">
                        <div className="modal-header border-0">
                            <h5 className="modal-title fs-3 fw-bold" id="userCustomerModal">
                                Role
                            </h5>
                        </div>
                        <div className="modal-body">
                            <Formik
                                initialValues={{
                                    role: '2'
                                }}
                                validate={values => {
                                    const errors = {};
                                    // Kiểm tra các trường dữ liệu

                                    return errors;
                                }}
                                onSubmit={(values, {setSubmitting}) => {
                                    const ACTIVE = "1";
                                    const SHOP_PENDING = "4";
                                    let status = ACTIVE;
                                    if (values.role != "2") {
                                        status = SHOP_PENDING;
                                    }
                                    let newAccount = {... accountlogin ,  role: {
                                            id: values.role
                                        },
                                        status: {
                                            id: status
                                        }}
                                    console.log(newAccount)
                                    axios
                                        .post('http://localhost:8080/login/email', newAccount)
                                        .then((response) => {
                                            localStorage.setItem('token', 'Bearer ' + response.data.token);
                                            localStorage.setItem('account', JSON.stringify(response.data));
                                            navigate("/index")
                                        })
                                        .catch((error) => {
                                            console.log(error);
                                            Swal.fire({
                                                icon: 'error',
                                                title: 'Oops...',
                                                text: 'Something went wrong!',
                                            })

                                        });

                                    setSubmitting(false);
                                }}
                            >
                                {({isSubmitting}) => (
                                    <Form>
                                        <div className="row g-3">

                                            <div className="col-12">
                                                <Field name="role"
                                                       as="select"
                                                       className="form-control"
                                                >
                                                    <option value="2">
                                                        Customer
                                                    </option>
                                                    <option value="3">
                                                        Shop
                                                    </option>
                                                    ))
                                                </Field>
                                            </div>
                                            <div className="col-12 d-grid">
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary"
                                                    disabled={isSubmitting}
                                                    data-bs-dismiss="modal"
                                                >
                                                    Update
                                                </button>
                                            </div>
                                        </div>
                                    </Form>
                                )}
                            </Formik>

                        </div>
                        <div className="modal-footer border-0 justify-content-center">

                        </div>
                    </div>
                </div>
            </div>
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
                               <div className="row">
                                   <div className="col-1"></div>
                                   <div className="col-5">
                                       <LoginSocialGoogle
                                           scope="email"
                                           client_id={"1019879807561-qdd2356b4o39mo4r9174hv2dpp9097n7.apps.googleusercontent.com"}
                                           onReject={handleLoginFailure}
                                           onResolve={({provider, data}) => handleLoginSuccess(data)}


                                       >
                                           <a
                                               className="login100-social-item bg3"
                                               style={{
                                                   display: "inline-block",
                                                   backgroundColor: "#dc4e41",
                                                   color: "#fff",
                                                   padding: "10px",
                                                   borderRadius: "4px",
                                                   textDecoration: "none"
                                               }}
                                           >
                                               Login with Google
                                           </a>
                                       </LoginSocialGoogle>
                                   </div>
                                   <div className="col-5">
                                       <LoginSocialFacebook
                                           appId={"987657502490133"}
                                           onReject={handleLoginFailure}
                                           onResolve={({provider, data}) => handleLoginSuccess(data)}>
                                           <a
                                               className="login100-social-item bg1"
                                               style={{
                                                   display: "inline-block",
                                                   backgroundColor: "#3b5998",
                                                   color: "#fff",
                                                   padding: "10px",
                                                   borderRadius: "4px",
                                                   textDecoration: "none"
                                               }}
                                           >
                                               Login with Facebook
                                           </a>
                                       </LoginSocialFacebook>
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