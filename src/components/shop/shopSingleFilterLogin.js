import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getShopByAccountLogin} from "../../service/shopService";
import {getAllProductsByShop, getFilterProducts} from "../../service/productService";
import {Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
} from "firebase/storage";
import {v4} from "uuid";
import {storage} from "../../firebase";
import {setFilterQuantityShow, setFilterSortShow} from "../../service/inputService";

const ShopSingleFilterLogin = () => {
    let account = JSON.parse(localStorage.getItem("account"));
    const dispatch = useDispatch();

    const shopLogin = useSelector(state => {
        return state.shop.shopLogin;
    })

    const shopProducts = useSelector(state => {
        return state.product.shopProducts;
    })

    const filterProducts = useSelector(state => {
        console.log(state.product.filterProducts)
        return state.product.filterProducts;
    })

    const filterParam = useSelector(state => {
        console.log(state.inputFilter.filterParam)
        return state.inputFilter.filterParam;
    })

    useEffect(() => {
        dispatch(getShopByAccountLogin(account.id))
        dispatch(getAllProductsByShop(shopLogin.id))
        dispatch(getFilterProducts(filterParam));
    }, [filterParam]);

    const [imageUpload, setImageUpload] = useState([]);
    const [imageUrls, setImageUrls] = useState([]);
    const imagesListRef = ref(storage, "product/");


    const [categoryOptions, setCategoryOptions] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8080/categories', {
                headers: {
                    'Authorization': localStorage.getItem('token')
                },
            })
            .then((data) => {
                setCategoryOptions(data.data)
            })
            .catch((err) => {
                console.log(err)

            })
    }, []);

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        setImageUpload(files);

    };
    const removeImage = (index) => {
        const updatedImages = [...imageUpload];
        updatedImages.splice(index, 1);
        setImageUpload(updatedImages);
    };
    console.log("imageUrls top :>>" + imageUrls)
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
    },[imageUpload])

    const handleInputChangeQuantityShow = () => {
        let num = document.getElementById("quantity").value;
        dispatch((setFilterQuantityShow(num)))
    }
    const handleInputChangeSortShow = () => {
        let sort = document.getElementById("sort").value;
        dispatch((setFilterSortShow(sort)))
    }

    return (
        <>
            <div className="d-md-flex justify-content-between mb-3 align-items-center">
                <div>
                    <p className="mb-3 mb-md-0">{filterProducts.length} Products found</p>
                </div>
                <div className="d-flex justify-content-md-between align-items-center">
                    <div className="me-2">
                        <select className="form-select" id="quantity" onClick={handleInputChangeQuantityShow}>
                            <option  value={10000000} selected="" >Show: All</option>
                            <option value={10} >10</option>
                            <option value={20} >20</option>
                            <option value={30} >30</option>
                        </select>
                    </div>
                    <div>
                        <select className="form-select" id="sort" onClick={handleInputChangeSortShow}>
                            <option selected=""  value="">Sort by: Normal</option>
                            <option value="Low to High" >Price: Low to High</option>
                            <option value="High to Low" > Price: High to Low</option>
                            <option value="Release Date" > Release Date</option>
                            <option value="Avg. Rating" > Avg. Rating</option>
                        </select>
                    </div>
                    &ensp;
                    <div>
                        <button
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#sproductModal"
                            className="btn btn-success"
                        >
                            Create New Product
                        </button>
                    </div>
                </div>
            </div>
            <div
                className="modal fade"
                id="sproductModal"
                tabIndex={-1}
                aria-labelledby="userModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content p-4">
                        <div className="modal-header border-0">
                            <h5 className="modal-title fs-3 fw-bold" id="userModalLabel">
                                Create new product
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <Formik
                                initialValues={{
                                    name: '',
                                    price: '',
                                    quantity: '',
                                    description: '',
                                    unit: 'kg',
                                    category: "1",
                                    shop: '',
                                }}
                                validationSchema={Yup.object().shape({
                                    name: Yup.string().required('Name is required'),
                                    price: Yup.number()
                                        .typeError('Price must be a number')
                                        .required('Price is required')
                                        .positive('Price must be a positive number'),
                                    quantity: Yup.number()
                                        .typeError('Quantity must be a number')
                                        .required('Quantity is required')
                                        .min(0, 'Quantity must be a non-negative number'),
                                    description: Yup.string().required('Description is required'),
                                    thumbnail: Yup.array()
                                        .min(1, 'Please select at least one image')
                                        .nullable(),
                                })}
                                onSubmit={(values, {setSubmitting, resetForm}) => {
                                    // Handle form submission
                                    let product = {
                                        name: values.name,
                                        price: values.price,
                                        quantity: values.quantity,
                                        description: values.description,
                                        thumbnail: imageUrls[0],
                                        unit: values.unit,
                                        category: {
                                            id: values.category
                                        },
                                        shop: {
                                            id: account.id
                                        },
                                        images: imageUrls
                                    }
                                    axios
                                        .post('http://localhost:8080/shops/' + account.id + '/products/create', product,
                                            {
                                                headers: {
                                                    'Authorization': localStorage.getItem('token')
                                                },
                                            })

                                        .then(response => {
                                            setImageUpload([])
                                            document.getElementById("image").value = null
                                            dispatch(getAllProductsByShop(shopLogin.id));
                                            resetForm();
                                            alert("Create successful products")
                                            console.log("imageUrls :>>>>" + imageUrls)


                                        })
                                        .catch(error => {
                                            // Handle error
                                            alert("Please review the information")

                                            console.error(error);
                                        })
                                        .finally(() => {
                                            setSubmitting(false);
                                        });
                                }}
                            >
                                {({errors, touched, isSubmitting}) => (
                                    <Form>
                                        <div className="row g-3">
                                            <div className="col-12">
                                                <Field
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Name"
                                                    name="name"
                                                />
                                                {errors.name && touched.name && (
                                                    <div className="error-message">{errors.name}</div>
                                                )}
                                            </div>
                                            <div className="col-5">
                                                <Field
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Price"
                                                    name="price"
                                                />
                                                {errors.price && touched.price && (
                                                    <div className="error-message">{errors.price}</div>
                                                )}
                                            </div>
                                            <div className="col-5">
                                                <Field
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="quantity"
                                                    name="quantity"
                                                />
                                                {errors.quantity && touched.quantity && (
                                                    <div className="error-message">{errors.quantity}</div>
                                                )}
                                            </div>
                                            <div className="col-2">
                                                <Field
                                                    as="select"
                                                    className="form-control"
                                                    placeholder="Unit"
                                                    name="unit"
                                                >
                                                    <option>Unit</option>
                                                    <option value="kg">kg</option>
                                                    <option value="piece">piece</option>

                                                </Field>
                                                {errors.unit && touched.unit && (
                                                    <div className="error-message">{errors.unit}</div>
                                                )}                                            </div>
                                            <div className="col-12">
                                                <Field
                                                    as="textarea"
                                                    className="form-control"
                                                    placeholder="Description"
                                                    name="description"
                                                />
                                                {errors.description && touched.description && (
                                                    <div className="error-message">{errors.description}</div>
                                                )}
                                            </div>


                                            <div className="col-12">
                                                <Field
                                                    as="select"
                                                    className="form-control"
                                                    placeholder="Category"
                                                    name="category"
                                                >
                                                    <option> Category</option>
                                                    {categoryOptions.map((category) => (
                                                        <option key={category.id} value={category.id}>
                                                            {category.name}
                                                        </option>
                                                    ))}
                                                </Field>
                                                {errors.category && touched.category && (
                                                    <div className="error-message">{errors.category}</div>
                                                )}
                                            </div>

                                            <div className="col-12">
                                                <Field
                                                    name="files"
                                                    type="file"
                                                    id="image"
                                                    multiple
                                                    onChange={handleFileChange}
                                                />
                                                {errors.thumbnail && touched.thumbnail && (
                                                    <div className="error-message">{errors.thumbnail}</div>
                                                )}
                                                {imageUpload.length > 0 && (
                                                    <div>
                                                        <h5>Selected Images:</h5>
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
                                                                    <button
                                                                        onClick={() => removeImage(index)}
                                                                        style={{
                                                                            position: 'absolute',
                                                                            right: '0px',
                                                                            background: 'black',
                                                                            border: '1px',
                                                                            cursor: 'pointer',
                                                                        }}
                                                                    >
                                                                        <i className="fa fa-trash"
                                                                           style={{color: "red"}}></i>
                                                                    </button>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="mt-3">
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? 'Submitting...' : 'Submit'}
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

export default ShopSingleFilterLogin;