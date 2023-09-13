import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DashboardShopPending = () => {
    const [status, setStatus] = useState([]);
    const [account, setAccount] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetchData();
        fetchStatus();
    }, [currentPage,account]);
//lấy ra tất cả các status
    const fetchStatus = () => {
        axios
            .get('http://localhost:8080/admin/roles')
            .then((response) => {
                setStatus(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
//lấy ra tất cả account có role shop
    const fetchData = () => {
        axios
            .get('http://localhost:8080/admin/getAccountByRole', {
                params: {
                    page: currentPage - 1,
                    id: 3,
                },
            })
            .then((response) => {
                const { content, totalPages } = response.data;
                setAccount(content);
                setTotalPages(totalPages);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleStatusChange = (idAccount, event) => {
        const idStatus = event.target.value;
        axios
            .post(`http://localhost:8080/admin/shop/blockOrActive?accountId=${idAccount}&statusId=${idStatus}`)
            .then((response) => {
                const updatedAccountShop = account.map((s) => {
                    if (s.id === idAccount) {
                        return { ...s, status: { id: parseInt(idStatus) } };
                    }
                    return s;
                });
                setAccount(updatedAccountShop);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    return (
        <>
        <div className="container">
            <div className="row mb-8">
                <div className="col-md-12">
                    <div className="d-md-flex justify-content-between align-items-center">
                        <div>
                            <h2>Shop</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item">
                                        <a href="#" className="text-inherit">
                                            Dashboard
                                        </a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Shop
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row ">
                <div className="col-xl-12 col-12 mb-5">
                    <div className="card h-100 card-lg">
                        <div className="p-6">
                            <div className="row justify-content-between">
                                <div className="col-md-4 col-12">
                                    <form className="d-flex" role="search">
                                        <input
                                            className="form-control"
                                            type="search"
                                            placeholder="Search Customers"
                                            aria-label="Search"
                                        />
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="card-body p-0 ">
                            <div className="table-responsive">
                                <table className="table table-centered table-hover table-borderless mb-0 table-with-checkbox text-nowrap">
                                    <thead className="bg-light">
                                    <tr>
                                        <th>Username</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>Spent</th>
                                        <th>Status</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {account.map((a) => (
                                        <tr key={a.id}>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="ms-2">
                                                        <a href="#" className="text-inherit">
                                                            {a.username}
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{a.name}</td>
                                            <td>{a.email}</td>
                                            <td>{a.role.name}</td>
                                            <td>$49.00</td>
                                            <td>
                                                {status.map((st) => {
                                                    if (st.id === a.status.id) {
                                                        if (st.id === 4) {
                                                            return (
                                                                <>
                                                                    <button
                                                                        className="btn btn-success me-2"
                                                                        onClick={() => handleStatusChange(a.id, {target: {value: 3}})}
                                                                    >
                                                                        <i className="bi bi-check"/>
                                                                    </button>
                                                                    <button
                                                                        className="btn btn-danger"
                                                                        onClick={() => handleStatusChange(a.id, {target: {value: 2}})}
                                                                    >
                                                                        <i className="bi bi-x"/>
                                                                    </button>
                                                                </>
                                                            );
                                                        } else {
                                                            return (
                                                                <>
                                                                    {a.status.name}
                                                                </>
                                                            );
                                                        }
                                                    }
                                                    return null;
                                                })}
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="card-footer py-4">
                            <nav aria-label="pagination">
                                <ul className="pagination justify-content-end mb-0">
                                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                        <button className="page-link" onClick={handlePreviousPage}>
                                            Previous
                                        </button>
                                    </li>
                                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                        <button className="page-link" onClick={handleNextPage}>
                                            Next
                                        </button>
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

export default DashboardShopPending;
//chuyển trang shop
//search shop
//xóa checkbox
//xóa nút edit/delete
//xóa checkbox
//thêm username
//tắt modal bị lỗi
//bỏ spent và toàn  role
//xóa review
//phân trang product
//status sản phẩm chỉ block hoặc active
//add lần 2 bị lỗi