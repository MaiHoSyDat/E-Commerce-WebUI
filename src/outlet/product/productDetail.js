import React, {useEffect} from 'react';
import ProductDetailImage from "../../components/product/productDetailImage";
import ProductDetailParameter from "../../components/product/productDetailParameter";
import ProductDetailInformation from "../../components/product/productDetailInformation";
import ProductDetailRelatedItems from "../../components/product/productDetailRelatedItems";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchProductDetail} from "../../service/productDetailActions";

const ProductDetail = () => {

    const {productId} = useParams();

    const dispatch = useDispatch();

    const product = useSelector(state => state.productDetail.product);


    useEffect(() => {
        dispatch(fetchProductDetail(productId));
    }, [dispatch, productId]);

    if (!product) {
        return <p>Product not found.</p>;
    }

    return (
        <main>
            <section className="mt-8">
                <div className="container">
                    <div className="row">
                        <ProductDetailImage product={product}></ProductDetailImage>
                        <ProductDetailParameter></ProductDetailParameter>
                    </div>
                </div>
            </section>
            <section className="mt-lg-14 mt-8 ">
                <div className="container">
                    <div className="row">
                        <ProductDetailInformation product={product}></ProductDetailInformation>
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