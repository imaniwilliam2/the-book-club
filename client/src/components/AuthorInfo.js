import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function AuthorInfo() {
    const [author, setAuthor] = useState(null);
    const [books, setBooks] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        fetch(`/authors/${id}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(data => setAuthor(data))
            .catch(error => console.error("Error fetching author data:", error));

        fetch(`/authors/${id}/books`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response not ok.");
            })
            .then(data => setBooks(data))
            .catch(error => console.error("Error fetching authors books: ", error));
    }, [id]);

    if (!author) {
        return <div>Loading author information...</div>;
    }

    return (
        <div className="author-info flex flex-col items-center">
            <img src={author.image} alt={author.name} className="my-8" />
            <h2 className="text-2xl font-bold">{author.name}</h2>
            <p className="text-center max-w-lg mx-auto">Bio: {author.bio}</p>

            <div className="authors-books-container">
                <h1 className="authors-books-title text-2xl font-semibold mb-4 text-center border-b-2 border-orange-800 pb-2 my-9">Author's Books</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {books.map(book => (
                        <div key={book.id} className="flex flex-col items-center">
                            <img src={book.image} alt={book.title} className="w-auto h-16"  />

                            <h3 className="text-lg font-semibold hover:underline "><Link to={`/books/${book.id}`}>{book.title}</Link></h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AuthorInfo;
