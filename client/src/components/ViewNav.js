import { Link } from 'react-router-dom';

function ViewNav() {
    return (
      <div className="flex justify-center space-x-4">
        <Link className="text-gray-700 py-2 px-4 hover:text-orange-800 duration-200 transition-colors border-b-2 border-transparent hover:border-orange-500" to="/booklist">Books</Link>
        <Link className="text-gray-700 py-2 px-4 hover:text-orange-800 duration-200 transition-colors border-b-2 border-transparent hover:border-orange-500" to="/authorlist">Authors</Link>
        <Link className="text-gray-700 py-2 px-4 hover:text-orange-800 duration-200 transition-colors border-b-2 border-transparent hover:border-orange-500" to="/genrelist">Genres</Link>
      </div>
    );
}
  

export default ViewNav;
