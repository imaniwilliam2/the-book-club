import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


function GenreBooks() {
    const [genre, setGenre] = useState(null)
    const [books, setBooks] = useState([])

    const { id } = useParams();

    useEffect(() => {
        fetch(`/genres/${id}`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error("Network response not ok.")
            })
            .then(data => setGenre(data))
            .catch(error => console.error("Error fetching genre data:", error))

        fetch(`/genres/${id}/books`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error('Network response not ok.')
            })
            .then(data => setBooks(data))
            .catch(error => console.error('Error fetching genres books:', error))
    }, [id])
    
    if (!genre) {
        return <div>Loading genre information...</div>
    }

    return (
        <div>
            <h1>{genre.type} Books</h1>

            <div>
                <ul>
                    {books.map(book => (
                        <li key={book.id}><img className="genre-book-img" src={book.image} alt="book-title"/>
                        <h2><Link to={`/books/${book.id}`}>{book.title}</Link></h2></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default GenreBooks
