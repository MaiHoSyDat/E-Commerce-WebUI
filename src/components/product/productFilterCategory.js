import React from 'react';

const ProductFilterCategory = () => {
    return (
        <>
            <div className="mb-8">
                {/* title */}
                <h5 className="mb-3">Categories</h5>
                {/* nav */}
                <ul className="nav nav-category" id="categoryCollapseMenu">
                    <li className="nav-item border-bottom w-100 ">
                        <a
                            href="#"
                            className="nav-link collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#categoryFlushOne"
                            aria-expanded="false"
                            aria-controls="categoryFlushOne"
                        >
                            Dairy, Bread &amp; Eggs{" "}
                            <i className="feather-icon icon-chevron-right" />
                        </a>
                        {/* accordion collapse */}
                        <div
                            id="categoryFlushOne"
                            className="accordion-collapse collapse"
                            data-bs-parent="#categoryCollapseMenu"
                        >
                            <div>
                                {/* nav */}
                                <ul className="nav flex-column ms-3">
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a href="#!" className="nav-link">
                                            Milk
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a href="#!" className="nav-link">
                                            Milk Drinks
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a href="#!" className="nav-link">
                                            Curd &amp; Yogurt
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a href="#!" className="nav-link">
                                            Eggs
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a href="#!" className="nav-link">
                                            Bread
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a href="#!" className="nav-link">
                                            Buns &amp; Bakery
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a href="#!" className="nav-link">
                                            Butter &amp; More
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a href="#!" className="nav-link">
                                            Cheese
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a href="#!" className="nav-link">
                                            Paneer &amp; Tofu
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a href="#!" className="nav-link">
                                            Cream &amp; Whitener
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a href="#!" className="nav-link">
                                            Condensed Milk
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a href="#!" className="nav-link">
                                            Vegan Drinks
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    {/* nav item */}
                    <li className="nav-item border-bottom w-100 ">
                        <a
                            href="#"
                            className="nav-link collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwo"
                        >
                            Snacks &amp; Munchies <i className="feather-icon icon-chevron-right" />
                        </a>
                        {/* collapse */}
                        <div
                            id="flush-collapseTwo"
                            className="accordion-collapse collapse"
                            data-bs-parent="#categoryCollapseMenu"
                        >
                            <div>
                                <ul className="nav flex-column ms-3">
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a href="#!" className="nav-link">
                                            Chips &amp; Crisps
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a href="#!" className="nav-link">
                                            Nachos
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a href="#!" className="nav-link">
                                            Popcorn
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a href="#!" className="nav-link">
                                            Bhujia &amp; Mixtures
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a href="#!" className="nav-link">
                                            Namkeen Snacks
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a href="#!" className="nav-link">
                                            Healthy Snacks
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a href="#!" className="nav-link">
                                            Cakes &amp; Rolls
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a href="#!" className="nav-link">
                                            Energy Bars
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a href="#!" className="nav-link">
                                            Papad &amp; Fryums
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a href="#!" className="nav-link">
                                            Rusks &amp; Wafers
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item border-bottom w-100 ">
                        <a
                            href="#"
                            className="nav-link collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree"
                            aria-expanded="false"
                            aria-controls="flush-collapseThree"
                        >
                            Fruits &amp; Vegetables{" "}
                            <i className="feather-icon icon-chevron-right" />
                        </a>
                        {/* collapse */}
                        <div
                            id="flush-collapseThree"
                            className="accordion-collapse collapse"
                            data-bs-parent="#categoryCollapseMenu"
                        >
                            <div>
                                <ul className="nav flex-column ms-3">
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#!">
                                            Fresh Vegetables
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!">
                                            Herbs &amp; Seasonings
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!">
                                            Fresh Fruits
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!">
                                            Organic Fruits &amp; Vegetables
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!">
                                            Cuts &amp; Sprouts
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!">
                                            Exotic Fruits &amp; Veggies
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!">
                                            Flower Bouquets, Bunches
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item border-bottom w-100 ">
                        <a
                            href="#"
                            className="nav-link collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseFour"
                            aria-expanded="false"
                            aria-controls="flush-collapseFour"
                        >
                            Cold Drinks &amp; Juices{" "}
                            <i className="feather-icon icon-chevron-right" />
                        </a>
                        {/* collapse */}
                        <div
                            id="flush-collapseFour"
                            className="accordion-collapse collapse"
                            data-bs-parent="#categoryCollapseMenu"
                        >
                            <div>
                                <ul className="nav flex-column ms-3">
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a href="#!" className="nav-link">
                                            Soft Drinks
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a href="#!" className="nav-link">
                                            Fruit Juices
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a href="#!" className="nav-link">
                                            Coldpress
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a href="#!" className="nav-link">
                                            Energy Drinks
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a href="#!" className="nav-link">
                                            Water &amp; Ice Cubes
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a href="#!" className="nav-link">
                                            Soda &amp; Mixers
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a href="#!" className="nav-link">
                                            Concentrates &amp; Syrups
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a href="#!" className="nav-link">
                                            Detox &amp; Energy Drinks
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a href="#!" className="nav-link">
                                            Juice Collection
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item border-bottom w-100 ">
                        <a
                            href="#"
                            className="nav-link collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseFive"
                            aria-expanded="false"
                            aria-controls="flush-collapseFive"
                        >
                            Breakfast &amp; Instant Food{" "}
                            <i className="feather-icon icon-chevron-right" />
                        </a>
                        {/* collapse */}
                        <div
                            id="flush-collapseFive"
                            className="accordion-collapse collapse"
                            data-bs-parent="#categoryCollapseMenu"
                        >
                            <div>
                                <ul className="nav flex-column ms-3">
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#!">
                                            Batter
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!">
                                            Breakfast Cereal
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!">
                                            Noodles, Pasta &amp; Soup
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!">
                                            Frozen Non-Veg Snackss
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!">
                                            Frozen Veg
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!">
                                            Vermicelli
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!">
                                            Instant Mixes
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item border-bottom w-100 ">
                        <a
                            href="#"
                            className="nav-link collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseSix"
                            aria-expanded="false"
                            aria-controls="flush-collapseSix"
                        >
                            Bakery &amp; Biscuits <i className="feather-icon icon-chevron-right" />
                        </a>
                        {/* collapse */}
                        <div
                            id="flush-collapseSix"
                            className="accordion-collapse collapse"
                            data-bs-parent="#categoryCollapseMenu"
                        >
                            <div>
                                <ul className="nav flex-column ms-3">
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#!">
                                            Cookies
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!">
                                            Glucose &amp; Marie
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!">
                                            Sweet &amp; Salty
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!">
                                            Healthy &amp; Digestive
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!">
                                            Cream Biscuits
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!">
                                            Rusks &amp; Wafers
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!">
                                            Cakes &amp; Rolls
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!">
                                            Buns &amp; Bakery
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item border-bottom w-100 ">
                        <a
                            href="#"
                            className="nav-link collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseSeven"
                            aria-expanded="false"
                            aria-controls="flush-collapseSeven"
                        >
                            Chicken, Meat &amp; Fish{" "}
                            <i className="feather-icon icon-chevron-right" />
                        </a>
                        {/* collapse */}
                        <div
                            id="flush-collapseSeven"
                            className="accordion-collapse collapse"
                            data-bs-parent="#categoryCollapseMenu"
                        >
                            <div>
                                <ul className="nav flex-column ms-3">
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#!">
                                            Chicken
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!">
                                            Sausage, Salami &amp; Ham
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!">
                                            Exotic Meat
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!">
                                            Eggs
                                        </a>
                                    </li>
                                    {/* nav item */}
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!">
                                            Frozen Non-Veg Snacks
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

        </>
    );
};

export default ProductFilterCategory;