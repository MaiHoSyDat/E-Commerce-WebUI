import React, {useEffect, useState, useRef} from 'react';
import axios from "axios";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import Switch from "react-switch";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

const DashboardEmployee = () => {
    const [employee, setEmployee] = useState([]);
    const [searchType, setSearchType] = useState(1); // Lựa chọn tìm kiếm theo tên hoặc email
    const [searchText, setSearchText] = useState('');
    const [totalElements, setTotalElements] = useState(0);
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
    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`http://localhost:8080/admin/getByLike?page=0&num=${searchType}&context=${searchText}&roleId=4`)
                .then((response) => {
                    setEmployee(response.data.content);
                    setTotalPages(response.data.totalPages)
                    setTotalElements(response.data.totalElements)
                    console.log(response.data)
                })
                .catch((error) => {
                    console.error(error);
                });
        }
        fetchData()
    }, [searchText, searchType])
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
                setTotalElements(response.data.totalElements)
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
                                            name: '',
                                            username: '',
                                            email: ''
                                        }}
                                        validationSchema={Yup.object().shape({
                                            name: Yup.string().required('Name is required'),
                                            username: Yup.string().required('Username is required'),
                                            email: Yup.string().email('Invalid email').required('Email is required'),

                                        })}
                                        onSubmit={(values, {setSubmitting, resetForm}) => {
                                            // Handle form submission
                                            let name = values.name;
                                            let username = values.username;
                                            let email = values.email;
                                            console.log(name)

                                            axios
                                                .post('http://localhost:8080/admin/', {
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
                                                    setTotalPages(Math.ceil((employee.length + 1) / 10));
                                                    setCurrentPage(Math.ceil((employee.length + 1) / 10));
                                                    setEmployee([...employee, response.data]);
                                                    Swal.fire(
                                                        'Add complete!',
                                                        'Good job!',
                                                        'success'
                                                    )


                                                })
                                                .catch(error => {
                                                    // Handle error
                                                    Swal.fire({
                                                        icon: 'error',
                                                        title: 'Oops...',
                                                        text: 'Can not submit  ',
                                                    })

                                                    console.error(error);
                                                })
                                                .finally(() => {
                                                    setSubmitting(false);
                                                    resetForm();
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
                                                            name="username"
                                                        />
                                                        {errors.username && touched.username && (
                                                            <div className="error-message">{errors.username}</div>
                                                        )}
                                                    </div>
                                                    <div className="col-5">
                                                        <Field
                                                            type="email"
                                                            className="form-control"
                                                            placeholder="email"
                                                            name="email"
                                                        />
                                                        {errors.email && touched.email && (
                                                            <div className="error-message">{errors.email}</div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="mt-3">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary"
                                                        disabled={isSubmitting}
                                                        data-bs-dismiss="modal"
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
                                            </form>
                                        </div>
                                        <div className="col-lg-2 col-md-4 col-12">

                                            <select
                                                className="form-select "
                                                value={searchType}
                                                onChange={handleSearchTypeChange}
                                            >
                                                <option value={1}>Name</option>
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
                                                employee.map((e, index) => {
                                                    return (
                                                        <>
                                                            <tr>
                                                                <td>
                                                                    {(currentPage - 1) * 10 + index + 1}
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
                                                                <td>
                                                                    <Switch
                                                                        checked={e.status.id === 1}
                                                                        onChange={() => {
                                                                            const newStatusId = e.status.id === 1 ? 2 : 1;
                                                                            handleStatus(e.id, newStatusId);
                                                                        }}
                                                                        activeBoxShadow="0px 0px 1px 2px #2693e6"
                                                                        height={24}
                                                                        width={48}
                                                                        handleDiameter={20}
                                                                    />
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
        </>
    );
};

export default DashboardEmployee;