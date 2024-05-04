import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import AuthPage from "./AuthPage";


function App() {
  const [books, setBooks] = useState([])
  const [authors, setAuthors] = useState([])
  const [readBooks, setReadBooks] = useState([])
  const [toBeReadBooks, setToBeReadBooks] = useState([])
  const [genres, setGenres] = useState([])
  const [reviews, setReviews] = useState([])
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    fetch('/books')
    .then(res => res.json())
    .then(booksData => setBooks(booksData))
  }, [])

  useEffect(() => {
    fetch('/authors')
    .then(res => res.json())
    .then(authorsData => setAuthors(authorsData))
  }, [])

  useEffect(() => {
    fetch('/read')
    .then(res => res.json())
    .then(readData => setReadBooks(readData) )
  }, [])

  useEffect(() => {
    fetch('/tbread')
    .then(res => res.json())
    .then(toBeReadData => setToBeReadBooks(toBeReadData) )
  }, [])

  useEffect(() => {
    fetch('/genres')
    .then(res => res.json())
    .then(genresData => setGenres(genresData))
  }, [])

  function addToReviews(review, bookId){
    console.log(review)
    fetch(`/reviews/${bookId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(review)
    })
    .then(res => res.json())
    .then(reviewDetails => { 
      setReviews(prevReviews => [...prevReviews, reviewDetails])
      return reviewDetails
  })
  }


  function addToRead(book){
    fetch('/read', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(book)
    })
    .then(res => res.json())
    .then(readDetails => setReadBooks(read => [...read, readDetails]))
  }

  function addToTBRead(book){
    fetch('/tbread', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(book)
    })
    .then(res => res.json())
    .then(readDetails => setToBeReadBooks(read => [...read, readDetails]))
  }

  function deleteFromRead(id) {
    fetch(`/read/${id}`, {
      method: "DELETE"
    })
    .then(res => {
      if(res.ok) {
        setReadBooks((readBooks) => readBooks.filter(read_books => {
          return read_books.id !== id
        }))
      } else {
        alert("Error: Unable to Delete Book")
      }
    })
  }


  function deleteFromTBRead(id) {
    fetch(`/tbread/${id}`, {
      method: "DELETE"
    })
    .then(res => {
      if(res.ok) {
        setToBeReadBooks((toBeReadBooks) => toBeReadBooks.filter(tbread_books => {
          return tbread_books.id !== id
        }))
      } else {
        alert("Error: Unable to Delete Book")
      }
    })
  }

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleAuth = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <div className='bg-neutral-50'>
      {user ? (
        <>
          <NavBar onLogout={handleLogout} />
          <Outlet context={{ 
            books: books,
            authors: authors,
            addToRead: addToRead,
            readBooks: readBooks,
            addToTBRead: addToTBRead,
            toBeReadBooks: toBeReadBooks,
            deleteFromRead: deleteFromRead,
            deleteFromTBRead: deleteFromTBRead,
            genres: genres,
            reviews: reviews,
            addToReviews: addToReviews,
            user:user,
           }} />
        </>
      ) : (
        <AuthPage onAuth={handleAuth} />
      )}
    </div>
  );
}

export default App;
