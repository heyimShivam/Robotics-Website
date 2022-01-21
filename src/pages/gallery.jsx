import "./home.css"
import Viewpager from "../components/mainSlidingBanner";
import MainBannerCard from "../components/mainBanner";

function Gallery() {
    return (
      <div className="gallery" >
        <Viewpager/>
        <div className="slidingCardContainer">
          <MainBannerCard className="slidingCards"/>
        </div>
      </div>
      
    );
  }
  
export default Gallery;