import React, {useEffect, useState} from 'react';
import {getShopByAccountLogin} from "../../service/shopService";
import {useDispatch, useSelector} from "react-redux";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {storage} from "../../firebase";
import {v4} from "uuid";
import {Field, Form, Formik} from "formik";
import axios from "axios";
import * as Yup from 'yup';


const ShopInfomation = () => {
    let account = JSON.parse(localStorage.getItem('account'));
    const dispatch = useDispatch();

    const [logoUpload, setLogoUpload] = useState([]);
    const [logoUrls, setLogoUrls] = useState([]);
    const imagesListRef = ref(storage, "shop/");

    const shop = useSelector((state) => {
        return state.shop.shopLogin
    })

    useEffect(() => {
        dispatch(getShopByAccountLogin(account.id))
    }, []);

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        setLogoUpload(files);
    };

    const remoteLogo = (index) => {
        const updateLogo = [...logoUpload];
        updateLogo.splice(index, 1);
        setLogoUpload(updateLogo);
    };
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

    const validation = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        address: Yup.string().required('Address is required'),
        phone: Yup.string().required('Phone is required'),
        description: Yup.string().required('Description is required'),
        logo: Yup.array()
            .min(1, 'Please select at least one image')
            .nullable(),
    })

    return (
        <div className="col-lg-9 col-md-8 col-12">
            <div className="py-6 p-md-6 p-lg-10">
                <div className="mb-6">
                    {/* heading */}
                    <h2 className="mb-0">Shop Setting</h2>
                </div>
                <div>
                    {/* heading */}
                    <div className="row align-items-center mb-4">
                        <div className="col-6">
                            <h5>Shop Information</h5>
                        </div>
                        <div className='col-3'></div>
                        <div className=" col-3">
                            <h5>Logo:</h5>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            {/* form */}
                            <Formik
                                initialValues={{
                                    logo: shop.logo,
                                    name: shop.name,
                                    address: shop.address,
                                    phone: shop.phone
                                }}
                                validation={validation}
                                onSubmit={(values, {setSubmitting}) => {
                                    if (!logoUrls[0]) {
                                        alert("Please select an image for the logo");
                                        setSubmitting(false);
                                        return;
                                    }
                                    let shopInformation = {
                                        id: shop.id,
                                        logo: logoUrls[0],
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
                                    const shopUrl = "http://localhost:8080/shops/save?id=" + shop.id;
                                    axios.post(shopUrl, shopInformation)
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
                                enableReinitialize={true}
                            >
                                {({errors, touched, isSubmitting}) => (
                                    <Form>

                                        <div className="col-md-6 mb-3">
                                            <div className="row align-items-center mb-4">
                                                <div className="col-6">
                                                    <Field style={{border: '1px solid #ccc', padding: '5px'}}
                                                           hidden={true}
                                                           name="file"
                                                           type="file"
                                                           id="logo"
                                                           onChange={handleFileChange}
                                                    />
                                                    {logoUpload.map((file, index) => (
                                                        <div key={index} style={{
                                                            marginLeft: '450px',
                                                            marginRight: '10px',
                                                            position: 'relative',
                                                            textAlign: "center"
                                                        }}>
                                                            <div className='col-4' style={{display: 'flex'}}>
                                                                <img
                                                                    src={URL.createObjectURL(file)}
                                                                    alt={`Selected Image ${index}`}
                                                                    style={{width: '350px', height: '350'}}
                                                                />
                                                                <div
                                                                    style={{
                                                                        marginRight: '10px',
                                                                        position: 'relative'
                                                                    }}
                                                                >
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <label className="btn btn-outline-dark-info" htmlFor="logo">Choose</label>
                                            {errors.logo && touched.logo && (
                                                <div className="error-message">{errors.logo}</div>
                                            )}
                                        </div>

                                        <div className="col-md-6 mb-3">
                                            <div className="d-flex justify-content-between">
                                                <label className="form-label" htmlFor="status">
                                                    <p>Status:</p>
                                                </label>
                                            </div>

                                            <div className="d-flex justify-content-between">
                                                <label className="form-label" htmlFor="dataCreate">
                                                    <p>Date Create: {shop.dateCreate}</p>
                                                </label>
                                            </div>

                                            <div className="d-flex justify-content-between">
                                                <label className="form-label" htmlFor="rating">
                                                    <p>Rating:</p>
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

                                        <div className="col-md-6     mb-3">
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

    );
};

export default ShopInfomation;