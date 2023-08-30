import React from 'react';

const ProductDetailImage = () => {
    return (
        <>
            <div className="col-md-6">
                {/* img slide */}
                <div className="product" id="product">
                    <div
                        className="zoom"
                        // onMouseMove="zoom(event)"
                        style={{
                            backgroundImage:
                                "url(../assets/images/products/product-single-img-1.jpg)"
                        }}
                    >
                        <img src="../assets/images/products/product-single-img-1.jpg" alt=""/>
                    </div>
                    <div>
                        <div
                            className="zoom"
                            // onMouseMove="zoom(event)"
                            style={{
                                backgroundImage:
                                    "url(../assets/images/products/product-single-img-2.jpg)"
                            }}
                        >
                            {/* img */}
                            <img src="../assets/images/products/product-single-img-2.jpg" alt=""/>
                        </div>
                    </div>
                    <div>
                        <div
                            className="zoom"
                            // onMouseMove="zoom(event)"
                            style={{
                                backgroundImage:
                                    "url(../assets/images/products/product-single-img-3.jpg)"
                            }}
                        >
                            {/* img */}
                            <img src="../assets/images/products/product-single-img-3.jpg" alt=""/>
                        </div>
                    </div>
                    <div>
                        <div
                            className="zoom"
                            // onMouseMove="zoom(event)"
                            style={{
                                backgroundImage:
                                    "url(../assets/images/products/product-single-img-4.jpg)"
                            }}
                        >
                            {/* img */}
                            <img src="../assets/images/products/product-single-img-4.jpg" alt=""/>
                        </div>
                    </div>
                </div>
                {/* product tools */}
                <div className="product-tools">
                    <div className="thumbnails row g-3" id="productThumbnails">
                        <div className="col-3">
                            <div className="thumbnails-img">
                                {/* img */}
                                <img
                                    src="../assets/images/products/product-single-img-1.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="thumbnails-img">
                                {/* img */}
                                <img
                                    src="../assets/images/products/product-single-img-2.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="thumbnails-img">
                                {/* img */}
                                <img
                                    src="../assets/images/products/product-single-img-3.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="thumbnails-img">
                                {/* img */}
                                <img
                                    src="../assets/images/products/product-single-img-4.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ProductDetailImage;