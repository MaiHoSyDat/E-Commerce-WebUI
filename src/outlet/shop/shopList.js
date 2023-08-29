import React from 'react';
import Navbar from "../../components/navbar";

const ShopList = () => {
    return (
        <>
            <main>
                {/* section */}
                <section className="mt-8 ">
                    {/* container */}
                    <div className="container">
                        {/* row */}
                        <div className="row ">
                            <div className="col-12 ">
                                {/* heading */}
                                <div className="bg-light d-flex justify-content-between ps-md-10 ps-6 rounded">
                                    <div className="d-flex align-items-center">
                                        <h1 className="mb-0 fw-bold">Stores</h1>
                                    </div>
                                    <div className="py-6">
                                        {/* img */}
                                        {/* img */}
                                        <img
                                            src="../assets/images/svg-graphics/store-graphics.svg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-6 mb-lg-14 mb-8">
                    {/* container */}
                    <div className="container">
                        {/* row */}
                        <div className="row">
                            <div className="col-12">
                                <div className="mb-4">
                                    {/* title */}
                                    <h6>
                                        We have <span className="text-primary">36</span> vendors now
                                    </h6>
                                </div>
                            </div>
                        </div>
                        {/* row */}
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 g-lg-4">
                            {/* col */}
                            <div className="col">
                                {/* card */}
                                <div className="card flex-row p-8 card-product ">
                                    <div>
                                        {/* img */}
                                        <img
                                            src="../assets/images/stores-logo/stores-logo-1.svg"
                                            alt=""
                                            className="rounded-circle icon-shape icon-xl"
                                        />
                                    </div>
                                    {/* content */}
                                    <div className="ms-6">
                                        <h5 className="mb-1">
                                            <a href="#!" className="text-inherit">
                                                E-Grocery Super Market
                                            </a>
                                        </h5>
                                        <div className="small text-muted">
                                            <span>Organic</span>
                                            <span className="mx-1">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={4}
                      height={4}
                      fill="#C1C7C6"
                      className="bi bi-circle-fill align-middle "
                      viewBox="0 0 16 16"
                  >
                    <circle cx={8} cy={8} r={8} />
                  </svg>
                </span>
                                            <span>Groceries</span>
                                            <span className="mx-1">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={4}
                      height={4}
                      fill="#C1C7C6"
                      className="bi bi-circle-fill align-middle "
                      viewBox="0 0 16 16"
                  >
                    <circle cx={8} cy={8} r={8} />
                  </svg>
                </span>
                                            <span>Butcher Shop</span>
                                        </div>
                                        <div className="py-3">
                                            <ul className="list-unstyled mb-0 small">
                                                <li>Delivery</li>
                                                <li>Pickup available</li>
                                            </ul>
                                        </div>
                                        <div>
                                            {/* badge */}
                                            <div className="badge text-bg-light border">7.5 mi away</div>
                                            {/* badge */}
                                            <div className="badge text-bg-light border">
                                                In-store prices
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                {/* card */}
                                <div className="card flex-row p-8 card-product ">
                                    <div>
                                        {/* img */}
                                        <img
                                            src="../assets/images/stores-logo/stores-logo-2.svg"
                                            alt=""
                                            className="rounded-circle icon-shape icon-xl"
                                        />
                                    </div>
                                    {/* content */}
                                    <div className="ms-6">
                                        <h5 className="mb-1">
                                            <a href="#!" className="text-inherit">
                                                DealShare Mart
                                            </a>
                                        </h5>
                                        <div className="small text-muted">
                                            <span>Alcohol</span>{" "}
                                            <span className="mx-1">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={4}
                      height={4}
                      fill="#C1C7C6"
                      className="bi bi-circle-fill align-middle "
                      viewBox="0 0 16 16"
                  >
                    <circle cx={8} cy={8} r={8} />
                  </svg>
                </span>
                                            <span>Groceries</span>
                                        </div>
                                        <div className="py-3">
                                            <ul className="list-unstyled mb-0 small">
                                                <li>Delivery</li>
                                                <li>Pickup available</li>
                                            </ul>
                                        </div>
                                        <div>
                                            {/* badge */}
                                            <div className="badge text-bg-light border">7.2 mi away</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                {/* card */}
                                <div className="card flex-row p-8 card-product ">
                                    <div>
                                        {/* img */}
                                        <img
                                            src="../assets/images/stores-logo/stores-logo-3.svg"
                                            alt=""
                                            className="rounded-circle icon-shape icon-xl"
                                        />
                                    </div>
                                    {/* content */}
                                    <div className="ms-6">
                                        <h5 className="mb-1">
                                            <a href="#!" className="text-inherit">
                                                DMart
                                            </a>
                                        </h5>
                                        <div className="small text-muted">
                                            <span>Groceries</span>
                                            <span className="mx-1">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={4}
                      height={4}
                      fill="#C1C7C6"
                      className="bi bi-circle-fill align-middle "
                      viewBox="0 0 16 16"
                  >
                    <circle cx={8} cy={8} r={8} />
                  </svg>
                </span>
                                            <span>Bakery</span> <span>Deli</span>
                                        </div>
                                        <div className="py-3">
                                            <ul className="list-unstyled mb-0 small">
                                                <li>
                                                    <span className="text-primary">Delivery by 10:30pm</span>
                                                </li>
                                                <li>Pickup available</li>
                                            </ul>
                                        </div>
                                        <div>
                                            {/* badge */}
                                            <div className="badge text-bg-light border">9.3 mi away</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                {/* card */}
                                <div className="card flex-row p-8 card-product ">
                                    <div>
                                        {/* img */}
                                        <img
                                            src="../assets/images/stores-logo/stores-logo-4.svg"
                                            alt=""
                                            className="rounded-circle icon-shape icon-xl"
                                        />
                                    </div>
                                    {/* content */}
                                    <div className="ms-6">
                                        <h5 className="mb-1">
                                            <a href="#!" className="text-inherit">
                                                Blinkit Store
                                            </a>
                                        </h5>
                                        <div className="small text-muted">
                                            <span>Meal Kits</span>
                                            <span className="mx-1">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={4}
                      height={4}
                      fill="#C1C7C6"
                      className="bi bi-circle-fill align-middle "
                      viewBox="0 0 16 16"
                  >
                    <circle cx={8} cy={8} r={8} />
                  </svg>
                </span>
                                            <span>Prepared Meals</span>
                                            <span className="mx-1">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={4}
                      height={4}
                      fill="#C1C7C6"
                      className="bi bi-circle-fill align-middle "
                      viewBox="0 0 16 16"
                  >
                    <circle cx={8} cy={8} r={8} />
                  </svg>
                </span>
                                            <span>Organic</span>
                                        </div>
                                        <div className="py-3">
                                            <ul className="list-unstyled mb-0 small">
                                                <li>Delivery</li>
                                                <li>Pickup available</li>
                                            </ul>
                                        </div>
                                        <div>
                                            {/* badge */}
                                            <div className="badge text-bg-light border">40.5 mi away</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                {/* card */}
                                <div className="card flex-row p-8 card-product ">
                                    <div>
                                        {/* img */}
                                        <img
                                            src="../assets/images/stores-logo/stores-logo-5.svg"
                                            alt=""
                                            className="rounded-circle icon-shape icon-xl"
                                        />
                                    </div>
                                    {/* content */}
                                    <div className="ms-6">
                                        <h5 className="mb-1">
                                            <a href="#!" className="text-inherit">
                                                StoreFront Super Market
                                            </a>
                                        </h5>
                                        <div className="small text-muted">
                                            <span>Groceries</span>
                                            <span className="mx-1">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={4}
                      height={4}
                      fill="#C1C7C6"
                      className="bi bi-circle-fill align-middle "
                      viewBox="0 0 16 16"
                  >
                    <circle cx={8} cy={8} r={8} />
                  </svg>
                </span>
                                            <span>Bakery</span>
                                        </div>
                                        <div className="py-3">
                                            <ul className="list-unstyled mb-0 small">
                                                <li>
                                                    <span className="text-primary">Delivery by 11:30pm</span>
                                                </li>
                                                <li>Pickup available</li>
                                            </ul>
                                        </div>
                                        <div>
                                            {/* badge */}
                                            <div className="badge text-bg-light border">28.1 mi away</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                {/* card */}
                                <div className="card flex-row p-8 card-product ">
                                    <div>
                                        {/* img */}
                                        <img
                                            src="../assets/images/stores-logo/stores-logo-6.svg"
                                            alt=""
                                            className="rounded-circle icon-shape icon-xl"
                                        />
                                    </div>
                                    {/* content */}
                                    <div className="ms-6">
                                        <h5 className="mb-1">
                                            <a href="#!" className="text-inherit">
                                                BigBasket
                                            </a>
                                        </h5>
                                        <div className="small text-muted">
                                            <span>Groceries</span>
                                            <span className="mx-1">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={4}
                      height={4}
                      fill="#C1C7C6"
                      className="bi bi-circle-fill align-middle "
                      viewBox="0 0 16 16"
                  >
                    <circle cx={8} cy={8} r={8} />
                  </svg>
                </span>
                                            <span>Deli</span>
                                        </div>
                                        <div className="py-3">
                                            <ul className="list-unstyled mb-0 small">
                                                <li>
                                                    <span className="text-primary">Delivery by 10:30pm</span>
                                                </li>
                                                <li>Pickup available</li>
                                            </ul>
                                        </div>
                                        <div>
                                            {/* badge */}
                                            <div className="badge text-bg-light border">7.5 mi away</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                {/* card */}
                                <div className="card flex-row p-8 card-product ">
                                    <div>
                                        {/* img */}
                                        <img
                                            src="../assets/images/stores-logo/stores-logo-7.svg"
                                            alt=""
                                            className="rounded-circle icon-shape icon-xl"
                                        />
                                    </div>
                                    {/* content */}
                                    <div className="ms-6">
                                        <h5 className="mb-1">
                                            <a href="#!" className="text-inherit">
                                                Swiggy Instamart
                                            </a>
                                        </h5>
                                        <div className="small text-muted">
                                            <span>Meal Kits</span>
                                            <span className="mx-1">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={4}
                      height={4}
                      fill="#C1C7C6"
                      className="bi bi-circle-fill align-middle "
                      viewBox="0 0 16 16"
                  >
                    <circle cx={8} cy={8} r={8} />
                  </svg>
                </span>
                                            <span>Prepared Meals</span>
                                            <span className="mx-1">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={4}
                      height={4}
                      fill="#C1C7C6"
                      className="bi bi-circle-fill align-middle "
                      viewBox="0 0 16 16"
                  >
                    <circle cx={8} cy={8} r={8} />
                  </svg>
                </span>{" "}
                                            <span>Organic</span>
                                        </div>
                                        <div className="py-3">
                                            <ul className="list-unstyled mb-0 small">
                                                <li>Delivery</li>
                                                <li>Pickup available</li>
                                            </ul>
                                        </div>
                                        <div>
                                            {/* badge */}
                                            <div className="badge text-bg-light border">40.5 mi away</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                {/* card */}
                                <div className="card flex-row p-8 card-product ">
                                    <div>
                                        {/* img */}
                                        <img
                                            src="../assets/images/stores-logo/stores-logo-8.svg"
                                            alt=""
                                            className="rounded-circle icon-shape icon-xl"
                                        />
                                    </div>
                                    {/* content */}
                                    <div className="ms-6">
                                        <h5 className="mb-1">
                                            <a href="#!" className="text-inherit">
                                                Online Grocery Mart
                                            </a>
                                        </h5>
                                        <div className="small text-muted">
                                            <span>Groceries</span>
                                            <span className="mx-1">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={4}
                      height={4}
                      fill="#C1C7C6"
                      className="bi bi-circle-fill align-middle "
                      viewBox="0 0 16 16"
                  >
                    <circle cx={8} cy={8} r={8} />
                  </svg>
                </span>
                                            <span>Bakery</span>
                                        </div>
                                        <div className="py-3">
                                            <ul className="list-unstyled mb-0 small">
                                                <li>
                                                    <span className="text-primary">Delivery by 11:30pm</span>
                                                </li>
                                                <li>Pickup available</li>
                                            </ul>
                                        </div>
                                        <div>
                                            {/* badge */}
                                            <div className="badge text-bg-light border">28.1 mi away</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                {/* card */}
                                <div className="card flex-row p-8 card-product ">
                                    <div>
                                        {/* img */}
                                        <img
                                            src="../assets/images/stores-logo/stores-logo-9.svg"
                                            alt=""
                                            className="rounded-circle icon-shape icon-xl"
                                        />
                                    </div>
                                    {/* content */}
                                    <div className="ms-6">
                                        <h5 className="mb-1">
                                            <a href="#!" className="text-inherit">
                                                Spencers
                                            </a>
                                        </h5>
                                        <div className="small text-muted">
                                            <span>Groceries</span>
                                            <span className="mx-1">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={4}
                      height={4}
                      fill="#C1C7C6"
                      className="bi bi-circle-fill align-middle "
                      viewBox="0 0 16 16"
                  >
                    <circle cx={8} cy={8} r={8} />
                  </svg>
                </span>
                                            <span>Deli</span>
                                        </div>
                                        <div className="py-3">
                                            <ul className="list-unstyled mb-0 small">
                                                <li>
                                                    <span className="text-primary">Delivery by 10:30pm</span>
                                                </li>
                                                <li>Pickup available</li>
                                            </ul>
                                        </div>
                                        <div>
                                            {/* badge */}
                                            <div className="badge text-bg-light border">7.5 mi away</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mb-lg-14 mb-8">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="mb-6">
                                    <h3 className="mb-0">Recently viewed</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-4 g-lg-4">
                            <div className="col">
                                <div className="card flex-row p-8 card-product  ">
                                    <div>
                                        {/* img */}
                                        <img
                                            src="../assets/images/stores-logo/stores-logo-4.svg"
                                            alt=""
                                            className="rounded-circle icon-shape icon-xl"
                                        />
                                    </div>
                                    {/* content */}
                                    <div className="ms-6">
                                        <h5 className="mb-1">
                                            <a href="#!" className="text-inherit">
                                                Blinkit Store
                                            </a>
                                        </h5>
                                        <div className="small text-muted">
                                            <span>Meal Kits</span>
                                            <span className="mx-1">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={4}
                      height={4}
                      fill="#C1C7C6"
                      className="bi bi-circle-fill align-middle "
                      viewBox="0 0 16 16"
                  >
                    <circle cx={8} cy={8} r={8} />
                  </svg>
                </span>
                                            <span>Prepared Meals</span>
                                            <span className="mx-1">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={4}
                      height={4}
                      fill="#C1C7C6"
                      className="bi bi-circle-fill align-middle "
                      viewBox="0 0 16 16"
                  >
                    <circle cx={8} cy={8} r={8} />
                  </svg>
                </span>
                                            <span>Organic</span>
                                        </div>
                                        <div className="py-3">
                                            <ul className="list-unstyled mb-0 small">
                                                <li>Delivery</li>
                                                <li>Pickup available</li>
                                            </ul>
                                        </div>
                                        <div>
                                            {/* badge */}
                                            <div className="badge text-bg-light border">40.5 mi away</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                {/* card */}
                                <div className="card flex-row p-8 card-product ">
                                    <div>
                                        {/* img */}
                                        <img
                                            src="../assets/images/stores-logo/stores-logo-5.svg"
                                            alt=""
                                            className="rounded-circle icon-shape icon-xl"
                                        />
                                    </div>
                                    {/* content */}
                                    <div className="ms-6">
                                        <h5 className="mb-1">
                                            <a href="#!" className="text-inherit">
                                                StoreFront Super Market
                                            </a>
                                        </h5>
                                        <div className="small text-muted">
                                            <span>Groceries</span>
                                            <span className="mx-1">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={4}
                      height={4}
                      fill="#C1C7C6"
                      className="bi bi-circle-fill align-middle "
                      viewBox="0 0 16 16"
                  >
                    <circle cx={8} cy={8} r={8} />
                  </svg>
                </span>
                                            <span>Bakery</span>
                                        </div>
                                        <div className="py-3">
                                            <ul className="list-unstyled mb-0 small">
                                                <li>
                                                    <span className="text-primary">Delivery by 11:30pm</span>
                                                </li>
                                                <li>Pickup available</li>
                                            </ul>
                                        </div>
                                        <div>
                                            {/* badge */}
                                            <div className="badge text-bg-light border">28.1 mi away</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                {/* card */}
                                <div className="card flex-row p-8 card-product ">
                                    <div>
                                        {/* img */}
                                        <img
                                            src="../assets/images/stores-logo/stores-logo-6.svg"
                                            alt=""
                                            className="rounded-circle icon-shape icon-xl"
                                        />
                                    </div>
                                    {/* content */}
                                    <div className="ms-6">
                                        <h5 className="mb-1">
                                            <a href="#!" className="text-inherit">
                                                BigBasket
                                            </a>
                                        </h5>
                                        <div className="small text-muted">
                                            <span>Groceries</span>
                                            <span className="mx-1">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={4}
                      height={4}
                      fill="#C1C7C6"
                      className="bi bi-circle-fill align-middle "
                      viewBox="0 0 16 16"
                  >
                    <circle cx={8} cy={8} r={8} />
                  </svg>
                </span>
                                            <span>Deli</span>
                                        </div>
                                        <div className="py-3">
                                            <ul className="list-unstyled mb-0 small">
                                                <li>
                                                    <span className="text-primary">Delivery by 10:30pm</span>
                                                </li>
                                                <li>Pickup available</li>
                                            </ul>
                                        </div>
                                        <div>
                                            {/* badge */}
                                            <div className="badge text-bg-light border">7.5 mi away</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                {/* card */}
                                <div className="card flex-row p-8 card-product ">
                                    <div>
                                        {/* img */}
                                        <img
                                            src="../assets/images/stores-logo/stores-logo-7.svg"
                                            alt=""
                                            className="rounded-circle icon-shape icon-xl"
                                        />
                                    </div>
                                    {/* content */}
                                    <div className="ms-6">
                                        <h5 className="mb-1">
                                            <a href="#!" className="text-inherit">
                                                Swiggy Instamart
                                            </a>
                                        </h5>
                                        <div className="small text-muted">
                                            <span>Meal Kits</span>
                                            <span className="mx-1">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={4}
                      height={4}
                      fill="#C1C7C6"
                      className="bi bi-circle-fill align-middle "
                      viewBox="0 0 16 16"
                  >
                    <circle cx={8} cy={8} r={8} />
                  </svg>
                </span>
                                            <span>Prepared Meals</span>
                                            <span className="mx-1">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={4}
                      height={4}
                      fill="#C1C7C6"
                      className="bi bi-circle-fill align-middle "
                      viewBox="0 0 16 16"
                  >
                    <circle cx={8} cy={8} r={8} />
                  </svg>
                </span>{" "}
                                            <span>Organic</span>
                                        </div>
                                        <div className="py-3">
                                            <ul className="list-unstyled mb-0 small">
                                                <li>Delivery</li>
                                                <li>Pickup available</li>
                                            </ul>
                                        </div>
                                        <div>
                                            {/* badge */}
                                            <div className="badge text-bg-light border">40.5 mi away</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                {/* card */}
                                <div className="card flex-row p-8 card-product ">
                                    <div>
                                        {/* img */}
                                        <img
                                            src="../assets/images/stores-logo/stores-logo-8.svg"
                                            alt=""
                                            className="rounded-circle icon-shape icon-xl"
                                        />
                                    </div>
                                    {/* content */}
                                    <div className="ms-6">
                                        <h5 className="mb-1">
                                            <a href="#!" className="text-inherit">
                                                Online Grocery Mart
                                            </a>
                                        </h5>
                                        <div className="small text-muted">
                                            <span>Groceries</span>
                                            <span className="mx-1">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={4}
                      height={4}
                      fill="#C1C7C6"
                      className="bi bi-circle-fill align-middle "
                      viewBox="0 0 16 16"
                  >
                    <circle cx={8} cy={8} r={8} />
                  </svg>
                </span>
                                            <span>Bakery</span>
                                        </div>
                                        <div className="py-3">
                                            <ul className="list-unstyled mb-0 small">
                                                <li>
                                                    <span className="text-primary">Delivery by 11:30pm</span>
                                                </li>
                                                <li>Pickup available</li>
                                            </ul>
                                        </div>
                                        <div>
                                            {/* badge */}
                                            <div className="badge text-bg-light border">28.1 mi away</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                {/* card */}
                                <div className="card flex-row p-8 card-product ">
                                    <div>
                                        {/* img */}
                                        <img
                                            src="../assets/images/stores-logo/stores-logo-9.svg"
                                            alt=""
                                            className="rounded-circle icon-shape icon-xl"
                                        />
                                    </div>
                                    {/* content */}
                                    <div className="ms-6">
                                        <h5 className="mb-1">
                                            <a href="#!" className="text-inherit">
                                                Spencers
                                            </a>
                                        </h5>
                                        <div className="small text-muted">
                                            <span>Groceries</span>
                                            <span className="mx-1">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={4}
                      height={4}
                      fill="#C1C7C6"
                      className="bi bi-circle-fill align-middle "
                      viewBox="0 0 16 16"
                  >
                    <circle cx={8} cy={8} r={8} />
                  </svg>
                </span>
                                            <span>Deli</span>
                                        </div>
                                        <div className="py-3">
                                            <ul className="list-unstyled mb-0 small">
                                                <li>
                                                    <span className="text-primary">Delivery by 10:30pm</span>
                                                </li>
                                                <li>Pickup available</li>
                                            </ul>
                                        </div>
                                        <div>
                                            {/* badge */}
                                            <div className="badge text-bg-light border">7.5 mi away</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default ShopList;