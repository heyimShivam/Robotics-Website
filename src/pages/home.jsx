/** @format */

import "./pages.css";
import { MainBannerImagesData } from "../websiteUserData/imagesData";
import { useSpring, animated } from "@react-spring/web";
import $ from "jquery";
import MainMembersHome from "../components/mainMembersHome";
import Footer from "../components/footer";
import ProjectHighLights from "../components/projectsAndHighlights";
import ContactUs from "../components/contactUs";
import Highlights from "../components/highlights";


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
        <div className='backshadow'></div>
        <div className='container-fluid main-element d-flex justify-content-center'>
          <div style={{ color: "#fff", zIndex: "500" }}>
            <h2 className='headingText ' style={{ color: "white" }}>
              Robotics Society NITH
            </h2>
            <p className='headingText' style={{ marginRight: "0px" }}>
              Why restrict yourself only to projects,
              <br /> when there is so much more to learn
              <br />
              and enjoy simultaneously!
            </p>
            <a className='headingText' style={{ color: "white", zIndex: "500" }} href='/contact'>
              Register
            </a>
            <a className='headingText' style={{ marginLeft: "2%", color: "white", zIndex: "500" }} href='/contact'>
              Discord
            </a>
          </div>
        </div>
      </div>
      <div className='container'>
        <MainMembersHome />
      </div>
      <div>
        <ProjectHighLights />
      </div>
      <div>
        <Highlights />
      </div>
      <div>
        <ContactUs />
      </div>
    </>
  );
}

export default Home;
