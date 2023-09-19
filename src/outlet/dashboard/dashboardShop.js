import React, {useEffect, useState} from 'react';
import axios from "axios";
import Switch from "react-switch";
import Swal from "sweetalert2";

const DashboardShop = () => {
    const [status, setStatus] = useState([]);
    const [shop, setShop] = useState([]);
//lấy ra tất cả các shop
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
    //lấy ra tất cả các status của shop
    useEffect(() => {
        axios
            .get('http://localhost:8080/admin/customerRoles')
            .then((response) => {
                setStatus(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    //thay đổi trạng thái của shop

    const handleStatus = (idShop, event) => {
        const idStatus = event;

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Changed!',
                    'The status has been changed.',
                    'success'
                )
                axios
                    .post(
                        "http://localhost:8080/admin/shop/blockOrActiveShop?shopId=" + idShop  +"&statusId=" + idStatus
                    )
                    .then((response) => {
                        // Cập nhật lại trạng thái của tài khoản sau khi cập nhật thành công
                        const updatedShop = shop.map((a) => {
                            if (a.id === idShop) {
                                return {...a, status: {id: idStatus}};
                            }
                            return a;
                        });
                        setShop(updatedShop);

                        console.log(response);
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                Swal.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })

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
                                                            <Switch
                                                                checked={s.status.id === 1}
                                                                onChange={() => {
                                                                    const newStatusId = s.status.id === 1 ? 2 : 1;
                                                                    handleStatus(s.id, newStatusId);
                                                                }}
                                                                activeBoxShadow="0px 0px 1px 2px #2693e6"
                                                                height={24}
                                                                width={48}
                                                                handleDiameter={20}
                                                            />
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