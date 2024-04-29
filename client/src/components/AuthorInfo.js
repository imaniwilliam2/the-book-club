import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";

function AuthorInfo() {
    const [author, setAuthor] = useState(null)
    const [books, setBooks] = useState([]) 

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
                    return response.json()
                }
                throw new Error('Network response not ok.')
            })
            .then(data => setBooks(data))
            .catch(error => console.error('Error fetching authors books: ', error))
    }, [id]); 

    if (!author) {
        return <div>Loading author information...</div>;
    }

    return (
        <div className="author-info">
            <img src={author.image} alt={author.name} />
            <h2>{author.name}</h2>
            <p>Bio: {author.bio}</p>

            <div>
                <h1 className="authors-books-title">Author's Books</h1>
                <ul>
                    {books.map(book => (
                        <li key={book.id}><img className="author-book-img" src={book.image} alt="book-title"/>
                             <h2><Link to={`/books/${book.id}`}>{book.title}</Link></h2></li>
                    ))}
                </ul>
            </div>

        </div>
    );
}

export default AuthorInfo;
