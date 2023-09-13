import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {Field} from "formik";
import Switch from 'react-switch';
import Swal from "sweetalert2";

const DashboardCustomer = () => {
    const [status, setStatus] = useState([]);
    const [account, setAccount] = useState([]);
    const [searchType, setSearchType] = useState(1); // Lựa chọn tìm kiếm theo tên hoặc email
    const [searchText, setSearchText] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalElements, setTotalElements] = useState(0);




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
    const handleSearchTypeChange = (event) => {
        setSearchType(event.target.value);
    };

    const handleSearchTextChange = (event) => {
        setSearchText(event.target.value);
    };
    // const handleSearch = () => {
    //     axios.get(`http://localhost:8080/admin/getByLike?page=0&num=${searchType}&context=${searchText}`)
    //         .then((response) => {
    //             setAccount(response.data.content);
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // };
    useEffect(()=>{
        const fetchData = async () => {
            await axios.get(`http://localhost:8080/admin/getByLike?page=0&num=${searchType}&context=${searchText}&roleId=2`)
                .then((response) => {
                    setAccount(response.data.content);
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
                    page: currentPage - 1,
                    id: 2
                },
            })
            .then((response) => {
                const {content, totalPages} = response.data;
                setAccount(content);
                setTotalPages(totalPages);
                setTotalElements(response.data.totalElements);

            })
            .catch((error) => {
                console.log(error);
            });
    };
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
                         const updatedAccount = account.map((a) => {
                        if (a.id === idAccount) {
                            return {...a, status: {id: idStatus}};
                        }
                        return a;
                    });
                    setAccount(updatedAccount);

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
                                            <option value={1}>Full Name</option>
                                            <option value={2}>Email</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body p-0 ">
                                <div className="table table-striped">
                                    <table
                                        className="table table-centered table-hover table-borderless mb-0 table-with-checkbox text-nowrap">
                                        <thead className="bg-light">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Username</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Role</th>
                                            <th scope="col">Status</th>

                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            account.map((a, index) => {
                                                return (
                                                    <>
                                                        <tr>
                                                            <th scope="row">
                                                                {(currentPage - 1)* 10 + index + 1}
                                                            </th>
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
                                                            <td>
                                                                <Switch
                                                                    checked={a.status.id === 1}
                                                                    onChange={() => {
                                                                        const newStatusId = a.status.id === 1 ? 2 : 1;
                                                                        handleStatus(a.id, newStatusId);
                                                                    }}
                                                                    activeBoxShadow="0px 0px 1px 2px #2693e6"
                                                                    height={24}
                                                                    width={48}
                                                                    handleDiameter={20}
                                                                />
                                                            </td>

                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }
                                        </tbody>
                                    </table>
                                </div>
                                {/*phân trang*/}
                                <div className="border-top d-md-flex justify-content-between align-items-center p-6">
        <span>
                    Showing {account.length} to {account.length} of {totalElements } entries

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

export default DashboardCustomer;
// export {handleStatus}