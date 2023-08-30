import React from 'react';

const ProductWishlist = () => {
    return (
        <main>
            {/* section */}
            <section className="mt-8 mb-14">
                <div className="container">
                    {/* row */}
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="mb-8">
                                {/* heading */}
                                <h1 className="mb-1">My Wishlist</h1>
                                <p>There are 5 products in this wishlist.</p>
                            </div>
                            <div>
                                {/* table */}
                                <div className="table-responsive">
                                    <table className="table text-nowrap table-with-checkbox">
                                        <thead className="table-light">
                                        <tr>
                                            <th>
                                                {/* form check */}
                                                <div className="form-check">
                                                    {/* input */}
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        defaultValue=""
                                                        id="checkAll"
                                                    />
                                                    {/* label */}
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="checkAll"
                                                    ></label>
                                                </div>
                                            </th>
                                            <th />
                                            <th>Product</th>
                                            <th>Amount</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                            <th>Remove</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="align-middle">
                                                {/* form check */}
                                                <div className="form-check">
                                                    {/* input */}
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        defaultValue=""
                                                        id="chechboxTwo"
                                                    />
                                                    {/* label */}
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="chechboxTwo"
                                                    ></label>
                                                </div>
                                            </td>
                                            <td className="align-middle">
                                                <a href="#">
                                                    <img
                                                        src="../assets/images/products/product-img-18.jpg"
                                                        className="icon-shape icon-xxl"
                                                        alt=""
                                                    />
                                                </a>
                                            </td>
                                            <td className="align-middle">
                                                <div>
                                                    <h5 className="fs-6 mb-0">
                                                        <a href="#" className="text-inherit">
                                                            Organic Banana
                                                        </a>
                                                    </h5>
                                                    <small>$.98 / lb</small>
                                                </div>
                                            </td>
                                            <td className="align-middle">$35.00</td>
                                            <td className="align-middle">
                                                <span className="badge bg-success">In Stock</span>
                                            </td>
                                            <td className="align-middle">
                                                <div className="btn btn-primary btn-sm">Add to Cart</div>
                                            </td>
                                            <td className="align-middle ">
                                                <a
                                                    href="#"
                                                    className="text-muted"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    title="Delete"
                                                >
                                                    <i className="feather-icon icon-trash-2" />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle">
                                                {/* form check */}
                                                <div className="form-check">
                                                    {/* input */}
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        defaultValue=""
                                                        id="chechboxThree"
                                                    />
                                                    {/* label */}
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="chechboxThree"
                                                    ></label>
                                                </div>
                                            </td>
                                            <td className="align-middle">
                                                <a href="#">
                                                    <img
                                                        src="../assets/images/products/product-img-17.jpg"
                                                        className="icon-shape icon-xxl"
                                                        alt=""
                                                    />
                                                </a>
                                            </td>
                                            <td className="align-middle">
                                                <div>
                                                    <h5 className="fs-6 mb-0">
                                                        <a href="#" className="text-inherit">
                                                            Fresh Kiwi
                                                        </a>
                                                    </h5>
                                                    <small>4 no</small>
                                                </div>
                                            </td>
                                            <td className="align-middle">$20.97</td>
                                            <td className="align-middle">
                                                <span className="badge bg-danger">Out of Stock</span>
                                            </td>
                                            <td className="align-middle">
                                                <div className="btn btn-dark btn-sm">Contact us</div>
                                            </td>
                                            <td className="align-middle ">
                                                <a
                                                    href="#"
                                                    className="text-muted"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    title="Delete"
                                                >
                                                    <i className="feather-icon icon-trash-2" />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle">
                                                {/* form check */}
                                                <div className="form-check">
                                                    {/* input */}
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        defaultValue=""
                                                        id="chechboxFour"
                                                    />
                                                    {/* label */}
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="chechboxFour"
                                                    ></label>
                                                </div>
                                            </td>
                                            <td className="align-middle">
                                                <a href="#">
                                                    <img
                                                        src="../assets/images/products/product-img-16.jpg"
                                                        className="icon-shape icon-xxl"
                                                        alt=""
                                                    />
                                                </a>
                                            </td>
                                            <td className="align-middle">
                                                <div>
                                                    <h5 className="fs-6 mb-0">
                                                        <a href="#" className="text-inherit">
                                                            Golden Pineapple
                                                        </a>
                                                    </h5>
                                                    <small>2 no</small>
                                                </div>
                                            </td>
                                            <td className="align-middle">$35.00</td>
                                            <td className="align-middle">
                                                <span className="badge bg-success">In Stock</span>
                                            </td>
                                            <td className="align-middle">
                                                <div className="btn btn-primary btn-sm">Add to Cart</div>
                                            </td>
                                            <td className="align-middle ">
                                                <a
                                                    href="#"
                                                    className="text-muted"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    title="Delete"
                                                >
                                                    <i className="feather-icon icon-trash-2" />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle">
                                                {/* form check */}
                                                <div className="form-check">
                                                    {/* input */}
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        defaultValue=""
                                                        id="chechboxFive"
                                                    />
                                                    {/* label */}
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="chechboxFive"
                                                    ></label>
                                                </div>
                                            </td>
                                            <td className="align-middle">
                                                <a href="#">
                                                    <img
                                                        src="../assets/images/products/product-img-19.jpg"
                                                        className="icon-shape icon-xxl"
                                                        alt=""
                                                    />
                                                </a>
                                            </td>
                                            <td className="align-middle">
                                                <div>
                                                    <h5 className="fs-6 mb-0">
                                                        <a href="#" className="text-inherit">
                                                            BeatRoot
                                                        </a>
                                                    </h5>
                                                    <small>1 kg</small>
                                                </div>
                                            </td>
                                            <td className="align-middle">$29.00</td>
                                            <td className="align-middle">
                                                <span className="badge bg-success">In Stock</span>
                                            </td>
                                            <td className="align-middle">
                                                <div className="btn btn-primary btn-sm">Add to Cart</div>
                                            </td>
                                            <td className="align-middle ">
                                                <a
                                                    href="#"
                                                    className="text-muted"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    title="Delete"
                                                >
                                                    <i className="feather-icon icon-trash-2" />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle">
                                                {/* form check */}
                                                <div className="form-check">
                                                    {/* input */}
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        defaultValue=""
                                                        id="chechboxSix"
                                                    />
                                                    {/* label */}
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="chechboxSix"
                                                    ></label>
                                                </div>
                                            </td>
                                            <td className="align-middle">
                                                <a href="#">
                                                    <img
                                                        src="../assets/images/products/product-img-15.jpg"
                                                        className="icon-shape icon-xxl"
                                                        alt=""
                                                    />
                                                </a>
                                            </td>
                                            <td className="align-middle">
                                                <div>
                                                    <h5 className="fs-6 mb-0">
                                                        <a href="#" className="text-inherit">
                                                            Fresh Apple
                                                        </a>
                                                    </h5>
                                                    <small>2 kg</small>
                                                </div>
                                            </td>
                                            <td className="align-middle">$70.00</td>
                                            <td className="align-middle">
                                                <span className="badge bg-success">In Stock</span>
                                            </td>
                                            <td className="align-middle">
                                                <div className="btn btn-primary btn-sm">Add to Cart</div>
                                            </td>
                                            <td className="align-middle ">
                                                <a
                                                    href="#"
                                                    className="text-muted"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    title="Delete"
                                                >
                                                    <i className="feather-icon icon-trash-2" />
                                                </a>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    );
};

export default ProductWishlist;