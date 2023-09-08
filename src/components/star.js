import React from 'react';

const Star = ({num}) => {
    const paragraphs = [];
    for (let i = 0; i < num; i++) {
        paragraphs.push(<i className="bi bi-star-fill" />);
    }
    return (
        <small className="text-warning">
            {paragraphs}
        </small>
    );
};

export default Star;