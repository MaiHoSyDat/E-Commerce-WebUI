import { useSelector, useDispatch } from "react-redux";
import {useEffect} from "react";
import { getProductPage} from "../../service/productPageAction";
import {Link} from "react-router-dom";

const ProductFilterShow = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const currentPage = useSelector((state) => state.products.currentPage);
    const totalPages = useSelector((state) => state.products.totalPages);


    useEffect(() => {
        dispatch(getProductPage(currentPage));
    }, [dispatch, currentPage]);

    const handlePageChange = (newPage) => {
        dispatch(getProductPage(newPage));
    };

    return (
        <>

            <div className="row g-4 row-cols-xl-4 row-cols-lg-3 row-cols-2 row-cols-md-2 mt-2">
                {/* col */}
                {products && products.length > 0 && products.map( (product) =>
                    <div key={product.id} className="col">
                        {/* card */}
                        <div className="card card-product">
                            <div className="card-body">
                                {/* badge */}
                                <div className="text-center position-relative ">
                                    <div className=" position-absolute top-0 start-0">
                                        <span className="badge bg-danger">Sale</span>
                                    </div>
                                    <Link to={`/product/detail/${product.id}`}>
                                        {/* img */}
                                        <img
                                            src={product.thumbnail}
                                            alt="Grocery Ecommerce Template"
                                            className="mb-3 img-fluid"
                                        />
                                    </Link>
                                    {/* action btn */}
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
                                            href="shop-wishlist.html"
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
                                {/* heading */}
                                <div className="text-small mb-1">
                                    <a href="#!" className="text-decoration-none text-muted">
                                        <small>{product.category.name}</small>
                                    </a>
                                </div>
                                <h2 className="fs-6">
                                    <a
                                        href="shop-single.html"
                                        className="text-inherit text-decoration-none"
                                    >
                                        {product.name}
                                    </a>
                                </h2>
                                <div>
                                    {/* rating */}
                                    <small className="text-warning">
                                        {" "}
                                        <i className="bi bi-star-fill"/>
                                        <i className="bi bi-star-fill"/>
                                        <i className="bi bi-star-fill"/>
                                        <i className="bi bi-star-fill"/>
                                        <i className="bi bi-star-half"/>
                                    </small>{" "}
                                    <span className="text-muted small">4.5(149)</span>
                                </div>
                                {/* price */}
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <div>
                                        <span className="text-dark">${product.price}</span>{" "}
              {/*                          <span className="text-decoration-line-through text-muted">*/}
              {/*  $24*/}
              {/*</span>*/}
                                    </div>
                                    {/* btn */}
                                    <div>
                                        <a href="#!" className="btn btn-primary btn-sm">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-plus"
                                            >
                                                <line x1={12} y1={5} x2={12} y2={19}/>
                                                <line x1={5} y1={12} x2={19} y2={12}/>
                                            </svg>
                                            Add
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                )}
            </div>

            <div className="row mt-8">
                <div className="col">
                    {/* nav */}
                    <nav>
                        <ul className="pagination">
                            <li
                                className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                            >
                                <a
                                    className={`page-link mx-1 ${
                                        currentPage === currentPage ? "current-page" : ""
                                    }`}
                                    href="#"
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    aria-label="Previous"
                                >
                                    <i className="feather-icon icon-chevron-left" />
                                </a>
                            </li>

                            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                                (page) => (
                                    <li
                                        key={page}
                                        className={`page-item ${page === currentPage ? "active" : ""}`}
                                    >
                                        <a
                                            className="page-link"
                                            href="#"
                                            onClick={() => handlePageChange(page)}
                                        >
                                            {page}
                                        </a>
                                    </li>
                                )
                            )}

                            <li
                                className={`page-item ${
                                    currentPage === totalPages ? "disabled" : ""
                                }`}
                            >
                                <a
                                    className="page-link mx-1"
                                    href="#"
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    aria-label="Next"
                                >
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

export default ProductFilterShow;