import React from 'react';
import ProductCheckoutText from "../../components/product/productCheckoutText";
import ProductCheckoutAddress from "../../components/product/productCheckoutAddress";
import ProductCheckoutOrderDetail from "../../components/product/productCheckoutOrderDetail";

const ProductCheckout = () => {
    return (
        <main>
            <section className="mb-lg-14 mb-8 mt-8">
                <div className="container">
                    <div className="row">
                        <ProductCheckoutText></ProductCheckoutText>
                    </div>
                    <div>
                        <div className="row">
                            <ProductCheckoutAddress></ProductCheckoutAddress>
                            <ProductCheckoutOrderDetail></ProductCheckoutOrderDetail>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    );
};

export default ProductCheckout;