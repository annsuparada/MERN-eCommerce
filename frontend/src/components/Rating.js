import React from 'react'

const Rating = ({ value, text, color }) => {
    const starClassName = (value, fullStart, halfStar) => {
        if (value >= fullStart) {
            return 'fas fa-star'
        } else if (value >= halfStar) {
            return 'fas fa-star-half-alt'
        } else {
            return 'far fa-star'
        }
    };

    return (
        <div className='rating'>
            <span>
            <i className={starClassName(value, 1, 0.5)} style={{color}}></i>
            <i className={starClassName(value, 2, 1.5)} style={{color}}></i>
            <i className={starClassName(value, 3, 2.5)} style={{color}}></i>
            <i className={starClassName(value, 4, 3.5)} style={{color}}></i>
            <i className={starClassName(value, 5, 4.5)} style={{color}}></i>
            </span>
            <span> {text && text}</span>
        </div>
    )
}

Rating.defaultProps = {
    color: '#f8e825'
}

export default Rating;
