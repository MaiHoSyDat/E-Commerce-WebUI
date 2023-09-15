import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import { MDBBtn } from 'mdb-react-ui-kit';

const DashboardShopPending = () => {
    const [shop, setShop] = useState([]);
    const [searchType, setSearchType] = useState(1); // Lựa chọn tìm kiếm theo tên hoặc email
    const [searchText, setSearchText] = useState('');
    const [update, setUpdate] = useState('');
    const [totalElements, setTotalElements] = useState(0);
    const [status, setStatus] = useState([]);
    const [oneStatus, setOneStatus] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);


    useEffect(() => {
        fetchData();
    }, [currentPage]);
    // const handleSearchTypeChange = (event) => {
    //     setSearchType(event.target.value);
    // };
    //
    // const handleSearchTextChange = (event) => {
    //     setSearchText(event.target.value);
    // };
    // useEffect(() => {
    //     const fetchData = async () => {
    //         await axios.get(`http://localhost:8080/admin/getByLike?page=0&num=${searchType}&context=${searchText}&roleId=3`)
    //             .then((response) => {
    //                 setShop(response.data.content);
    //                 setTotalPages(response.data.totalPages)
    //                 setTotalElements(response.data.totalElements)
    //                 console.log(response.data)
    //             })
    //             .catch((error) => {
    //                 console.error(error);
    //             });
    //     }
    //     fetchData()
    // }, [searchText, searchType])
    const fetchData = () => {
        axios
            .get('http://localhost:8080/admin/getAllShopPending?idStatus=4&idRole=3')
            .then((response) => {
                setShop(response.data.content);
                setTotalPages(response.data.totalPages);
                setTotalElements(response.data.totalElements)
                console.log(shop)
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        axios
            .get('http://localhost:8080/admin/shopStatus')
            .then((response) => {
                setStatus(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [oneStatus]);

    const handleStatusChange = (idAccount, event) => {
        const idStatus = event.target.value;
        setOneStatus(idStatus)
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
                    .post(`http://localhost:8080/admin/shop/blockOrActive?accountId=${idAccount}&statusId=${idStatus}`)
                    .then(() => {
                        fetchData()
                    })
                    .then((response) => {
                        // Cập nhật lại trạng thái của tài khoản sau khi cập nhật thành công
                        const updatedEmployee = shop.map((a) => {
                            if (a.id === idAccount) {
                                return {...a, status: {id: idStatus}};
                            }
                            return a;
                        });
                        setShop(updatedEmployee);

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
                    'Task has been cancel :)',
                    'error'
                )
            }
        })

            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href="">Why do I have this issue?</a>'
                })
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
                                        {/*<th>Role</th>*/}
                                        <th>Spent</th>
                                        <th>Status</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {shop.map((a) => (
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
                                            {/*<td>{a.role.name}</td>*/}
                                            <td>$49.00</td>
                                            <td>
                                                {status.map((st) => {
                                                    if (st.id === a.status.id) {
                                                        if (st.id === 4) {
                                                            return (
                                                                <>
                                                                    {/*<button type="button" className="btn btn-outline-success btn-floating" data-mdb-ripple-color="dark"*/}
                                                                    {/*        onClick={() => handleStatusChange(a.id, {target: {value: 3}})}>*/}
                                                                    {/*    <i className="fas fa-star"></i>*/}
                                                                    {/*</button>*/}
                                                                    {/*<button type="button" className="btn btn-danger btn-floating" onClick={() => handleStatusChange(a.id, {target: {value: 2}})}>*/}
                                                                    {/*    <i className="fas fa-magic"></i>*/}
                                                                    {/*</button>*/}

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