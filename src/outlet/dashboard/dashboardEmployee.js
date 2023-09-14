import React, {useEffect, useState, useRef} from 'react';
import axios from "axios";
// import {handleStatus} from "./dashboardCustomer";


const DashboardEmployee = () => {
    const [employee, setEmployee] = useState([]);
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [status, setStatus] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);


    useEffect(() => {
        fetchData();
    }, [currentPage]);

    const fetchData = () => {
        axios
            .get('http://localhost:8080/admin/getAccountByRole', {
                params: {
                    page: currentPage - 1, // Trừ 1 vì API đếm từ 0
                    id: 4
                }
            })
            .then((response) => {
                const {content, totalPages} = response.data;
                setEmployee(content);
                setTotalPages(totalPages);
            })
            .catch((err) => {
                console.log(err);
            });
    };


    const handleSubmit = (event) => {
        event.preventDefault();

        axios
            .post('http://localhost:8080/admin', {
                name,
                username,
                email,
            },)
            .then((response) => {
                console.log(response.data);
                setName('');
                setUsername('');
                setEmail('');
                setShowModal(false);
                setTotalPages(Math.ceil((employee.length + 1) / 10));
                setCurrentPage(Math.ceil((employee.length + 1) / 10));
                setEmployee([...employee, response.data]);

            })
            .catch((err) => {
                console.log(err);
            });
    };
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
                const updatedEmployee = employee.map((a) => {
                    if (a.id === idAccount) {
                        return {...a, status: {id: idStatus}};
                    }
                    return a;
                });
                setEmployee(updatedEmployee);

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
                                <h2>Employees</h2>
                                {/* breacrumb */}
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb mb-0">
                                        <li className="breadcrumb-item">
                                            <a href="#" className="text-inherit">
                                                Dashboard
                                            </a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Employee
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                            <div>
                                {/*<a href="#!"  className="btn btn-primary">*/}
                                <button
                                    type="button"
                                    button onClick={() => setShowModal(true)}
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#addCustomerModal"
                                >
                                    Add Employee
                                </button>
                                {/*</a>*/}
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
                                    <table
                                        className="table table-centered table-hover table-borderless mb-0 table-with-checkbox text-nowrap">
                                        <thead className="bg-light">
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Role</th>
                                            <th>Status</th>
                                            <th/>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            employee.map((e) => {
                                                return (
                                                    <>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <div className="ms-2">
                                                                        <a href="#" className="text-inherit">
                                                                            {e.name}
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>{e.email}</td>
                                                            <td>{e.role.name}</td>
                                                            <td><select
                                                                key={e.id}
                                                                name="status"
                                                                id="status"
                                                                onChange={(event) => handleStatus(e.id, event)}
                                                                value={e.status.id}
                                                            >
                                                                {status.map((s) => (
                                                                    <option key={s.id} value={s.id}>
                                                                        {s.name}
                                                                    </option>
                                                                ))}
                                                            </select></td>
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
                                                        <div>
                                                            {/* Modal add*/}
                                                            <div className={`modal fade ${showModal ? 'show' : ''}`}
                                                                 id="addCustomerModal" tabIndex="-1"
                                                                 aria-labelledby="addCustomerModalLabel"
                                                                 aria-hidden={!showModal}>
                                                                <div className="modal-dialog">
                                                                    <div className="modal-content">
                                                                        <div className="modal-header">
                                                                            <h5 className="modal-title"
                                                                                id="addCustomerModalLabel">Add New
                                                                                Customer</h5>
                                                                            <button type="button" className="btn-close"
                                                                                    data-bs-dismiss="modal"
                                                                                    aria-label="Close"></button>
                                                                        </div>
                                                                        <div className="modal-body">
                                                                            <form onSubmit={handleSubmit}>
                                                                                <div className="mb-3">
                                                                                    <label htmlFor="name"
                                                                                           className="form-label">Name</label>
                                                                                    <input type="text"
                                                                                           className="form-control"
                                                                                           id="name" value={name}
                                                                                           onChange={(e) => setName(e.target.value)}
                                                                                           required/>
                                                                                </div>
                                                                                <div className="mb-3">
                                                                                    <label htmlFor="username"
                                                                                           className="form-label">Username</label>
                                                                                    <input type="text"
                                                                                           className="form-control"
                                                                                           id="username"
                                                                                           value={username}
                                                                                           onChange={(e) => setUsername(e.target.value)}
                                                                                           required/>
                                                                                </div>
                                                                                <div className="mb-3">
                                                                                    <label htmlFor="email"
                                                                                           className="form-label">Email</label>
                                                                                    <input type="email"
                                                                                           className="form-control"
                                                                                           id="email" value={email}
                                                                                           onChange={(e) => setEmail(e.target.value)}
                                                                                           required/>
                                                                                </div>
                                                                                <button type="submit"
                                                                                        data-bs-dismiss="modal"
                                                                                        className="btn btn-primary">Submit
                                                                                </button>
                                                                            </form>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </>
                                                )
                                            })

                                        }


                                        </tbody>
                                    </table>
                                </div>
                                <div className="border-top d-md-flex justify-content-between align-items-center p-6">
        <span>
          Showing {employee.length} to {employee.length} of {totalPages * 10} entries
        </span>
                                    <nav className="mt-2 mt-md-0">
                                        <ul className="pagination mb-0 ">
                                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                                <a className="page-link" href="#!" onClick={handlePreviousPage}>
                                                    Previous
                                                </a>
                                            </li>
                                            {Array.from({length: totalPages}, (_, i) => (
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

export default DashboardEmployee;