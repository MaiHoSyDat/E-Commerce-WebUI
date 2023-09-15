import React, {useEffect, useState} from 'react';
import {getShopByAccountLogin} from "../../service/shopService";
import {useDispatch, useSelector} from "react-redux";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {storage} from "../../firebase";
import {v4} from "uuid";
import {Field, Form, Formik} from "formik";
import axios from "axios";
import * as Yup from 'yup';


const ShopSetting = () => {
    let account = JSON.parse(localStorage.getItem('account'));
    const dispatch = useDispatch();

    const [logoUpload, setLogoUpload] = useState([]);
    const [logoUrls, setLogoUrls] = useState([]);
    const [shopInformation, setShopInfor] = useState({});
    const [logoShop, setLogoShop] = useState('');

    const shop = useSelector((state) => {
        return state.shop.shopLogin
    })

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setLogoShop(URL.createObjectURL(file))
        setLogoUpload(file);
    };

    useEffect(() => {
        dispatch(getShopByAccountLogin(account.id))
    }, []);

    useEffect(() => {
        axios
            .get("http://localhost:8080/shops/login/" + account.id, {
            headers: {
                'Authorization': localStorage.getItem('token')
            },
        }).then((resp) => {
            setShopInfor(resp.data)
            setLogoShop(resp.data.logo)
        }).catch((err) => {
            console.log(err)
        })
    }, [])


    useEffect(() => {
        if (logoUpload !== null) {
            const logoRef = ref(storage, `shop/${logoUpload.name + v4()}`);
            uploadBytes(logoRef, logoUpload).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    setLogoUrls(url);
                });
            });
        }
    }, [logoUpload])

    // validation
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
                                    logo: shopInformation.logo,
                                    name: account.name,
                                    address: shopInformation.address,
                                    phone: shopInformation.phone
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
                                    const shopUrl = "http://localhost:8080/shops/save/shop/" + shop.id;
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
                                                    id="logo"
                                                    onChange={handleFileChange}
                                                    hidden={true}
                                                />
                                                <label className={"btn btn-outline-danger"} htmlFor={"logo"}>Choose File</label>
                                                {errors.logo && touched.logo && (
                                                    <div className="error-message">{errors.logo}</div>
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
                                        src={logoShop}
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

export default ShopSetting;