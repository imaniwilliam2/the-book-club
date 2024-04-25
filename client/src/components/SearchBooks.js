import React from "react";

function SearchBooks({searchBooks, updateSearch}) {
    
    return (
        <div className="searchbar">
            <label htmlFor="search">Search Books:</label>
            <input
            type="text"
            id="search"
            placeholder="TYPE TITLE TO FIND BOOK..."
            value={searchBooks} 
            onChange={updateSearch}
            />
        </div>
    )
}

export default SearchBooks