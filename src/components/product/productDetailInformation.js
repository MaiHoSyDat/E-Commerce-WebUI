import React from 'react';

const ProductDetailInformation = () => {
    return (
        <>
            <div className="col-md-12">
                <ul className="nav nav-pills nav-lb-tab" id="myTab" role="tablist">
                    {/* nav item */}
                    <li className="nav-item" role="presentation">
                        {/* btn */}
                        <button
                            className="nav-link active"
                            id="product-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#product-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="product-tab-pane"
                            aria-selected="true"
                        >
                            Product Details
                        </button>
                    </li>
                    {/* nav item */}
                    <li className="nav-item" role="presentation">
                        {/* btn */}
                        <button
                            className="nav-link"
                            id="details-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#details-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="details-tab-pane"
                            aria-selected="false"
                        >
                            Information
                        </button>
                    </li>
                    {/* nav item */}
                    <li className="nav-item" role="presentation">
                        {/* btn */}
                        <button
                            className="nav-link"
                            id="reviews-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#reviews-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="reviews-tab-pane"
                            aria-selected="false"
                        >
                            Reviews
                        </button>
                    </li>
                    {/* nav item */}
                    <li className="nav-item" role="presentation">
                        {/* btn */}
                        <button
                            className="nav-link"
                            id="sellerInfo-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#sellerInfo-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="sellerInfo-tab-pane"
                            aria-selected="false"
                            disabled=""
                        >
                            Seller Info
                        </button>
                    </li>
                </ul>
                {/* tab content */}
                <div className="tab-content" id="myTabContent">
                    {/* tab pane */}
                    <div
                        className="tab-pane fade show active"
                        id="product-tab-pane"
                        role="tabpanel"
                        aria-labelledby="product-tab"
                        tabIndex={0}
                    >
                        <div className="my-8">
                            <div className="mb-5">
                                {/* text */}
                                <h4 className="mb-1">Nutrient Value &amp; Benefits</h4>
                                <p className="mb-0">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi,
                                    tellus iaculis urna bibendum in lacus, integer. Id imperdiet vitae
                                    varius sed magnis eu nisi nunc sit. Vel, varius habitant ornare ac
                                    rhoncus. Consequat risus facilisis ante ipsum netus risus adipiscing
                                    sagittis sed. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                </p>
                            </div>
                            <div className="mb-5">
                                <h5 className="mb-1">Storage Tips</h5>
                                <p className="mb-0">
                                    Nisi, tellus iaculis urna bibendum in lacus, integer. Id imperdiet
                                    vitae varius sed magnis eu nisi nunc sit. Vel, varius habitant
                                    ornare ac rhoncus. Consequat risus facilisis ante ipsum netus risus
                                    adipiscing sagittis sed.Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </p>
                            </div>
                            {/* content */}
                            <div className="mb-5">
                                <h5 className="mb-1">Unit</h5>
                                <p className="mb-0">3 units</p>
                            </div>
                            <div className="mb-5">
                                <h5 className="mb-1">Seller</h5>
                                <p className="mb-0">DMart Pvt. LTD</p>
                            </div>
                            <div>
                                <h5 className="mb-1">Disclaimer</h5>
                                <p className="mb-0">
                                    Image shown is a representation and may slightly vary from the
                                    actual product. Every effort is made to maintain accuracy of all
                                    information displayed.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* tab pane */}
                    <div
                        className="tab-pane fade"
                        id="details-tab-pane"
                        role="tabpanel"
                        aria-labelledby="details-tab"
                        tabIndex={0}
                    >
                        <div className="my-8">
                            <div className="row">
                                <div className="col-12">
                                    <h4 className="mb-4">Details</h4>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <table className="table table-striped">
                                        {/* table */}
                                        <tbody>
                                        <tr>
                                            <th>Weight</th>
                                            <td>1000 Grams</td>
                                        </tr>
                                        <tr>
                                            <th>Ingredient Type</th>
                                            <td>Vegetarian</td>
                                        </tr>
                                        <tr>
                                            <th>Brand</th>
                                            <td>Dmart</td>
                                        </tr>
                                        <tr>
                                            <th>Item Package Quantity</th>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <th>Form</th>
                                            <td>Larry the Bird</td>
                                        </tr>
                                        <tr>
                                            <th>Manufacturer</th>
                                            <td>Dmart</td>
                                        </tr>
                                        <tr>
                                            <th>Net Quantity</th>
                                            <td>340.0 Gram</td>
                                        </tr>
                                        <tr>
                                            <th>Product Dimensions</th>
                                            <td>9.6 x 7.49 x 18.49 cm</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <table className="table table-striped">
                                        {/* table */}
                                        <tbody>
                                        <tr>
                                            <th>ASIN</th>
                                            <td>SB0025UJ75W</td>
                                        </tr>
                                        <tr>
                                            <th>Best Sellers Rank</th>
                                            <td>#2 in Fruits</td>
                                        </tr>
                                        <tr>
                                            <th>Date First Available</th>
                                            <td>30 April 2022</td>
                                        </tr>
                                        <tr>
                                            <th>Item Weight</th>
                                            <td>500g</td>
                                        </tr>
                                        <tr>
                                            <th>Generic Name</th>
                                            <td>Banana Robusta</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* tab pane */}
                    <div
                        className="tab-pane fade"
                        id="reviews-tab-pane"
                        role="tabpanel"
                        aria-labelledby="reviews-tab"
                        tabIndex={0}
                    >
                        <div className="my-8">
                            {/* row */}
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="me-lg-12 mb-6 mb-md-0">
                                        <div className="mb-5">
                                            {/* title */}
                                            <h4 className="mb-3">Customer reviews</h4>
                                            <span>
                  {/* rating */}{" "}
                                                <small className="text-warning">
                    {" "}
                                                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                  </small>
                  <span className="ms-3">4.1 out of 5</span>
                  <small className="ms-3">11,130 global ratings</small>
                </span>
                                        </div>
                                        <div className="mb-8">
                                            {/* progress */}
                                            <div className="d-flex align-items-center mb-2">
                                                <div className="text-nowrap me-3 text-muted">
                    <span className="d-inline-block align-middle text-muted">
                      5
                    </span>
                                                    <i className="bi bi-star-fill ms-1 small text-warning" />
                                                </div>
                                                <div className="w-100">
                                                    <div className="progress" style={{ height: 6 }}>
                                                        <div
                                                            className="progress-bar bg-warning"
                                                            role="progressbar"
                                                            style={{ width: "60%" }}
                                                            aria-valuenow={60}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}
                                                        />
                                                    </div>
                                                </div>
                                                <span className="text-muted ms-3">53%</span>
                                            </div>
                                            {/* progress */}
                                            <div className="d-flex align-items-center mb-2">
                                                <div className="text-nowrap me-3 text-muted">
                    <span className="d-inline-block align-middle text-muted">
                      4
                    </span>
                                                    <i className="bi bi-star-fill ms-1 small text-warning" />
                                                </div>
                                                <div className="w-100">
                                                    <div className="progress" style={{ height: 6 }}>
                                                        <div
                                                            className="progress-bar bg-warning"
                                                            role="progressbar"
                                                            style={{ width: "50%" }}
                                                            aria-valuenow={50}
                                                            aria-valuemin={0}
                                                            aria-valuemax={50}
                                                        />
                                                    </div>
                                                </div>
                                                <span className="text-muted ms-3">22%</span>
                                            </div>
                                            {/* progress */}
                                            <div className="d-flex align-items-center mb-2">
                                                <div className="text-nowrap me-3 text-muted">
                    <span className="d-inline-block align-middle text-muted">
                      3
                    </span>
                                                    <i className="bi bi-star-fill ms-1 small text-warning" />
                                                </div>
                                                <div className="w-100">
                                                    <div className="progress" style={{ height: 6 }}>
                                                        <div
                                                            className="progress-bar bg-warning"
                                                            role="progressbar"
                                                            style={{ width: "35%" }}
                                                            aria-valuenow={35}
                                                            aria-valuemin={0}
                                                            aria-valuemax={35}
                                                        />
                                                    </div>
                                                </div>
                                                <span className="text-muted ms-3">14%</span>
                                            </div>
                                            {/* progress */}
                                            <div className="d-flex align-items-center mb-2">
                                                <div className="text-nowrap me-3 text-muted">
                    <span className="d-inline-block align-middle text-muted">
                      2
                    </span>
                                                    <i className="bi bi-star-fill ms-1 small text-warning" />
                                                </div>
                                                <div className="w-100">
                                                    <div className="progress" style={{ height: 6 }}>
                                                        <div
                                                            className="progress-bar bg-warning"
                                                            role="progressbar"
                                                            style={{ width: "22%" }}
                                                            aria-valuenow={22}
                                                            aria-valuemin={0}
                                                            aria-valuemax={22}
                                                        />
                                                    </div>
                                                </div>
                                                <span className="text-muted ms-3">5%</span>
                                            </div>
                                            {/* progress */}
                                            <div className="d-flex align-items-center mb-2">
                                                <div className="text-nowrap me-3 text-muted">
                    <span className="d-inline-block align-middle text-muted">
                      1
                    </span>
                                                    <i className="bi bi-star-fill ms-1 small text-warning" />
                                                </div>
                                                <div className="w-100">
                                                    <div className="progress" style={{ height: 6 }}>
                                                        <div
                                                            className="progress-bar bg-warning"
                                                            role="progressbar"
                                                            style={{ width: "14%" }}
                                                            aria-valuenow={14}
                                                            aria-valuemin={0}
                                                            aria-valuemax={14}
                                                        />
                                                    </div>
                                                </div>
                                                <span className="text-muted ms-3">7%</span>
                                            </div>
                                        </div>
                                        <div className="d-grid">
                                            <h4>Review this product</h4>
                                            <p className="mb-0">
                                                Share your thoughts with other customers.
                                            </p>
                                            <a
                                                href="#"
                                                className="btn btn-outline-gray-400 mt-4 text-muted"
                                            >
                                                Write the Review
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* col */}
                                <div className="col-md-8">
                                    <div className="mb-10">
                                        <div className="d-flex justify-content-between align-items-center mb-8">
                                            <div>
                                                {/* heading */}
                                                <h4>Reviews</h4>
                                            </div>
                                            <div>
                                                <select className="form-select">
                                                    <option selected="">Top Review</option>
                                                    <option value={1}>One</option>
                                                    <option value={2}>Two</option>
                                                    <option value={3}>Three</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="d-flex border-bottom pb-6 mb-6">
                                            {/* img */}
                                            {/* img */}
                                            <img
                                                src="../assets/images/avatar/avatar-10.jpg"
                                                alt=""
                                                className="rounded-circle avatar-lg"
                                            />
                                            <div className="ms-5">
                                                <h6 className="mb-1">Shankar Subbaraman</h6>
                                                {/* select option */}
                                                {/* content */}
                                                <p className="small">
                                                    <span className="text-muted">30 December 2022</span>
                                                    <span className="text-primary ms-3 fw-bold">
                      Verified Purchase
                    </span>
                                                </p>
                                                {/* rating */}
                                                <div className=" mb-2">
                                                    <i className="bi bi-star-fill text-warning" />
                                                    <i className="bi bi-star-fill text-warning" />
                                                    <i className="bi bi-star-fill text-warning" />
                                                    <i className="bi bi-star-fill text-warning" />
                                                    <i className="bi bi-star-fill text-warning" />
                                                    <span className="ms-3 text-dark fw-bold">
                      Need to recheck the weight at delivery point
                    </span>
                                                </div>
                                                {/* text*/}
                                                <p>
                                                    Product quality is good. But, weight seemed less than 1kg.
                                                    Since it is being sent in open package, there is a
                                                    possibility of pilferage in between. FreshCart sends the
                                                    veggies and fruits through sealed plastic covers and Barcode
                                                    on the weight etc. .
                                                </p>
                                                <div>
                                                    <div className="border icon-shape icon-lg border-2 ">
                                                        {/* img */}
                                                        <img
                                                            src="../assets/images/products/product-img-1.jpg"
                                                            alt=""
                                                            className="img-fluid "
                                                        />
                                                    </div>
                                                    <div className="border icon-shape icon-lg border-2 ms-1 ">
                                                        {/* img */}
                                                        <img
                                                            src="../assets/images/products/product-img-2.jpg"
                                                            alt=""
                                                            className="img-fluid "
                                                        />
                                                    </div>
                                                    <div className="border icon-shape icon-lg border-2 ms-1 ">
                                                        {/* img */}
                                                        <img
                                                            src="../assets/images/products/product-img-3.jpg"
                                                            alt=""
                                                            className="img-fluid "
                                                        />
                                                    </div>
                                                </div>
                                                {/* icon */}
                                                <div className="d-flex justify-content-end mt-4">
                                                    <a href="#" className="text-muted">
                                                        <i className="feather-icon icon-thumbs-up me-1" />
                                                        Helpful
                                                    </a>
                                                    <a href="#" className="text-muted ms-4">
                                                        <i className="feather-icon icon-flag me-2" />
                                                        Report abuse
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex border-bottom pb-6 mb-6 pt-4">
                                            {/* img */}
                                            <img
                                                src="../assets/images/avatar/avatar-12.jpg"
                                                alt=""
                                                className="rounded-circle avatar-lg"
                                            />
                                            <div className="ms-5">
                                                <h6 className="mb-1">Robert Thomas</h6>
                                                {/* content */}
                                                <p className="small">
                                                    <span className="text-muted">29 December 2022</span>
                                                    <span className="text-primary ms-3 fw-bold">
                      Verified Purchase
                    </span>
                                                </p>
                                                {/* rating */}
                                                <div className=" mb-2">
                                                    <i className="bi bi-star-fill text-warning" />
                                                    <i className="bi bi-star-fill text-warning" />
                                                    <i className="bi bi-star-fill text-warning" />
                                                    <i className="bi bi-star-fill text-warning" />
                                                    <i className="bi bi-star text-warning" />
                                                    <span className="ms-3 text-dark fw-bold">
                      Need to recheck the weight at delivery point
                    </span>
                                                </div>
                                                <p>
                                                    Product quality is good. But, weight seemed less than 1kg.
                                                    Since it is being sent in open package, there is a
                                                    possibility of pilferage in between. FreshCart sends the
                                                    veggies and fruits through sealed plastic covers and Barcode
                                                    on the weight etc. .
                                                </p>
                                                {/* icon */}
                                                <div className="d-flex justify-content-end mt-4">
                                                    <a href="#" className="text-muted">
                                                        <i className="feather-icon icon-thumbs-up me-1" />
                                                        Helpful
                                                    </a>
                                                    <a href="#" className="text-muted ms-4">
                                                        <i className="feather-icon icon-flag me-2" />
                                                        Report abuse
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex border-bottom pb-6 mb-6 pt-4">
                                            {/* img */}
                                            <img
                                                src="../assets/images/avatar/avatar-9.jpg"
                                                alt=""
                                                className="rounded-circle avatar-lg"
                                            />
                                            <div className="ms-5">
                                                <h6 className="mb-1">Barbara Tay</h6>
                                                {/* content */}
                                                <p className="small">
                                                    <span className="text-muted">28 December 2022</span>
                                                    <span className="text-danger ms-3 fw-bold">
                      Unverified Purchase
                    </span>
                                                </p>
                                                {/* rating */}
                                                <div className=" mb-2">
                                                    <i className="bi bi-star-fill text-warning" />
                                                    <i className="bi bi-star-fill text-warning" />
                                                    <i className="bi bi-star-fill text-warning" />
                                                    <i className="bi bi-star-fill text-warning" />
                                                    <i className="bi bi-star text-warning" />
                                                    <span className="ms-3 text-dark fw-bold">
                      Need to recheck the weight at delivery point
                    </span>
                                                </div>
                                                <p>
                                                    Everytime i ordered from fresh i got greenish yellow bananas
                                                    just like i wanted so go for it , its happens very rare that
                                                    u get over riped ones.
                                                </p>
                                                {/* icon */}
                                                <div className="d-flex justify-content-end mt-4">
                                                    <a href="#" className="text-muted">
                                                        <i className="feather-icon icon-thumbs-up me-1" />
                                                        Helpful
                                                    </a>
                                                    <a href="#" className="text-muted ms-4">
                                                        <i className="feather-icon icon-flag me-2" />
                                                        Report abuse
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex border-bottom pb-6 mb-6 pt-4">
                                            {/* img */}
                                            <img
                                                src="../assets/images/avatar/avatar-8.jpg"
                                                alt=""
                                                className="rounded-circle avatar-lg"
                                            />
                                            <div className="ms-5 flex-grow-1">
                                                <h6 className="mb-1">Sandra Langevin</h6>
                                                {/* content */}
                                                <p className="small">
                                                    <span className="text-muted">8 December 2022</span>
                                                    <span className="text-danger ms-3 fw-bold">
                      Unverified Purchase
                    </span>
                                                </p>
                                                {/* rating */}
                                                <div className=" mb-2">
                                                    <i className="bi bi-star-fill text-warning" />
                                                    <i className="bi bi-star-fill text-warning" />
                                                    <i className="bi bi-star-fill text-warning" />
                                                    <i className="bi bi-star-fill text-warning" />
                                                    <i className="bi bi-star text-warning" />
                                                    <span className="ms-3 text-dark fw-bold">
                      Great product
                    </span>
                                                </div>
                                                <p>
                                                    Great product &amp; package. Delivery can be expedited.{" "}
                                                </p>
                                                {/* icon */}
                                                <div className="d-flex justify-content-end mt-4">
                                                    <a href="#" className="text-muted">
                                                        <i className="feather-icon icon-thumbs-up me-1" />
                                                        Helpful
                                                    </a>
                                                    <a href="#" className="text-muted ms-4">
                                                        <i className="feather-icon icon-flag me-2" />
                                                        Report abuse
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <a href="#" className="btn btn-outline-gray-400 text-muted">
                                                Read More Reviews
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        {/* rating */}
                                        <h3 className="mb-5">Create Review</h3>
                                        <div className="border-bottom py-4 mb-4">
                                            <h4 className="mb-3">Overall rating</h4>
                                            <div id="rater" />
                                        </div>
                                        <div className="border-bottom py-4 mb-4">
                                            <h4 className="mb-0">Rate Features</h4>
                                            <div className="my-5">
                                                <h5>Flavor</h5>
                                                <div id="rate-2" />
                                            </div>
                                            <div className="my-5">
                                                <h5>Value for money</h5>
                                                <div id="rate-3" />
                                            </div>
                                            <div className="my-5">
                                                <h5>Scent</h5>
                                                <div id="rate-4" />
                                            </div>
                                        </div>
                                        {/* form control */}
                                        <div className="border-bottom py-4 mb-4">
                                            <h5>Add a headline</h5>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="What’s most important to know"
                                            />
                                        </div>
                                        <div className="border-bottom py-4 mb-4">
                                            <h5>Add a photo or video</h5>
                                            <p>
                                                Shoppers find images and videos more helpful than text alone.
                                            </p>
                                            {/* form */}
                                            <form action="#" className=" dropzone profile-dropzone">
                                                <div className="fallback">
                                                    <input name="file" type="file" multiple="" />
                                                </div>
                                            </form>
                                        </div>
                                        <div className=" py-4 mb-4">
                                            {/* heading */}
                                            <h5>Add a written review</h5>
                                            <textarea
                                                className="form-control"
                                                rows={3}
                                                placeholder="What did you like or dislike? What did you use this product for?"
                                                defaultValue={""}
                                            />
                                        </div>
                                        {/* button */}
                                        <div className="d-flex justify-content-end">
                                            <a href="#" className="btn btn-primary">
                                                Submit Review
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* tab pane */}
                    <div
                        className="tab-pane fade"
                        id="sellerInfo-tab-pane"
                        role="tabpanel"
                        aria-labelledby="sellerInfo-tab"
                        tabIndex={0}
                    >
                        ...
                    </div>
                </div>
            </div>

        </>
    );
};

export default ProductDetailInformation;