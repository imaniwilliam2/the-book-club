import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import SearchBooks from "./SearchBooks";
import ViewNav from "./ViewNav";
import { Link } from "react-router-dom";

function BooksList() {
  const [searchBooks, setSearchBooks] = useState("");
  const { books } = useOutletContext();

  const filteredBooks = books.filter(book => {
    if (searchBooks === "") return true;
    return book.title.toUpperCase().includes(searchBooks.toUpperCase());
  });

  function updateSearch(e) {
    setSearchBooks(e.target.value);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ViewNav />
      <SearchBooks updateSearch={updateSearch} searchBooks={searchBooks} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredBooks.map(book => (
          <div key={book.id} className="flex flex-col items-center bg-white p-4 rounded-md shadow-md my-9">
            <img src={book.image} alt={book.title} className="w-32 h-auto mb-2" />
            <h2 className="text-lg font-semibold mb-2 hover:underline"><Link to={`/books/${book.id}`}>{book.title}</Link></h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BooksList;
