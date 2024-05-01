import React from "react";

function SearchGenres({searchGenres, updateSearch}) {
    
    return (
        <div className="searchbar flex items-center justify-center bg-gray-100 rounded-md p-4 shadow-md">
            <label htmlFor="search" className="mr-2">Search Genres:</label>
            <input
            type="text"
            id="search"
            placeholder="Type genre to find type..."
            value={searchGenres} 
            onChange={updateSearch}
            className="border-2 border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-orange-800 w-full md:w-auto"
            />
        </div>
    )
}

export default SearchGenres