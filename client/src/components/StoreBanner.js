import React from "react";

const bannerImg = "/assets/image.jpeg"

const backgroundImg = {
    backgroundImage: `url(${bannerImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
}

function StoreBanner() {
    return <div className="bg-neutral-50 text-white py-10" style={backgroundImg}>
        <div className="container">
            <div className="space-y-6 max-w-xl mx-auto">
                <h1
                className="text-2xl text-center sm:text-4xl fonts-semibold"
                >Get Physical and Audio Books Here</h1>
                <div className="flex flex-wrap justify-center items-center gap-4">
                    <a href="https://www.amazon.com/s?k=amazoncom%2Fbooks&hvadid=580696290190&hvdev=c&hvlocphy=9010836&hvnetw=g&hvqmt=e&hvrand=2015117979321575744&hvtargid=kwd-377378834041&hydadcr=22534_13493212&tag=googhydr-20&ref=pd_sl_il7cikhyo_e"> 
                        <img src="/assets/icons/amaz.png" alt=""
                        className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                        />
                    </a>
                    <a href="https://www.barnesandnoble.com/"> 
                        <img src="/assets/icons/bandn.png" alt=""
                        className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                        />
                    </a>

                </div>
            </div>
        </div>
    </div>
}
export default StoreBanner