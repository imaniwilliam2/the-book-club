import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";

function ReadPage() {
  const { readBooks, deleteFromRead } = useOutletContext()

  function handleDelete(id) {
    deleteFromRead(id)
}

    return (
      <>
        <div className="read-container">
            <ul className="read-list">
                {readBooks.map((book) => (
                    <li className="read-books" key={book.id}>
                        <img className="read-img" src={book.image} alt={book.title}/>
                        <h2><Link to={`/books/${book.id}`}>{book.title}</Link></h2>
                        <button className="delete-button" onClick={() => handleDelete(book.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
       </>
    )
}
  
export default ReadPage;