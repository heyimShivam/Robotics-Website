import "./home.css"
import { MainBannerImagesData } from '../websiteUserData/imagesData'
import { useSpring, animated } from '@react-spring/web'

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
      <div className="homePage" style={{marginTop: "100px"}}>
      <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6 d-flex justify-content-center">
          <RoboticsText />
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <img src={MainBannerImagesData.landingPage} className="bannerImage" alt="ima"></img>
        </div>
      </div>
      </div>
      </div>
    );
  }
  
export default Home;