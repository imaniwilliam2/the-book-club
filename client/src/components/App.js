// import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {

  const [books, setBooks] = useState([])
  const [authors, setAuthors] = useState([])

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



  return (
    <>
      <NavBar />
      <Outlet context={{
        books: books,
        authors: authors 
      }}/>
    </>
  )
}

export default App;
