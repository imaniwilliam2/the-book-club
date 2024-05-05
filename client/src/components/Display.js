import { useState } from "react"

const book1 = "/assets/books/water.jpg"
const book2 = "/assets/books/life.jpeg"
const book3 = "/assets/books/fourth.jpg"

const ImageList = [
    {
        id: 1,
        img: book1,
        title: "The Covenant Of Water",
        description: "A shimmering evocation of a bygone India and of the passage of time itself, The Covenant of Water is a hymn to progress in medicine and to human understanding, and a humbling testament to the hardships undergone by past generations for the sake of those alive today. Imbued with humor, deep emotion, and the essence of life, it is one of the most masterful literary novels published in recent years."
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
        title: "Fourth Wing",
        description: "Twenty-year-old Violet Sorrengail was supposed to enter the Scribe Quadrant, living a quiet life among books and history. Now, the commanding general—also known as her tough-as-talons mother—has ordered Violet to join the hundreds of candidates striving to become the elite of Navarre: dragon riders."
    },
]

function Display() {

    const [imageId, setImageId] = useState("/assets/books/water.jpg")
    const [title, setTitle] = useState("The Covenant Of Water")
    const [description, setDescription] = useState("A shimmering evocation of a bygone India and of the passage of time itself, The Covenant of Water is a hymn to progress in medicine and to human understanding, and a humbling testament to the hardships undergone by past generations for the sake of those alive today. Imbued with humor, deep emotion, and the essence of life, it is one of the most masterful literary novels published in recent years.")

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