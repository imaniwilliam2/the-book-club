import Display from "./Display";
import Trending from "./Trending"
import StoreBanner from "./StoreBanner"
import Quotes from "./Quotes"

function Home() {
    return (
      <div>
        <Display />
        <Trending />
        <Quotes />
        <StoreBanner />
      </div>
    )
}
  
  
export default Home;