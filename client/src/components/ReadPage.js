import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";

function ReadPage() {
    const { readBooks, deleteFromRead } = useOutletContext();
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem("favorites");
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    function toggleFavorite(id) {
        const updatedFavorites = favorites.includes(id)
            ? favorites.filter(favoriteId => favoriteId !== id)
            : [...favorites, id];
        setFavorites(updatedFavorites);
    }

    function isFavorite(id) {
        return favorites.includes(id);
    }

    function handleDelete(id) {
        deleteFromRead(id);
    }

    return (
        <>
            <div className="read-container">
                <ul className="read-list">
                    {readBooks.map((book) => (
                        <li className="read-books" key={book.id}>
                            <img className="read-img" src={book.image} alt={book.title}/>
                            <h2><Link to={`/books/${book.id}`}>{book.title}</Link></h2>
                            <button className="like-button" onClick={() => toggleFavorite(book.id)}>
                                {isFavorite(book.id) ? "❤️" : "♡"}
                            </button>
                            <button className="delete-button" onClick={() => handleDelete(book.id)}>X</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default ReadPage;
