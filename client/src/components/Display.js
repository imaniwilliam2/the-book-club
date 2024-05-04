import { useState } from "react"

const book1 = "/assets/books/tomorrow.jpg"
const book2 = "/assets/books/life.jpeg"
const book3 = "/assets/books/seven.jpg"

const ImageList = [
    {
        id: 1,
        img: book1,
        title: "Tomorrow and Tomorrow and Tomorrow",
        description: "On a bitter-cold day, in the December of his junior year at Harvard, Sam Masur exits a subway car and sees, amid the hordes of people waiting on the platform, Sadie Green. He calls her name. For a moment, she pretends she hasn't heard him, but then, she turns, and a game begins: a legendary collaboration that will launch them to stardom."
    },
    {
        id: 2,
        img: book2,
        title: "A Little Life",
        description: "When four classmates from a small Massachusetts college move to New York to make their way, they're broke, adrift, and buoyed only by their friendship and ambition. There is kind, handsome Willem, an aspiring actor; JB, a quick-witted, sometimes cruel Brooklyn-born painter seeking entry to the art world; Malcolm, a frustrated architect at a prominent firm; and withdrawn, brilliant, enigmatic Jude, who serves as their center of gravity."
    },
    {
        id: 3,
        img: book3,
        title: "The Seven Husbands of Evelyn Hugo",
        description: "Aging and reclusive Hollywood movie icon Evelyn Hugo is finally ready to tell the truth about her glamorous and scandalous life. But when she chooses unknown magazine reporter Monique Grant for the job, no one is more astounded than Monique herself. Why her? Why now? Monique is not exactly on top of the world. Her husband has left her, and her professional life is going nowhere. Regardless of why Evelyn has selected her to write her biography, Monique is determined to use this opportunity to jumpstart her career."
    },
]

function Display() {

    const [imageId, setImageId] = useState("/assets/books/tomorrow.jpg")
    const [title, setTitle] = useState("Tomorrow and Tomorrow and Tomorrow")
    const [description, setDescription] = useState("On a bitter-cold day, in the December of his junior year at Harvard, Sam Masur exits a subway car and sees, amid the hordes of people waiting on the platform, Sadie Green. He calls her name. For a moment, she pretends she hasn't heard him, but then, she turns, and a game begins: a legendary collaboration that will launch them to stardom.")

    // const bgImage = {
    //     backgroundImage: "url(/assets/vectorimg.jpeg)",
    //     backgroundPosition: "center",
    //     backgroundRepeat: "no-repeat",
    //     backgroundSize: "cover",
    //     width: "100%"
    // }
    

    return (
      <div className="min-h-[550px] sm:min-h-[650px] bg-neutral-50 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200" >
        <div className="container pb-8 sm:pb-0">
            <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text-content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
                    <h1 className="text-3xl sm:text-6xl lg:text-6xl font-bold">
                        {title}
                    </h1>
                    <p className="text-sm">
                        {description}
                    </p>
                </div>
                {/* image section */}
                <div className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">
                    {/* main image */}
                    <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                        <img src={imageId} alt=""
                        className="w-[300px] h-[350px] sm:[h-500px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
                        />
                    </div>
                    {/* other image list  */}
                    <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[40px] lg:-right-1 bg-neutral-50 rounded-full">
                        {ImageList.map((data) => (
                            <img src={data.img}
                            key={data.id}
                            className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200"
                            onClick={() => {
                                    setImageId(data.id === 1 ? book1 : 
                                    data.id === 2 ? book2 : 
                                    book3)
                                    setTitle(data.title)
                                    setDescription(data.description)
                            }}
                            alt=""
                            />
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
      </div>
    )
}
  
  
export default Display;