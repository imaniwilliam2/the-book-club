import { useOutletContext } from "react-router-dom"
import Genre from "./Genre"
import { useState } from "react"
import SearchGenres from "./SearchGenres"
import ViewNav from "./ViewNav"


function GenreList() {
    const [searchGenres, setSearchGenres] = useState("")
    const {genres} = useOutletContext()

    const filteredGenres = genres.filter(genre => {
        if(searchGenres === "") return true
        return genre.type.toUpperCase().includes(searchGenres.toUpperCase())
    })

    function updateSearch(e) {
        setSearchGenres(e.target.value)
    }

    const genreComponents = filteredGenres.map(genre => {
        return <Genre key={genre.id} genre={genre}/>
    })


    return(
        <div>
            <ViewNav />
            <SearchGenres updateSearch={updateSearch} searchGenres={searchGenres} />
            <ul className="genres">{genreComponents}</ul>
        </div>
    )
}

export default GenreList