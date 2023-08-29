import React from 'react';

const ShopSingleDetail = () => {
    return (
        <>
            <div className="d-flex flex-column">
                <div>
                    {/* img */}
                    {/* img */}
                    <img
                        src="../assets/images/stores-logo/stores-logo-1.svg"
                        alt=""
                        className="rounded-circle icon-shape icon-xxl"
                    />
                </div>
                {/* heading */}
                <div className="mt-4">
                    <h1 className="mb-1 h4">E-Grocery Super Market</h1>
                    <div className="small text-muted">
                        <span>Everyday store prices </span>
                    </div>
                    <div>
      <span>
        <small>
          <a href="#!">100% satisfaction guarantee</a>
        </small>
      </span>
                    </div>
                    {/* rating */}
                    <div className="mt-2">
                        {/* rating */}
                        <small className="text-warning">
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-half" />
                        </small>
                        <span className="ms-2">5.0</span>
                        {/* text */}
                        <span className="text-muted ms-1">(3,400 reviews)</span>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ShopSingleDetail;