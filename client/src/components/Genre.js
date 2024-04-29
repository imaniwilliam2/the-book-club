import { Link } from "react-router-dom"

function Genre({genre}){


    return (
        <div className="book">
            <Link to={`/genres/${genre.id}`}><h1>{genre.type}</h1></Link>
        </div>
    )
}

export default Genre;