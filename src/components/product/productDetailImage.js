import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {fetchProductDetail} from "../../service/productDetailActions";
import axios from "axios";

const ProductDetailImage = ({product}) => {
    return (
        <>
            <div className="col-md-6">
                {/* thumbnail */}
                <div className="product" id="product">
                    <div
                       style={{backgroundImage: `url(${product.thumbnail})`}}>

                        <img style={{width:"630px"}} src={product.thumbnail} alt={product.name}/>
                    </div>
                </div>
                {/* list img */}
                <div className="product-tools">
                    <div className="thumbnails row g-3" id="productThumbnails">
                        {product.images.map((image) => (
                                <div className="col-3">
                                    <div className="thumbnails-img">
                                        {/* img */}
                                        <img
                                            src={image}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            )
                        )}

                    </div>
                </div>
            </div>

        </>
    );
};

export default ProductDetailImage;