import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import ReviewForm from "./ReviewForm";
import { FaStar } from 'react-icons/fa';
import { IoPersonCircle } from "react-icons/io5";



function BookInfo() {
    const [book, setBook] = useState(null);
    const [reviews, setReviews] = useState([]);

    const { id } = useParams();
    const { addToRead, addToTBRead, addToReviews } = useOutletContext();

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
                    return response.json();
                }
                throw new Error("Network response not ok");
            })
            .then(data => setReviews(data))
            .catch(error => console.error("Error fetching book reviews:", error));
    }, [id]);

    if (!book) {
        return <div>Loading book information...</div>;
    }

    function handleAddToRead() {
        addToRead(book);
    }

    function handleAddToTBRead() {
        addToTBRead(book);
    }

    function updateReviewState(newReview) {
        setReviews([...reviews, newReview]);
    }
    
    return (
        <div className="container mx-auto px-4 py-8">
            <img className="block mx-auto my-10 w-64 h-auto shadow-lg shadow-color-black md" src={book.image} alt={book.title} />
            <h2 className="text-2xl text-center">{book.title}</h2>
            <p className="text-center">Genre: {book.genre}</p>
            <p className="text-center max-w-lg mx-auto">{book.synopsis}</p>

            <div className="flex justify-center mt-8 space-x-4">
                <button className="text-lg px-4 py-2 bg-stone-500 hover:bg-stone-400 text-white font-bold rounded-lg focus:outline-none focus:shadow-outline" onClick={handleAddToRead}>
                    Read
                </button>
                <button className="text-lg px-4 py-2 bg-stone-400 hover:bg-stone-500 text-white font-bold rounded-lg focus:outline-none focus:shadow-outline" onClick={handleAddToTBRead}>
                    Want To Read
                </button>
            </div>
            
            <h1 className="text-center text-2xl font-semibold mt-20">Reviews</h1>
            <div className="mt-10 p-4 border rounded-lg max-w-lg mx-auto overflow-y-auto h-64">
                <ul>
                    {reviews.map((review, index) => (
                        <li key={index} className="flex items-center mb-4">
                            <div className="mr-2">
                                <IoPersonCircle className="text-gray-500" />
                            </div>
                            <div>
                                <span style={{ display: "flex", alignItems: "center" }}>
                                    {[...Array(review.rating)].map((_, i) => (
                                        <FaStar key={i} className="text-yellow-500" />
                                    ))}
                                    {Array(5 - review.rating).fill().map((_, i) => (
                                        <FaStar key={i} className="text-gray-300" />
                                    ))}
                                </span>
                                <p>{review.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-8">
                <ReviewForm bookId={book.id} addToReviews={addToReviews} updateReviewState={updateReviewState}/>
            </div>
        </div>
    );
}

export default BookInfo;
