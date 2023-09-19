import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllCustomerMapMessage, setCustomerMessageDTO} from "../../service/customerService";
import {getAllMessageBySenderIdAndReceiverId, pushMessage, saveMessage} from "../../service/messageService";
import {getShopByAccountLogin} from "../../service/shopService";
import WebSocketConfig from "../../config/configWebSocket";

const ShopMessage = () => {
    let account = JSON.parse(localStorage.getItem("account"));
    const dispatch = useDispatch();
    const customerMessageDTO = useSelector(state => {
        return state.customer.customerMessageDTO;
    })
    const customerMessage = useSelector(state => {
        console.log(state.customer.customerMessage)
        return state.customer.customerMessage;
    })
    const loadCustomerMessageDTO = useSelector(state => {
        return state.customer.loadCustomerMessageDTO;
    })
    const shopLogin = useSelector(state => {
        return state.shop.shopLogin;
    })
    const messagesByTwoAccount = useSelector(state => {
        return state.message.messagesByTwoAccount;
    })
    useEffect(() => {
        dispatch(getAllMessageBySenderIdAndReceiverId([account.id, customerMessage.customer.account.id]));
        // if (customerMessage != undefined) {
        //     dispatch(getAllMessageBySenderIdAndReceiverId([account.id, customerMessage.customer.account.id]));
        // }
    },[customerMessage])
    useEffect(() => {
        dispatch(getShopByAccountLogin(account.id));
        dispatch(getAllCustomerMapMessage(account.id));
    },[loadCustomerMessageDTO])

    useEffect(() => {
        if (customerMessageDTO.length) {
            dispatch(setCustomerMessageDTO(customerMessageDTO[0]))
        }
    },[customerMessageDTO])
    useEffect(() => {
        WebSocketConfig.connect(account);
    },[])
    const   handleSendMessage = () => {
        let scroll = document.getElementById('sc')
        scroll.scrollTop = scroll.scrollHeight
        let message = document.getElementById("exampleFormControlInput2").value;
        let date = new Date();
        let ngay = date.getDate();
        let thang = date.getMonth() + 1;
        let nam = date.getFullYear();
        if (ngay < 10) {
            ngay = "0" + ngay;
        }
        if (thang < 10) {
            thang = "0" + thang;
        }
        let now = nam + "-" + thang + "-" + ngay;
        let messageOj = {content: message, date: now, sender: account, receiver: {id: customerMessage.customer.account.id, role: {name: "ROLE_CUSTOMER"}}}
        WebSocketConfig.sendMessage("/private/" + customerMessage.customer.account.id,messageOj)
        const fetchData = async () => {
            await dispatch(saveMessage(messageOj));
            await dispatch(pushMessage(messageOj));
            scroll.scrollTop = scroll.scrollHeight
        }
        fetchData()
        document.getElementById("exampleFormControlInput2").value = "";
    }
    return (
        <>
            <div className="col-lg-9 col-md-8 col-12">
                <div className="py-6 p-md-6 p-lg-10">
                    <style
                        dangerouslySetInnerHTML={{
                            __html:
                                "\n  #chat3 .form-control {\nborder-color: transparent;\n}\n\n#chat3 .form-control:focus {\nborder-color: transparent;\nbox-shadow: inset 0px 0px 0px 1px transparent;\n}\n\n.badge-dot {\nborder-radius: 50%;\nheight: 10px;\nwidth: 10px;\nmargin-left: 2.9rem;\nmargin-top: -.75rem;\n}\n"
                        }}
                    />
                    <section style={{ backgroundColor: "#74e874", borderRadius: 15 }}>
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card" id="chat3" style={{ borderRadius: 15 }}>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0">
                                                    <div className="p-3">
                                                        <div
                                                            data-mdb-perfect-scrollbar="true"
                                                            style={{ position: "relative", height: 400 , overflow: "auto"}}
                                                        >
                                                            <ul className="list-unstyled mb-0">
                                                                {customerMessageDTO.length && customerMessageDTO.map(dto => (
                                                                    <li className="p-2 border-bottom">
                                                                        <a className="d-flex justify-content-between" onClick={() => {
                                                                            dispatch(setCustomerMessageDTO(dto))
                                                                        }}>
                                                                            <div className="d-flex flex-row">
                                                                                <div>
                                                                                    <img
                                                                                        src={dto.customer.avatar}
                                                                                        alt="avatar"
                                                                                        className="d-flex align-self-center me-3"
                                                                                        width={60}
                                                                                    />
                                                                                    <span className="badge bg-success badge-dot" />
                                                                                </div>
                                                                                <div className="pt-1">
                                                                                    <p className="fw-bold mb-0">{dto.customer.account.name}</p>
                                                                                    <p className="small text-muted">
                                                                                        Just now
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </a>
                                                                    </li>
                                                                ))}

                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-7 col-xl-8">
                                                    <div
                                                        className="pt-3 pe-3"
                                                        data-mdb-perfect-scrollbar="true"
                                                        style={{ position: "relative", height: 400, overflow: "auto" }}
                                                        id={'sc'}
                                                    >
                                                        {messagesByTwoAccount.length && messagesByTwoAccount.map(message => {
                                                            if (message.sender.role.name == "ROLE_CUSTOMER") {
                                                                return (<>
                                                                    <div className="d-flex flex-row justify-content-start">
                                                                        <img
                                                                            src={customerMessage.customer.avatar}
                                                                            alt="avatar 1"
                                                                            style={{ width: 45, height: "100%" }}
                                                                        />
                                                                        <div>
                                                                            <p
                                                                                className="small p-2 ms-3 mb-1 rounded-3"
                                                                                style={{ backgroundColor: "#f5f6f7" }}
                                                                            >
                                                                                {message.content}
                                                                            </p>
                                                                            <p className="small ms-3 mb-3 rounded-3 text-muted float-end">
                                                                                {message.date}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </>)
                                                            }
                                                            if (message.sender.role.name == "ROLE_SHOP") {
                                                                return (<>
                                                                    <div className="d-flex flex-row justify-content-end">
                                                                        <div>
                                                                            <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                                                                                {message.content}
                                                                            </p>
                                                                            <p className="small me-3 mb-3 rounded-3 text-muted">
                                                                                {message.date}
                                                                            </p>
                                                                        </div>
                                                                        <img
                                                                            src={shopLogin.logo}
                                                                            alt="avatar 1"
                                                                            style={{ width: 45, height: "100%" }}
                                                                        />
                                                                    </div>
                                                                </>)
                                                            }
                                                        })}
                                                    </div>
                                                    <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
                                                        <img
                                                            src={shopLogin.logo}
                                                            alt="avatar 3"
                                                            style={{ width: 40, height: "100%" }}
                                                        />
                                                        <input
                                                            type="text"
                                                            className="form-control form-control-lg"
                                                            id="exampleFormControlInput2"
                                                            placeholder="Message"
                                                            style={{ border: "1px solid #74e874", borderRadius: 10 }}
                                                        />
                                                        <a className="ms-1 text-muted" onClick={()=> {
                                                            handleSendMessage()
                                                        }}>
                                                            <i className="feather-icon icon-send" style={{color: "green"}}/>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        </>
    );
};

export default ShopMessage;