import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getTenProductsToIndex, getThreeProductsMaxRating} from "../../service/productService";

const Index = () => {
    const dispatch = useDispatch();
    const numbers = [1, 2, 3, 4, 5]
    const indexProducts = useSelector(state => {
        return state.product.indexProducts;
    })
    const indexProductsMaxRating = useSelector(state => {
        return state.product.indexProductsMaxRating;
    })
    useEffect(() => {
        dispatch(getTenProductsToIndex())
        dispatch(getThreeProductsMaxRating())
    },[]);
    return (
        <main>
            <section className="mt-8">
                <div className="container">
                    <div className="hero-slider ">
                        <div
                            style={{
                                background: "url(assets/images/slider/slide-1.jpg)no-repeat",
                                backgroundSize: "cover",
                                borderRadius: ".5rem",
                                backgroundPosition: "center"
                            }}
                        >
                            <div className="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center">
            <span className="badge text-bg-warning">
              Opening Sale Discount 50%
            </span>
                                <h2 className="text-dark display-5 fw-bold mt-4">
                                    SuperMarket For Fresh Grocery{" "}
                                </h2>
                                <p className="lead">
                                    Introduced a new model for online grocery shopping and convenient
                                    home delivery.
                                </p>
                                <a href="#!" className="btn btn-dark mt-3">
                                    Shop Now <i className="feather-icon icon-arrow-right ms-1" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Category Section Start*/}
            <section className="mb-lg-10 mt-lg-14 my-8">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-6">
                            <h3 className="mb-0">Featured Categories</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="item col-2">
                            <Link to={"/product/filter"}>
                            <a
                                href="pages/shop-grid.html"
                                className="text-decoration-none text-inherit"
                            >
                                <div className="card card-product mb-lg-4">
                                    <div className="card-body text-center py-8">
                                        <img
                                            src="assets/images/category/category-dairy-bread-eggs.jpg"
                                            alt="Grocery Ecommerce Template"
                                            className="mb-3 img-fluid"
                                        />
                                        <div className="text-truncate">Dairy, Bread &amp; Eggs</div>
                                    </div>
                                </div>
                            </a>
                            </Link>
                        </div>
                        <div className="item col-2">
                            <Link to={"/product/filter"}>
                            <a
                                href="pages/shop-grid.html"
                                className="text-decoration-none text-inherit"
                            >
                                <div className="card card-product mb-lg-4">
                                    <div className="card-body text-center py-8">
                                        <img
                                            src="assets/images/category/category-snack-munchies.jpg"
                                            alt="Grocery Ecommerce Template"
                                            className="mb-3"
                                        />
                                        <div className="text-truncate">Snack &amp; Munchies</div>
                                    </div>
                                </div>
                            </a>
                            </Link>
                        </div>
                        <div className="item col-2">
                            <Link to={"/product/filter"}>
                            <a
                                href="pages/shop-grid.html"
                                className="text-decoration-none text-inherit"
                            >
                                <div className="card card-product mb-lg-4">
                                    <div className="card-body text-center py-8">
                                        <img
                                            src="assets/images/category/category-bakery-biscuits.jpg"
                                            alt="Grocery Ecommerce Template"
                                            className="mb-3"
                                        />
                                        <div className="text-truncate">Bakery &amp; Biscuits</div>
                                    </div>
                                </div>
                            </a>
                            </Link>
                        </div>
                        <div className="item col-2">
                            <Link to={"/product/filter"}>
                            <a
                                href="pages/shop-grid.html"
                                className="text-decoration-none text-inherit"
                            >
                                <div className="card card-product mb-lg-4">
                                    <div className="card-body text-center py-8">
                                        <img
                                            src="assets/images/category/category-instant-food.jpg"
                                            alt="Grocery Ecommerce Template"
                                            className="mb-3"
                                        />
                                        <div className="text-truncate">Instant Food</div>
                                    </div>
                                </div>
                            </a>
                            </Link>
                        </div>
                        <div className="item col-2">
                            <Link to={"/product/filter"}>
                            <a
                                href="pages/shop-grid.html"
                                className="text-decoration-none text-inherit"
                            >
                                <div className="card card-product mb-lg-4">
                                    <div className="card-body text-center py-8">
                                        <img
                                            src="assets/images/category/category-tea-coffee-drinks.jpg"
                                            alt="Grocery Ecommerce Template"
                                            className="mb-3"
                                        />
                                        <div className="text-truncate">Tea, Coffee &amp; Drinks</div>
                                    </div>
                                </div>
                            </a>
                            </Link>
                        </div>
                        <div className="item col-2">
                            <Link to={"/product/filter"}>
                            <a
                                href="pages/shop-grid.html"
                                className="text-decoration-none text-inherit"
                            >
                                <div className="card card-product mb-lg-4">
                                    <div className="card-body text-center py-8">
                                        <img
                                            src="assets/images/category/category-atta-rice-dal.jpg"
                                            alt="Grocery Ecommerce Template"
                                            className="mb-3"
                                        />
                                        <div className="text-truncate">Atta, Rice &amp; Dal</div>
                                    </div>
                                </div>
                            </a>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
            {/* Category Section End*/}
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 mb-3 mb-lg-0">
                            <div>
                                <div
                                    className="py-10 px-8 rounded"
                                    style={{
                                        background:
                                            "url(assets/images/banner/grocery-banner.png)no-repeat",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center"
                                    }}
                                >
                                    <div>
                                        <h3 className="fw-bold mb-1">Fruits &amp; Vegetables</h3>
                                        <p className="mb-4">
                                            Get Upto <span className="fw-bold">30%</span> Off
                                        </p>
                                        <a href="#!" className="btn btn-dark">
                                            Shop Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 ">
                            <div>
                                <div
                                    className="py-10 px-8 rounded"
                                    style={{
                                        background:
                                            "url(assets/images/banner/grocery-banner-2.jpg)no-repeat",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center"
                                    }}
                                >
                                    <div>
                                        <h3 className="fw-bold mb-1">Freshly Baked Buns</h3>
                                        <p className="mb-4">
                                            Get Upto <span className="fw-bold">25%</span> Off
                                        </p>
                                        <a href="#!" className="btn btn-dark">
                                            Shop Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Popular Products Start*/}
            <section className="my-lg-14 my-8">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-6">
                            <h3 className="mb-0">Popular Products</h3>
                        </div>
                    </div>
                    <div className="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-3">
                        {
                            indexProducts && indexProducts.map(dto => (
                                <div className="col">
                                    <div className="card card-product">
                                        <div className="card-body">
                                            <div className="text-center position-relative ">
                                                <div className=" position-absolute top-0 start-0">
                                                    {dto.product.status && <span className="badge bg-danger">{dto.product.status.name}</span>}
                                                </div>
                                                <a href="#">
                                                    {" "}
                                                    <img
                                                        src={dto.product.thumbnail}
                                                        alt="Grocery Ecommerce Template"
                                                        className="mb-3 img-fluid"
                                                    />
                                                </a>
                                                <div className="card-product-action">
                                                    <Link to={"/product/detail/" + dto.product.id}>
                                                    <a
                                                        href=""
                                                        className="btn-action"
                                                        data-bs-toggle=""
                                                        data-bs-target=""
                                                    >
                                                        <i
                                                            className="bi bi-eye"
                                                            data-bs-toggle=""
                                                            data-bs-html=""
                                                            title="Quick View"
                                                        />
                                                    </a>
                                                    </Link>
                                                    <a
                                                        href="#"
                                                        className="btn-action"
                                                        data-bs-toggle=""
                                                        data-bs-html=""
                                                        title="Wishlist"
                                                    >
                                                        <i className="bi bi-heart" />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="btn-action"
                                                        data-bs-toggle=""
                                                        data-bs-html=""
                                                        title="Compare"
                                                    >
                                                        <i className="bi bi-arrow-left-right" />
                                                    </a>
                                                </div>
                                            </div>
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
                                            <div className="d-flex justify-content-between align-items-center mt-3">
                                                <div>
                                                    <span className="text-dark">${dto.product.price}</span>{" "}
                                                </div>
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
                                                            <line x1={12} y1={5} x2={12} y2={19} />
                                                            <line x1={5} y1={12} x2={19} y2={12} />
                                                        </svg>
                                                        Add
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }


                    </div>
                </div>
            </section>
            {/* Popular Products End*/}
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-6">
                            <h3 className="mb-0">Best Rating</h3>
                        </div>
                    </div>
                    <div className="table-responsive-xl pb-6">
                        <div className="row row-cols-lg-4 row-cols-1 row-cols-md-2 g-4 flex-nowrap">
                            <div className="col">
                                <div
                                    className=" pt-8 px-6 px-xl-8 rounded"
                                    style={{
                                        background:
                                            "url(assets/images/banner/banner-deal.jpg)no-repeat",
                                        backgroundSize: "cover",
                                        height: 470
                                    }}
                                >
                                    <div>
                                        <h3 className="fw-bold text-white">
                                            100% Organic Coffee Beans.
                                        </h3>
                                        <p className="text-white">Get the best deal before close.</p>
                                        <a href="#!" className="btn btn-primary">
                                            Shop Now <i className="feather-icon icon-arrow-right ms-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {indexProductsMaxRating && indexProductsMaxRating.map(dto => (
                                <div className="col">
                                    <div className="card card-product">
                                        <div className="card-body">
                                            <div className="text-center  position-relative ">
                                                <div className=" position-absolute top-0 start-0">
                                                    {dto.product.status && <span className="badge bg-danger">{dto.product.status.name}</span>}
                                                </div>
                                                <a href="pages/shop-single.html">
                                                    <img
                                                        src={dto.product.thumbnail}
                                                        alt="Grocery Ecommerce Template"
                                                        className="mb-3 img-fluid"
                                                    />
                                                </a>
                                                <div className="card-product-action">
                                                    <Link to={"/product/detail/" + dto.product.id}>
                                                    <a
                                                        href="#"
                                                        className="btn-action"
                                                        data-bs-toggle=""
                                                        data-bs-target=""
                                                    >
                                                        <i
                                                            className="bi bi-eye"
                                                            data-bs-toggle=""
                                                            data-bs-html=""
                                                            title="Quick View"
                                                        />
                                                    </a>
                                                    </Link>
                                                    <a
                                                        href="#"
                                                        className="btn-action"
                                                        data-bs-toggle=""
                                                        data-bs-html=""
                                                        title="Wishlist"
                                                    >
                                                        <i className="bi bi-heart" />
                                                    </a>
                                                    <a
                                                        href="#!"
                                                        className="btn-action"
                                                        data-bs-toggle=""
                                                        data-bs-html=""
                                                        title="Compare"
                                                    >
                                                        <i className="bi bi-arrow-left-right" />
                                                    </a>
                                                </div>
                                            </div>
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
                                            <div className="d-flex justify-content-between align-items-center mt-3">
                                                <div>
                                                    <span className="text-dark">${dto.product.price}</span>{" "}
                                                </div>
                                                <div>
                                                    {" "}
                                                    <small className="text-warning">
                                                        {numbers.map((i) => (
                                                            i <= Math.round(dto.average_rating) ? (<i className="bi bi-star-fill"/>) : (<i className="bi bi-star"/>)
                                                        ))}
                                                    </small>
                                                    {" "}
                                                    <span>
                      <small>{dto.average_rating}</small>
                    </span>
                                                </div>
                                            </div>
                                            <div className="d-grid mt-2">
                                                <a href="#!" className="btn btn-primary ">
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
                                                        <line x1={12} y1={5} x2={12} y2={19} />
                                                        <line x1={5} y1={12} x2={19} y2={12} />
                                                    </svg>
                                                    Add to cart{" "}
                                                </a>
                                            </div>
                                            <div className="d-flex justify-content-start text-center mt-3">
                                                <div
                                                    className="deals-countdown w-100"
                                                    data-countdown="2028/10/10 00:00:00"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="my-lg-14 my-8">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                            <div className="mb-8 mb-xl-0">
                                <div className="mb-6">
                                    <img src="assets/images/icons/clock.svg" alt="" />
                                </div>
                                <h3 className="h5 mb-3">10 minute grocery now</h3>
                                <p>
                                    Get your order delivered to your doorstep at the earliest from
                                    FreshCart pickup stores near you.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6  col-lg-3">
                            <div className="mb-8 mb-xl-0">
                                <div className="mb-6">
                                    <img src="assets/images/icons/gift.svg" alt="" />
                                </div>
                                <h3 className="h5 mb-3">Best Prices &amp; Offers</h3>
                                <p>
                                    Cheaper prices than your local supermarket, great cashback offers
                                    to top it off. Get best pricess &amp; offers.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="mb-8 mb-xl-0">
                                <div className="mb-6">
                                    <img src="assets/images/icons/package.svg" alt="" />
                                </div>
                                <h3 className="h5 mb-3">Wide Assortment</h3>
                                <p>
                                    Choose from 5000+ products across food, personal care, household,
                                    bakery, veg and non-veg &amp; other categories.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="mb-8 mb-xl-0">
                                <div className="mb-6">
                                    <img src="assets/images/icons/refresh-cw.svg" alt="" />
                                </div>
                                <h3 className="h5 mb-3">Easy Returns</h3>
                                <p>
                                    Not satisfied with a product? Return it at the doorstep &amp; get
                                    a refund within hours. No questions asked
                                    <a href="#!">policy</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    );
};

export default Index;