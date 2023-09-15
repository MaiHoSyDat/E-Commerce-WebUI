import Navbar from "../components/navbar";
import React, {useEffect, useState} from 'react';
import Footer from "../components/footer";
import NavbarCustomer from "../components/navbarCustomer";
import NavbarAdmin from "../components/navbarAdmin";
import NavbarShop from "../components/navbarShop";
import NavbarEmployee from "../components/navbarEmployee";
import {Field, Form, Formik} from "formik";
import axios from "axios";
import {isAfter, isBefore, parse} from 'date-fns';
import Index from "../outlet/index";
import {storage} from "../firebase";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {v4} from "uuid";
import * as Yup from "yup";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';


const Home = () => {
    let account = JSON.parse(localStorage.getItem('account'));

    const [imageUpload, setImageUpload] = useState([]);
    const [imageUrls, setImageUrls] = useState([]);
    const imagesListRef = ref(storage, "shop/");

    useEffect(() => {
        let account = JSON.parse(localStorage.getItem('account'))

        if (account && account.status.id === 3 && account.role.name === "ROLE_CUSTOMER") {
            window.$("#statusModal").modal("show");
        }
        if (account && account.status.id === 3 && account.role.name === "ROLE_SHOP") {
            window.$("#shopInformationModal").modal("show");
        }
        if (account && account.status.id === 4 && account.role.name === "ROLE_SHOP") {
            Swal.fire('Need confirm from Admin. Please Waiting...')
        }
        if (account && account.status.id === 3 && account.role.name === "ROLE_EMPLOYEE") {
            window.$("#employeeModal").modal("show");
        }
    }, [])

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        setImageUpload(files);
    };

    useEffect(() => {

        if (imageUpload !== null) {
            const newImageUrls = [];
            for (let i = 0; i < imageUpload.length; i++) {
                const imageRef = ref(storage, `shop/${imageUpload[i].name + v4()}`);
                uploadBytes(imageRef, imageUpload[i]).then((snapshot) => {
                    getDownloadURL(snapshot.ref).then((url) => {
                        newImageUrls.push(url);
                    });
                });
            }
            setImageUrls(newImageUrls)
        }
    },[imageUpload])

    // validate shop
    const validation = Yup.object().shape({
        logo: Yup.array()
            .min(1, 'Please select at least one image')
            .nullable(),
        address: Yup.string().required('Address is required'),
        phone: Yup.string().required('Phone is required'),
    })

    console.log(imageUpload)

    return (
        <>
            {/* Modal update information customer*/}
            <div
                className="modal fade"
                id="statusModal"
                tabIndex={-1}
                aria-labelledby="userCustomerModal"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content p-4">
                        <div className="modal-header border-0">
                            <h5 className="modal-title fs-3 fw-bold" id="userCustomerModal">
                                Personal information
                            </h5>
                        </div>
                        <div className="modal-body">
                            <Formik
                                initialValues={{
                                    birthday: '',
                                    avatar: '',
                                    address: '',
                                    phone: '',
                                    gender: '1'
                                }}
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
                                onSubmit={(values, {setSubmitting}) => {
                                    let customer = {
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
                                {({errors, touched, isSubmitting}) => (
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

            {/*modal update information shop*/}
            <div
                className="modal fade"
                id="shopInformationModal"
                tabIndex={-1}
                aria-labelledby="useShopInformationModal"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content p-4">
                        <div className="modal-header border-0">
                            <h5 className="modal-title fs-3 fw-bold" id="useShopInformationModal">
                                Shop Information
                            </h5>
                        </div>
                        <div className="modal-body-shop">
                            <Formik
                                initialValues={{
                                    logo: '',
                                    address: '',
                                    phone: ''
                                }}
                                validationSchema={validation}
                                onSubmit={(values, {setSubmitting}) => {
                                    if (!imageUrls[0]) {
                                        alert("Please select an image for the logo");
                                        setSubmitting(false);
                                        return;
                                    }
                                    let shop = {
                                        logo: imageUrls[0],
                                        address: values.address,
                                        name: account.name,
                                        phone: values.phone,
                                        status: {
                                            id: 1
                                        },
                                        account: {
                                            id: account.id
                                        }
                                    }
                                    axios.post("http://localhost:8080/shops/save/account/" + account.id, shop)
                                        .then((rep) => {
                                            window.$("#shopInformationModal").modal("hide");
                                            Swal.fire(
                                                '',
                                                'Update successful',
                                                'success'
                                            )
                                            account.status.id = 1;
                                            localStorage.setItem("account", JSON.stringify(account))
                                        }).catch((err) => {
                                        Swal.fire({
                                            icon: 'error',
                                            title: 'Oops...',
                                            text: ' Update failed ',
                                        })
                                        window.$("#shopInformationModal").modal("show");
                                        console.log(err)
                                    })


                                    setSubmitting(false);
                                }}
                            >
                                {({errors, touched, isSubmitting}) => (
                                    <Form>
                                        <div className="row g-3">

                                            <div className="col-12">
                                                <Field
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Your Address"
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
                                                <Field
                                                    name="logo"
                                                    type="file"
                                                    id="image"
                                                    onChange={handleFileChange}
                                                    hidden={true}
                                                />
                                                <label className={"btn btn-outline-danger"} htmlFor={"image"}>Choose File</label>
                                                {errors.logo && touched.logo && (
                                                    <div className="error-message">{errors.logo}</div>
                                                )}
                                                {imageUpload.length > 0 && (
                                                    <div>
                                                        <h5>Shop Logo:</h5>
                                                        <div style={{display: 'flex'}}>
                                                            {imageUpload.map((file, index) => (
                                                                <div key={index} style={{
                                                                    marginRight: '10px',
                                                                    position: 'relative'
                                                                }}>
                                                                    <img
                                                                        src={URL.createObjectURL(file)}
                                                                        alt={`Selected Image ${index}`}
                                                                        style={{width: '100px', height: 'auto'}}
                                                                    />
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
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

            {/*modal update information employee*/}
            <div
                className="modal fade"
                id="employeeModal"
                tabIndex={-1}
                aria-labelledby="userEmployeeModal"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content p-4">
                        <div className="modal-header border-0">
                            <h5 className="modal-title fs-3 fw-bold" id="userEmployeeModal">
                                Employee Information
                            </h5>
                        </div>
                        <div className="modal-body-employee">
                            <Formik
                                initialValues={{
                                    full_name: '',
                                    birthday: '',
                                    address: '',
                                    phone: '',
                                    salary: '',
                                    gender: '1'
                                }}
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
                                    if (!values.full_name) {
                                        errors.full_name = 'Please enter your Full Name';
                                    }

                                    if (!values.address) {
                                        errors.address = 'Please enter your address';
                                    }

                                    if (!values.phone) {
                                        errors.phone = 'Please enter your phone number';
                                    }

                                    if (!values.salary) {
                                        errors.salary = 'Please enter your salary';
                                    }

                                    return errors;
                                }}
                                onSubmit={(values, {setSubmitting}) => {
                                    let employee = {
                                        full_name: values.full_name,
                                        birthday: values.birthday,
                                        address: values.address,
                                        phone: values.phone,
                                        salary: values.salary,
                                        gender: values.gender,
                                        status: {
                                            id: 1
                                        },
                                        account: {
                                            id: account.id
                                        }
                                    }

                                    axios
                                        .post("http://localhost:8080/employee/save/" + account.id, employee).then((rep) => {
                                        window.$("#employeeModal").modal("hide");
                                        Swal.fire(
                                            '',
                                            'Update successful',
                                            'success'
                                        )
                                        account.status.id = 1;
                                        localStorage.setItem("account", JSON.stringify(account))
                                    }).catch((err) => {
                                        Swal.fire({
                                            icon: 'error',
                                            title: 'Oops...',
                                            text: ' Update failed ',
                                        })
                                        window.$("#employeeModal").modal("show");
                                        console.log(err)
                                    })


                                    setSubmitting(false);
                                }}
                            >
                                {({errors, touched, isSubmitting}) => (
                                    <Form>
                                        <div className="row g-3">

                                            {/*full_name*/}
                                            <div className="col-12">
                                                <Field
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Full Name"
                                                    name="full_name"
                                                />
                                                {errors.full_name && touched.full_name && (
                                                    <div className="error-message">{errors.full_name}</div>
                                                )}
                                            </div>
                                            {/*date of birth*/}
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
                                            {/*Address*/}
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
                                            {/*Phone*/}
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
                                            {/*Salary*/}
                                            <div className="col-12">
                                                <Field
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Salary"
                                                    name="salary"
                                                />
                                                {errors.salary && touched.salary && (
                                                    <div className="error-message">{errors.salary}</div>
                                                )}
                                            </div>
                                            {/*Gender*/}
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