import React from 'react';
import ProductFilterCategory from "../../components/product/productFilterCategory";
import ProductFilterShop from "../../components/product/productFilterShop";
import ProductFilterPrice from "../../components/product/productFilterPrice";
import ProductFilterRating from "../../components/product/productFilterRating";
import ProductFilterFreshImage from "../../components/product/productFilterFreshImage";
import ProductFilterCategoryView from "../../components/product/productFilterCategoryView";
import ProductFilterSort from "../../components/product/productFilterSort";
import ProductFilterShow from "../../components/product/productFilterShow";

const ProductFilter = () => {
    return (
        <main>
            <div className=" mt-8 mb-lg-14 mb-8">
                <div className="container">
                    <div className="row gx-10">
                        <aside className="col-lg-3 col-md-4 mb-6 mb-md-0">
                            <div
                                className="offcanvas offcanvas-start offcanvas-collapse w-md-50 "
                                tabIndex={-1}
                                id="offcanvasCategory"
                                aria-labelledby="offcanvasCategoryLabel"
                            >
                                <div className="offcanvas-header d-lg-none">
                                    <h5 className="offcanvas-title" id="offcanvasCategoryLabel">
                                        Filter
                                    </h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="offcanvas"
                                        aria-label="Close"
                                    />
                                </div>
                                <div className="offcanvas-body ps-lg-2 pt-lg-0">
                                    <ProductFilterCategory></ProductFilterCategory>
                                    <ProductFilterShop></ProductFilterShop>
                                    <ProductFilterPrice></ProductFilterPrice>
                                    {/* rating */}
                                    <ProductFilterRating></ProductFilterRating>
                                    <ProductFilterFreshImage></ProductFilterFreshImage>
                                </div>
                            </div>
                        </aside>
                        <section className="col-lg-9 col-md-12">
                            {/* card */}
                            <ProductFilterCategoryView></ProductFilterCategoryView>
                            {/* list icon */}
                            <ProductFilterSort></ProductFilterSort>
                            {/* row */}
                            <ProductFilterShow></ProductFilterShow>
                        </section>
                    </div>
                </div>
            </div>
        </main>

    );
};

export default ProductFilter;