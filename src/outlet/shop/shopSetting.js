import React, {useEffect, useState} from 'react';
import {getShopByAccountLogin} from "../../service/shopService";
import {useDispatch, useSelector} from "react-redux";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {storage} from "../../firebase";
import {v4} from "uuid";
import {Field, Form, Formik} from "formik";
import axios from "axios";
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';


const ShopSetting = () => {
    let account = JSON.parse(localStorage.getItem('account'));
    const dispatch = useDispatch();

    const [logoUpload, setLogoUpload] = useState([]);
    const [logoUrls, setLogoUrls] = useState([]);
    const [logoShop, setLogoShop] = useState('');
    const [shopInfor, setShopInfor] = useState({});


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
                                    logo: shopInfor.logo,
                                    name: account.name,
                                    address: shopInfor.address,
                                    phone: shopInfor.phone
                                }}
                                validation={validation}
                                onSubmit={(values, {setSubmitting}) => {
                                    if (!logoUrls[0]) {
                                        alert("Please select an image for the logo");
                                        setSubmitting(false);
                                        return;
                                    }
                                    let shopInformation = {
                                        id: shopInfor.id,
                                        logo: logoUrls,
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
                                    const shopUrl = "http://localhost:8080/shops/save/shop/" + shopInfor.id;
                                    axios.post(shopUrl, shopInformation)
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
            </div>
        </div>
    );
};

export default ShopSetting;