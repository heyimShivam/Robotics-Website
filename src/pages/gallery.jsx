/** @format */

import "./../components/gallerycss/gallery.css";
// import Viewpager from "../components/mainSlidingBanner";
// import MainBannerCard from "../components/mainBanner";
import { Images } from "./../websiteUserData/gallery";
import React, { useState } from "react";
import { data } from "jquery";

function Gallery() {
  const [tag, setTag] = useState("All");

  const mainTag = ["All", "Roboweek", "Nimbus", "Farewell"];

  const changeTag = (activeTag) => {
    setTag(activeTag);
    console.log(tag, activeTag);
  };

  return (
    <>
      <div className='container'>
        <div className='container button__container'>
          {mainTag.map((newTag) => (
            <button
              className={`btn btn-${
                tag === newTag ? "" : "outline-"
              }dark tag__button`}
              onClick={() => changeTag(newTag)}
            >
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
            {Images.map((userData) => (
              <div className="">
                {userData.tag.map((data) => (
                  <div className={`col-lg-4 col-md-6 col-sm-12 my-2 ${ data === tag ? "img__container" : "disable__img" }`}>
                    <img src={userData.path} alt='' className="gallery__img"/>
                </div>
                ))}
            </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
