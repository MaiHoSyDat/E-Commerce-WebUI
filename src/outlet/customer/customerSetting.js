import React, {useEffect, useState} from 'react';
import {Field, Form, Formik} from "formik";
import {isAfter, isBefore, parse} from "date-fns";
import axios from "axios";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {storage} from "../../firebase";
import {v4} from "uuid";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

const CustomerSetting = () => {
    let account = JSON.parse(localStorage.getItem('account'));

    const [imageUpload, setImageUpload] = useState('');
    const [image1, setImage1] = useState('');
    const [imageUrls, setImageUrls] = useState('');
    const [customer, setCustomer] = useState({});
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setImage1(URL.createObjectURL(file));
        setImageUpload(file)
    };
    useEffect(() => {
        axios.get("http://localhost:8080/customer/customerDetail/" + account.id, {
            headers: {
                'Authorization': localStorage.getItem('token')
            },
        }).then((resp) => {
            setCustomer(resp.data)
            setImage1(resp.data.avatar)
        }).catch((err) => {
            console.log(err)
        })

    }, [])

    useEffect(() => {
        if (imageUpload !== null) {
            const imageRef = ref(storage, `customer/${imageUpload.name + v4()}`);
            uploadBytes(imageRef, imageUpload).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    setImageUrls(url)
                });
            });
        }

    }, [imageUpload])


    return (
        <>
            <div className="col-lg-9 col-md-8 col-12">
                <div className="py-6 p-md-6 p-lg-10">
                    <div className="mb-6">
                        {/* heading */}
                        <h2 className="mb-0">Account Setting</h2>
                    </div>
                    <div>
                        {/* heading */}
                        <div className="row align-items-center mb-4">
                            <div className="col-6">
                                <h5>Account details</h5>
                            </div>
                            <div className='col-3'></div>
                            <div className=" col-3">
                                <h5>Avatar:</h5>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6">
                                {/* form */}
                                <Formik
                                    initialValues={{
                                        birthday: customer.birthday,
                                        avatar: customer.avatar,
                                        address: customer.address,
                                        phone: customer.phone,
                                        gender: customer.gender
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
                                        let newCustomer = {
                                            id: customer.id,
                                            birthday: values.birthday,
                                            avatar: imageUrls,
                                            address: values.address,
                                            phone: values.phone,
                                            gender: values.gender,
                                        }

                                        axios.post("http://localhost:8080/customer/edit", newCustomer, {
                                            headers: {
                                                'Authorization': localStorage.getItem('token')
                                            },
                                        }).then(() => {
                                            Swal.fire(
                                                '',
                                                'Update successful',
                                                'success'
                                            )
                                        }).catch((err) => {
                                            Swal.fire(
                                                'Update failed ?',
                                                'Incorrect password ?',
                                                'question'
                                            )
                                            console.log(err)
                                        })


                                        setSubmitting(false);
                                    }}
                                    enableReinitialize={true}
                                >
                                    {({errors, touched, isSubmitting}) => (
                                        <Form>

                                            <div className="row g-3">
                                                <div className="col-12">
                                                    <p>Address</p>
                                                    <Field
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Address"
                                                        name="address"
                                                    />
                                                    {errors.address && touched.address && (
                                                        <div className="error-message"
                                                             style={{color: "red"}}>{errors.address}</div>
                                                    )}
                                                </div>
                                                <div className="col-12">
                                                    <p>Phone Number</p>
                                                    <Field
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Phone Number"
                                                        name="phone"
                                                    />
                                                    {errors.phone && touched.phone && (
                                                        <div className="error-message"
                                                             style={{color: "red"}}>{errors.phone}</div>
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
                                                        <div className="error-message"
                                                             style={{color: "red"}}>{errors.birthday}</div>
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

                                                <div className="col-12">
                                                    <Field
                                                        name="files"
                                                        type="file"
                                                        id="avatar"
                                                        onChange={handleFileChange}
                                                        hidden={true}
                                                    />
                                                    <label className={"btn btn-outline-danger"} htmlFor={"avatar"}>Choose
                                                        File</label>
                                                    {errors.thumbnail && touched.thumbnail && (
                                                        <div className="error-message"
                                                             style={{color: "red"}}>{errors.thumbnail}</div>
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
                            <div className='col-2'></div>
                            <div className='col-4' style={{textAlign: "center"}}>
                                <br/>
                                <div style={{display: 'flex'}}>
                                    <div style={{
                                        marginRight: '10px',
                                        position: 'relative'
                                    }}>
                                        <img
                                            src={image1}
                                            alt={`Selected Image `}
                                            style={{width: '200px', height: 'auto'}}
                                        />
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                    <hr className="my-10"/>
                    <div className="pe-lg-14">
                        {/* heading */}
                        <h5 className="mb-4">Password</h5>
                        <div className='col-6'>
                            <Formik
                                initialValues={{
                                    youPass: '',
                                    newPass: '',
                                    retypePass: '',

                                }}
                                validate={values => {
                                    const errors = {};
                                    // Kiểm tra các trường dữ liệu

                                    if (!values.youPass) {
                                        errors.youPass = 'You password is required';
                                    }

                                    if (!values.newPass) {
                                        errors.newPass = 'New password is required';
                                    } else if (values.newPass.length < 6) {
                                        errors.newPass = 'New password must be at least 6 characters long';
                                    }

                                    if (!values.retypePass) {
                                        errors.retypePass = 'Current password is required';
                                    }
                                    if (values.newPass !== values.retypePass) {
                                        errors.retypePass = 'Re-type new password does not match new password';
                                    }

                                    return errors;
                                }}
                                onSubmit={(values, {setSubmitting, resetForm}) => {
                                    let setPass = {
                                        accountId: account.id,
                                        pass: values.youPass,
                                        newPass: values.newPass,
                                        retypePass: values.retypePass
                                    };
                                    axios.post("http://localhost:8080/account/editPass", setPass, {
                                        headers: {
                                            'Authorization': localStorage.getItem('token')
                                        },
                                    }).then(() => {
                                        Swal.fire(
                                            '',
                                            'Update successful',
                                            'success'
                                        )
                                    }).catch(() => {
                                        Swal.fire(
                                            'Update failed ?',
                                            'Incorrect password ?',
                                            'question'
                                        )
                                    })
                                    resetForm();
                                    setSubmitting(false);
                                }}
                                enableReinitialize={true}
                            >
                                {({errors, touched, isSubmitting}) => (
                                    <Form className=" row row-cols-1 row-cols-lg-1">
                                        {/* input */}
                                        <div className="mb-3  col">
                                            <label className="form-label">You Password</label>
                                            <Field
                                                type="password"
                                                className="form-control"
                                                placeholder="**********"
                                                name='youPass'
                                            />
                                            {errors.youPass && touched.youPass && (
                                                <div className="error-message"
                                                     style={{color: "red"}}>{errors.youPass}</div>
                                            )}
                                        </div>
                                        {/* input */}
                                        <div className="mb-3 col">
                                            <label className="form-label">New Password</label>
                                            <Field
                                                type="password"
                                                className="form-control"
                                                placeholder="**********"
                                                name='newPass'

                                            />
                                            {errors.newPass && touched.newPass && (
                                                <div className="error-message"
                                                     style={{color: "red"}}>{errors.newPass}</div>
                                            )}
                                        </div>
                                        {/* input */}
                                        <div className="mb-3 col">
                                            <label className="form-label">Re-type New Password</label>
                                            <Field
                                                type="password"
                                                className="form-control"
                                                placeholder="**********"
                                                name='retypePass'

                                            />
                                            {errors.retypePass && touched.retypePass && (
                                                <div className="error-message"
                                                     style={{color: "red"}}>{errors.retypePass}</div>
                                            )}
                                        </div>
                                        {/* input */}
                                        <div className="col-12">
                                            <br/>
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                                disabled={isSubmitting}
                                            >
                                                Update
                                            </button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
};

export default CustomerSetting;