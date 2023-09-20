import React, {useEffect, useState} from 'react';

import axios from "axios";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {storage} from "../../firebase";
import {v4} from "uuid";
import * as Yup from "yup";
import {Field, Form, Formik} from "formik";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

const EmployeeSetting = () => {
    let account = JSON.parse(localStorage.getItem('account'));

    const [imageUpload, setImageUpload] = useState('');
    const [imageUrls, setImageUrls] = useState('');
    const [imageEmployee, setImageEmployee] = useState('');
    const [employee, setEmployee] = useState({});


    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setImageEmployee(URL.createObjectURL(file))
        setImageUpload(file);
    };

    useEffect(() => {
        axios
            .get("http://localhost:8080/employee/login/" + account.id, {
                headers: {
                    'Authorization': localStorage.getItem('token')
                },
            }).then((resp) => {
            setEmployee(resp.data)
            setImageEmployee(resp.data.logo)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    useEffect(() => {
        if (imageUpload !== null) {
            const logoRef = ref(storage, `employee/${imageUpload.name + v4()}`);
            uploadBytes(logoRef, imageUpload).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    setImageUrls(url);
                });
            });
        }
    }, [imageUpload])

    // validation
    const validation = Yup.object().shape({
        address: Yup.string().required('Address is required'),
        phone: Yup.string().required('Phone is required'),
        logo: Yup.array()
            .min(1, 'Please select at least one image')
            .nullable(),
    })

    return (
        <div className="col-lg-9 col-md-8 col-12">
            <div className="py-6 p-md-6 p-lg-10">
                <div className="mb-6">
                    {/* heading */}
                    <h2 className="mb-0">Employee Setting</h2>
                </div>
                <div>
                    {/* heading */}
                    <div className="row align-items-center mb-4">
                        <div className="col-6">
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
                                    avatar: employee.avatar,
                                    name: account.name,
                                    address: employee.address,
                                    phone: employee.phone
                                }}
                                validation={validation}
                                onSubmit={(values, {setSubmitting}) => {
                                    if (!imageUrls[0]) {
                                        alert("Please select an image for the logo");
                                        setSubmitting(false);
                                        return;
                                    }
                                    let staffInformation = {
                                        id: employee.id,
                                        avatar: imageUrls,
                                        name: account.name,
                                        address: values.address,
                                        phone: values.phone,
                                        status: {
                                            id: 1
                                        },
                                        account: {
                                            id: account.id
                                        }
                                    }
                                    const employeeUrl = "http://localhost:8080/employee/save/employee/" + account.id;
                                    axios.post(employeeUrl, staffInformation)
                                        .then((rep) => {
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
                                                <label className="form-label" htmlFor="title">
                                                    Address
                                                </label>
                                                <Field
                                                    type="text"
                                                    name="address"
                                                    className="form-control"
                                                    placeholder="Enter Your Address"
                                                />
                                                {errors.address && touched.address && (
                                                    <div className="error-message">{errors.address}</div>
                                                )}
                                            </div>

                                            <div className="col-12">
                                                <label className="form-label" htmlFor="phone">
                                                    Phone
                                                </label>
                                                <Field
                                                    type="text"
                                                    id="phone"
                                                    name="phone"
                                                    className="form-control"
                                                    placeholder="Your Phone Number"
                                                />
                                                {errors.phone && touched.phone && (
                                                    <div className="error-message">{errors.phone}</div>
                                                )}
                                            </div>

                                            <div className="col-12">
                                                <Field
                                                    name="file"
                                                    type="file"
                                                    id="avatar"
                                                    onChange={handleFileChange}
                                                    hidden={true}
                                                />
                                                <label className={"btn btn-outline-danger"} htmlFor={"avatar"}>Choose File</label>
                                                {errors.avatar && touched.avatar && (
                                                    <div className="error-message">{errors.avatar}</div>
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
                                        src={imageEmployee}
                                        alt={`Selected Image `}
                                        style={{width: '200px', height: 'auto'}}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeSetting;