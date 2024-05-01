import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import SearchAuthor from "./SearchAuthor";
import ViewNav from "./ViewNav";

function AuthorsList() {
  const [searchAuthors, setSearchAuthors] = useState("");
  const { authors } = useOutletContext();

  const filteredAuthors = authors.filter(author => {
    if (searchAuthors === "") return true;
    return author.name.toUpperCase().includes(searchAuthors.toUpperCase());
  });

  function updateSearch(e) {
    setSearchAuthors(e.target.value);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ViewNav />
      <SearchAuthor updateSearch={updateSearch} searchAuthors={searchAuthors} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-8">
        {filteredAuthors.map(author => (
          <div key={author.id} className="flex flex-col items-center bg-white p-4 rounded-md shadow-md my-9">
            <img src={author.image} alt={author.name} className="w-32 h-auto mb-2" />
            <h2 className="text-lg font-semibold mb-2 hover:underline"><Link to={`/authors/${author.id}`}>{author.name}</Link></h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AuthorsList;
