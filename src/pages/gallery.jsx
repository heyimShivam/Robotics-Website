/** @format */

import "./../components/gallerycss/gallery.css";
// import Viewpager from "../components/mainSlidingBanner";
// import MainBannerCard from "../components/mainBanner";
import { Images, TagsList } from "./../websiteUserData/gallery";
import React, { useState, useEffect } from "react";
import Viewpager from "../components/mainSlidingBanner";

function Gallery() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [tag, setTag] = useState("All");
  const changeTag = (activeTag) => {
    setTag(activeTag);
  };

  const [width, setWidth] = useState(1000);

  const handleResize = () => {
    setWidth(window.screen.availWidth);
  }

  useEffect(() => {
    setWidth(window.screen.availWidth);
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className='gallery' style={{display : `${width<540?'none':''}`}}>
        <Viewpager />
      </div>
      <div className='container'>
        <div className='button__container container'>
          {TagsList.map((newTag,index) => (
            <button className={`btn btn-${tag === newTag ? "" : "outline-"}dark tag__button `} onClick={() => changeTag(newTag)}  key={index}>
              {newTag}
            </button>
          ))}
          {/* <button className="btn btn-outline-dark tag__button" onClick={() => changeTag('All')}>All</button>
            <button className="btn btn-outline-dark tag__button" onClick={() => changeTag('Roboweek')}>Roboweek</button>
            <button className="btn btn-outline-dark tag__button" onClick={() => changeTag('Nimbus')}>Nimbus</button>
            <button className="btn btn-outline-dark tag__button" onClick={() => changeTag('Farewell')}>Farewell</button> */}
        </div>
        {/* {`${ data === tag ? "gallery__img" : "disable__img" }`} */}

        <div className='container my-4'>
          <div className='row'>
            {Images.map((userData,index) =>
              userData.tag.includes(tag) ? (
                <div className='col-lg-4 col-md-6 col-sm-12 my-2'  key={index}>
                  {userData.tag.map((data,index) => (
                    <div className={` ${data === tag ? "img__container" : "disable__img"}`} key={index}>
                      <img src={userData.path} alt='' className='gallery__img' />
                    </div>
                  ))}
                </div>
              ) : (
                ""
              ),
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
