import React, {useEffect, useState} from 'react';
import {getShopByAccountLogin} from "../../service/shopService";
import {useDispatch} from "react-redux";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {storage} from "../../firebase";
import {v4} from "uuid";
import {Field, Form, Formik} from "formik";
import axios from "axios";


const ShopInfomation = () => {
    let account = JSON.parse(localStorage.getItem('account'));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getShopByAccountLogin(account.id))
    }, []);


    const [logoUpload, setLogoUpload] = useState([]);
    const [logoUrls, setLogoUrls] = useState([]);
    const imagesListRef = ref(storage, "shop/");

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        setLogoUpload(files);
    };

    const remoteLogo = (index) => {
        const updateLogo = [...logoUpload];
        updateLogo.splice(index, 1);
        setLogoUpload(updateLogo);
    };
    console.log("imageUrls top :>>" + logoUrls)
    useEffect(() => {

        if (logoUpload !== null) {
            const newLogoUrls = [];
            for (let i = 0; i < logoUpload.length; i++) {
                const imageRef = ref(storage, `shop/${logoUpload[i].name + v4()}`);
                uploadBytes(imageRef, logoUpload[i]).then((snapshot) => {
                    getDownloadURL(snapshot.ref).then((url) => {
                        newLogoUrls.push(url);
                    });
                });
            }
            setLogoUrls(newLogoUrls)
        }
    }, [logoUpload])

    return (
        <main>
            <section className="my-lg-14 my-8">
                <div className="container">
                    <div className="row">
                        <div className="offset-lg-2 col-lg-8 col-12">
                            <Formik
                                initialValues={{
                                    logo: '',
                                    name: '',
                                    address: '',
                                    phone: ''

                                }}
                                validation={values => {
                                    const errors = {};
                                    // Kiểm tra các trường dữ liệu

                                    if (!values.address) {
                                        errors.address = 'Please enter your address';
                                    }

                                    if (!values.phone) {
                                        errors.phone = 'Please enter the phone number';
                                    }

                                    if (!values.name) {
                                        errors.name = 'Please enter the shop name';
                                    }
                                    return errors;
                                }}
                                onSubmit={(values, {setSubmitting}) => {
                                    let shopInformation = {
                                        logo: values.logo,
                                        name: values.name,
                                        address: values.address,
                                        phone: values.phone,
                                        status: {
                                            id: 1
                                        },
                                        account: {
                                            id: account.id
                                        }
                                    }
                                    console.log(shopInformation)
                                    axios.post("http://localhost:8080/shops/save?id=" + account.id, shopInformation)
                                        .then((rep) => {
                                            alert("Update successful")
                                            account.status.id = 1;
                                            localStorage.setItem("account", JSON.stringify(account))
                                        }).catch((err) => {
                                        alert("Update failed")
                                        console.log(err)
                                    })
                                    setSubmitting(false);
                                }}
                            >
                                {({errors, touched, isSubmitting}) => (
                                    <Form>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label" htmlFor="logo">
                                                Logo<span className="text-danger">*</span>
                                            </label>
                                            <Field
                                                type="file"
                                                name="logo"
                                                id="logo"
                                                className="form-control"
                                                onChange={handleFileChange}
                                            />
                                            {errors.logo && touched.logo && (
                                                <div className="error-message">{errors.logo}</div>
                                            )}
                                            {logoUpload.length > 0 && (
                                                <div>
                                                    <h5>Shop Logo:</h5>
                                                    <div style={{display: 'flex'}}>
                                                        {logoUpload.map((file, index) => (
                                                            <div key={index} style={{
                                                                marginRight: '10px',
                                                                position: 'relative'
                                                            }}>
                                                                <img
                                                                    src={URL.createObjectURL(file)}
                                                                    alt={`Selected Image ${index}`}
                                                                    style={{width: '100px', height: 'auto'}}
                                                                />
                                                                <button
                                                                    onClick={() => remoteLogo(index)}
                                                                    style={{
                                                                        position: 'absolute',
                                                                        right: '0px',
                                                                        background: 'black',
                                                                        border: '1px',
                                                                        cursor: 'pointer',
                                                                    }}
                                                                >
                                                                    <i class="fa fa-camera"
                                                                       style={{color: "red"}}></i>
                                                                </button>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div className="col-md-6 mb-3">
                                            <div className="d-flex justify-content-between">
                                                <label className="form-label" htmlFor="status">
                                                    Status:
                                                </label>
                                            </div>

                                            <div className="d-flex justify-content-between">
                                                <label className="form-label" htmlFor="dataCreate">
                                                    Date Create:
                                                </label>
                                            </div>

                                            <div className="d-flex justify-content-between">
                                                <label className="form-label" htmlFor="rating">
                                                    Rating:
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-md-6 mb-3">
                                            <label className="form-label" htmlFor="shopName">
                                                Shop Name<span className="text-danger">*</span>
                                            </label>
                                            <Field
                                                type="text"
                                                className="form-control"
                                                name="name"
                                                placeholder="Enter Your Shop name"
                                            />
                                            {errors.name && touched.name && (
                                                <div className="error-message">{errors.name}</div>
                                            )}
                                        </div>

                                        <div className="col-md-12 mb-3">
                                            <label className="form-label" htmlFor="title">
                                                Address
                                            </label>
                                            <Field
                                                type="text"
                                                name="address"
                                                className="form-control"
                                                placeholder="Your Address"
                                            />
                                            {errors.address && touched.address && (
                                                <div className="error-message">{errors.address}</div>
                                            )}
                                        </div>

                                        <div className="col-md-6 mb-3">
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

                                        <div className="col-md-12">
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
            </section>
        </main>

    );
};

export default ShopInfomation;