import "./pages.css"
import Viewpager from "../components/mainSlidingBanner";
import MainBannerCard from "../components/mainBanner";
import images from "../websiteUserData/gallery"

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
        {images.map(_imgData =>
          (
            <div className="img img-responsive">
              <img src="{_imgData.path}" alt="img" />
            </div>
          ))}
      </div>
    </>
  );
}

export default Gallery;