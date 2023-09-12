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
    useEffect(() => {
        axios
            .get('http://localhost:8080/admin/shopStatus')
            .then((response) => {
                setStatus(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    const handleStatusChange = (idAccount, event) => {
        const idStatus = event.target.value;
        axios
            .post(`http://localhost:8080/admin/shop/blockOrActive?shopId=${idAccount}&statusId=${idStatus}`)
            .then((response) => {
                const updatedShops = shop.map((s) => {
                    if (s.id === idAccount) {
                        return { ...s, status: { id: parseInt(idStatus) } };
                    }
                    return s;
                });
                setShop(updatedShops);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <>
            <div className="container">
                <div className="row mb-8">
                    <div className="col-md-12">
                        {/* page header */}
                        <div className="d-md-flex justify-content-between align-items-center">
                            <div>
                                <h2>Shops</h2>
                                {/* breacrumb */}
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb mb-0">
                                        <li className="breadcrumb-item">
                                            <a href="#" className="text-inherit">
                                                Dashboard
                                            </a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Shops
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                {/* row */}
                <div className="row ">
                    <div className="col-xl-12 col-12 mb-5">
                        {/* card */}
                        <div className="card h-100 card-lg">
                            <div className="px-6 py-6 ">
                                <div className="row justify-content-between">
                                    {/* form */}
                                    <div className="col-lg-4 col-md-6 col-12 mb-2 mb-lg-0">
                                        <form className="d-flex" role="search">
                                            <input
                                                className="form-control"
                                                type="search"
                                                placeholder="Search Shops"
                                                aria-label="Search"
                                            />
                                        </form>
                                    </div>
                                    {/* select option */}
                                    <div className="col-lg-2 col-md-4 col-12">
                                        <select className="form-select">
                                            <option selected="">Status</option>
                                            <option value={1}>Active</option>
                                            <option value={2}>Deactive</option>
                                            <option value={3}>Draft</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {/* card body */}
                            <div className="card-body p-0">
                                {/* table */}
                                <div className="table-responsive">
                                    <table
                                        className="table table-centered table-hover text-nowrap table-borderless mb-0 table-with-checkbox">
                                        <thead className="bg-light">
                                        <tr>
                                            <th>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        defaultValue=""
                                                        id="checkAll"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="checkAll"
                                                    ></label>
                                                </div>
                                            </th>
                                            <th>Image</th>
                                            <th>Shop Name</th>
                                            <th>Status</th>
                                            <th>Create at</th>
                                            <th/>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {shop.map((s) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td>
                                                            <div className="form-check">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue=""
                                                                    id="ShopOne"
                                                                />
                                                                <label
                                                                    className="form-check-label"
                                                                    htmlFor="ShopOne"
                                                                ></label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <a href="#!">
                                                                {" "}
                                                                <img
                                                                    src={s.logo}
                                                                    alt=""
                                                                    className="icon-shape icon-md"
                                                                />
                                                            </a>
                                                        </td>
                                                        <td>{s.name}</td>
                                                        <td>
                                                            {status.map((st) => {
                                                                if (st.id === s.status.id) {
                                                                    if (st.id === 3) {
                                                                        return (
                                                                            <>
                                                                                <button
                                                                                    className="btn btn-success me-2"
                                                                                    onClick={() => handleStatusChange(s.id, {target: {value: 1}})}
                                                                                >
                                                                                    <i className="bi bi-check"/>
                                                                                </button>
                                                                                <button
                                                                                    className="btn btn-danger"
                                                                                    onClick={() => handleStatusChange(s.id, {target: {value: 2}})}
                                                                                >
                                                                                    <i className="bi bi-x"/>
                                                                                </button>
                                                                            </>
                                                                        );
                                                                    } else {
                                                                        return (
                                                                            <select
                                                                                name="status"
                                                                                id="status"
                                                                                value={s.status.id}
                                                                                onChange={(e) => handleStatusChange(s.id, e)}
                                                                            >
                                                                                {status.map((option) => (
                                                                                    <option key={option.id}
                                                                                            value={option.id}>
                                                                                        {option.name}
                                                                                    </option>
                                                                                ))}
                                                                            </select>
                                                                        );
                                                                    }
                                                                }
                                                                return null;
                                                            })}
                                                        </td>
                                                        <td>{s.dateCreate}</td>
                                                        <td>
                                                            <div className="dropdown">
                                                                <a
                                                                    href="#"
                                                                    className="text-reset"
                                                                    data-bs-toggle="dropdown"
                                                                    aria-expanded="false"
                                                                >
                                                                    <i className="feather-icon icon-more-vertical fs-5"/>
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li>
                                                                        <a className="dropdown-item" href="#">
                                                                            <i className="bi bi-trash me-3"/>
                                                                            Delete
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item" href="#">
                                                                            <i className="bi bi-pencil-square me-3 "/>
                                                                            Edit
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        })}

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className=" border-top d-md-flex justify-content-between align-items-center px-6 py-6">
                                <span>Showing 1 to 8 of 12 entries</span>
                                <nav className="mt-2 mt-md-0">
                                    <ul className="pagination mb-0 ">
                                        <li className="page-item disabled">
                                            <a className="page-link " href="#!">
                                                Previous
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link active" href="#!">
                                                1
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#!">
                                                2
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#!">
                                                3
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#!">
                                                Next
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default DashboardShop;