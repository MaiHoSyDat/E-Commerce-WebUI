import React, {useEffect, useState} from 'react';
import axios from "axios";

const DashboardSalary = () => {
    const [employee, setEmployee] = useState([]);
    const [totalElements, setTotalElements] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    useEffect(() => {
        fetchData();
    }, [currentPage]);
    const fetchData = () => {
        axios
            .get('http://localhost:8080/admin/employee/all')
            .then((response) => {
                setEmployee(response.data);
                setTotalPages(response.data.totalPages);
                setTotalElements(response.data.totalElements)
            })
            .catch((err) => {
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
        <div>
            <div className="container">
                <div className="row mb-8">
                    <div className="col-md-12">
                        <div>
                            {/* page header */}
                            <h2>Reviews</h2>
                            {/* breacrumb */}
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item">
                                        <a href="#" className="text-inherit">
                                            Dashboard
                                        </a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Reviews
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                {/* row */}
                <div className="row ">
                    <div className="col-xl-12 col-12 mb-5">
                        {/* card */}
                        <div className="card h-100 card-lg">
                            <div className="p-6 ">
                                <div className="row justify-content-between">
                                    <div className="col-md-4 col-12 mb-2 mb-md-0">
                                        {/* form */}
                                        <form className="d-flex" role="search">
                                            <input
                                                className="form-control"
                                                type="search"
                                                placeholder="Search Reviews"
                                                aria-label="Search"
                                            />
                                        </form>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-12">
                                        {/* main */}
                                        <select className="form-select">
                                            <option selected="">Select Rating</option>
                                            <option value={1}>One</option>
                                            <option value={2}>Two</option>
                                            <option value={3}>Three</option>
                                            <option value={4}>Four</option>
                                            <option value={5}>Five</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {/* card body */}
                            <div className="card-body p-0">
                                {/* table */}
                                <div className="table-responsive">
                                    <table className="table table-centered table-hover table-borderless mb-0 table-with-checkbox text-nowrap">
                                        <thead className="bg-light">
                                        <tr>
                                            <th>Avatar</th>
                                            <th>Name</th>
                                            <th>Phone</th>
                                            <th>Address</th>
                                            <th>SalaryPerDay</th>
                                            <th>Salary</th>
                                            <th />
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {employee.map((e,index)=> {
                                            return(
                                                <>
                                                    <tr>
                                                        <td>
                                                            <img src={e.avatar} alt=""/>
                                                        </td>
                                                        <td>
                                                            <a href="#" className="text-reset">
                                                                {e.account.name}
                                                            </a>
                                                        </td>
                                                        <td>{e.phone}</td>
                                                        <td>
                    <span className="text-truncate">
                      {e.address}
                    </span>
                                                        </td>
                                                        <td>
                                                            {e.salaryPerDay}
                                                        </td>
                                                        <td>{e.salary}</td>
                                                    </tr>
                                                </>
                                            )
                                        })}

                                        </tbody>
                                    </table>
                                </div>
                                <div
                                    className="border-top d-md-flex justify-content-between align-items-center p-6">
        <span>
          Showing {employee.length} to {employee.length} of {totalElements} entries
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
        </div>
    );
};

export default DashboardSalary;