import React from "react";
import { FaStar } from "react-icons/fa";

const book1 = "/assets/books/tomorrow.jpg"
const book2 = "/assets/books/acotar.jpg"
const book3 = "/assets/books/archers-voice-cover.jpg"

const ImageList = [
    {
        id: 1,
        img: book1,
        title: "Tomorrow and Tomorrow and Tomorrow",
        author: "On a bitter-cold day, in the December of his junior year at Harvard, Sam Masur exits a subway car and sees, amid the hordes of people waiting on the platform, Sadie Green. He calls her name. For a moment, she pretends she hasn't heard him, but then, she turns, and a game begins: a legendary collaboration that will launch them to stardom."
    },
    {
        id: 2,
        img: book2,
        title: "A Court Of Thorns and Roses",
        author: "When nineteen-year-old huntress Feyre kills a wolf in the woods, a terrifying creature arrives to demand retribution. Dragged to a treacherous magical land she knows about only from legends, Feyre discovers that her captor is not truly a beast, but one of the lethal, immortal faeries who once ruled her world."
    },
    {
        id: 3,
        img: book3,
        title: "Archers Voice",
        author: "Bree was looking for peace. Archer was an overlooked man dealing with trauma. One day, everything changed. Bree found the complete opposite and Archer was finally seen."
    },
    {
        id: 4,
        img: book1,
        title: "Tomorrow and Tomorrow and Tomorrow",
        author: "On a bitter-cold day, in the December of his junior year at Harvard, Sam Masur exits a subway car and sees, amid the hordes of people waiting on the platform, Sadie Green. He calls her name. For a moment, she pretends she hasn't heard him, but then, she turns, and a game begins: a legendary collaboration that will launch them to stardom."
    },
    {
        id: 5,
        img: book2,
        title: "A Court Of Thorns and Roses",
        author: "When nineteen-year-old huntress Feyre kills a wolf in the woods, a terrifying creature arrives to demand retribution. Dragged to a treacherous magical land she knows about only from legends, Feyre discovers that her captor is not truly a beast, but one of the lethal, immortal faeries who once ruled her world."
    },
    {
        id: 6,
        img: book3,
        title: "Archers Voice",
        author: "Bree was looking for peace. Archer was an overlooked man dealing with trauma. One day, everything changed. Bree found the complete opposite and Archer was finally seen."
    },
]

function Trending() {
    return (
        <>
        <div className=" bg-white py-10">
        <div className="container">
            {/* Header section */}
            <div className="text-center mb-20 max-w-[400px] mx-auto">
                <p
                className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-orange-800 to-orange-800"
                >
                    Trending Books
                </p>
                <h1 className="text-3xl font-bold">Best Sellers</h1>
                <p className="text-xs text-gray-400">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
                    iure, corporis{ " "}
                </p>
            </div>
            {/* card section  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5 place-items-center">
                {
                    ImageList.map((book) => (
                        <div className="rounded-2xl bg-white 
                        dark:bg-gray-800 hover:bg-orange-700 
                        dark:hover:bg-orange-700 hover:text-white
                        relative shadow-xl duration-high group
                        max-w-[300px] my-8" key={book.id}>
                            <div className="h-[100px]">
                                <img src={book.img} alt=""
                                className="max-w-[100px] black mx-auto transform -translate-y-14 group-hover:scale-105 duration-300 shadow-md"
                                />
                            </div>
                            <div className="p-4 text-center ">
                                <div className="w-full flex items-center justify-center">
                                    <FaStar 
                                    className="text-yellow-500" />
                                    <FaStar 
                                    className="text-yellow-500" />
                                    <FaStar 
                                    className="text-yellow-500" />
                                    <FaStar 
                                    className="text-yellow-500" />
                                    <FaStar 
                                    className="text-yellow-500" />
                                </div>
                                <h1 className="text-xl font-bold">{book.title}</h1>
                                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">{book.author}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        </div>
        </>
    )
}

export default Trending;