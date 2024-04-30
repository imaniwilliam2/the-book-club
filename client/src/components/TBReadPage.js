import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";


function TBReadPage() {
  const { toBeReadBooks, deleteFromTBRead } = useOutletContext()
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
    deleteFromTBRead(id)
}

    return (
      <>
        <div className="tbread-container">
            <ul className="tbread-list">
                {toBeReadBooks.map((book) => (
                    <li className="tbread-books" key={book.id}>
                        <img className="tbread-img" src={book.image} alt={book.title}/>
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
  
export default TBReadPage;