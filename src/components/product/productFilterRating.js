import React from 'react';

const ProductFilterRating = () => {
    return (
        <>
            <div className="mb-8">
                <h5 className="mb-3">Rating</h5>
                <div>
                    {/* form check */}
                    <div className="form-check mb-2">
                        {/* input */}
                        <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="ratingFive"
                        />
                        <label className="form-check-label" htmlFor="ratingFive">
                            <i className="bi bi-star-fill text-warning" />
                            <i className="bi bi-star-fill text-warning " />
                            <i className="bi bi-star-fill text-warning " />
                            <i className="bi bi-star-fill text-warning " />
                            <i className="bi bi-star-fill text-warning " />
                        </label>
                    </div>
                    {/* form check */}
                    <div className="form-check mb-2">
                        {/* input */}
                        <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="ratingFour"
                            defaultChecked=""
                        />
                        <label className="form-check-label" htmlFor="ratingFour">
                            <i className="bi bi-star-fill text-warning" />
                            <i className="bi bi-star-fill text-warning " />
                            <i className="bi bi-star-fill text-warning " />
                            <i className="bi bi-star-fill text-warning " />
                            <i className="bi bi-star text-warning" />
                        </label>
                    </div>
                    {/* form check */}
                    <div className="form-check mb-2">
                        {/* input */}
                        <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="ratingThree"
                        />
                        <label className="form-check-label" htmlFor="ratingThree">
                            <i className="bi bi-star-fill text-warning" />
                            <i className="bi bi-star-fill text-warning " />
                            <i className="bi bi-star-fill text-warning " />
                            <i className="bi bi-star text-warning" />
                            <i className="bi bi-star text-warning" />
                        </label>
                    </div>
                    {/* form check */}
                    <div className="form-check mb-2">
                        {/* input */}
                        <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="ratingTwo"
                        />
                        <label className="form-check-label" htmlFor="ratingTwo">
                            <i className="bi bi-star-fill text-warning" />
                            <i className="bi bi-star-fill text-warning" />
                            <i className="bi bi-star text-warning" />
                            <i className="bi bi-star text-warning" />
                            <i className="bi bi-star text-warning" />
                        </label>
                    </div>
                    {/* form check */}
                    <div className="form-check mb-2">
                        {/* input */}
                        <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="ratingOne"
                        />
                        <label className="form-check-label" htmlFor="ratingOne">
                            <i className="bi bi-star-fill text-warning" />
                            <i className="bi bi-star text-warning" />
                            <i className="bi bi-star text-warning" />
                            <i className="bi bi-star text-warning" />
                            <i className="bi bi-star text-warning" />
                        </label>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ProductFilterRating;