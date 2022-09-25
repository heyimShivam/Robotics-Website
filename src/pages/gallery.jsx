/** @format */

import "./../components/gallerycss/gallery.css";
// import Viewpager from "../components/mainSlidingBanner";
// import MainBannerCard from "../components/mainBanner";
import { Images, TagsList } from "./../websiteUserData/gallery";
import React, { useState } from "react";
import Viewpager from "../components/mainSlidingBanner";

function Gallery() {
  const [tag, setTag] = useState("All");
  const changeTag = (activeTag) => {
    setTag(activeTag);
  };
  return (
    <>
      <div className='gallery'>
        <Viewpager />
      </div>
      <div className='container'>
        <div className='container button__container'>
          {TagsList.map((newTag) => (
            <button className={`btn btn-${tag === newTag ? "" : "outline-"}dark tag__button `} onClick={() => changeTag(newTag)}>
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
            {Images.map((userData) =>
              userData.tag.includes(tag) ? (
                <div className='col-lg-4 col-md-6 col-sm-12 my-2'>
                  {userData.tag.map((data) => (
                    <div className={` ${data === tag ? "img__container" : "disable__img"}`}>
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
