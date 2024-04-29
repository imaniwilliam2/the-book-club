import { useOutletContext } from "react-router-dom";
import Author from "./Author"
import { useState } from "react";
import SearchAuthor from "./SearchAuthor"
import ViewNav from "./ViewNav";

function AuthorsList() {
  
  const [searchAuthors, setSearchAuthors] = useState("")
  const {authors} = useOutletContext()

  const filteredAuthors = authors.filter(author => {
    if(searchAuthors === "") return true
    return author.name.toUpperCase().includes(searchAuthors.toUpperCase())
  })

  function updateSearch(e) {
    setSearchAuthors(e.target.value)
  }

  const authorComponents = filteredAuthors.map(author => {
    return <Author key={author.id} author={author} authors={authors} />
  })

    return (
      <>
        <ViewNav />
        <SearchAuthor updateSearch={updateSearch} searchAuthors={searchAuthors} />
        <ul className="authors">{authorComponents}</ul>
      </>
    )
}
  

export default AuthorsList;