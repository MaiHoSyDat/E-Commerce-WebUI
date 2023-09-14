import React from 'react';

const ShopSetting = () => {
    return (
        <main>
            {/* section */}
            <section className="my-lg-14 my-8">
                {/* container */}
                <div className="container">
                    <div className="row">
                        {/* col */}
                        <div className="offset-lg-2 col-lg-8 col-12">
                            <div className="mb-8">
                                {/* heading */}
                                <h1 className="h3">Retailer Inquiries</h1>
                                <p className="lead mb-0">
                                    This form is for retailer inquiries only. For all other customer
                                    or shopper support requests, please visit the links below this
                                    form.
                                </p>
                            </div>
                            {/* form */}
                            <form className="row">
                                {/* input */}
                                <div className="col-md-6 mb-3">
                                    <label className="form-label" htmlFor="fname">
                                        {" "}
                                        First Name<span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="fname"
                                        className="form-control"
                                        name="fname"
                                        placeholder="Enter Your First Name"
                                        required=""
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    {/* input */}
                                    <label className="form-label" htmlFor="lname">
                                        {" "}
                                        Last Name<span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="lname"
                                        className="form-control"
                                        name="lname"
                                        placeholder="Enter Your Last name"
                                        required=""
                                    />
                                </div>
                                <div className="col-md-12 mb-3">
                                    {/* input */}
                                    <label className="form-label" htmlFor="company">
                                        {" "}
                                        Company<span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        className="form-control"
                                        placeholder="Your Company"
                                        required=""
                                    />
                                </div>
                                <div className="col-md-12 mb-3">
                                    {/* input */}
                                    <label className="form-label" htmlFor="title">
                                        {" "}
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        className="form-control"
                                        placeholder="Your Title"
                                        required=""
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label" htmlFor="emailContact">
                                        Email<span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="emailContact"
                                        name="emailContact"
                                        className="form-control"
                                        placeholder="Enter Your First Name"
                                        required=""
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    {/* input */}
                                    <label className="form-label" htmlFor="phone">
                                        {" "}
                                        Phone
                                    </label>
                                    <input
                                        type="text"
                                        id="phone"
                                        name="phone"
                                        className="form-control"
                                        placeholder="Your Phone Number"
                                        required=""
                                    />
                                </div>
                                <div className="col-md-12 mb-3">
                                    {/* input */}
                                    <label className="form-label" htmlFor="comments">
                                        {" "}
                                        Comments
                                    </label>
                                    <textarea
                                        rows={3}
                                        id="comments"
                                        className="form-control"
                                        placeholder="Additional Comments"
                                        defaultValue={""}
                                    />
                                </div>
                                <div className="col-md-12">
                                    {/* btn */}
                                    <button type="submit" className="btn btn-primary">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ShopSetting;