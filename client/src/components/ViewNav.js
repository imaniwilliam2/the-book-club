import { Link } from 'react-router-dom';



function ViewNav() {
    return (
      <div>
        <Link className="inline-blo ck py-4 px-4 hover:text-orange-800 duration-200"  to="/booklist">Books</Link>
        <Link className="inline-blo ck py-4 px-4 hover:text-orange-800 duration-200"  to="/authorlist">Authors</Link>
        <Link className="inline-blo ck py-4 px-4 hover:text-orange-800 duration-200"  to="/genrelist">Genres</Link>
      </div>
    )
}
  

export default ViewNav;