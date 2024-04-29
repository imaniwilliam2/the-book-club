import React from "react";

function SearchGenres({searchGenres, updateSearch}) {
    
    return (
        <div className="searchbar">
            <label htmlFor="search">Search Genres:</label>
            <input
            type="text"
            id="search"
            placeholder="TYPE GENRE TO FIND TYPE..."
            value={searchGenres} 
            onChange={updateSearch}
            />
        </div>
    )
}

export default SearchGenres