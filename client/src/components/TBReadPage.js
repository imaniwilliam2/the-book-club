import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";

function TBReadPage() {
  const { toBeReadBooks, deleteFromTBRead } = useOutletContext()


  function handleDelete(id) {
    deleteFromTBRead(id)
}

    return (
      <>
        <div className="tbread-container">
            <ul className="tbread-list">
                {toBeReadBooks.map((book) => (
                    <li className="tbread-books" key={book.id}>
                        <img className="tbread-img" src={book.image} alt={book.title}/>
                        <h2><Link to={`/books/${book.id}`}>{book.title}</Link></h2>
                        <button className="delete-button" onClick={() => handleDelete(book.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
       </>
    )
}
  
export default TBReadPage;