import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

function BookInfo() {
    const [book, setBook] = useState(null)

    const { id } = useParams(); 
    
   
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
    }, [id]); 

    if (!book) {
        return <div>Loading book information...</div>;
    }

    return (
        <div className="book-info">
            <img src={book.image} alt={book.title} />
            <h2>{book.title}</h2>
            <p>Genre: {book.genre}</p>
            <p>Synopsis: {book.synopsis}</p>
        </div>
    );
}

export default BookInfo;
