import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";

import RatingProgressBar from "./RatingProgressBar";
import StarRating from "./starRating";
import {useDispatch, useSelector} from "react-redux";
import {getAllProductsByCustomerBuy, getAllProductsByShop, getProduct} from "../../service/productService";
import {getCustomerByAccountLogin} from "../../service/customerService";
import {addReview, getAllReviewsByProductAndCustomer} from "../../service/reviewService";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import {addFeedback, getAllFeedbackByProductId} from "../../service/feedbackService";
import {getShopByAccountLogin} from "../../service/shopService";
import {addNotification} from "../../service/notificationService";

const ProductDetailInformation = ({product}) => {
    let account = JSON.parse(localStorage.getItem("account"));
    const dispatch = useDispatch();
    const customerLogin = useSelector(state => {
        console.log(state.customer.customerLogin)
        return state.customer.customerLogin;
    })
    const shopLogin = useSelector(state => {
        console.log(state)
        return state.shop.shopLogin;
    })
    const shopProducts = useSelector(state => {
        console.log(state)
        return state.product.shopProducts;
    })
    const allFeedbackByProduct = useSelector(state => {
        console.log(state)
        return state.feedback.allFeedbackByProduct;
    })
    const {productId} = useParams();
    const [reviews, setReviews] = useState([])
    //show ALl Reviews
    const [showAll, setShowAll] = useState(false);
    const [showThree, setShowThree] = useState(true);
    const visibleReviews = showAll ? reviews : reviews.slice(0, 3);

    const handleSeeMore = () => {
        setShowAll(true);
        setShowThree(false);
    };

    const handleSeeLess = () => {
        setShowAll(false);
        setShowThree(true);
    };
    // end
    const [start, setStart] = useState([])
    console.log(reviews)
    const productDetail = useSelector(state => {
        console.log(state)
        return state.product.product;
    })
    const productsByCustomerBuy = useSelector(state => {
        console.log(state)
        return state.product.productsByCustomerBuy;
    })
    const reviewsByProductAndCustomer = useSelector(state => {
        console.log(state)
        return state.review.reviewsByProductAndCustomer;
    })
    useEffect(() => {
        dispatch(getAllFeedbackByProductId(productDetail.id));
    },[productDetail])
    useEffect(() => {
        dispatch(getAllProductsByShop(shopLogin.id));
    },[shopLogin])
    useEffect(() => {
        if (account != null) {
            dispatch(getCustomerByAccountLogin(account.id));
            dispatch(getShopByAccountLogin(account.id));
        }
    },[])
    useEffect(() => {
        dispatch(getAllProductsByCustomerBuy(customerLogin.id));
    },[customerLogin])
    useEffect(() => {
        dispatch(getProduct(productId))
    },[])

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
    useEffect(() => {
        dispatch(getAllReviewsByProductAndCustomer([productDetail.id, customerLogin.id]));
    },[customerLogin,productDetail])
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
    //feedback

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
                                                href="#reviewShow"
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
                                                <h4 id="reviewShow">Reviews</h4>
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
                                        {visibleReviews.map((review) => (
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
                                                    {/* shop feedback content */}
                                                    {allFeedbackByProduct && allFeedbackByProduct.map(feedback => {
                                                        if (feedback.reviewMap.id == review.id) {
                                                            return (<div className="justify-content-end mt-4">
                                                                <img
                                                                    src={feedback.shop.logo}
                                                                    alt={feedback.shop.name}
                                                                    className="rounded-circle avatar-lg"
                                                                />
                                                                <div className="ms-5">
                                                                    <h6 className="mb-1">{feedback.shop.name}</h6>
                                                                    <p className="small">
                                                                        <span className="text-muted">{feedback.date}</span>
                                                                    </p>
                                                                    {/* rating */}
                                                                    {/* text*/}
                                                                    <p>
                                                                        {feedback.context}
                                                                    </p>
                                                                </div>

                                                            </div>)
                                                        }
                                                    })}

                                                    {/* shop feedback */}
                                                    <div className="d-flex justify-content-end mt-4">
                                                        <div className="mt-3 mb-3">
                                                            <textarea className="form-control" rows="5" id="feedbackContext" placeholder="Enter your feedback" style={{ height: '50px' , width: '500px'}} />
                                                            <button className="btn btn-sm btn-primary mt-2" onClick={() =>{
                                                                let checkShopProduct = false;
                                                                for (let i = 0; i < shopProducts.length; i++) {
                                                                    if (shopProducts[i].id == productDetail.id) {
                                                                        checkShopProduct = true;
                                                                        break;
                                                                    }
                                                                }
                                                                if (checkShopProduct) {
                                                                    let context = document.getElementById("feedbackContext").value;
                                                                    let shop = {...shopLogin};
                                                                    let reviewMap = {...review};
                                                                    let feedback = {context: context, shop: shop, reviewMap: reviewMap};
                                                                    const fetchData = async () => {
                                                                        await dispatch(addFeedback(feedback));
                                                                        await dispatch(getAllFeedbackByProductId(productDetail.id));
                                                                        document.getElementById('feedbackContext').value = '';
                                                                    }
                                                                    fetchData()
                                                                } else {
                                                                    Swal.fire('This product does not belong to the shop !')
                                                                }


                                                            }}>Send</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        ))}

                                        <div>
                                            {!showAll && (
                                            <button className="btn btn-outline-gray-400 text-muted" onClick={handleSeeMore}>
                                                See more
                                            </button>
                                            )}
                                            {showAll && !showThree && (
                                                <button className="btn btn-outline-gray-400 text-muted" onClick={handleSeeLess}>
                                                    Hide less
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        {/* rating */}
                                        <h3 className="mb-5">Create Review</h3>
                                        <div className="border-bottom py-4 mb-4">
                                            <h4 className="mb-3">Overall rating</h4>
                                            <style
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        "\n  #full-stars-example {\n  .rating-group {\n    display: inline-flex;\n  }\n  .rating__icon {\n    pointer-events: none;\n  }\n  .rating__input {\n    position: absolute !important;\n    left: -9999px !important;\n  }\n  .rating__label {\n    cursor: pointer;\n    padding: 0 0.1em;\n    font-size: 2rem;\n  }\n  .rating__icon--star {\n    color: orange;\n  }\n  .rating__icon--none {\n    color: #eee;\n  }\n  .rating__input--none:checked + .rating__label .rating__icon--none {\n    color: red;\n  }\n  .rating__input:checked ~ .rating__label .rating__icon--star {\n    color: #ddd;\n  }\n  .rating-group:hover .rating__label .rating__icon--star {\n    color: orange;\n  }\n  .rating__input:hover ~ .rating__label .rating__icon--star {\n    color: #ddd;\n  }\n  .rating-group:hover\n    .rating__input--none:not(:hover)\n    + .rating__label\n    .rating__icon--none {\n    color: #eee;\n  }\n  .rating__input--none:hover + .rating__label .rating__icon--none {\n    color: red;\n  }\n}\n\n  "
                                                }}
                                            />

                                            <div id="full-stars-example">
                                                <div className="rating-group">
                                                    <input
                                                        className="rating__input rating__input--none"
                                                        name="rating"
                                                        id="rating-none"
                                                        defaultValue={0}
                                                        type="radio"
                                                        checked
                                                    />
                                                    <label
                                                        aria-label="No rating"
                                                        className="rating__label"
                                                        htmlFor="rating-none"
                                                    >
                                                        <i className="feather feather-chevrons-left" />
                                                    </label>
                                                    <label aria-label="1 star" className="rating__label" htmlFor="rating-1">
                                                        <i className="rating__icon rating__icon--star fa fa-star" />
                                                    </label>
                                                    <input
                                                        className="rating__input"
                                                        name="rating"
                                                        id="rating-1"
                                                        defaultValue={1}
                                                        type="radio"
                                                    />
                                                    <label aria-label="2 stars" className="rating__label" htmlFor="rating-2">
                                                        <i className="rating__icon rating__icon--star fa fa-star" />
                                                    </label>
                                                    <input
                                                        className="rating__input"
                                                        name="rating"
                                                        id="rating-2"
                                                        defaultValue={2}
                                                        type="radio"
                                                    />
                                                    <label aria-label="3 stars" className="rating__label" htmlFor="rating-3">
                                                        <i className="rating__icon rating__icon--star fa fa-star" />
                                                    </label>
                                                    <input
                                                        className="rating__input"
                                                        name="rating"
                                                        id="rating-3"
                                                        defaultValue={3}
                                                        type="radio"
                                                    />
                                                    <label aria-label="4 stars" className="rating__label" htmlFor="rating-4">
                                                        <i className="rating__icon rating__icon--star fa fa-star" />
                                                    </label>
                                                    <input
                                                        className="rating__input"
                                                        name="rating"
                                                        id="rating-4"
                                                        defaultValue={4}
                                                        type="radio"
                                                    />
                                                    <label aria-label="5 stars" className="rating__label" htmlFor="rating-5">
                                                        <i className="rating__icon rating__icon--star fa fa-star" />
                                                    </label>
                                                    <input
                                                        className="rating__input"
                                                        name="rating"
                                                        id="rating-5"
                                                        defaultValue={5}
                                                        type="radio"
                                                    />
                                                </div>
                                            </div>

                                        </div>
                                        {/* form control */}
                                        <div className="border-bottom py-4 mb-4">
                                            <h5>Add a headline</h5>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="headline"
                                                placeholder="What’s most important to know"
                                            />
                                        </div>
                                        <div className=" py-4 mb-4">
                                            {/* heading */}
                                            <h5>Add a written review</h5>
                                            <textarea
                                                className="form-control"
                                                rows={3}
                                                id="context"
                                                placeholder="What did you like or dislike? What did you use this product for?"
                                                defaultValue={""}
                                            />
                                        </div>
                                        {/* button */}
                                        <div className="d-flex justify-content-end">
                                            <button className="btn btn-primary" onClick={() => {
                                                let checkProductBuy = false;
                                                for (let i = 0; i < productsByCustomerBuy.length; i++) {
                                                    if (productsByCustomerBuy[i].id == productDetail.id) {
                                                        checkProductBuy = true;
                                                        break;
                                                    }
                                                }
                                                if (checkProductBuy) {
                                                    if (reviewsByProductAndCustomer.length) {
                                                        Swal.fire('You have already reviewed this product !')
                                                        document.getElementById('headline').value = '';
                                                        document.getElementById('context').value = '';
                                                    } else {
                                                        let headline = document.getElementById("headline").value;
                                                        let context = document.getElementById("context").value;
                                                        const radioButtons = document.getElementsByName('rating');
                                                        let rating = 0;
                                                        for (let i = 0; i < radioButtons.length; i++) {
                                                            if (radioButtons[i].checked) {
                                                                rating = radioButtons[i].value;
                                                                break;
                                                            }
                                                        }
                                                        let user = {...customerLogin};
                                                        let product = {...productDetail};
                                                        let date = "";
                                                        let review = {headline: headline, context: context,
                                                            user: user, product: product, date: date, rating: rating}
                                                        //notification
                                                        let name = "Review";
                                                        let content = "" + customerLogin.account.name + " have reviewed  your product with name: " + '"' + productDetail.name + '"';
                                                        let sender = customerLogin.account;
                                                        let receiver = productDetail.shop.account;
                                                        let notification = {name: name, context: content,
                                                            sender: sender, receiver: receiver};
                                                        const fetchData = async () => {
                                                            await dispatch(addNotification(notification));
                                                            await dispatch(addReview(review));;
                                                            await axios.get('http://localhost:8080/products/review/' + productId,
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
                                                                });
                                                            document.getElementById('headline').value = '';
                                                            document.getElementById('context').value = '';
                                                        }
                                                        fetchData()
                                                    }
                                                } else {
                                                    Swal.fire('You have not purchased this product yet !')
                                                    document.getElementById('headline').value = '';
                                                    document.getElementById('context').value = '';
                                                }
                                            }}>
                                                Submit Review
                                            </button>
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