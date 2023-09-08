import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    setFilterCheckedRating,
    setFilterUnCheckedRating,
} from "../../service/inputService";

const ProductFilterRating = () => {
    const dispatch = useDispatch();
    const handleInputChangeRating = (event) => {
        const value = event.target.value;
        const checked = event.target.checked;
        if (checked) dispatch(setFilterCheckedRating(value))
        else dispatch((setFilterUnCheckedRating(value)))
    }
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
                            value="5"
                            id="ratingFive"
                            onChange={handleInputChangeRating}
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
                            value="4"
                            id="ratingFour"
                            defaultChecked=""
                            onChange={handleInputChangeRating}
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
                            value="3"
                            id="ratingThree"
                            onChange={handleInputChangeRating}
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
                            value="2"
                            id="ratingTwo"
                            onChange={handleInputChangeRating}
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
                            value="1"
                            id="ratingOne"
                            onChange={handleInputChangeRating}
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