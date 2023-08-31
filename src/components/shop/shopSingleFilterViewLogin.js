import React from 'react';

const ShopSingleFilterViewLogin = () => {
    return (
        <>
            <div className="row g-4 row-cols-xl-4 row-cols-lg-3 row-cols-2 row-cols-md-2 mt-2">
                <div className="col">
                    {/* card */}
                    <div className="card card-product">
                        <div className="card-body">
                            <div className="text-center position-relative">
                                {/* badge */}
                                <div className="position-absolute top-0 start-0">
                                    <span className="badge bg-danger">Sale</span>
                                </div>
                                <a href="#!">
                                    {/* img */}
                                    <img
                                        src="../assets/images/products/product-img-1.jpg"
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
                                        <i className="bi bi-heart" />
                                    </a>
                                    <a
                                        href="#!"
                                        className="btn-action"
                                        data-bs-toggle="tooltip"
                                        data-bs-html="true"
                                        title="Compare"
                                    >
                                        <i className="bi bi-arrow-left-right" />
                                    </a>
                                </div>
                            </div>
                            <div className="text-small mb-1">
                                <a href="#!" className="text-decoration-none text-muted">
                                    <small>Snack &amp; Munchies</small>
                                </a>
                            </div>
                            <h2 className="fs-6">
                                <a href="#!" className="text-inherit text-decoration-none">
                                    Haldiram's Sev Bhujia
                                </a>
                            </h2>
                            <div>
                                {/* rating */}
                                <small className="text-warning">
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-half" />
                                </small>
                                {/* text */}
                                <span className="text-muted small">4.5(149)</span>
                            </div>
                            {/* price */}
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <div>
                                    <span className="text-dark">$18</span>
                                    <span className="text-decoration-line-through text-muted">
                $24
              </span>
                                </div>
                                <div>
                                    {/* btn */}
                                    <button type="button" className="btn btn-primary">Edit</button>
                                    <button type="button" className="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    {/* card */}
                    <div className="card card-product">
                        <div className="card-body">
                            <div className="text-center position-relative">
                                {/* badge */}
                                <a href="#!">
                                    {/* img */}
                                    <img
                                        src="../assets/images/products/product-img-2.jpg"
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
                                        <i className="bi bi-heart" />
                                    </a>
                                    <a
                                        href="#!"
                                        className="btn-action"
                                        data-bs-toggle="tooltip"
                                        data-bs-html="true"
                                        title="Compare"
                                    >
                                        <i className="bi bi-arrow-left-right" />
                                    </a>
                                </div>
                            </div>
                            <div className="text-small mb-1">
                                <a href="#!" className="text-decoration-none text-muted">
                                    <small>Bakery &amp; Biscuits</small>
                                </a>
                            </div>
                            <h2 className="fs-6">
                                <a href="#!" className="text-inherit text-decoration-none">
                                    NutriChoice Digestive
                                </a>
                            </h2>
                            <div className="text-warning">
                                <small>
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-half" />
                                </small>
                                {/* text */}
                                <span className="text-muted small">4.5 (25)</span>
                            </div>
                            {/* price */}
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <div>
                                    <span className="text-dark">$24</span>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-primary">Edit</button>
                                    <button type="button" className="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    {/* card */}
                    <div className="card card-product">
                        <div className="card-body">
                            <div className="text-center position-relative">
                                {/* badge */}
                                <a href="#!">
                                    {/* img */}
                                    <img
                                        src="../assets/images/products/product-img-3.jpg"
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
                                        <i className="bi bi-heart" />
                                    </a>
                                    <a
                                        href="#!"
                                        className="btn-action"
                                        data-bs-toggle="tooltip"
                                        data-bs-html="true"
                                        title="Compare"
                                    >
                                        <i className="bi bi-arrow-left-right" />
                                    </a>
                                </div>
                            </div>
                            <div className="text-small mb-1">
                                <a href="#!" className="text-decoration-none text-muted">
                                    <small>Bakery &amp; Biscuits</small>
                                </a>
                            </div>
                            <h2 className="fs-6">
                                <a href="#!" className="text-inherit text-decoration-none">
                                    Cadbury 5 Star Chocolate
                                </a>
                            </h2>
                            <div className="text-warning">
                                <small>
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                </small>
                                {/* text */}
                                <span className="text-muted small">5 (469)</span>
                            </div>
                            {/* price */}
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <div>
                                    <span className="text-dark">$32</span>
                                    <span className="text-decoration-line-through text-muted">
                $35
              </span>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-primary">Edit</button>
                                    <button type="button" className="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    {/* card */}
                    <div className="card card-product">
                        <div className="card-body">
                            <div className="text-center position-relative">
                                {/* badge */}
                                <a href="#!">
                                    {/* img */}
                                    <img
                                        src="../assets/images/products/product-img-4.jpg"
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
                                        <i className="bi bi-heart" />
                                    </a>
                                    <a
                                        href="#!"
                                        className="btn-action"
                                        data-bs-toggle="tooltip"
                                        data-bs-html="true"
                                        title="Compare"
                                    >
                                        <i className="bi bi-arrow-left-right" />
                                    </a>
                                </div>
                            </div>
                            <div className="text-small mb-1">
                                <a href="#!" className="text-decoration-none text-muted">
                                    <small>Snack &amp; Munchies</small>
                                </a>
                            </div>
                            <h2 className="fs-6">
                                <a href="#!" className="text-inherit text-decoration-none">
                                    Onion Flavour Potato
                                </a>
                            </h2>
                            <div className="text-warning">
                                <small>
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-half" />
                                    <i className="bi bi-star" />
                                </small>
                                {/* text */}
                                <span className="text-muted small">3.5 (456)</span>
                            </div>
                            {/* price */}
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <div>
                                    <span className="text-dark">$3</span>
                                    <span className="text-decoration-line-through text-muted">
                $5
              </span>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-primary">Edit</button>
                                    <button type="button" className="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    {/* card */}
                    <div className="card card-product">
                        <div className="card-body">
                            <div className="text-center position-relative">
                                {/* badge */}
                                <a href="#!">
                                    {/* img */}
                                    <img
                                        src="../assets/images/products/product-img-5.jpg"
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
                                        <i className="bi bi-heart" />
                                    </a>
                                    <a
                                        href="#!"
                                        className="btn-action"
                                        data-bs-toggle="tooltip"
                                        data-bs-html="true"
                                        title="Compare"
                                    >
                                        <i className="bi bi-arrow-left-right" />
                                    </a>
                                </div>
                            </div>
                            <div className="text-small mb-1">
                                <a href="#!" className="text-decoration-none text-muted">
                                    <small>Instant Food</small>
                                </a>
                            </div>
                            <h2 className="fs-6">
                                <a href="#!" className="text-inherit text-decoration-none">
                                    Salted Instant Popcorn
                                </a>
                            </h2>
                            <div className="text-warning">
                                <small>
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-half" />
                                </small>
                                {/* text */}
                                <span className="text-muted small">4.5 (39)</span>
                            </div>
                            <div className="d-flex justify-content-between mt-4">
                                <div>
                                    <span className="text-dark">$13</span>
                                    <span className="text-decoration-line-through text-muted">
                $18
              </span>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-primary">Edit</button>
                                    <button type="button" className="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    {/* card */}
                    <div className="card card-product">
                        <div className="card-body">
                            <div className="text-center position-relative">
                                {/* badge */}
                                <div className="position-absolute top-0 start-0">
                                    <span className="badge bg-danger">Sale</span>
                                </div>
                                <a href="#!">
                                    {/* img */}
                                    <img
                                        src="../assets/images/products/product-img-6.jpg"
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
                                        <i className="bi bi-heart" />
                                    </a>
                                    <a
                                        href="#!"
                                        className="btn-action"
                                        data-bs-toggle="tooltip"
                                        data-bs-html="true"
                                        title="Compare"
                                    >
                                        <i className="bi bi-arrow-left-right" />
                                    </a>
                                </div>
                            </div>
                            <div className="text-small mb-1">
                                <a href="#!" className="text-decoration-none text-muted">
                                    <small>Dairy, Bread &amp; Eggs</small>
                                </a>
                            </div>
                            <h2 className="fs-6">
                                <a href="#!" className="text-inherit text-decoration-none">
                                    Blueberry Greek Yogurt
                                </a>
                            </h2>
                            <div>
                                {/* rating */}
                                <small className="text-warning">
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-half" />
                                </small>
                                {/* text */}
                                <span className="text-muted small">4.5 (189)</span>
                            </div>
                            {/* price */}
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <div>
                                    <span className="text-dark">$18</span>
                                    <span className="text-decoration-line-through text-muted">
                $24
              </span>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-primary">Edit</button>
                                    <button type="button" className="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    {/* card */}
                    <div className="card card-product">
                        <div className="card-body">
                            <div className="text-center position-relative">
                                {/* badge */}
                                <a href="#!">
                                    {/* img */}
                                    <img
                                        src="../assets/images/products/product-img-7.jpg"
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
                                        <i className="bi bi-heart" />
                                    </a>
                                    <a
                                        href="#!"
                                        className="btn-action"
                                        data-bs-toggle="tooltip"
                                        data-bs-html="true"
                                        title="Compare"
                                    >
                                        <i className="bi bi-arrow-left-right" />
                                    </a>
                                </div>
                            </div>
                            <div className="text-small mb-1">
                                <a href="#!" className="text-decoration-none text-muted">
                                    <small>Dairy, Bread &amp; Eggs</small>
                                </a>
                            </div>
                            <h2 className="fs-6">
                                <a href="#!" className="text-inherit text-decoration-none">
                                    Britannia Cheese Slices
                                </a>
                            </h2>
                            <div className="text-warning">
                                <small>
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                </small>
                                {/* text */}
                                <span className="text-muted small">5 (345)</span>
                            </div>
                            {/* price */}
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <div>
                                    <span className="text-dark">$24</span>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-primary">Edit</button>
                                    <button type="button" className="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    {/* card */}
                    <div className="card card-product">
                        <div className="card-body">
                            <div className="text-center position-relative">
                                {/* badge */}
                                <a href="#!">
                                    {/* img */}
                                    <img
                                        src="../assets/images/products/product-img-8.jpg"
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
                                        <i className="bi bi-heart" />
                                    </a>
                                    <a
                                        href="#!"
                                        className="btn-action"
                                        data-bs-toggle="tooltip"
                                        data-bs-html="true"
                                        title="Compare"
                                    >
                                        <i className="bi bi-arrow-left-right" />
                                    </a>
                                </div>
                            </div>
                            <div className="text-small mb-1">
                                <a href="#!" className="text-decoration-none text-muted">
                                    <small>Instant Food</small>
                                </a>
                            </div>
                            <h2 className="fs-6">
                                <a href="#!" className="text-inherit text-decoration-none">
                                    Kellogg's Original Cereals
                                </a>
                            </h2>
                            <div className="text-warning">
                                <small>
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-half" />
                                </small>
                                {/* text */}
                                <span className="text-muted small">4 (90)</span>
                            </div>
                            {/* price */}
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <div>
                                    <span className="text-dark">$32</span>
                                    <span className="text-decoration-line-through text-muted">
                $35
              </span>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-primary">Edit</button>
                                    <button type="button" className="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    {/* card */}
                    <div className="card card-product">
                        <div className="card-body">
                            <div className="text-center position-relative">
                                {/* badge */}
                                <a href="#!">
                                    {/* img */}
                                    <img
                                        src="../assets/images/products/product-img-9.jpg"
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
                                        <i className="bi bi-heart" />
                                    </a>
                                    <a
                                        href="#!"
                                        className="btn-action"
                                        data-bs-toggle="tooltip"
                                        data-bs-html="true"
                                        title="Compare"
                                    >
                                        <i className="bi bi-arrow-left-right" />
                                    </a>
                                </div>
                            </div>
                            <div className="text-small mb-1">
                                <a href="#!" className="text-decoration-none text-muted">
                                    <small>Snack &amp; Munchies</small>
                                </a>
                            </div>
                            <h2 className="fs-6">
                                <a href="#!" className="text-inherit text-decoration-none">
                                    Slurrp Millet Chocolate
                                </a>
                            </h2>
                            <div className="text-warning">
                                <small>
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-half" />
                                </small>
                                {/* text */}
                                <span className="text-muted small">4.5 (67)</span>
                            </div>
                            {/* price */}
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <div>
                                    <span className="text-dark">$3</span>
                                    <span className="text-decoration-line-through text-muted">
                $5
              </span>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-primary">Edit</button>
                                    <button type="button" className="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    {/* card */}
                    <div className="card card-product">
                        <div className="card-body">
                            <div className="text-center position-relative">
                                {/* badge */}
                                <a href="#!">
                                    {/* img */}
                                    <img
                                        src="../assets/images/products/product-img-10.jpg"
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
                                        <i className="bi bi-heart" />
                                    </a>
                                    <a
                                        href="#!"
                                        className="btn-action"
                                        data-bs-toggle="tooltip"
                                        data-bs-html="true"
                                        title="Compare"
                                    >
                                        <i className="bi bi-arrow-left-right" />
                                    </a>
                                </div>
                            </div>
                            <div className="text-small mb-1">
                                <a href="#!" className="text-decoration-none text-muted">
                                    <small>Dairy, Bread &amp; Eggs</small>
                                </a>
                            </div>
                            <h2 className="fs-6">
                                <a href="#!" className="text-inherit text-decoration-none">
                                    Amul Butter - 500 g
                                </a>
                            </h2>
                            <div className="text-warning">
                                <small>
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-half" />
                                    <i className="bi bi-star" />
                                </small>
                                {/* text */}
                                <span className="text-muted small">3.5 (89)</span>
                            </div>
                            <div className="d-flex justify-content-between mt-4">
                                <div>
                                    <span className="text-dark">$13</span>
                                    <span className="text-decoration-line-through text-muted">
                $18
              </span>
                                </div>
                                <div>
                                    <button className="btn" data-toggle="modal" data-target="#myModal"><i className="fa fa-pencil" style={{color:"blue"}}></i></button>
                                    <button className="btn" data-toggle="modal" data-target="#myModal"><i className="fa fa-trash" style={{color:"red"}}></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* row */}
            <div className="row mt-8">
                <div className="col">
                    {/* nav */}
                    <nav>
                        <ul className="pagination">
                            <li className="page-item disabled">
                                <a className="page-link mx-1 " href="#" aria-label="Previous">
                                    <i className="feather-icon icon-chevron-left" />
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link mx-1 active" href="#">
                                    1
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link mx-1 text-body" href="#">
                                    2
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link mx-1 text-body" href="#">
                                    ...
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link mx-1 text-body" href="#">
                                    12
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link mx-1 text-body" href="#" aria-label="Next">
                                    <i className="feather-icon icon-chevron-right" />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            {/* Modal */}
            <div className="modal fade" id="myModal" role="dialog">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content p-4">
                        <div className="modal-header border-0">
                            <h5 className="modal-title fs-3 fw-bold" id="userModalLabel">
                                Sign Up
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="fullName" className="form-label">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="fullName"
                                        placeholder="Enter Your Name"
                                        required=""
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Enter Email address"
                                        required=""
                                    />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="password" className="form-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Enter Password"
                                        required=""
                                    />
                                    <small className="form-text">
                                        By Signup, you agree to our <a href="#!">Terms of Service</a>{" "}
                                        &amp; <a href="#!">Privacy Policy</a>
                                    </small>
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Sign Up
                                </button>
                            </form>
                        </div>
                        <div className="modal-footer border-0 justify-content-center">
                            Already have an account? <a href="#">Sign in</a>
                        </div>
                    </div>
                </div>
            </div>




        </>
    );
};

export default ShopSingleFilterViewLogin;