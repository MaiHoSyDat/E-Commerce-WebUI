import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getShopByAccountLogin} from "../../service/shopService";
import {getAllProductsByShop, getProduct, updateProduct} from "../../service/productService";
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

const ShopSingleFilterLogin = () => {
    let account = JSON.parse(localStorage.getItem("account"));
    const dispatch = useDispatch();

    const shopLogin = useSelector(state => {
        return state.shop.shopLogin;
    })

    const shopProducts = useSelector(state => {
        return state.product.shopProducts;
    })

    const singleProduct = useSelector(state => {
        return state.product.product;
    })

    let productArr = [account.id, singleProduct.id]

    useEffect(() => {
        dispatch(getShopByAccountLogin(account.id))
        dispatch(getAllProductsByShop(shopLogin.id))
    }, []);

    useEffect(() => {
        dispatch(getProduct(productArr));
    }, []);

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
    // console.log("imageUrls top :>>" + imageUrls)
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

    const validationSchema = Yup.object().shape({
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
    });
    const [editProduct, setEditProduct] = useState({})
    const [currentCategory, setCategory] = useState('')
    const [initialData1, setInitialData] = useState({
        name: editProduct.name || '',
        price: editProduct.price || '',
        quantity: editProduct.quantity || '',
        description: editProduct.description || '',
        unit: editProduct.unit || '',
        shop: account.id || '',
        category1: editProduct.category || ''
    })

    function productDetail(product) {
        setEditProduct(product)
        setCategory(product.category.id)
    }

    useEffect(() => {
        if (editProduct && currentCategory) {
            setInitialData({
                name: editProduct.name,
                price: editProduct.price,
                quantity: editProduct.quantity,
                description: editProduct.description,
                unit: editProduct.unit,
                shop: account.id,
                category: currentCategory
            });
        }
    }, [editProduct, currentCategory]);


    return (
        <>

            <div className="d-md-flex justify-content-between mb-3 align-items-center">
                <div>
                    <p className="mb-3 mb-md-0">{shopProducts.length} Products found</p>
                </div>
                <div className="d-flex justify-content-md-between align-items-center">
                    <div className="me-2">
                        <select className="form-select">
                            <option selected="">Show: 5</option>
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                            <option value={30}>30</option>
                        </select>
                    </div>
                    <div>
                        <select className="form-select">
                            <option selected="">Sort by: Featured</option>
                            <option value="Low to High">Price: Low to High</option>
                            <option value="High to Low">Price: High to Low</option>
                            <option value="Release Date">Release Date</option>
                            <option value="Avg. Rating">Avg. Rating</option>
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

            <div className="row g-4 row-cols-xl-4 row-cols-lg-3 row-cols-2 row-cols-md-2 mt-2">
                {
                    shopProducts && shopProducts.map(product => (
                        <div className="col">
                            {/* card */}
                            <div className="card card-product">
                                <div className="card-body">
                                    <div className="text-center position-relative">
                                        {/* badge */}
                                        <a href="#!">
                                            {/* img */}
                                            <img
                                                src={product.thumbnail}
                                                alt="Grocery Ecommerce Template"
                                                className="mb-3 img-fluid"
                                            />
                                        </a>
                                        {/* btn action */}
                                        <div className="card-product-action">
                                            <a
                                                href="#!"
                                                className="btn-action"
                                                data-bs-toggle="modal"
                                                data-bs-target="#quickViewModal"
                                            >
                                                <i
                                                    className="bi bi-eye"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-html="true"
                                                    title="Quick View"
                                                />
                                            </a>
                                            <a
                                                href="#!"
                                                className="btn-action"
                                                data-bs-toggle="tooltip"
                                                data-bs-html="true"
                                                title="Wishlist"
                                            >
                                                <i className="bi bi-heart"/>
                                            </a>
                                            <a
                                                href="#!"
                                                className="btn-action"
                                                data-bs-toggle="tooltip"
                                                data-bs-html="true"
                                                title="Compare"
                                            >
                                                <i className="bi bi-arrow-left-right"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="text-small mb-1">
                                        <a href="#!" className="text-decoration-none text-muted">
                                            <small>{product.category.name}</small>
                                        </a>
                                    </div>
                                    <h2 className="fs-6">
                                        <a href="#!" className="text-inherit text-decoration-none">
                                            {product.name} - {product.unit}
                                        </a>
                                    </h2>
                                    <div className="text-warning">
                                        <small>
                                            <i className="bi bi-star-fill"/>
                                            <i className="bi bi-star-fill"/>
                                            <i className="bi bi-star-fill"/>
                                            <i className="bi bi-star-half"/>
                                            <i className="bi bi-star"/>
                                        </small>
                                        {/* text */}
                                        <span className="text-muted small">3.5 (89)</span>
                                    </div>
                                    <div className="d-flex justify-content-between mt-4">
                                        <div>
                                            <span className="text-dark">${product.price}</span>
                                        </div>
                                        <div>
                                            <button
                                                onClick={() => productDetail(product)}
                                                type="button"
                                                data-bs-toggle="modal"
                                                data-bs-target="#updateProductModal"
                                                className="btn btn-light"
                                            >
                                                <i className="fa fa-pencil" style={{color: "blue"}}></i>
                                            </button>
                                            <button className="btn btn-light" data-toggle="modal" data-target="#myModal"><i
                                                className="fa fa-trash" style={{color: "red"}}></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
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
                                    unit: '',
                                    category: '',
                                    shop: '',
                                }}
                                validationSchema={validationSchema}
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
                                            id: values.category.id
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
                                                    <option>{editProduct.unit}</option>
                                                    <option value="Kg">Unit</option>
                                                    <option value="Kg">Kg</option>
                                                    <option value="Piece">Piece</option>

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
                                                    name="category"
                                                >
                                                    <option>Category</option>
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

            <div
                className="modal fade"
                id="updateProductModal"
                tabIndex={-1}
                aria-labelledby="userModalUpdate"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content p-4">
                        <div className="modal-header border-0">
                            <h5 className="modal-title fs-3 fw-bold" id="userModalUpdate">
                                Update Product
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
                                initialValues={initialData1}
                                validationSchema={validationSchema}
                                onSubmit={(values, {setSubmitting, resetForm}) => {

                                    let updateProduct = {
                                        id: editProduct.id,
                                        name: values.name,
                                        price: values.price,
                                        quantity: values.quantity,
                                        description: values.description,
                                        thumbnail: imageUrls[0],
                                        unit: values.unit,
                                        category: {
                                            id: values.category.id
                                        },
                                        shop: {
                                            id: account.id
                                        },
                                        images: imageUrls
                                    }
                                    console.log(updateProduct)

                                    axios
                                        .post('http://localhost:8080/shops/' + account.id + '/products/' + editProduct.id, updateProduct,
                                            {
                                                headers: {
                                                    'Authorization': localStorage.getItem('token')
                                                },
                                            })
                                        .then(response => {

                                            if (response.data.error) {
                                                alert("API Error: ")
                                                return;
                                            }
                                            setImageUpload([])
                                            document.getElementById("image").value = null
                                            dispatch(getAllProductsByShop(shopLogin.id));
                                            resetForm();
                                            alert("Update successful")
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
                                                    name="name"
                                                    placeholder={editProduct.name}
                                                />
                                                {errors.name && touched.name && (
                                                    <div className="error-message">{errors.name}</div>
                                                )}
                                            </div>
                                            <div className="col-5">
                                                <Field
                                                    type="text"
                                                    className="form-control"
                                                    placeholder={editProduct.price}
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
                                                    placeholder={editProduct.quantity}
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
                                                    placeholder={editProduct.unit}
                                                    name="unit"

                                                >
                                                    <option>Unit</option>
                                                    <option value="Kg">Kg</option>
                                                    <option value="Piece">Piece</option>

                                                </Field>
                                                {errors.unit && touched.unit && (
                                                    <div className="error-message">{errors.unit}</div>
                                                )}
                                            </div>
                                            <div className="col-12">
                                                <Field
                                                    as="textarea"
                                                    className="form-control"
                                                    placeholder={editProduct.description}
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
                                                    name="category1"
                                                    value={currentCategory}
                                                    onChange={(e) => setCategory(e.target.value)}
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