import React, {useEffect, useState, useRef} from 'react';
import axios from "axios";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {getAllProductsByShop} from "../../service/productService";
// import {handleStatus} from "./dashboardCustomer";


const DashboardEmployee = () => {
    const [employee, setEmployee] = useState([]);
    const [searchType, setSearchType] = useState(1); // Lựa chọn tìm kiếm theo tên hoặc email
    const [searchText, setSearchText] = useState('');

    const [status, setStatus] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);


    useEffect(() => {
        fetchData();
    }, [currentPage]);
    const handleSearchTypeChange = (event) => {
        setSearchType(event.target.value);
    };

    const handleSearchTextChange = (event) => {
        setSearchText(event.target.value);
    };
    useEffect(()=>{
        const fetchData = async () => {
            await axios.get(`http://localhost:8080/admin/getByLike?page=0&num=${searchType}&context=${searchText}`)
                .then((response) => {
                    setEmployee(response.data.content);
                    setTotalPages(response.data.totalPages)
                })
                .catch((error) => {
                    console.error(error);
                });
        }
        fetchData()
    },[searchText,searchType])
    const fetchData = () => {
        axios
            .get('http://localhost:8080/admin/getAccountByRole', {
                params: {
                    page: currentPage - 1, // Trừ 1 vì API đếm từ 0
                    id: 4
                }
            })
            .then((response) => {
                setEmployee(response.data.content);
                setTotalPages(response.data.totalPages);
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
                                <button
                                    type="button"
                                    data-bs-toggle="modal"
                                    data-bs-target="#addCustomerModal"
                                    className="btn btn-success"
                                >
                                    Create New Employee
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        className="modal fade"
                        id="addCustomerModal"
                        tabIndex={-1}
                        aria-labelledby="userModalLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content p-4">
                                <div className="modal-header border-0">
                                    <h5 className="modal-title fs-3 fw-bold" id="userModalLabel">
                                        Add new Employee
                                    </h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    />
                                </div>
                                <div className="modal-body">
                                    <Formik
                                        initialValues={{
                                            name1: 'xdcfvgbhnj',
                                            username1: '',
                                            email1: ''
                                        }}
                                        validationSchema={Yup.object().shape({
                                            name1: Yup.string().required('Name is required'),
                                            username1: Yup.string().required('Username is required'),
                                            email1: Yup.string().required('Email is required'),

                                        })}
                                        onSubmit={(values, {setSubmitting, resetForm}) => {
                                            // Handle form submission
                                            let name = values.name1;
                                            let username = values.username1;
                                            let email = values.email1;
                                            console.log(name)

                                            axios
                                                .post('http://localhost:8080/admin/',{
                                                    name,
                                                    username,
                                                    email,
                                                },

                                                    {
                                                        headers: {
                                                            'Authorization': localStorage.getItem('token')
                                                        },
                                                    })

                                                .then(response => {
                                                    console.log(response.data);

                                                    // setShowModal(false);
                                                    setTotalPages(Math.ceil((employee.length + 1) / 10));
                                                    setCurrentPage(Math.ceil((employee.length + 1) / 10));
                                                    setEmployee([...employee, response.data]);


                                                })
                                                .catch(error => {
                                                    // Handle error
                                                    alert("Please review the information")

                                                    console.error(error);
                                                })
                                                .finally(() => {
                                                    setSubmitting(false);
                                                });
                                        }}
                                    >
                                        {({errors, touched, isSubmitting}) => (
                                            <Form>
                                                <div className="row g-3">
                                                    <div className="col-12">
                                                        <Field
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Name"
                                                            name="name"
                                                        />
                                                        {errors.name && touched.name && (
                                                            <div className="error-message">{errors.name}</div>
                                                        )}
                                                    </div>
                                                    <div className="col-5">
                                                        <Field
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="username"
                                                            name="username1"
                                                            />
                                                        {errors.username1 && touched.username1 && (
                                                            <div className="error-message">{errors.username1}</div>
                                                        )}
                                                    </div>
                                                    <div className="col-5">
                                                        <Field
                                                            type="email"
                                                            className="form-control"
                                                            placeholder="email"
                                                            name="email1"
                                                        />
                                                        {errors.email1 && touched.email1 && (
                                                            <div className="error-message">{errors.email1}</div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="mt-3">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary"
                                                        disabled={isSubmitting}
                                                    >
                                                        {isSubmitting ? 'Submitting...' : 'Submit'}
                                                    </button>
                                                </div>
                                            </Form>
                                        )}
                                    </Formik>
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
                                                value={searchText}
                                                onChange={handleSearchTextChange}
                                            />
                                            {/*<button type="button" className="btn btn-primary" onClick={handleSearch}>*/}
                                            {/*    Search*/}
                                            {/*</button>*/}
                                        </form>
                                    </div>
                                    <div className="col-md-4 col-12">
                                        <select
                                            style={{ backgroundColor: 'lightgray', color: 'black', fontSize: '16px' }}
                                            value={searchType}
                                            onChange={handleSearchTypeChange}
                                        >
                                            <option value={1}>Full Name</option>
                                            <option value={2}>Email</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body p-0 ">
                                <div className="table-responsive">
                                    <table
                                        className="table table-centered table-hover table-borderless mb-0 table-with-checkbox text-nowrap">
                                        <thead className="bg-light">
                                        <tr>
                                            <td>#</td>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Role</th>
                                            <th>Status</th>
                                            <th/>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            employee.map((e,index) => {
                                                return (
                                                    <>
                                                        <tr>
                                                            <td>
                                                                {(currentPage - 1)* 10 + index + 1}
                                                            </td>
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
            </div>
        </>
    );
};

export default DashboardEmployee;