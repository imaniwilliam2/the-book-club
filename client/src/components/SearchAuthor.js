import React from "react";

function SearchAuthor({searchAuthors, updateSearch}) {
    
    return (
        <div className="searchbar">
            <label htmlFor="search">Search Authors:</label>
            <input
            type="text"
            id="search"
            placeholder="TYPE TITLE TO FIND AUTHOR..."
            value={searchAuthors} 
            onChange={updateSearch}
            />
        </div>
    )
}

export default SearchAuthor