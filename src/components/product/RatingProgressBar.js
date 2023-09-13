import React from 'react';

const RatingProgressBar = ({ rating, percentage }) => {
    return (
        <div className="d-flex align-items-center mb-2">
            <div className="text-nowrap me-3 text-muted">
                <span className="d-inline-block align-middle text-muted">{rating}</span>
                <i className="bi bi-star-fill ms-1 small text-warning" />
            </div>
            <div className="w-100">
                <div className="progress" style={{ height: 6 }}>
                    <div
                        className="progress-bar bg-warning"
                        role="progressbar"
                        style={{ width: `${percentage}%` }}
                        aria-valuenow={percentage}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    />
                </div>
            </div>
            <span className="text-muted ms-3">{percentage}%</span>
        </div>
    );
};

export default RatingProgressBar;