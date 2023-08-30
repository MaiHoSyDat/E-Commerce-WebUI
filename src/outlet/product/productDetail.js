import React from 'react';
import ProductDetailImage from "../../components/product/productDetailImage";
import ProductDetailParameter from "../../components/product/productDetailParameter";
import ProductDetailInformation from "../../components/product/productDetailInformation";
import ProductDetailRelatedItems from "../../components/product/productDetailRelatedItems";

const ProductDetail = () => {
    return (
        <main>
            <section className="mt-8">
                <div className="container">
                    <div className="row">
                        <ProductDetailImage></ProductDetailImage>
                        <ProductDetailParameter></ProductDetailParameter>
                    </div>
                </div>
            </section>
            <section className="mt-lg-14 mt-8 ">
                <div className="container">
                    <div className="row">
                        <ProductDetailInformation></ProductDetailInformation>
                    </div>
                </div>
            </section>
            {/* section */}
            <section className="my-lg-14 my-14">
                <ProductDetailRelatedItems></ProductDetailRelatedItems>
            </section>
        </main>

    );
};

export default ProductDetail;