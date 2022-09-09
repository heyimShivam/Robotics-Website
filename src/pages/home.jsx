import "./pages.css"
import { MainBannerImagesData } from '../websiteUserData/imagesData'
import { useSpring, animated } from '@react-spring/web'
import $ from 'jquery';
import MainMembersHome from "../components/mainMembersHome";
import Footer from "../components/footer";
import ProjectHighLights from "../components/projectsAndHighlights";
import ContactUs from "../components/contactUs";
import Highlights from "../components/highlights";

function RoboticsText() {
  const styles = useSpring({
    loop: true,
    to: [
      { opacity: 1, color: '#ffaaee' },
      { opacity: 0, color: 'rgb(14,26,19)' },
    ],
    from: { opacity: 0, color: 'red' },
  })
  // ...
  return <animated.div className="roboticsText" style={styles}>Hey Welcome to RoboSocs</animated.div>
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
        <div className="container-fluid main-element d-flex justify-content-center" >
          <div className="" style={{ color: '#fff', zIndex: '500' }}>
            {/* <h2 className="headingText " style={{ color: "white" }}>Robotics Society NITH</h2> */}
            <link href="https://fonts.googleapis.com/css?family=Russo+One" rel="stylesheet" />
            <svg class="roboticsname" viewBox="0 0 1320 300">
              <text x="50%" y="50%" dy=".35em" text-anchor="middle" >
                Robotics Society
              </text>
            </svg>
            
            <p className="headingText" style={{ marginRight: "0px" }}>
              Why restrict yourself only to projects,<br /> when there is so much more to learn
              <br />
              and enjoy simultaneously!</p>
            {/* <a className="headingText" style={{ color: "white", zIndex: '500' }} href="/contact">Register</a>
            <a className="headingText" style={{ marginLeft: "2%", color: 'white', zIndex: '500' }} href="/contact">Discord</a> */}
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-12">
                <div className="svg-wrapper">
                  <svg height={60} width={320} xmlns="http://www.w3.org/2000/svg">
                    <rect className="shape" height={60} width={320} />
                  </svg>
                  <div className="textofdiscordregister">Register</div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12">
                <div className="svg-wrapper">
                  <svg height={60} width={320} xmlns="http://www.w3.org/2000/svg">
                    <rect className="shape" height={60} width={320} />
                  </svg>
                  <div className="textofdiscordregister">Registvr</div>
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
      <div className="">
        <Highlights />
      </div>
      <div >
        <ContactUs />
      </div>
    </>
  );
}

export default Home;