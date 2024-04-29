import { Link } from 'react-router-dom';
import BooksList from "./BooksList"


function ViewNav() {
    return (
      <>
        <BooksList />
        <Link to="/booklist">Books</Link>
        <Link to="/authorlist">Authors</Link>
        <Link to="/genrelist">Genres</Link>
      </>
    )
}
  

export default ViewNav;