import React from 'react';

const DashboardShop = () => {
    return (
        <>
            <div className="container">
                <div className="row mb-8">
                    <div className="col-md-12">
                        {/* pageheader */}
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <h2>Vendors</h2>
                                {/* breacrumb */}
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb mb-0">
                                        <li className="breadcrumb-item">
                                            <a href="#" className="text-inherit">
                                                Dashboard
                                            </a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Vendors
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                            <div>
                                {/* button */}
                                <a href="vendor-grid.html" className="btn btn-primary btn-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={18}
                                        height={18}
                                        fill="currentColor"
                                        className="bi bi-grid"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
                                    </svg>
                                </a>
                                <a href="vendor-list.html" className="btn btn-light  btn-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={18}
                                        height={18}
                                        fill="currentColor"
                                        className="bi bi-list-task"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"
                                        />
                                        <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
                                        <path
                                            fillRule="evenodd"
                                            d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* row */}
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 g-lg-6">
                    {/* col */}
                    <div className="col">
                        {/* card */}
                        <div className="card border-0 text-center card-lg">
                            <div className="card-body p-6">
                                <div>
                                    {/* img */}
                                    <img
                                        src="../assets/images/stores-logo/stores-logo-1.svg"
                                        alt=""
                                        className="rounded-circle icon-shape icon-xxl mb-6"
                                    />
                                    {/* content */}
                                    <h2 className="mb-2 h5">
                                        <a href="#!" className="text-inherit">
                                            E-Grocery Super Market
                                        </a>
                                    </h2>
                                    <div className="mb-2">Seller ID: #009</div>
                                    <div>heathercarpenter@dayrep.com</div>
                                </div>
                                {/* meta content */}
                                <div className="row justify-content-center mt-8">
                                    <div className="col">
                                        <div>Gross Sale</div>
                                        <h5 className="mb-0 mt-1">$200.00</h5>
                                    </div>
                                    <div className="col">
                                        <div>Earning</div>
                                        <h5 className="mb-0 mt-1">$200.00</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        {/* card */}
                        <div className="card border-0 text-center card-lg">
                            <div className="card-body p-6">
                                <div>
                                    {/* img */}
                                    <img
                                        src="../assets/images/stores-logo/stores-logo-2.svg"
                                        alt=""
                                        className="rounded-circle icon-shape icon-xxl mb-6"
                                    />
                                    {/* content */}
                                    <h2 className="mb-2 h5">
                                        <a href="#!" className="text-inherit">
                                            DealShare Mart
                                        </a>
                                    </h2>
                                    <div className="mb-2">Seller ID: #008</div>
                                    <div>werve1962@superrito.com</div>
                                </div>
                                {/* meta content */}
                                <div className="row justify-content-center mt-8">
                                    <div className="col">
                                        <div>Gross Sale</div>
                                        <h5 className="mb-0 mt-1">$350.00</h5>
                                    </div>
                                    <div className="col">
                                        <div>Earning</div>
                                        <h5 className="mb-0 mt-1">$150.00</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        {/* card */}
                        <div className="card border-0 text-center card-lg">
                            <div className="card-body p-6">
                                <div>
                                    {/* img */}
                                    <img
                                        src="../assets/images/stores-logo/stores-logo-3.svg"
                                        alt=""
                                        className="rounded-circle icon-shape icon-xxl mb-6"
                                    />
                                    {/* content */}
                                    <h2 className="mb-2 h5">
                                        <a href="#!" className="text-inherit">
                                            DMart
                                        </a>
                                    </h2>
                                    <div className="mb-2">Seller ID: #007</div>
                                    <div>trablinever@armyspy.com</div>
                                </div>
                                {/* meta content */}
                                <div className="row justify-content-center mt-8">
                                    <div className="col">
                                        <div>Gross Sale</div>
                                        <h5 className="mb-0 mt-1">$120.00</h5>
                                    </div>
                                    <div className="col">
                                        <div>Earning</div>
                                        <h5 className="mb-0 mt-1">$45.00</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        {/* card */}
                        <div className="card border-0 text-center card-lg">
                            <div className="card-body p-6">
                                <div>
                                    {/* img */}
                                    <img
                                        src="../assets/images/stores-logo/stores-logo-4.svg"
                                        alt=""
                                        className="rounded-circle icon-shape icon-xxl mb-6"
                                    />
                                    {/* content */}
                                    <h2 className="mb-2 h5">
                                        <a href="#!" className="text-inherit">
                                            Blinkit Store
                                        </a>
                                    </h2>
                                    <div className="mb-2">Seller ID: #006</div>
                                    <div>steened@rhyta.com</div>
                                </div>
                                {/* meta content */}
                                <div className="row justify-content-center mt-8">
                                    <div className="col">
                                        <div>Gross Sale</div>
                                        <h5 className="mb-0 mt-1">$1200.00</h5>
                                    </div>
                                    <div className="col">
                                        <div>Earning</div>
                                        <h5 className="mb-0 mt-1">$400.00</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        {/* card */}
                        <div className="card border-0 text-center card-lg">
                            <div className="card-body p-6">
                                <div>
                                    {/* img */}
                                    <img
                                        src="../assets/images/stores-logo/stores-logo-5.svg"
                                        alt=""
                                        className="rounded-circle icon-shape icon-xxl mb-6"
                                    />
                                    {/* content */}
                                    <h2 className="mb-2 h5">
                                        <a href="#!" className="text-inherit">
                                            StoreFront Super Market
                                        </a>
                                    </h2>
                                    <div className="mb-2">Seller ID: #005</div>
                                    <div>mansper@einrot.com</div>
                                </div>
                                {/* meta content */}
                                <div className="row justify-content-center mt-8">
                                    <div className="col">
                                        <div>Gross Sale</div>
                                        <h5 className="mb-0 mt-1">$230.00</h5>
                                    </div>
                                    <div className="col">
                                        <div>Earning</div>
                                        <h5 className="mb-0 mt-1">$50.00</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        {/* card */}
                        <div className="card border-0 text-center card-lg">
                            <div className="card-body p-6">
                                <div>
                                    {/* img */}
                                    <img
                                        src="../assets/images/stores-logo/stores-logo-6.svg"
                                        alt=""
                                        className="rounded-circle icon-shape icon-xxl mb-6"
                                    />
                                    {/* content */}
                                    <h2 className="mb-2 h5">
                                        <a href="#!" className="text-inherit">
                                            BigBasket
                                        </a>
                                    </h2>
                                    <div className="mb-2">Seller ID: #004</div>
                                    <div>lizin@armyspy.com</div>
                                </div>
                                {/* meta content */}
                                <div className="row justify-content-center mt-8">
                                    <div className="col">
                                        <div>Gross Sale</div>
                                        <h5 className="mb-0 mt-1">$560.00</h5>
                                    </div>
                                    <div className="col">
                                        <div>Earning</div>
                                        <h5 className="mb-0 mt-1">$120.00</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        {/* card */}
                        <div className="card border-0 text-center card-lg">
                            <div className="card-body p-6">
                                <div>
                                    {/* img */}
                                    <img
                                        src="../assets/images/stores-logo/stores-logo-7.svg"
                                        alt=""
                                        className="rounded-circle icon-shape icon-xxl mb-6"
                                    />
                                    {/* content */}
                                    <h2 className="mb-2 h5">
                                        <a href="#!" className="text-inherit">
                                            Swiggy Instamart
                                        </a>
                                    </h2>
                                    <div className="mb-2">Seller ID: #003</div>
                                    <div>tured@jourrapide.com</div>
                                </div>
                                {/* meta content */}
                                <div className="row justify-content-center mt-8">
                                    <div className="col">
                                        <div>Gross Sale</div>
                                        <h5 className="mb-0 mt-1">$780.00</h5>
                                    </div>
                                    <div className="col">
                                        <div>Earning</div>
                                        <h5 className="mb-0 mt-1">$360.00</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        {/* card */}
                        <div className="card border-0 text-center card-lg">
                            <div className="card-body p-6">
                                <div>
                                    {/* img */}
                                    <img
                                        src="../assets/images/stores-logo/stores-logo-8.svg"
                                        alt=""
                                        className="rounded-circle icon-shape icon-xxl mb-6"
                                    />
                                    {/* content */}
                                    <h2 className="mb-2 h5">
                                        <a href="#!" className="text-inherit">
                                            Online Grocery Mart
                                        </a>
                                    </h2>
                                    <div className="mb-2">Seller ID: #002</div>
                                    <div>liturname@einrot.com</div>
                                </div>
                                {/* meta content */}
                                <div className="row justify-content-center mt-8">
                                    <div className="col">
                                        <div>Gross Sale</div>
                                        <h5 className="mb-0 mt-1">$460.00</h5>
                                    </div>
                                    <div className="col">
                                        <div>Earning</div>
                                        <h5 className="mb-0 mt-1">$175.00</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        {/* card */}
                        <div className="card border-0 text-center card-lg">
                            <div className="card-body p-6">
                                <div>
                                    {/* img */}
                                    <img
                                        src="../assets/images/stores-logo/stores-logo-9.svg"
                                        alt=""
                                        className="rounded-circle icon-shape icon-xxl mb-6"
                                    />
                                    {/* content */}
                                    <h2 className="mb-2 h5">
                                        <a href="#!" className="text-inherit">
                                            Spencers
                                        </a>
                                    </h2>
                                    <div className="mb-2">Seller ID: #001</div>
                                    <div>fark1952@rhyta.com</div>
                                </div>
                                {/* meta content */}
                                <div className="row justify-content-center mt-8">
                                    <div className="col">
                                        <div>Gross Sale</div>
                                        <h5 className="mb-0 mt-1">$630.00</h5>
                                    </div>
                                    <div className="col">
                                        <div>Earning</div>
                                        <h5 className="mb-0 mt-1">$190.00</h5>
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

export default DashboardShop;