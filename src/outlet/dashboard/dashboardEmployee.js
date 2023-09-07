import React, {useEffect, useState} from 'react';
import axios from "axios";

const DashboardEmployee = () => {
    const [employee, setEmployee] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/admin/employee").
        then((response) => {
            setEmployee(response.data);
        }).catch((err) => {
            console.log(err);
        })
    },[])
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
                            <div>
                                <a href="#!" className="btn btn-primary">
                                    Add New Customer
                                </a>
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
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Date create</th>
                                            <th>Phone</th>
                                            <th>Salary</th>
                                            <th />
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                          employee.map((e) => {
                                              return(
                                                  <>
                                                      <tr>
                                                          <td>
                                                              <div className="form-check">
                                                                  <input
                                                                      className="form-check-input"
                                                                      type="checkbox"
                                                                      defaultValue=""
                                                                      id="customerOne"
                                                                  />
                                                                  <label
                                                                      className="form-check-label"
                                                                      htmlFor="customerOne"
                                                                  ></label>
                                                              </div>
                                                          </td>
                                                          <td>
                                                              <div className="d-flex align-items-center">
                                                                  <img
                                                                      src= {e[2].avatar}
                                                                      alt=""
                                                                      className="avatar avatar-xs rounded-circle"
                                                                  />
                                                                  <div className="ms-2">
                                                                      <a href="#" className="text-inherit">
                                                                          {e[0]}
                                                                      </a>
                                                                  </div>
                                                              </div>
                                                          </td>
                                                          <td>{e[1]}</td>
                                                          <td>{e[2].date_create}</td>
                                                          <td>{e[2].phone}</td>
                                                          <td>$ {e[2].salary}</td>
                                                          <td>
                                                              <div className="dropdown">
                                                                  <a
                                                                      href="#"
                                                                      className="text-reset"
                                                                      data-bs-toggle="dropdown"
                                                                      aria-expanded="false"
                                                                  >
                                                                      <i className="feather-icon icon-more-vertical fs-5" />
                                                                  </a>
                                                                  <ul className="dropdown-menu">
                                                                      <li>
                                                                          <a className="dropdown-item" href="#">
                                                                              <i className="bi bi-trash me-3" />
                                                                              Delete
                                                                          </a>
                                                                      </li>
                                                                      <li>
                                                                          <a className="dropdown-item" href="#">
                                                                              <i className="bi bi-pencil-square me-3 " />
                                                                              Edit
                                                                          </a>
                                                                      </li>
                                                                  </ul>
                                                              </div>
                                                          </td>
                                                      </tr>
                                                  </>
                                              )
                                          })

                                        }


                                        </tbody>
                                    </table>
                                </div>
                                <div className="border-top d-md-flex justify-content-between align-items-center p-6">
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
            </div>

        </>
    );
};

export default DashboardEmployee;