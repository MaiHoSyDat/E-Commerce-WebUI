import React, {useEffect, useState} from 'react';
import {Field, Form, Formik} from "formik";
import {isAfter, isBefore, parse} from "date-fns";
import axios from "axios";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {storage} from "../../firebase";
import {v4} from "uuid";

const CustomerSetting = () => {

    const [imageUpload, setImageUpload] = useState([]);
    const [imageUrls, setImageUrls] = useState([]);
    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        setImageUpload(files);

    };
   
    useEffect(() => {

        if (imageUpload !== null) {
            const newImageUrls = [];
            for (let i = 0; i < imageUpload.length; i++) {
                const imageRef = ref(storage, `product/${imageUpload[i].name + v4()}`);
                uploadBytes(imageRef, imageUpload[i]).then((snapshot) => {
                    getDownloadURL(snapshot.ref).then((url) => {
                        newImageUrls.push(url);
                    });
                });
            }
            setImageUrls(newImageUrls)
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
                                    initialValues={{birthday: '', avatar: '', address: '', phone: '', gender: '1'}}
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
                                                id: 0
                                            }
                                        }

                                        axios.post("http://localhost:8080/customer/save", customer).then((rep) => {
                                            window.$("#statusModal").modal("hide");
                                            alert("Update successful")
                                        }).catch((err) => {
                                            alert("Update failed")
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

                                                    <div className="col-12">
                                                        <Field
                                                            name="files"
                                                            type="file"
                                                            id="image"
                                                            onChange={handleFileChange}
                                                        />
                                                        {errors.thumbnail && touched.thumbnail && (
                                                            <div className="error-message">{errors.thumbnail}</div>
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
                            {imageUpload.length > 0 && (
                                <div className='col-4' style={{textAlign :"center"}}>
                                    <br/>
                                    <div style={{display: 'flex'}}>
                                        {imageUpload.map((file, index) => (
                                            <div key={index} style={{
                                                marginRight: '10px',
                                                position: 'relative'
                                            }}>
                                                <img
                                                    src={URL.createObjectURL(file)}
                                                    alt={`Selected Image ${index}`}
                                                    style={{width: '250px', height: 'auto'}}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                        </div>

                    </div>
                    <hr className="my-10"/>
                    <div className="pe-lg-14">
                        {/* heading */}
                        <h5 className="mb-4">Password</h5>
                        <form className=" row row-cols-1 row-cols-lg-2">
                            {/* input */}
                            <div className="mb-3 col">
                                <label className="form-label">New Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="**********"
                                />
                            </div>
                            {/* input */}
                            <div className="mb-3 col">
                                <label className="form-label">Current Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="**********"
                                />
                            </div>
                            {/* input */}
                            <div className="col-12">
                                <p className="mb-4">
                                    Can’t remember your current password?
                                    <a href="#"> Reset your password.</a>
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Save Password
                                </a>
                            </div>
                        </form>
                    </div>
                    <hr className="my-10"/>
                    <div>
                        {/* heading */}
                        <h5 className="mb-4">Delete Account</h5>
                        <p className="mb-2">Would you like to delete your account?</p>
                        <p className="mb-5">
                            This account contain 12 orders, Deleting your account will remove all
                            the order details associated with it.
                        </p>
                        {/* btn */}
                        <a href="#" className="btn btn-outline-danger">
                            I want to delete my account
                        </a>
                    </div>
                </div>
            </div>

        </>
    );
};

export default CustomerSetting;