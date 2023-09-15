import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllStatusOrder} from "../../service/statusService";
import {getShopByAccountLogin} from "../../service/shopService";
import {deleteOrder, getAllOrdersByCustomer, getAllOrdersByShop, updateOrder} from "../../service/orderService";
import Swal from "sweetalert2";
import {Link} from "react-router-dom";
import {deleteCode, getAllCodeByShop, setQuantity} from "../../service/codeService";
import shop from "../../pages/shop";

const ShopDiscountCode = () => {
    let account = JSON.parse(localStorage.getItem("account"));
    const dispatch = useDispatch();
    const shopLogin = useSelector(state => {
        return state.shop.shopLogin;
    })
    const codeByShop = useSelector(state => {
        console.log(state)
        return state.code.codeByShop;
    })
    useEffect(() => {
        dispatch(getShopByAccountLogin(account.id));
    },[])
    useEffect(() => {
        dispatch(getAllCodeByShop(shopLogin.id));
    },[shopLogin])
    return (
        <>
            <div className="col-lg-9 col-md-8 col-12">
                <div className="py-6 p-md-6 p-lg-10">
                    {/* heading */}
                    <h2 className="mb-6">Discount Code</h2>
                    <div className="table-responsive-xxl border-0">
                        {/* Table */}
                        <table className="table mb-0 text-nowrap table-centered ">
                            {/* Table Head */}
                            <thead className="bg-light">
                            <tr>
                                <th>&nbsp;</th>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Percent</th>
                                <th>Quantity</th>
                                <th>Set Quantity</th>
                            </tr>
                            </thead>
                            <tbody>
                            {codeByShop && codeByShop.map(code => (
                                <tr>
                                    <td className="align-middle border-top-0 w-0">
                                        <i className="feather-icon icon-zap" style={{ color: "blue" }} />
                                    </td>
                                    <td className="align-middle border-top-0">
                                        <a href="#" className="text-inherit">
                                            {code.id}
                                        </a>
                                    </td>
                                    <td className="align-middle border-top-0">{code.name}</td>
                                    <td className="align-middle border-top-0">
                                        {code.percent}
                                    </td>
                                    <td className="align-middle border-top-0">{code.quantity}</td>
                                    <td className="text-muted align-middle border-top-0">
                                            <button
                                                style={{background: "white", border: "none"}}
                                                className="text-inherit"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                                data-bs-title="View"
                                                onClick={() => {
                                                    let newCode = {...code, quantity: 0}
                                                    const fetchData = async () => {
                                                        await dispatch(setQuantity([code.id,newCode]));
                                                        await dispatch(getAllCodeByShop(shopLogin.id));
                                                    };
                                                    fetchData();
                                                    Swal.fire(
                                                        'Success!',
                                                        'Set Quantity!',
                                                        'success'
                                                    ).then(err => {
                                                        console.log(err)
                                                    })
                                                }}
                                            >
                                                <i className="feather-icon icon-lock" style={{color: "red"}} />
                                            </button>
                                    </td>
                                </tr>
                            ))}


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ShopDiscountCode;