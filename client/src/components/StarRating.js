import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

function StarRating() {
    const [rating, setRating] = useState(() => {
        const savedRating = localStorage.getItem('rating');
        return savedRating ? parseInt(savedRating, 10) : null;
    });
    const [hover, setHover] = useState(null);

    useEffect(() => {
        localStorage.setItem('rating', rating);
    }, [rating]);

    return (
        <div className="flex justify-center my-5">
            {[...Array(5)].map((star, index) => {
                const currentRating = index + 1;
                return (
                    <label key={index}>
                        <input 
                            type="radio"
                            name="rating"
                            value={currentRating}
                            onClick={() => setRating(currentRating)}
                        />
                        <FaStar 
                            className="star" 
                            size={20} 
                            color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                            onMouseEnter={() => setHover(currentRating)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                )
            })}
        </div>
    );
}

export default StarRating;
