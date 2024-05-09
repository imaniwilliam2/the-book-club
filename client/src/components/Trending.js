import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

const book1 = "/assets/books/funny.jpeg";
const book2 = "/assets/books/women.jpg";
const book3 = "/assets/books/acotar.jpg";
const book4 = "/assets/books/calamity.jpg";
const book5 = "/assets/books/generation.jpg";
const book6 = "/assets/books/score.jpg";

const ImageList = [
  {
    id: 1,
    img: book1,
    title: "Funny Story",
    description:
      "After their exes run off together, Daphne and Miles form a friendship and concoct a plan involving misleading photos."
  },
  {
    id: 2,
    img: book5,
    title: "The Anxious Generation",
    description:
      "A co-author of “The Coddling of the American Mind” looks at the mental health impacts that a phone-based life has on children."
  },
  {
    id: 3,
    img: book3,
    title: "A Court of Thorns and Roses",
    description:
      "After killing a wolf in the woods, Feyre is taken from her home and placed inside the world of the Fae."
  },
  {
    id: 4,
    img: book4,
    title: "A Calamity of Souls",
    description:
      "Lawyers from different backgrounds represent a Black man charged with killing a wealthy white couple in Virginia in 1968."
  },
  {
    id: 5,
    img: book2,
    title: "The Women",
    description:
      "In 1965, a nursing student follows her brother to serve during the Vietnam War and returns to a divided America."
  },
  {
    id: 6,
    img: book6,
    title: "The Body Keeps The Score",
    description:
      "How trauma affects the body and mind, and innovative treatments for recovery."
  }
];

function Trending() {
  const { books } = useOutletContext();

  return (
    <div className=" bg-white py-10">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-800">
            Trending Books
          </p>
          <h1 className="text-3xl font-bold">Best Sellers</h1>
          <p className="text-xs text-gray-400">
            New York Times Best Selling Books to Date{" "}
          </p>
        </div>
        {/* card section  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5 place-items-center">
          {ImageList.map((book) => (
            <div
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-orange-700 dark:hover:bg-orange-700 hover:text-white relative shadow-xl duration-high group max-w-[300px] my-8"
              key={book.id}
            >
              <div className="h-[100px]">
                {books.find((b) => b.title === book.title) ? (
                  <Link to={`/books/${books.find((b) => b.title === book.title).id}`}>
                    <img
                      src={book.img}
                      alt=""
                      className="max-w-[100px] black mx-auto transform -translate-y-14 group-hover:scale-105 duration-300 shadow-md"
                    />
                  </Link>
                ) : (
                  <img
                    src={book.img}
                    alt=""
                    className="max-w-[100px] black mx-auto transform -translate-y-14 group-hover:scale-105 duration-300 shadow-md"
                  />
                )}
              </div>
              <div className="p-4 text-center ">
                <div className="w-full flex items-center justify-center">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{book.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm">
                  {book.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Trending;
