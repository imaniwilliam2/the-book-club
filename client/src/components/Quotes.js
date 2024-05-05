import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const QuoteList = [
    {
        id: 1,
        text: "Love is or it ain't. Thin love ain't love at all.",
        book: "Beloved",
        author: "Toni Morrison"
    },
    {
        id: 2,
        text: "I am not afraid of storms, for I am learning how to sail my ship.",
        book: "Little Women",
        author: "Louisa May Alcott"
    },
    {
        id: 3,
        text: "Everything was beautiful, and nothing hurt.",
        book: "Slaughterhouse-Five",
        author: "Kurt Vonnegut"
    },
    {
        id: 4,
        text: "It's the possibility of having a dream come true that makes life interesting.",
        book: "The Alchemist",
        author: "Paulo Coelho"
    },
    {
        id: 5,
        text: "There is always something left to love.",
        book: "One Hundred  Years of Solitude",
        author: "Gabriel Garcia Marquez"
    },
    {
        id: 6,
        text: "What's the point of having a voice if you're gonna be silent in those moments you shouldn't be?",
        book: "The Hate U Give",
        author: "Angie Thomas"
    },
    {
        id: 7,
        text: "They say nothing lasts forever but they're just scared it will last longer than they can love it.",
        book: "On Earth We're Briefly Gorgeous",
        author: "Ocean Young"
    },
    {
        id: 8,
        text: "Anything worth dying for is certainly worth living for.",
        book: "Catch-22",
        author: "Joseph Heller"
    },
    {
        id: 9,
        text: "I took a deep breath and listened to the old brag of my heart: I am, I am, I am.",
        book: "The Bell Jar",
        author: "Sylvia Plath"
    },
    {
        id: 10,
        text: "Time moves slowly, but passes quickly.",
        book: "The Color Purple",
        author: "Alice Walker"
    },
    {
        id: 11,
        text: "Now that I knew fear, I also knew it was not permanent. As powerful as it was, it's grip on me would loosen. It would pass.",
        book: "The Round House",
        author: "Louise Erdrich"
    },
    {
        id: 12,
        text: "When I discover who i am, I'll be free.",
        book: "Invisible Man",
        author: "Ralph Ellison"
    },
    {
        id: 13,
        text: "Beware; for i am fearless, and therefore powerful.",
        book: "Frankenstein",
        author: "Mary Shelley"
    },
    {
        id: 14,
        text: "It is only with the heart that one can see rightly; what is essential is invisible to the eye.",
        book: "The Little Prince",
        author: "Antoine de Saint-Exupery"
    },
    {
        id: 15,
        text: "Too much sanity may be madness - and maddest of all: to see life as it is, and not as it should be!",
        book: "Don Quixote",
        author: "Miquel de Cervantes Saavedra"
    },
    {
        id: 16,
        text: "Whatever our souls are made of, his and mine are the same.",
        book: "Wuthering Heights",
        author: "Emily Bronte"
    },
    {
        id: 17,
        text: "There is no greater agony than bearing an untold story inside you.",
        book: "I Know Why the Caged Bird Sings",
        author: "Maya Angelou"
    },
    {
        id: 18,
        text: "As he read, I fell in love the way you fall asleep: slowly, and then all at once.",
        book: "The Fault in Our Stars",
        author: "John Green"
    },
    {
        id: 19,
        text: "That's the thing about books. They let you travel without moving your feet.",
        book: "The Namesake",
        author: "Jhumpa Lahiri"
    },
    {
        id: 20,
        text: "We accept the love we think we deserve.",
        book: "Perks of Being a Wallflower",
        author: "Stephen Chbosky"
    },
    {
        id: 21,
        text: "Not all those who wander are lost.",
        book: "The Fellowship of the Ring",
        author: "J.R.R. Tolkein"
    }
]

function Quotes() {
    const settings = {
      dots: false, // Remove dots
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000
    };
  
    return (
        <div className="mt-8 mb-8">
            <h1 className="text-5xl font-bold mb-6 text-center">Famous Quotes</h1>
          <div className="max-w-lg mx-auto p-6">
            <div className="">
              <Slider {...settings}>
                {QuoteList.map(quote => (
                  <div key={quote.id} className="px-4">
                    <div className=" p-6">
                      <p className="text-lg font-semibold mb-4">"{quote.text}"</p>
                      <p className="text-sm italic text-gray-600">- {quote.author}, {quote.book}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      );
  }
  
  export default Quotes;