/** @format */

import "./pages.css";
import { MainBannerImagesData } from "../websiteUserData/imagesData";
import { useSpring, animated } from "@react-spring/web";
import MainMembersHome from "../components/mainMembersHome";
import ProjectHighLights from "../components/projectsAndHighlights";
import ContactUs from "../components/contactUs";
import Highlights from "../components/highlights";
import LOGO1 from "./../images/png/linkedin-ico.png";
import LOGO2 from "./../images/png/fb-ico.png";
import LOGO3 from "./../images/png/github-ico.png";
import LOGO4 from "./../images/png/insta-ico.png";
import LOGO5 from "./../images/png/yt-ico.png";

function RoboticsText() {
  const styles = useSpring({
    loop: true,
    to: [
      { opacity: 1, color: "#ffaaee" },
      { opacity: 0, color: "rgb(14,26,19)" },
    ],
    from: { opacity: 0, color: "red" },
  });
  // ...
  return (
    <animated.div className='roboticsText' style={styles}>
      Hey Welcome to RoboSocs
    </animated.div>
  );
}

function Home() {
  return (
    <>
      <div id='home'>
        <div className='main-banner'></div>
        <div className='backshadow'>
          <div class='frontlook'>
            <div id='stars' />
            <div id='stars2' />
            <div id='stars3' />
          </div>
        </div>

        {/* This Div block is for the text present on Home Page */}
        <div className='container-fluid main-element d-flex justify-content-center'>
          <div className='roboticsname'>
            <div class='home-hero__socials'>
              <div class='home-hero__social'>
                <a href='https://www.linkedin.com/school/robotics-society-national-institute-of-technology-hamipur/about/' class='home-hero__social-icon-link'>
                  <img src={LOGO1} alt='icon' class='home-hero__social-icon' />
                </a>
              </div>
              <div class='home-hero__social'>
                <a href='https://www.facebook.com/robo.soc.nith/' class='home-hero__social-icon-link text-light'>
                  <img src={LOGO2} alt='icon' class='home-hero__social-icon' />
                </a>
              </div>
              <div class='home-hero__social'>
                <a href='https://www.instagram.com/robosocnith/?hl=en' class='home-hero__social-icon-link'>
                  <img src={LOGO4} alt='icon' class='home-hero__social-icon' />
                </a>
              </div>
              <div class='home-hero__social'>
                <a href='https://www.youtube.com/channel/UCcNk3wOBYsFvdoYoHiyhtng' class='home-hero__social-icon-link'>
                  <img src={LOGO5} alt='icon' class='home-hero__social-icon' />
                </a>
              </div>
              <div class='home-hero__social'>
                <a href='https://github.com/robosocnith/robosocnith.github.io' class='home-hero__social-icon-link home-hero__social-icon-link--bd-none'>
                  <img src={LOGO3} alt='icon' class='home-hero__social-icon' />
                </a>
              </div>
            </div>

            <div className='row'>
              <div className='col'>
                <svg width='100%' viewBox='0 0 1320 300'>
                  <text x='50%' y='50%' dy='.35em' text-anchor='middle'>
                    Robotics Society
                  </text>
                </svg>
              </div>

              <div className='row text-light'>
                <div className='col robosoc-text-header'>To be a luminary of the indian society in the field of Robotics.</div>
              </div>

              <div className='row text-light'>
                <div className='col robosoc-text-header'>Build and sustain a culture to be self reliant to accomplish our vision, by emphasizing on the development of individual quality.</div>
              </div>
            </div>

            <div className="row robosoc-text-header-box">
              <div className="col robosoc-text-header">
                <button className="header-button btn btn-secondary">Shivam</button>
              </div>
              <div className="col robosoc-text-header">
                <button className="header-button btn btn-secondary">Shivam</button>
              </div>
            </div>
          </div>
        </div>

        <div class='home-hero__mouse-scroll-cont'>
          <div class='mouse'></div>
        </div>
      </div>

      <div className="container">
        <MainMembersHome />
      </div>

      <div>
        <ProjectHighLights />
      </div>

      <div>
        <Highlights />
      </div>

      <div >
        <ContactUs /> <br /> <br />
      </div>
    </>
  );
}

export default Home;
