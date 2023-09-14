import React from 'react';


const StarRating = ({ rating }) => {
    const maxStars = 5;

    const renderStars = () => {
        const filledStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const remainingStars = maxStars - filledStars - (hasHalfStar ? 1 : 0);

        const stars = [];

        // Render filled stars
        for (let i = 0; i < filledStars; i++) {
            stars.push(<i key={i} className="bi bi-star-fill text-warning" />);
        }

        // Render half star
        if (hasHalfStar) {
            stars.push(<i key="half" className="bi bi-star-half text-warning" />);
        }

        // Render remaining stars
        for (let i = 0; i < remainingStars; i++) {
            stars.push(<i key={filledStars + i} className="bi bi-star-fill text-muted" />);
        }

        return stars;
    };

    return <div>{renderStars()}</div>;
};

export default StarRating;