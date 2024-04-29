import { Link } from "react-router-dom"

function Book({book}){


    return (
        <div className="book">
            <img src={book.image} alt={book.title}/>
            <h2><Link to={`/books/${book.id}`}>{book.title}</Link></h2>
        </div>
    )
}

export default Book;