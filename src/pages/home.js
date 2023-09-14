import Navbar from "../components/navbar";
import React, {useEffect, useState} from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import Footer from "../components/footer";
import NavbarCustomer from "../components/navbarCustomer";
import NavbarAdmin from "../components/navbarAdmin";
import NavbarShop from "../components/navbarShop";
import NavbarEmployee from "../components/navbarEmployee";
import { Field, Form, Formik} from "formik";
import axios from "axios";
import { isAfter, isBefore, parse } from 'date-fns';
import Index from "../outlet/index";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';



const Home = () => {
    let account = JSON.parse(localStorage.getItem('account'));
    const navigate = useNavigate();


    useEffect(() => {
        let account = JSON.parse(localStorage.getItem('account'))
        if (account && account.status.id === 3 && account.role.id===2) {
            window.$("#statusModal").modal("show");
        }
    }, []);

    return (
        <>
        {/* Modal setting account*/}
        <div
            className="modal fade"
            id="statusModal"
            tabIndex={-1}
            aria-labelledby="userModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content p-4">
                    <div className="modal-header border-0">
                        <h5 className="modal-title fs-3 fw-bold" id="userModalLabel">
                            Personal information
                        </h5>
                    </div>
                    <div className="modal-body">
                        <Formik
                            initialValues={{birthday:'', avatar: 'https://i.pinimg.com/originals/c6/e5/65/c6e56503cfdd87da299f72dc416023d4.jpg', address: '', phone: '',gender: '1'  }}
                            validate={values => {
                                const errors = {};
                                // Kiểm tra các trường dữ liệu
                                if (!values.birthday) {
                                    errors.birthday = 'Please enter date of birth';
                                } else {
                                    const parsedDate = parse(values.birthday, 'dd/MM/yyyy', new Date());
                                    const minDate = parse('01/01/1930', 'dd/MM/yyyy', new Date());
                                    const maxDate = parse('31/12/2018', 'dd/MM/yyyy', new Date());

                                    if (isBefore(parsedDate, minDate) || isAfter(parsedDate, maxDate)) {
                                        errors.birthday = 'Birthday must be between 1930 and 2018';
                                    }
                                }

                                if (!values.address) {
                                    errors.address = 'Please enter your address';
                                }

                                if (!values.phone) {
                                    errors.phone = 'Please enter the phone number';
                                }

                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                let customer =  {
                                    birthday: values.birthday,
                                    avatar: values.avatar,
                                    address: values.address,
                                    phone: values.phone,
                                    gender: values.gender,
                                    account: {
                                        id: account.id
                                    }
                                }

                                axios.post("http://localhost:8080/customer/save",customer,{
                                    headers: {
                                        'Authorization': localStorage.getItem('token')
                                    },
                                }).
                                then((rep)=>{
                                    window.$("#statusModal").modal("hide");
                                    Swal.fire(
                                        '',
                                        'Update successful',
                                        'success'
                                    )
                                    account.status.id =1;
                                    localStorage.setItem("account" , JSON.stringify(account))
                                }).catch((err)=>{
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Oops...',
                                        text: ' Update failed ',
                                    })

                                    window.$("#statusModal").modal("show");
                                    console.log(err)
                                })


                                setSubmitting(false);
                            }}
                        >
                            {({ errors, touched, isSubmitting }) => (
                                <Form>
                                    <div className="row g-3">

                                        <div className="col-12">
                                            <Field
                                                type="text"
                                                className="form-control"
                                                placeholder="Address"
                                                name="address"
                                            />
                                            {errors.address && touched.address && (
                                                <div className="error-message">{errors.address}</div>
                                            )}
                                        </div>

                                        <div className="col-12">
                                            <Field
                                                type="text"
                                                className="form-control"
                                                placeholder="Phone Number"
                                                name="phone"
                                            />
                                            {errors.phone && touched.phone && (
                                                <div className="error-message">{errors.phone}</div>
                                            )}
                                        </div>
                                        <div className="col-12">
                                            <p>Date of Birth</p>
                                            <Field
                                                type="date"
                                                className="form-control"
                                                placeholder="Date of Birth"
                                                name="birthday"
                                            />
                                            {errors.birthday && touched.birthday && (
                                                <div className="error-message">{errors.birthday}</div>
                                            )}
                                        </div>

                                        <div className="col-12">
                                            <div className="form-check form-check-inline">
                                                <Field
                                                    type="radio"
                                                    className="form-check-input"
                                                    name="gender"
                                                    value="1"
                                                />
                                                <label className="form-check-label">Male</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <Field
                                                    type="radio"
                                                    className="form-check-input"
                                                    name="gender"
                                                    value="2"
                                                />
                                                <label className="form-check-label">Female</label>
                                            </div>
                                        </div>


                                        <div className="col-12 d-grid">
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                                disabled={isSubmitting}
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

        {account === null && <Navbar></Navbar>}
        {account && account.role.name === "ROLE_CUSTOMER" && <NavbarCustomer></NavbarCustomer>}
        {account && account.role.name === "ROLE_ADMIN" && <NavbarAdmin></NavbarAdmin>}
        {account && account.role.name === "ROLE_SHOP" && <NavbarShop></NavbarShop>}
        {account && account.role.name === "ROLE_EMPLOYEE" && <NavbarEmployee></NavbarEmployee>}
        <main>
            <Index></Index>
        </main>
        <Footer></Footer>
    </>
    )
}
export default Home;