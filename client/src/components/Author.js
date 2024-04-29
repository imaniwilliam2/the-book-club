import { Link } from "react-router-dom"

function Author({author}){


    return (
        <div className="author">
            <img src={author.image} alt={author.name}/>
            <h2><Link to={`/authors/${author.id}`}>{author.name}</Link></h2>
        </div>
    )
}

export default Author;