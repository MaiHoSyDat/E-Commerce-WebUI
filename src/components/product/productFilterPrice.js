import React from 'react';

const ProductFilterPrice = () => {
    return (
        <>
            <div className="mb-8">
                {/* price */}
                <h5 className="mb-3">Price</h5>
                <div>
                    {/* range */}
                    <div id="priceRange" className="mb-3" />
                    <small className="text-muted">Price:</small>{" "}
                    <span id="priceRange-value" className="small" />
                </div>
            </div>

        </>
    );
};

export default ProductFilterPrice;