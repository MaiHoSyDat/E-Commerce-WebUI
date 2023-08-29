import React from 'react';

const DashboardCategory = () => {
    return (
        <>
            <div className="container">
                {/* row */}
                <div className="row mb-8">
                    <div className="col-md-12">
                        <div className="d-md-flex justify-content-between align-items-center">
                            {/* pageheader */}
                            <div>
                                <h2>Categories</h2>
                                {/* breacrumb */}
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb mb-0">
                                        <li className="breadcrumb-item">
                                            <a href="#" className="text-inherit">
                                                Dashboard
                                            </a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Categories
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                            {/* button */}
                            <div>
                                <a href="add-category.html" className="btn btn-primary">
                                    Add New Category
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-xl-12 col-12 mb-5">
                        {/* card */}
                        <div className="card h-100 card-lg">
                            <div className=" px-6 py-6 ">
                                <div className="row justify-content-between">
                                    <div className="col-lg-4 col-md-6 col-12 mb-2 mb-md-0">
                                        {/* form */}
                                        <form className="d-flex" role="search">
                                            <input
                                                className="form-control"
                                                type="search"
                                                placeholder="Search Category"
                                                aria-label="Search"
                                            />
                                        </form>
                                    </div>
                                    {/* select option */}
                                    <div className="col-xl-2 col-md-4 col-12">
                                        <select className="form-select">
                                            <option selected="">Status</option>
                                            <option value="Published">Published</option>
                                            <option value="Unpublished">Unpublished</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {/* card body */}
                            <div className="card-body p-0">
                                {/* table */}
                                <div className="table-responsive ">
                                    <table className="table table-centered table-hover mb-0 text-nowrap table-borderless table-with-checkbox">
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
                                            <th>Icon</th>
                                            <th> Name</th>
                                            <th>Proudct</th>
                                            <th>Status</th>
                                            <th />
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        defaultValue=""
                                                        id="categoryOne"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="categoryOne"
                                                    ></label>
                                                </div>
                                            </td>
                                            <td>
                                                <a href="#!">
                                                    {" "}
                                                    <img
                                                        src="../assets/images/icons/snacks.svg"
                                                        alt=""
                                                        className="icon-shape icon-sm"
                                                    />
                                                </a>
                                            </td>
                                            <td>
                                                <a href="#" className="text-reset">
                                                    Snack &amp; Munchies
                                                </a>
                                            </td>
                                            <td>12</td>
                                            <td>
                    <span className="badge bg-light-primary text-dark-primary">
                      Published
                    </span>
                                            </td>
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
                                        <tr>
                                            <td>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        defaultValue=""
                                                        id="categoryTwo"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="categoryTwo"
                                                    ></label>
                                                </div>
                                            </td>
                                            <td>
                                                <a href="#!">
                                                    {" "}
                                                    <img
                                                        src="../assets/images/icons/bakery.svg"
                                                        alt=""
                                                        className="icon-shape icon-sm"
                                                    />
                                                </a>
                                            </td>
                                            <td>
                                                <a href="#" className="text-reset">
                                                    Bakery &amp; Biscuits
                                                </a>
                                            </td>
                                            <td>8</td>
                                            <td>
                    <span className="badge bg-light-primary text-dark-primary">
                      Published
                    </span>
                                            </td>
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
                                        <tr>
                                            <td>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        defaultValue=""
                                                        id="categoryThree"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="categoryThree"
                                                    ></label>
                                                </div>
                                            </td>
                                            <td>
                                                <a href="#!">
                                                    {" "}
                                                    <img
                                                        src="../assets/images/icons/baby-food.svg"
                                                        alt=""
                                                        className="icon-shape icon-sm"
                                                    />
                                                </a>
                                            </td>
                                            <td>
                                                <a href="#" className="text-reset">
                                                    Baby Care
                                                </a>
                                            </td>
                                            <td>32</td>
                                            <td>
                    <span className="badge bg-light-primary text-dark-primary">
                      Published
                    </span>
                                            </td>
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
                                        <tr>
                                            <td>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        defaultValue=""
                                                        id="categoryFour"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="categoryFour"
                                                    ></label>
                                                </div>
                                            </td>
                                            <td>
                                                <a href="#!">
                                                    {" "}
                                                    <img
                                                        src="../assets/images/icons/wine.svg"
                                                        alt=""
                                                        className="icon-shape icon-sm"
                                                    />
                                                </a>
                                            </td>
                                            <td>
                                                <a href="#" className="text-reset">
                                                    Cold Drinks &amp; Juices
                                                </a>
                                            </td>
                                            <td>34</td>
                                            <td>
                    <span className="badge bg-light-primary text-dark-primary">
                      Published
                    </span>
                                            </td>
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
                                        <tr>
                                            <td>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        defaultValue=""
                                                        id="categoryFive"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="categoryFive"
                                                    ></label>
                                                </div>
                                            </td>
                                            <td>
                                                <a href="#!">
                                                    {" "}
                                                    <img
                                                        src="../assets/images/icons/toiletries.svg"
                                                        alt=""
                                                        className="icon-shape icon-sm"
                                                    />
                                                </a>
                                            </td>
                                            <td>
                                                <a href="#" className="text-reset">
                                                    Toiletries
                                                </a>
                                            </td>
                                            <td>23</td>
                                            <td>
                    <span className="badge bg-light-danger text-dark-danger">
                      Unpublished
                    </span>
                                            </td>
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
                                        <tr>
                                            <td>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        defaultValue=""
                                                        id="categorySeven"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="categorySeven"
                                                    ></label>
                                                </div>
                                            </td>
                                            <td>
                                                <a href="#!">
                                                    {" "}
                                                    <img
                                                        src="../assets/images/icons/dairy.svg"
                                                        alt=""
                                                        className="icon-shape icon-sm"
                                                    />
                                                </a>
                                            </td>
                                            <td>
                                                <a href="#" className="text-reset">
                                                    Dairy, Bread &amp; Eggs
                                                </a>
                                            </td>
                                            <td>16</td>
                                            <td>
                    <span className="badge bg-light-primary text-dark-primary">
                      Published
                    </span>
                                            </td>
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
                                        <tr>
                                            <td>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        defaultValue=""
                                                        id="categoryEight"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="categoryEight"
                                                    ></label>
                                                </div>
                                            </td>
                                            <td>
                                                <a href="#!">
                                                    {" "}
                                                    <img
                                                        src="../assets/images/icons/fish.svg"
                                                        alt=""
                                                        className="icon-shape icon-sm"
                                                    />
                                                </a>
                                            </td>
                                            <td>
                                                <a href="#" className="text-reset">
                                                    Chicken, Meat &amp; Fish
                                                </a>
                                            </td>
                                            <td>14</td>
                                            <td>
                    <span className="badge bg-light-primary text-dark-primary">
                      Published
                    </span>
                                            </td>
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
                                        <tr>
                                            <td>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        defaultValue=""
                                                        id="categoryNine"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="categoryNine"
                                                    ></label>
                                                </div>
                                            </td>
                                            <td>
                                                <a href="#!">
                                                    {" "}
                                                    <img
                                                        src="../assets/images/icons/fruit.svg"
                                                        alt=""
                                                        className="icon-shape icon-sm"
                                                    />
                                                </a>
                                            </td>
                                            <td>
                                                <a href="#" className="text-reset">
                                                    Fruits &amp; Vegetables
                                                </a>
                                            </td>
                                            <td>32</td>
                                            <td>
                    <span className="badge bg-light-primary text-dark-primary">
                      Published
                    </span>
                                            </td>
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
                                        <tr>
                                            <td>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        defaultValue=""
                                                        id="categoryTen"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="categoryTen"
                                                    ></label>
                                                </div>
                                            </td>
                                            <td>
                                                <a href="#!">
                                                    {" "}
                                                    <img
                                                        src="../assets/images/icons/petfoods.svg"
                                                        alt=""
                                                        className="icon-shape icon-sm"
                                                    />
                                                </a>
                                            </td>
                                            <td>
                                                <a href="#" className="text-reset">
                                                    Pet Food
                                                </a>
                                            </td>
                                            <td>25</td>
                                            <td>
                    <span className="badge bg-light-danger text-dark-danger">
                      Unpublished
                    </span>
                                            </td>
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
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="border-top d-md-flex justify-content-between align-items-center  px-6 py-6">
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

export default DashboardCategory;