import React from 'react';

const ProductFilterFreshImage = () => {
    return (
        <>
            <div className="mb-8 position-relative">
                {/* Banner Design */}
                {/* Banner Content */}
                <div className="position-absolute p-5 py-8">
                    <h3 className="mb-0">Fresh Fruits </h3>
                    <p>Get Upto 25% Off</p>
                    <a href="#" className="btn btn-dark">
                        Shop Now
                        <i className="feather-icon icon-arrow-right ms-1" />
                    </a>
                </div>
                {/* Banner Content */}
                {/* Banner Image */}
                {/* img */}
                <img
                    src="../assets/images/banner/assortment-citrus-fruits.png"
                    alt=""
                    className="img-fluid rounded "
                />
                {/* Banner Image */}
            </div>

        </>
    );
};

export default ProductFilterFreshImage;