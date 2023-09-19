import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllProductsByShop, getFilterProducts} from "../../service/productService";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';


import {Link} from "react-router-dom";
import axios from "axios";

const ShopSingleFilterViewLogin = ( { onEditProduct }) => {
    const numbers = [1, 2, 3, 4, 5]
    let account = JSON.parse(localStorage.getItem("account"));
    const dispatch = useDispatch();
    const shopLogin = useSelector(state => {
        return state.shop.shopLogin;
    })
    const customerLogin = useSelector(state => {
        return state.customer.customerLogin;
    })
    const wishlistByCustomer = useSelector(state => {
        return state.wishlist.wishlistByCustomer;
    })
    const filterProducts = useSelector(state => {
        return state.product.filterProducts;
    })
    const filterParam = useSelector(state => {
        return state.inputFilter.filterParam;
    })
    useEffect(() => {
        dispatch(getFilterProducts(filterParam));
    },[filterParam,customerLogin])

    //phan trang
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;
    const totalProducts = filterProducts.length;
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    // Tạo danh sách sản phẩm cho trang hiện tại
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const currentProducts = filterProducts.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        window.scrollTo(0, 0);
        setCurrentPage(page);
    };

    const handleEditProduct = (product) => {
        onEditProduct(product); // Gọi callback function và truyền đối tượng product
    };
    return (
        <>
            <div className="row g-4 row-cols-xl-4 row-cols-lg-3 row-cols-2 row-cols-md-2 mt-2">
                {currentProducts && currentProducts.map(dto => (
                    <>
                        {dto.product.status.id != 2 && <div className="col">
                            {/* card */}
                            <div className="card card-product">
                                <div className="card-body">
                                    {/* badge */}
                                    <div className="text-center position-relative ">
                                        <div className=" position-absolute top-0 start-0">
                                            {dto.product.status && <span className="badge bg-danger">{dto.product.status.name}</span>}
                                        </div>
                                        <Link to={"/product/detail/" + dto.product.id}>
                                            <img
                                                src={dto.product.thumbnail}
                                                alt="Grocery Ecommerce Template"
                                                className="mb-3 img-fluid"
                                            />
                                        </Link>
                                        {/* action btn */}
                                    </div>
                                    {/* heading */}
                                    <div className="text-small mb-1">
                                        <a href="#!" className="text-decoration-none text-muted">
                                            <small>{dto.product.category.name}</small>
                                        </a>
                                    </div>
                                    <h2 className="fs-6">
                                        <Link to={"/product/detail/" + dto.product.id}>
                                        <a
                                            href=""
                                            className="text-inherit text-decoration-none"
                                        >
                                            {dto.product.name}
                                        </a>
                                        </Link>
                                    </h2>
                                    <div>
                                        {" "}
                                        <small className="text-warning">
                                            {numbers.map((i) => (
                                                i <= Math.floor(dto.average_rating) ? (<i className="bi bi-star-fill"/>) : (<i className="bi bi-star"/>)
                                            ))}
                                        </small>
                                        {" "}
                                        <span className="text-muted small">{dto.average_rating}({dto.total_reviews} reviews)</span>
                                    </div>
                                    {/* price */}
                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        <div>
                                            <span className="text-dark">${dto.product.price}</span>{" "}
                                        </div>
                                        {/* btn */}
                                        <div>
                                            <div>
                                                <button
                                                    type="button"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#sproductModal"
                                                    className="btn btn-light"
                                                    onClick={() => handleEditProduct(dto.product)}

                                                >
                                                    <i className="fa fa-pencil" style={{color: "blue"}}></i>
                                                </button>
                                                <button className="btn btn-light"
                                                        data-toggle="modal"
                                                        data-target="#myModal"
                                                        onClick={() => Swal.fire({
                                                            title: 'Are you sure?',
                                                            text: "You won't be able to revert this!",
                                                            icon: 'warning',
                                                            showCancelButton: true,
                                                            confirmButtonColor: '#3085d6',
                                                            cancelButtonColor: '#d33',
                                                            confirmButtonText: 'Yes, delete it!'
                                                        }).then((result) => {
                                                            axios.post('http://localhost:8080/shops/editStatus',dto.product , {
                                                                headers: {
                                                                    'Authorization': localStorage.getItem('token'),
                                                                },
                                                            }).then(()=>{
                                                                Swal.fire(
                                                                    'Deleted!',
                                                                    'Your file has been deleted.',
                                                                    'success'
                                                                )
                                                            }).catch((err)=>{
                                                                Swal.fire({
                                                                    icon: 'error',
                                                                    title: 'Oops...',
                                                                    text: 'Something went wrong!',
                                                                })

                                                            })

                                                        })}

                                                >
                                                    <i
                                                        className="fa fa-trash" style={{color: "red"}}></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>}
                    </>

                ))}
            </div>
            <div className="row mt-8">
                <div className="col">
                    {/* nav */}
                    <nav>
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link  mx-1 " aria-label="Previous" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                                    <i className="feather-icon icon-chevron-left" />
                                </a>
                            </li>
                            {Array.from({ length: totalPages }, (_, index) => (
                                <li className="page-item">
                                    <a className="page-link mx-1 text-body" key={index} onClick={() => handlePageChange(index + 1)}>
                                        {index + 1}
                                    </a>
                                </li>
                            ))}
                            <li className="page-item">
                                <a className="page-link mx-1 text-body" aria-label="Next" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                                    <i className="feather-icon icon-chevron-right" />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>


        </>
    );
};

export default ShopSingleFilterViewLogin;