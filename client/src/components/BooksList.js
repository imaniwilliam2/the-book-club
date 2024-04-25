import { useOutletContext } from "react-router-dom";
import Book from "./Book";
import { useState } from "react";
import SearchBooks from "./SearchBooks"

function BooksList() {

  const [searchBooks, setSearchBooks] = useState("")
  const {books} = useOutletContext()


  const filteredBooks = books.filter(book => {
    if(searchBooks === "") return true
    return book.title.toUpperCase().includes(searchBooks.toUpperCase())
  })

  function updateSearch(e) {
    setSearchBooks(e.target.value)
  }

  const bookComponents = filteredBooks.map(book => {
    return <Book key={book.id} book={book} books={books} />
  })

    return (
      <>
        <SearchBooks updateSearch={updateSearch} searchBooks={searchBooks} />
        <ul className="books">{bookComponents}</ul>
      </>
    )
}
  

export default BooksList;