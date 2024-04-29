import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { useOutletContext } from "react-router-dom";

import ReviewForm from "./ReviewForm";

function BookInfo() {
    const [book, setBook] = useState(null)
    const [reviews, setReviews] = useState([])

    const { id } = useParams(); 
    const {addToRead, addToTBRead} = useOutletContext()
    
   
    useEffect(() => {
        fetch(`/books/${id}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(data => setBook(data))
            .catch(error => console.error("Error fetching book data:", error));

        fetch(`/books/${id}/reviews`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error('Network response not ok')
            })
            .then(data => setReviews(data))
            .catch(error => console.error('Error fetching books reviews:', error))
    }, [id]); 

    if (!book) {
        return <div>Loading book information...</div>;
    }

    function handleAddToRead() {
        addToRead(book)
    }

    function handleAddToTBRead() {
        addToTBRead(book)
    }


    return (
        <div className="book-info">
            <img src={book.image} alt={book.title} />
            <h2>{book.title}</h2>
            <p>Genre: {book.genre}</p>
            <p>Synopsis: {book.synopsis}</p>
            <div>
            <button className="add-button" onClick={handleAddToRead}>Read</button>
            <button className="add-tbr-button" onClick={handleAddToTBRead}>Want To Read</button>

            <div>
                <h1 className="book-reviews-title">Book Reviews</h1>

                <ul>
                    {reviews.map(review => (
                        <li key={review.id}><p>{review.text}</p></li>
                    ))}
                </ul>
            </div>
            {console.log("Book ID:", book.id)}
            <ReviewForm bookId={book.id} />

            </div>
        </div>
    );
}

export default BookInfo;
