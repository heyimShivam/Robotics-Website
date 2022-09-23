import "./pages.css"
import { MainBannerImagesData } from '../websiteUserData/imagesData'
import { useSpring, animated } from '@react-spring/web'
import MainMembersHome from "../components/mainMembersHome";
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
      <div id="home">
        <div className='main-banner'>
        </div>
        <div className="backshadow">
          <div class="frontlook">
            <div id="stars" />
            <div id="stars2" />
            <div id="stars3" />
          </div>
        </div>

        {/* This Div block is for the text present on Home Page */}
        <div className="container-fluid main-element d-flex justify-content-center" >
          <svg class="roboticsname" viewBox="0 0 1320 300">
              <text x="50%" y="50%" dy=".35em" text-anchor="middle" >
                Robotics Society
              </text>
          </svg>
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
        <ContactUs />
      </div>
    </>
  );
}

export default Home;
