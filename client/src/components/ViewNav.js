import { Link } from 'react-router-dom';


function ViewNav() {
    return (
      <>
        <h1 className='text-7xl'>View</h1>
        <Link to="/booklist">Books</Link>
        <Link to="/authorlist">Authors</Link>
        <Link to="/genrelist">Genres</Link>
      </>
    )
}
  

export default ViewNav;