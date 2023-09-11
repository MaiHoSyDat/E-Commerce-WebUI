import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";

import RatingProgressBar from "./RatingProgressBar";
import StarRating from "./starRating";

const ProductDetailInformation = ({product}) => {
    const {productId} = useParams();
    const [reviews, setReviews] = useState([])
    const [start, setStart] = useState([])
    console.log(reviews)

    useEffect(() => {
        axios.get('http://localhost:8080/products/review/' + productId,
            {
                headers: {
                    'Authorization': localStorage.getItem('token'),
                },
            })
            .then((resp) => {
                setReviews(resp.data)
                totalStart(resp.data)

            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    const totalStart = (data) => {
        console.log(data[1].rating)
        let arr = []
        for (let i = 0; i < data.length; i++) {
            arr.push(data[i].rating)
        }
        setStart(arr)
    }
    const calculatePercentage = () => {
        const countMap = start.reduce((map, rating) => {
            map[rating] = (map[rating] || 0) + 1;
            return map;
        }, {});

        const totalReviews = start.length;

        const percentages = Object.entries(countMap).map(([rating, count]) => {
            const percentage = (count / totalReviews) * 100;
            return {rating, percentage};
        });
        return percentages;
    };
    const percentages = calculatePercentage();
    const calculateAverageRating = () => {
        const totalStars = start.reduce((sum, rating) => sum + rating, 0);
        const averageRating = totalStars / start.length;
        return averageRating;
    };
    const averageRating = calculateAverageRating();



    return (
        <>
            <div className="col-md-12">
                <ul className="nav nav-pills nav-lb-tab" id="myTab" role="tablist">
                    {/* nav item */}
                    <li className="nav-item" role="presentation">
                        {/* btn */}

                    </li>
                    {/* nav item */}
                    <li className="nav-item" role="presentation">
                        {/* btn */}
                        <button
                            className="nav-link"
                            id="details-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#details-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="details-tab-pane"
                            aria-selected="false"
                        >
                            Information
                        </button>
                    </li>
                    {/* nav item */}
                    <li className="nav-item" role="presentation">
                        {/* btn */}
                        <button
                            className="nav-link"
                            id="reviews-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#reviews-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="reviews-tab-pane"
                            aria-selected="false"
                        >
                            Reviews
                        </button>
                    </li>
                    {/* nav item */}
                    <li className="nav-item" role="presentation">
                        {/* btn */}
                        <button
                            className="nav-link"
                            id="sellerInfo-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#sellerInfo-tab-pane"
                            type="button"
                            role="tab"
                            aria-controls="sellerInfo-tab-pane"
                            aria-selected="false"
                            disabled=""
                        >
                            Seller Info
                        </button>
                    </li>
                </ul>
                {/* tab content */}
                <div className="tab-content" id="myTabContent">
                    {/* tab pane */}
                    <div
                        className="tab-pane fade show active"
                        id="product-tab-pane"
                        role="tabpanel"
                        aria-labelledby="product-tab"
                        tabIndex={0}
                    >
                    </div>
                    {/* tab pane */}
                    <div
                        className="tab-pane fade"
                        id="details-tab-pane"
                        role="tabpanel"
                        aria-labelledby="details-tab"
                        tabIndex={0}
                    >
                        <div className="my-8">
                            <div className="row">
                                <div className="col-12">
                                    <h4 className="mb-4">Details</h4>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <table className="table table-striped">
                                        {/* table */}
                                        <tbody>

                                        <tr>
                                            <th>Category</th>
                                            <td>{product.category.name}</td>
                                        </tr>
                                        <tr>
                                            <th>Shop</th>
                                            <td>{product.shop.name}</td>
                                        </tr>
                                        <tr>
                                            <th>Sale date</th>
                                            <td>{product.create_at}</td>
                                        </tr>
                                        <tr>
                                            <th>Warehouse exists</th>
                                            <td>{product.quantity}</td>
                                        </tr>
                                        <tr>
                                            <th>Unit</th>
                                            <td>{product.unit}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-12 col-lg-6">
                                    {/*<table className="table table-striped">*/}
                                    {/*    /!* table *!/*/}
                                    {/*    <tbody>*/}
                                    {/*    <tr>*/}
                                    {/*        <th>ASIN</th>*/}
                                    {/*        <td>SB0025UJ75W</td>*/}
                                    {/*    </tr>*/}
                                    {/*    <tr>*/}
                                    {/*        <th>Best Sellers Rank</th>*/}
                                    {/*        <td>#2 in Fruits</td>*/}
                                    {/*    </tr>*/}
                                    {/*    <tr>*/}
                                    {/*        <th>Date First Available</th>*/}
                                    {/*        <td>30 April 2022</td>*/}
                                    {/*    </tr>*/}
                                    {/*    <tr>*/}
                                    {/*        <th>Item Weight</th>*/}
                                    {/*        <td>500g</td>*/}
                                    {/*    </tr>*/}
                                    {/*    <tr>*/}
                                    {/*        <th>Generic Name</th>*/}
                                    {/*        <td>Banana Robusta</td>*/}
                                    {/*    </tr>*/}
                                    {/*    </tbody>*/}
                                    {/*</table>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* tab pane */}
                    <div
                        className="tab-pane fade"
                        id="reviews-tab-pane"
                        role="tabpanel"
                        aria-labelledby="reviews-tab"
                        tabIndex={0}
                    >
                        <div className="my-8">
                            {/* row */}
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="me-lg-12 mb-6 mb-md-0">
                                        <div className="mb-5">
                                            {/* title */}
                                            <h4 className="mb-3">Customer reviews</h4>
                                            <span>

                                                <small className="text-warning">
                                                    <StarRating rating={averageRating}></StarRating>
                                                  </small>
                                                  <span className="ms-3">{averageRating} out of 5</span>
                                                  <small className="ms-3">{start.length} global ratings</small>
                                                </span>
                                        </div>
                                        <div className="mb-8">
                                            {/* progress */}
                                            {percentages.map((rating, index) => (
                                                <RatingProgressBar key={index} rating={rating.rating} percentage={rating.percentage} />
                                            ))}

                                        </div>
                                        <div className="d-grid">
                                            <h4>Review this product</h4>
                                            <p className="mb-0">
                                                Share your thoughts with other customers.
                                            </p>
                                            <a
                                                href="#"
                                                className="btn btn-outline-gray-400 mt-4 text-muted"
                                            >
                                                Write the Review
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* col */}
                                <div className="col-md-8">
                                    <div className="mb-10">
                                        <div className="d-flex justify-content-between align-items-center mb-8">
                                            <div>
                                                {/* heading */}
                                                <h4>Reviews</h4>
                                            </div>
                                            <div>
                                                <select className="form-select">
                                                    <option selected="">Top Review</option>
                                                    <option value={1}>One</option>
                                                    <option value={2}>Two</option>
                                                    <option value={3}>Three</option>
                                                </select>
                                            </div>
                                        </div>
                                        {reviews.map((review) => (
                                            <div className="d-flex border-bottom pb-6 mb-6">
                                                {/* img */}
                                                {/* img */}
                                                <img
                                                    src={review.customer.avatar}
                                                    alt={review.accountName}
                                                    className="rounded-circle avatar-lg"
                                                />
                                                <div className="ms-5">
                                                    <h6 className="mb-1">{review.accountName}</h6>
                                                    {/* select option */}
                                                    {/* content */}
                                                    <p className="small">
                                                        <span className="text-muted">{review.date}</span>
                                                        <span className="text-primary ms-3 fw-bold">
                      Verified Purchase
                    </span>
                                                    </p>
                                                    {/* rating */}
                                                    <div className=" mb-2">
                                                        <StarRating rating={review.rating}></StarRating>
                                                        <span className="ms-3 text-dark fw-bold">
                                                            {review.headline}
                                                        </span>
                                                    </div>
                                                    {/* text*/}
                                                    <p>
                                                        {review.context}
                                                    </p>
                                                    {/* icon */}
                                                    <div className="d-flex justify-content-end mt-4">
                                                        <a href="#" className="text-muted">
                                                            <i className="feather-icon icon-thumbs-up me-1"/>
                                                            Helpful
                                                        </a>
                                                        <a href="#" className="text-muted ms-4">
                                                            <i className="feather-icon icon-flag me-2"/>
                                                            Report abuse
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                        ))}

                                        <div>
                                            <a href="#" className="btn btn-outline-gray-400 text-muted">
                                                Read More Reviews
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        {/* rating */}
                                        <h3 className="mb-5">Create Review</h3>
                                        <div className="border-bottom py-4 mb-4">
                                            <h4 className="mb-3">Overall rating</h4>
                                            <div id="rater"/>
                                        </div>
                                        <div className="border-bottom py-4 mb-4">
                                            <h4 className="mb-0">Rate Features</h4>
                                            <div className="my-5">
                                                <h5>Flavor</h5>
                                                <div id="rate-2"/>
                                            </div>
                                            <div className="my-5">
                                                <h5>Value for money</h5>
                                                <div id="rate-3"/>
                                            </div>
                                            <div className="my-5">
                                                <h5>Scent</h5>
                                                <div id="rate-4"/>
                                            </div>
                                        </div>
                                        {/* form control */}
                                        <div className="border-bottom py-4 mb-4">
                                            <h5>Add a headline</h5>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="What’s most important to know"
                                            />
                                        </div>
                                        <div className=" py-4 mb-4">
                                            {/* heading */}
                                            <h5>Add a written review</h5>
                                            <textarea
                                                className="form-control"
                                                rows={3}
                                                placeholder="What did you like or dislike? What did you use this product for?"
                                                defaultValue={""}
                                            />
                                        </div>
                                        {/* button */}
                                        <div className="d-flex justify-content-end">
                                            <a href="#" className="btn btn-primary">
                                                Submit Review
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* tab pane */}
                    <div
                        className="tab-pane fade"
                        id="sellerInfo-tab-pane"
                        role="tabpanel"
                        aria-labelledby="sellerInfo-tab"
                        tabIndex={0}
                    >
                        ...
                    </div>
                </div>
            </div>

        </>
    );
};

export default ProductDetailInformation;