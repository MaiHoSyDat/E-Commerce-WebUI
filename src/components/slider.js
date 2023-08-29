const Slider = () => {
    return (
        <>
            <section className="mt-8">
                <div className="container">
                    <div className="hero-slider slick-initialized slick-slider slick-dotted">
                        <div className="slick-list draggable">
                            <div
                                className="slick-track"
                                style={{
                                    opacity: 1,
                                    width: 4720,
                                    transform: "translate3d(-944px, 0px, 0px)"
                                }}
                            >
                                <div
                                    className="slick-slide slick-cloned"
                                    style={{
                                        background:
                                            'url("../assets/images/slider/slider-2.jpg") center center / cover no-repeat',
                                        borderRadius: "0.5rem",
                                        width: 936
                                    }}
                                    data-slick-index={-1}
                                    id=""
                                    aria-hidden="true"
                                    tabIndex={-1}
                                >
                                    <div className="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center">
              <span className="badge text-bg-warning">
                Free Shipping - orders over $100
              </span>
                                        <h2 className="text-dark display-5 fw-bold mt-4">
                                            Free Shipping on <br /> orders over{" "}
                                            <span className="text-primary">$100</span>
                                        </h2>
                                        <p className="lead">
                                            Free Shipping to First-Time Customers Only, After promotions and
                                            discounts are applied.
                                        </p>
                                        <a href="#!" className="btn btn-dark mt-3" tabIndex={-1}>
                                            Shop Now <i className="feather-icon icon-arrow-right ms-1" />
                                        </a>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        background:
                                            'url("../assets/images/slider/slide-1.jpg") center center / cover no-repeat',
                                        borderRadius: "0.5rem",
                                        width: 936
                                    }}
                                    className="slick-slide slick-current slick-active"
                                    data-slick-index={0}
                                    aria-hidden="false"
                                    tabIndex={0}
                                    role="tabpanel"
                                    id="slick-slide10"
                                    aria-describedby="slick-slide-control10"
                                >
                                    <div className="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center">
              <span className="badge text-bg-warning">
                Opening Sale Discount 50%
              </span>
                                        <h2 className="text-dark display-5 fw-bold mt-4">
                                            SuperMarket For Fresh Grocery{" "}
                                        </h2>
                                        <p className="lead">
                                            Introduced a new model for online grocery shopping and
                                            convenient home delivery.
                                        </p>
                                        <a href="#!" className="btn btn-dark mt-3" tabIndex={0}>
                                            Shop Now <i className="feather-icon icon-arrow-right ms-1" />
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className="slick-slide"
                                    style={{
                                        background:
                                            'url("../assets/images/slider/slider-2.jpg") center center / cover no-repeat',
                                        borderRadius: "0.5rem",
                                        width: 936
                                    }}
                                    data-slick-index={1}
                                    aria-hidden="true"
                                    tabIndex={-1}
                                    role="tabpanel"
                                    id="slick-slide11"
                                    aria-describedby="slick-slide-control11"
                                >
                                    <div className="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center">
              <span className="badge text-bg-warning">
                Free Shipping - orders over $100
              </span>
                                        <h2 className="text-dark display-5 fw-bold mt-4">
                                            Free Shipping on <br /> orders over{" "}
                                            <span className="text-primary">$100</span>
                                        </h2>
                                        <p className="lead">
                                            Free Shipping to First-Time Customers Only, After promotions and
                                            discounts are applied.
                                        </p>
                                        <a href="#!" className="btn btn-dark mt-3" tabIndex={-1}>
                                            Shop Now <i className="feather-icon icon-arrow-right ms-1" />
                                        </a>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        background:
                                            'url("../assets/images/slider/slide-1.jpg") center center / cover no-repeat',
                                        borderRadius: "0.5rem",
                                        width: 936
                                    }}
                                    className="slick-slide slick-cloned"
                                    data-slick-index={2}
                                    id=""
                                    aria-hidden="true"
                                    tabIndex={-1}
                                >
                                    <div className="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center">
              <span className="badge text-bg-warning">
                Opening Sale Discount 50%
              </span>
                                        <h2 className="text-dark display-5 fw-bold mt-4">
                                            SuperMarket For Fresh Grocery{" "}
                                        </h2>
                                        <p className="lead">
                                            Introduced a new model for online grocery shopping and
                                            convenient home delivery.
                                        </p>
                                        <a href="#!" className="btn btn-dark mt-3" tabIndex={-1}>
                                            Shop Now <i className="feather-icon icon-arrow-right ms-1" />
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className="slick-slide slick-cloned"
                                    style={{
                                        background:
                                            'url("../assets/images/slider/slider-2.jpg") center center / cover no-repeat',
                                        borderRadius: "0.5rem",
                                        width: 936
                                    }}
                                    data-slick-index={3}
                                    id=""
                                    aria-hidden="true"
                                    tabIndex={-1}
                                >
                                    <div className="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center">
              <span className="badge text-bg-warning">
                Free Shipping - orders over $100
              </span>
                                        <h2 className="text-dark display-5 fw-bold mt-4">
                                            Free Shipping on <br /> orders over{" "}
                                            <span className="text-primary">$100</span>
                                        </h2>
                                        <p className="lead">
                                            Free Shipping to First-Time Customers Only, After promotions and
                                            discounts are applied.
                                        </p>
                                        <a href="#!" className="btn btn-dark mt-3" tabIndex={-1}>
                                            Shop Now <i className="feather-icon icon-arrow-right ms-1" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul className="slick-dots" style={{}} role="tablist">
                            <li className="slick-active" role="presentation">
                                <button
                                    type="button"
                                    role="tab"
                                    id="slick-slide-control10"
                                    aria-controls="slick-slide10"
                                    aria-label="1 of 2"
                                    tabIndex={0}
                                    aria-selected="true"
                                >
                                    1
                                </button>
                            </li>
                            <li role="presentation" className="">
                                <button
                                    type="button"
                                    role="tab"
                                    id="slick-slide-control11"
                                    aria-controls="slick-slide11"
                                    aria-label="2 of 2"
                                    tabIndex={-1}
                                >
                                    2
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>


        </>

    )

}
export default Slider;