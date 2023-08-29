import React from 'react';

const DashboardOrderDetail = () => {
    return (
        <>
            <div className="container">
                {/* row */}
                <div className="row mb-8">
                    <div className="col-md-12">
                        <div className="d-md-flex justify-content-between align-items-center">
                            <div>
                                {/* page header */}
                                <h2>Order Single</h2>
                                {/* breacrumb */}
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb mb-0">
                                        <li className="breadcrumb-item">
                                            <a href="#" className="text-inherit">
                                                Dashboard
                                            </a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Order Single
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                            {/* button */}
                            <div>
                                <a href="#" className="btn btn-primary">
                                    Back to all orders
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* row */}
                <div className="row ">
                    <div className="col-xl-12 col-12 mb-5">
                        {/* card */}
                        <div className="card h-100 card-lg">
                            <div className="card-body p-6">
                                <div className="d-md-flex justify-content-between">
                                    <div className="d-flex align-items-center mb-2 mb-md-0">
                                        <h2 className="mb-0">Order ID: #FC001</h2>
                                        <span className="badge bg-light-warning text-dark-warning ms-2">
                Pending
              </span>
                                    </div>
                                    {/* select option */}
                                    <div className="d-md-flex">
                                        <div className="mb-2 mb-md-0">
                                            <select className="form-select">
                                                <option selected="">Status</option>
                                                <option value="Success">Success</option>
                                                <option value="Pending">Pending</option>
                                                <option value="Cancel">Cancel</option>
                                            </select>
                                        </div>
                                        {/* button */}
                                        <div className="ms-md-3">
                                            <a href="#" className="btn btn-primary">
                                                Save
                                            </a>
                                            <a href="#" className="btn btn-secondary">
                                                Download Invoice
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <div className="row">
                                        {/* address */}
                                        <div className="col-lg-4 col-md-4 col-12">
                                            <div className="mb-6">
                                                <h6>Customer Details</h6>
                                                <p className="mb-1 lh-lg">
                                                    John Alex
                                                    <br />
                                                    anderalex@example.com
                                                    <br />
                                                    +998 99 22123456
                                                </p>
                                                <a href="#">View Profile</a>
                                            </div>
                                        </div>
                                        {/* address */}
                                        <div className="col-lg-4 col-md-4 col-12">
                                            <div className="mb-6">
                                                <h6>Shipping Address</h6>
                                                <p className="mb-1 lh-lg">
                                                    Gerg Harvell
                                                    <br />
                                                    568, Suite Ave.
                                                    <br />
                                                    Austrlia, 235153 <br />
                                                    Contact No. +91 99999 12345
                                                </p>
                                            </div>
                                        </div>
                                        {/* address */}
                                        <div className="col-lg-4 col-md-4 col-12">
                                            <div className="mb-6">
                                                <h6>Order Details</h6>
                                                <p className="mb-1 lh-lg">
                                                    Order ID: <span className="text-dark">FC001</span>
                                                    <br />
                                                    Order Date:{" "}
                                                    <span className="text-dark">October 22, 2023</span>
                                                    <br />
                                                    Order Total: <span className="text-dark">$734.28</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="table-responsive">
                                        {/* Table */}
                                        <table className="table mb-0 text-nowrap table-centered">
                                            {/* Table Head */}
                                            <thead className="bg-light">
                                            <tr>
                                                <th>Products</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                            </tr>
                                            </thead>
                                            {/* tbody */}
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <a href="#" className="text-inherit">
                                                        <div className="d-flex align-items-center">
                                                            <div>
                                                                <img
                                                                    src="../assets/images/products/product-img-1.jpg"
                                                                    alt=""
                                                                    className="icon-shape icon-lg"
                                                                />
                                                            </div>
                                                            <div className="ms-lg-4 mt-2 mt-lg-0">
                                                                <h5 className="mb-0 h6">Haldiram's Sev Bhujia</h5>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </td>
                                                <td>
                                                    <span className="text-body">$18.0</span>
                                                </td>
                                                <td>1</td>
                                                <td>$18.00</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="#" className="text-inherit">
                                                        <div className="d-flex align-items-center">
                                                            <div>
                                                                <img
                                                                    src="../assets/images/products/product-img-2.jpg"
                                                                    alt=""
                                                                    className="icon-shape icon-lg"
                                                                />
                                                            </div>
                                                            <div className="ms-lg-4 mt-2 mt-lg-0">
                                                                <h5 className="mb-0 h6">NutriChoice Digestive</h5>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </td>
                                                <td>
                                                    <span className="text-body">$24.0</span>
                                                </td>
                                                <td>1</td>
                                                <td>$24.00</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="#" className="text-inherit">
                                                        <div className="d-flex align-items-center">
                                                            <div>
                                                                <img
                                                                    src="../assets/images/products/product-img-3.jpg"
                                                                    alt=""
                                                                    className="icon-shape icon-lg"
                                                                />
                                                            </div>
                                                            <div className="ms-lg-4 mt-2 mt-lg-0">
                                                                <h5 className="mb-0 h6">
                                                                    Cadbury 5 Star Chocolate
                                                                </h5>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </td>
                                                <td>
                                                    <span className="text-body">$32.0</span>
                                                </td>
                                                <td>1</td>
                                                <td>$32.0</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="#" className="text-inherit">
                                                        <div className="d-flex align-items-center">
                                                            <div>
                                                                <img
                                                                    src="../assets/images/products/product-img-4.jpg"
                                                                    alt=""
                                                                    className="icon-shape icon-lg"
                                                                />
                                                            </div>
                                                            <div className="ms-lg-4 mt-2 mt-lg-0">
                                                                <h5 className="mb-0 h6">Onion Flavour Potato</h5>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </td>
                                                <td>
                                                    <span className="text-body">$3.0</span>
                                                </td>
                                                <td>2</td>
                                                <td>$6.0</td>
                                            </tr>
                                            <tr>
                                                <td className="border-bottom-0 pb-0" />
                                                <td className="border-bottom-0 pb-0" />
                                                <td colSpan={1} className="fw-medium text-dark ">
                                                    {/* text */}
                                                    Sub Total :
                                                </td>
                                                <td className="fw-medium text-dark ">
                                                    {/* text */}
                                                    $80.00
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border-bottom-0 pb-0" />
                                                <td className="border-bottom-0 pb-0" />
                                                <td colSpan={1} className="fw-medium text-dark ">
                                                    {/* text */}
                                                    Shipping Cost
                                                </td>
                                                <td className="fw-medium text-dark  ">
                                                    {/* text */}
                                                    $10.00
                                                </td>
                                            </tr>
                                            <tr>
                                                <td />
                                                <td />
                                                <td colSpan={1} className="fw-semi-bold text-dark ">
                                                    {/* text */}
                                                    Grand Total
                                                </td>
                                                <td className="fw-semi-bold text-dark ">
                                                    {/* text */}
                                                    $90.00
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body p-6">
                                <div className="row">
                                    <div className="col-md-6 mb-4 mb-lg-0">
                                        <h6>Payment Info</h6>
                                        <span>Cash on Delivery</span>
                                    </div>
                                    <div className="col-md-6">
                                        <h5>Notes</h5>
                                        <textarea
                                            className="form-control mb-3"
                                            rows={3}
                                            placeholder="Write note for order"
                                            defaultValue={""}
                                        />
                                        <a href="#" className="btn btn-primary">
                                            Save Notes
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default DashboardOrderDetail;