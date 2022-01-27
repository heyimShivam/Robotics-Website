import "./pages.css"
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
      <>
      <div id="home">
        <div className="main-banner"></div>
        {/* <div className="backshadow"></div> */}
          <div className="container-fluid main-element d-flex justify-content-center">
            <div className="" style={{ color: '#fff', zIndex:'500' }}>
              <h2 className="headingText " style={{color:"white"}}>Robotics Society NITH</h2>
              <p className="headingText" style={{marginRight:"0px"}}>
                Why restrict yourself only to projects,<br /> when there is so much more to learn 
                <br />
                and enjoy simultaneously!</p>
              <a className="headingText" style={{color:"white" , zIndex:'500'}} href="/contact">Register</a>
              <a  className="headingText" style={{marginLeft:"2%", color: 'white' , zIndex:'500'}} href="/contact">Discord</a>
            </div>  
          </div> 
        </div>
        <div className="container">
        Aakash Tiwari 
        </div>
        <div className="container">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt ratione fuga est cum animi totam consectetur ducimus, odit ullam explicabo in pariatur esse ipsam tempore accusantium sapiente minima eligendi. Magnam facilis hic numquam libero. Quia corrupti maxime provident laboriosam esse non laudantium totam perferendis fugiat neque optio aliquam dolorum obcaecati reprehenderit corporis omnis quae blanditiis tenetur, doloremque, sit magni, quidem repellendus distinctio temporibus? Ut veniam hic placeat iste reiciendis, veritatis consequuntur facilis temporibus. Velit repudiandae a maiores officia quibusdam, omnis fugit impedit sequi quia harum eveniet alias! Saepe repellat quidem ad mollitia voluptatum asperiores velit voluptate, atque ducimus! Fugit, debitis! Quos sunt provident doloribus pariatur fugit vitae voluptatem, quam tempore dignissimos asperiores perferendis id enim mollitia natus adipisci, iusto explicabo?
        </div>
      </>
    );
  }
  
export default Home;