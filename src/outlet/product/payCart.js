import React, {useEffect, useState} from 'react';

import 'sweetalert2/dist/sweetalert2.css';
import axios from "axios";

const PayCart = () => {
    const [list, setList] = useState([]);
    const [reducedAmount, setReducedAmount] = useState({});
    const [payAmount, setPayAmount] = useState({});
    const [totalAmount, setTotalAmount] = useState(0);
    const [totalAmountReduced, setTotalAmountReduced] = useState(0);

    useEffect(() => {
        // Lấy ra tất cả hóa đơn:
        axios.get("http://localhost:8080/customer/unpaidOrders", {
            headers: {
                'Authorization': localStorage.getItem('token'),
            }
        }).then((res) => {
            setList(res.data);
        })
    }, [])
    useEffect(() => {
        // Tính tổng tiền của tất cả hóa đơn:
        const calculateTotalAmount = () => {
            let total = 0;
            list.forEach((order) => {
                total += order.total_amount;
            });
            setTotalAmount(total);
        };
        calculateTotalAmount();
    }, [list]);
    const handleAmountIsReduced = (value, id, totalAmount) => {
        const reducedAmountValue = value * totalAmount;
        const payAmountValue = totalAmount - reducedAmountValue;

        setReducedAmount((prevState) => ({
            ...prevState,
            [id]: reducedAmountValue,
        }));
        setPayAmount((prevState) => ({
            ...prevState,
            [id]: payAmountValue,
        }));

        // Tính tổng số tiền đã giảm
        let totalReduced = 0;
        Object.values(reducedAmount).forEach((amount) => {
            totalReduced += amount;
        });
        setTotalAmountReduced(totalReduced);
    };
    return (
        <main>
            {/* section */}
            <section className="mb-lg-14 mb-8 mt-8">
                <div className="container">
                    {/* row */}
                    <div className="row">
                        <div className="col-12">
                            {/* card */}
                            <div className="card py-1 border-0 mb-8">
                                <div>
                                    <h1 className="fw-bold">Payment</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* row */}
                    <div className="row">
                        <div className="col-lg-8 col-md-7">
                            <div className="py-3">
                                {/* alert */}
                                {list.length > 0 && list.map((order) => (
                                    <div className="alert alert-danger p-2" role="alert" key={order.id}>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item py-3 py-lg-0 px-0">
                                                {order.orderDetails.map((od) => (
                                                    <div className="row align-items-center"
                                                         style={{marginBottom: "5px"}}>
                                                        <div className="col-3 col-md-2">
                                                            <img
                                                                src={od.thumbnail}
                                                                alt="Ecommerce"
                                                                style={{maxWidth: "80%"}}
                                                            />
                                                        </div>
                                                        <div className="col-4 col-md-3">
                                                            <a href="shop-single.html" className="text-inherit">
                                                                <h6 className="mb-0">{od.productName}</h6>
                                                            </a>
                                                        </div>

                                                        <div className="col-3 col-md-3 col-lg-3">
                                                                    <span
                                                                        className="fw-bold">${od.productPrice}</span> X <span> {od.quantity}</span>
                                                        </div>
                                                        <div
                                                            className="col-2 text-lg-end text-start text-md-end col-md-2">
                                                                    <span
                                                                        className="fw-bold">${od.productPrice * od.quantity}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                                <div className="row align-items-center"
                                                     style={{marginBottom: "5px"}}>
                                                    <div className="col-7 col-md-5">

                                                    </div>

                                                    <div className="col-3 col-md-3 col-lg-3">
                                                        <img style={{width: "30px", height: "30px"}}
                                                             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9wvXFUnjqW_U7Yf_9pSqQZw4B_RdaAXvP_Q&usqp=CAU"
                                                             alt="Discount Icon"/>
                                                        Discount code:
                                                    </div>
                                                    <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                                                        <select id={"order" + order.id}
                                                                onChange={(event) => handleAmountIsReduced(event.target.value, order.id, order.total_amount)}>
                                                            <option value={0}>Select discount code:</option>
                                                            {order.codes.length > 0 ? order.codes.map((code) => (
                                                                <option value={code.percent}>{code.name}</option>
                                                            )) : <option value={0}>No discount code!</option>}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="row align-items-center"
                                                     style={{marginBottom: "5px"}}>
                                                    <div className="col-7 col-md-5"></div>
                                                    <div className="col-3 col-md-3 col-lg-3">
                                                        <strong>Total : </strong>
                                                    </div>
                                                    <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                                                        <span className="fw-bold">${order.total_amount}</span>
                                                    </div>
                                                </div>
                                                <div className="row align-items-center"
                                                     style={{marginBottom: "5px"}}>
                                                    <div className="col-7 col-md-5"></div>
                                                    <div className="col-3 col-md-3 col-lg-3">
                                                        <strong>Amount is reduced : </strong>
                                                    </div>
                                                    <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                                                        <span className="fw-bold"
                                                              id={`reduced${order.id}`}>${reducedAmount[order.id] ?? 0}</span>

                                                    </div>
                                                </div>
                                                <div className="row align-items-center"
                                                     style={{marginBottom: "5px"}}>
                                                    <div className="col-7 col-md-5"></div>
                                                    <div className="col-3 col-md-3 col-lg-3">
                                                        <strong>Payment amount : </strong>
                                                    </div>
                                                    <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                                                        <span className="fw-bold"
                                                              id={`pay${order.id}`}>${payAmount[order.id] ?? order.total_amount}</span>
                                                    </div>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                ))}

                            </div>
                        </div>
                        <div className="col-12 col-lg-4 col-md-5">
                            {/* card */}
                            <div className="mb-5 card mt-6">
                                <div className="card-body p-6">
                                    {list.length > 0}
                                    {/* heading */}
                                    <h2 className="h5 mb-4">Summary</h2>
                                    <div className="card mb-2">
                                        {/* list group */}
                                        <ul className="list-group list-group-flush">
                                            {/* list group item */}
                                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                                <div className="me-auto">
                                                    <div>Total Bill :</div>
                                                </div>
                                                <span>{list.length}</span>
                                            </li>

                                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                                <div className="me-auto">
                                                    <div className="fw-bold">The total amount :</div>
                                                </div>
                                                <span className="fw-bold">
                                                    ${totalAmount}
                                                </span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                                <div className="me-auto">
                                                    <div className="fw-bold">Total amount is reduced :</div>
                                                </div>
                                                <span className="fw-bold">{totalAmountReduced}</span>

                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                                <div className="me-auto">
                                                    <div className="fw-bold" style={{color:"red"}}>Total amount to be paid :</div>
                                                </div>
                                                <span className="fw-bold">

                                                </span>
                                            </li>

                                        </ul>
                                    </div>

                                    {/* heading */}
                                    <div className="mt-8">
                                        <h3><strong>Receiver's information: </strong></h3>
                                        <div className="mb-2">
                                            {/* input */}
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="fullName"
                                                placeholder="Full Name?"
                                            /><br/>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="phone"
                                                placeholder="Phone Number?"
                                            />
                                            <br/>
                                            <textarea
                                                className="form-control"
                                                id="address"
                                                placeholder="Address?"
                                            />
                                        </div>
                                    </div>
                                    <div className="d-grid mb-1 mt-4">
                                        {/* btn */}
                                        <button
                                            className="btn btn-primary btn-lg d-flex justify-content-between align-items-center"
                                            type="submit"
                                        >
                                            Payment confirmation
                                            <span className="fw-bold">$2</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    );
};

export default PayCart;