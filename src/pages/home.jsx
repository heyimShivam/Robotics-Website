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
        <div className="roboticsname">
          <div className="row">
            <div className="col">
            <svg width="100%" viewBox="0 0 1320 300">
                <text x="50%" y="50%" dy=".35em" text-anchor="middle" >
                  Robotics Society
                </text>
            </svg>
            </div>

            <div className="row text-light">
              <div className="col robosoc-text-header">
                To be a luminary of the indian society in the field of Robotics. 
              </div>
            </div>

            <div className="row text-light">
              <div className="col robosoc-text-header">
                Build and sustain a culture to be self reliant to accomplish our vision, by emphasizing on the development of individual quality.
              </div>
            </div>

            <div className="row robosoc-text-header-box">
              <div className="col robosoc-text-header">
                <button className="btn btn-secondary">Shivam</button>
              </div>
              <div className="col robosoc-text-header">
                <button className="btn btn-secondary">Shivam</button>
              </div>
            </div>
          </div>
        </div>
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
        <br />
        <br />
      </div>
    </>
  );
}

export default Home;
