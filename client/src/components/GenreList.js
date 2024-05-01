import { useOutletContext } from "react-router-dom";
import Genre from "./Genre";
import { useState } from "react";
import SearchGenres from "./SearchGenres";
import ViewNav from "./ViewNav";

function GenreList() {
    const [searchGenres, setSearchGenres] = useState("");
    const { genres } = useOutletContext();

    const filteredGenres = genres.filter(genre => {
        if (searchGenres === "") return true;
        return genre.type.toUpperCase().includes(searchGenres.toUpperCase());
    });

    function updateSearch(e) {
        setSearchGenres(e.target.value);
    }

    const genreComponents = filteredGenres.map(genre => (
        <div
            key={genre.id}
            className="genre-container"
            onClick={() => handleGenreClick(genre)} // Assuming you want some action when clicking on a genre
        >
            <Genre genre={genre} />
        </div>
    ));

    function handleGenreClick(genre) {
        // Handle the click event, for example, navigate to a genre-specific page
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <ViewNav />
            <SearchGenres updateSearch={updateSearch} searchGenres={searchGenres} />
            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-9">
                    {genreComponents}
                </div>
            </div>
        </div>
    );
}

export default GenreList;

