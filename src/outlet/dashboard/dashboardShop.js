import React, {useEffect, useState} from 'react';
import axios from "axios";

const DashboardShop = () => {
    const [status, setStatus] = useState([]);
    const [shop, setShop] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8080/shops')
            .then((response) => {
                setShop(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    // useEffect(() => {
    //     axios
    //         .get('http://localhost:8080/admin/roles')
    //         .then((response) => {
    //             setStatus(response.data);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }, []);
    //
    //
    //
    // const handleStatus = (idAccount, event) => {
    //     const idStatus = event.target.value;
    //     axios.post("http://localhost:8080/admin/blockOrActive?accountId="+idAccount + "&statusId=" +idStatus)
    //         .then(response => {
    //             console.log(response);
    //         })
    //         .catch(function (err) {
    //             console.log(err);
    //         });
    // };
    return (
        <>
            <div className="container">
                <div className="row mb-8">
                    <div className="col-md-12">
                        {/* pageheader */}
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <h2>Vendors</h2>
                                {/* breacrumb */}
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb mb-0">
                                        <li className="breadcrumb-item">
                                            <a href="#" className="text-inherit">
                                                Dashboard
                                            </a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Vendors
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                            <div>
                                {/* button */}
                                <a href="vendor-grid.html" className="btn btn-primary btn-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={18}
                                        height={18}
                                        fill="currentColor"
                                        className="bi bi-grid"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
                                    </svg>
                                </a>
                                <a href="vendor-list.html" className="btn btn-light  btn-icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={18}
                                        height={18}
                                        fill="currentColor"
                                        className="bi bi-list-task"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"
                                        />
                                        <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
                                        <path
                                            fillRule="evenodd"
                                            d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* row */}
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 g-lg-6">
                    {/* col */}
                    {
                        shop.map((s) => {
                        return(
                            <>
                                <div className="col">
                                    {/* card */}
                                    <div className="card border-0 text-center card-lg">
                                        <div className="card-body p-6">
                                            <div>
                                                {/* img */}
                                                <img
                                                    src= {s.logo}
                                                    alt=""
                                                    className="rounded-circle icon-shape icon-xxl mb-6"
                                                />
                                                {/* content */}
                                                <h2 className="mb-2 h5">
                                                    <a href="#!" className="text-inherit">
                                                        {s.name}
                                                    </a>
                                                </h2>
                                                <div className="mb-2">Shop id: #{s.id}</div>
                                                <div>{s.dateCreate}</div>
                                            </div>
                                            {/* meta content */}
                                            <div className="row justify-content-center mt-8">
                                                <div className="col">
                                                    <div>Gross Sale</div>
                                                    <h5 className="mb-0 mt-1">$200.00</h5>
                                                </div>
                                                <div className="col">
                                                    <div>Earning</div>
                                                    <h5 className="mb-0 mt-1">$200.00</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}


                </div>
            </div>

        </>
    );
};

export default DashboardShop;