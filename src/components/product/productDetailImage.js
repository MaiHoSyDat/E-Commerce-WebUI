import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {fetchProductDetail} from "../../action/productDetailActions";

const ProductDetailImage = () => {

    const { productId } = useParams();

    const dispatch = useDispatch();

    const product = useSelector(state => state.productDetail.product);

    useEffect(() => {
        dispatch(fetchProductDetail(productId));
    }, [dispatch, productId]);

    if (!product) {
        return <p>Product not found.</p>;
    }

    return (
        <>
            <div className="col-md-6">
                {/* thumbnail */}
                <div className="product" id="product">
                    <div
                        className="zoom" style={{backgroundImage: `url(${product.thumbnail})` }}>

                        <img src={product.thumbnail} alt={product.name}/>
                    </div>
                </div>
                {/* list img */}
                <div className="product-tools">
                    <div className="thumbnails row g-3" id="productThumbnails">
                        <div className="col-3">
                            <div className="thumbnails-img">
                                {/* img */}
                                <img
                                    src={product.thumbnail}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="thumbnails-img">
                                {/* img */}
                                <img
                                    src={product.thumbnail}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="thumbnails-img">
                                {/* img */}
                                <img
                                    src={product.thumbnail}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="thumbnails-img">
                                {/* img */}
                                <img
                                    src={product.thumbnail}
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