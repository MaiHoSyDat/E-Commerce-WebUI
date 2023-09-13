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



const Home = () => {
    let account = JSON.parse(localStorage.getItem('account'));

    const [logoUpload, setLogoUpload] = useState([]);
    const [logoUrls, setLogoUrls] = useState([]);
    const imagesListRef = ref(storage, "shop/");

    useEffect(() => {
        let account = JSON.parse(localStorage.getItem('account'))

        if (account && account.status.id === 3 && account.role.name === "ROLE_CUSTOMER") {
            window.$("#statusModal").modal("show");
        }
        if (account && account.status.id === 3 && account.role.name === "ROLE_SHOP") {
            window.$("#shopInformationModal").modal("show");
        }
        // if (account && account.status.id === 4 && account.role.name === "ROLE_SHOP") {
        //     hiển thị thông báo bạn đang đợi Admin duyệt
        // }
        // if (account && account.status.id === 3 && account.role.name === "ROLE_EMPLOYEE") {
        //     window.$("#").modal("show");
        //     làm giống shop cập nhật thông tin
        // }
    }, [])

    const remoteImg = (index) => {
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
    },[logoUpload])

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        setLogoUpload(files);
    };

    const validation=Yup.object().shape({
        logo: Yup.array()
            .min(1, 'Please select at least one image')
            .nullable(),
        address: Yup.string().required('Address is required'),
        phone: Yup.string().required('Phone is required'),
        name: Yup.string().required('Name is required'),
    })

    return (
        <>
            {/* Modal setting account*/}
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
                                            id: account.id
                                        }
                                    }

                                    axios.post("http://localhost:8080/customer/save", customer).then((rep) => {
                                        window.$("#statusModal").modal("hide");
                                        alert("Update successful")
                                        account.status.id = 1;
                                        localStorage.setItem("account", JSON.stringify(account))
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
                                                    name="avatar"
                                                    type="file"
                                                    id="image"
                                                    onChange={handleFileChange}
                                                />
                                                {errors.avatar && touched.avatar && (
                                                    <div className="error-message">{errors.avatar}</div>
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
                                                                        onClick={() => remoteImg(index)}
                                                                        style={{
                                                                            position: 'absolute',
                                                                            right: '0px',
                                                                            background: 'black',
                                                                            border: '1px',
                                                                            cursor: 'pointer',
                                                                        }}
                                                                    >
                                                                        <i className="fa fa-camera"
                                                                           style={{color: "red"}}></i>
                                                                    </button>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

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
                                    phone: '',
                                    name: ''
                                }}
                                validationSchema={validation}
                                onSubmit={(values, {setSubmitting}) => {
                                    if (!logoUrls[0]) {
                                        alert("Please select an image for the logo");
                                        setSubmitting(false);
                                        return;
                                    }
                                    let shop = {
                                        logo: logoUrls[0],
                                        address: values.address,
                                        phone: values.phone,
                                        name: values.name,
                                        status: {
                                            id: 1
                                        },
                                        account: {
                                            id: account.id
                                        }
                                    }
                                    axios.post("http://localhost:8080/shops/save?id=" + account.id, shop)
                                        .then((rep) => {
                                            window.$("#shopInformationModal").modal("hide");
                                            alert("Update successful")
                                            account.status.id = 1;
                                            localStorage.setItem("account", JSON.stringify(account))
                                        }).catch((err) => {
                                        alert("Update failed")
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
                                                    name="logo"
                                                    type="file"
                                                    id="image"
                                                    multiple
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
                                                                        onClick={() => remoteImg(index)}
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

                                            <div className="col-12">
                                                <Field
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Shop Name"
                                                    name="name"
                                                />
                                                {errors.name && touched.name && (
                                                    <div className="error-message">{errors.name}</div>
                                                )}
                                            </div>

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