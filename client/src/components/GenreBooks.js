import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function GenreBooks() {
    const [genre, setGenre] = useState(null);
    const [books, setBooks] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        fetch(`/genres/${id}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response not ok.");
            })
            .then(data => setGenre(data))
            .catch(error => console.error("Error fetching genre data:", error));

        fetch(`/genres/${id}/books`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response not ok.");
            })
            .then(data => setBooks(data))
            .catch(error => console.error("Error fetching genres books:", error));
    }, [id]);

    if (!genre) {
        return <div>Loading genre information...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-semibold mb-4 text-center">{genre.type} Books</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {books.map(book => (
                    <div key={book.id} className="flex flex-col items-center bg-white p-4 rounded-md shadow-md">
                        <img src={book.image} alt={book.title} className="w-32 h-auto mb-2" />
                        <h2 className="text-lg font-semibold mb-2 hover:underline"><Link to={`/books/${book.id}`}>{book.title}</Link></h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GenreBooks;
