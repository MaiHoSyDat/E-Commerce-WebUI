import React, {useEffect, useState} from 'react';
import { useParams} from "react-router-dom";
import axios from "axios";
import {Field} from "formik";



const DashboardCustomer = () => {
    const [status, setStatus] = useState([]);
    const [account, setAccount] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);



    useEffect(() => {
        fetchData();
    }, [currentPage]);

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

    const fetchData = () => {
        axios
            .get('http://localhost:8080/admin/getAccountByRole', {
                params: {
                    page: currentPage - 1,
                    id: 2
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

    const handleStatus = (idAccount, event) => {
        const idStatus = event.target.value;
        axios
            .post(
                "http://localhost:8080/admin/blockOrActive?accountId=" +
                idAccount +
                "&statusId=" +
                idStatus
            )
            .then((response) => {
                // Cập nhật lại trạng thái của tài khoản sau khi cập nhật thành công
                const updatedAccount = account.map((a) => {
                    if (a.id === idAccount) {
                        return { ...a, status: { id: idStatus } };
                    }
                    return a;
                });
                setAccount(updatedAccount);

                console.log(response);
            })
            .catch(function (err) {
                console.log(err);
            });
    };
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };





    return (
        <>
            <div className="container">
                <div className="row mb-8">
                    <div className="col-md-12">
                        <div className="d-md-flex justify-content-between align-items-center">
                            <div>
                                <h2>Customers</h2>
                                {/* breacrumb */}
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb mb-0">
                                        <li className="breadcrumb-item">
                                            <a href="#" className="text-inherit">
                                                Dashboard
                                            </a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Customers
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
                                        {
                                            account.map((a) => {
                                                return(
                                                    <>
                                                        <tr>
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
                                                            <td>
                                                                {a.role.name}
                                                            </td>
                                                            <td>$49.00</td>
                                                            <td> <select
                                                                key={a.id}
                                                                name="status"
                                                                id="status"
                                                                onChange={(event) => handleStatus(a.id, event)}
                                                                value={a.status.id}
                                                            >
                                                                {status.map((s) => (
                                                                    <option key={s.id} value={s.id}>
                                                                        {s.name}
                                                                    </option>
                                                                ))}
                                                            </select></td>

                                                        </tr>
                                                    </>
                                                )})
                                        }
                                        </tbody>
                                    </table>
                                </div>
                                {/*phân trang*/}
                                <div className="border-top d-md-flex justify-content-between align-items-center p-6">
        <span>
                    Showing {account.length} to {account.length} of {totalPages * 10} entries

        </span>
                                    <nav className="mt-2 mt-md-0">
                                        <ul className="pagination mb-0 ">
                                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                                <a className="page-link" href="#!" onClick={handlePreviousPage}>
                                                    Previous
                                                </a>
                                            </li>
                                            {Array.from({ length: totalPages }, (_, i) => (
                                                <li
                                                    key={i + 1}
                                                    className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}
                                                >
                                                    <a
                                                        className="page-link"
                                                        href="#!"
                                                        onClick={() => setCurrentPage(i + 1)}
                                                    >
                                                        {i + 1}
                                                    </a>
                                                </li>
                                            ))}
                                            <li
                                                className={`page-item ${
                                                    currentPage === totalPages ? 'disabled' : ''
                                                }`}
                                            >
                                                <a className="page-link" href="#!" onClick={handleNextPage}>
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
            </div>

        </>
    );
};

export default DashboardCustomer;
// export {handleStatus}