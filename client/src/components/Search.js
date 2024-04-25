import { Link } from 'react-router-dom';


function Search() {
    return (
      <>
        <h1 className='text-7xl'>Search</h1>
        <Link to="/booklist">Books</Link>
        <Link to="/authorlist">Authors</Link>
      </>
    )
}
  

export default Search;