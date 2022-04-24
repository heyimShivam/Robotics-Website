import "./pages.css"
import Viewpager from "../components/mainSlidingBanner";
import MainBannerCard from "../components/mainBanner";

function Gallery() {
  return (
    <>
      <div className="gallery" >
        <Viewpager />
        <div className="slidingCardContainer">
          <MainBannerCard className="slidingCards" />
        </div>
      </div>
      <div className="container">
        Shivam
      </div>
    </>
  );
}

export default Gallery;