import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";

function TBReadPage() {
  const { toBeReadBooks, deleteFromTBRead, books } = useOutletContext();
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
    
    fetch(`/tbread/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ favorite: !favorites.includes(id) })
    })
    .then(res => {
      if (!res.ok) {
        throw new Error("Failed to update favorite status");
      }
    })
    .catch(error => {
      console.error('Error updating favorite status:', error);
    });
  }

  function isFavorite(id) {
    return favorites.includes(id);
  }

  function handleDelete(id) {
    deleteFromTBRead(id);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Want to Read Books</h1>
      {toBeReadBooks.length === 0 ? (
        <p>No books added yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {toBeReadBooks.map((tbReadBook) => {
            const book = books.find(book => book.title === tbReadBook.title);
            if (!book) return null; 
            return (
              <div key={tbReadBook.id} className="flex flex-col items-center bg-white p-4 rounded-md shadow-md">
                <img className="w-32 h-auto mb-2" src={book.image} alt={book.title} />
                <h2 className="text-lg font-semibold mb-2"><Link to={`/books/${book.id}`}>{book.title}</Link></h2>
                <div className="flex items-center space-x-2 mb-2">
                  <button className={`like-button ${isFavorite(tbReadBook.id) ? 'text-red-500' : 'text-gray-500'}`} onClick={() => toggleFavorite(tbReadBook.id)}>
                    {isFavorite(tbReadBook.id) ? "❤️" : "♡"}
                  </button>
                  <button className="delete-button bg-red-500 text-white px-2 py-1 rounded-md" onClick={() => handleDelete(tbReadBook.id)}>Delete</button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default TBReadPage;
