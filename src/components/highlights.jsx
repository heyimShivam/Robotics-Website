import 'swiper/css';
import './components.css'

import 'swiper/css/pagination';


function Highlights() {
  return (
    <>
    <div class="activities">
      <h1 class="activity-head" >Activities and Highlights</h1>
    </div>
      <div className="blog-slider">
        <div className="blog-slider__wrp swiper-wrapper">
          <div className="blog-slider__item swiper-slide">
            <div className="blog-slider__img">
              <img
                src="images/events/roboweek.png"
                alt=""
              />
            </div>
            <div className="blog-slider__content">
              <span className="blog-slider__code">26 December 2019</span>
              <div className="blog-slider__title">Roboweek </div>
              <div className="blog-slider__text">
                Roboweek is a week long event conducted by Robotics Society of
                NIT Hamirpur. The aim of ROBOWEEK is to spread awareness about
                robotics nation wide by providing a platform to Robotics
                Enthusiasts to learn and get their skills tested.
              </div>
              <a href="https://robosocnith.com/index.html" className="blog-slider__button">
                Learn More
              </a>
            </div>
          </div>
          <div className="blog-slider__item swiper-slide">
            <div className="blog-slider__img">
              <img
                src="images/events/roboticsday.jpeg"
                alt=""
              />
            </div>
            <div className="blog-slider__content">
              <span className="blog-slider__code">26 December 2019</span>
              <div className="blog-slider__title">Robotics Day 2k19</div>
              <div className="blog-slider__text">
                Celebrated in the memory of our Co-Founder Late Lamyanba
                Heisnam, we oraganize events and showcase our projects to
                students.
              </div>
              <a href="https://robosocnith.com/index.html" className="blog-slider__button">
                Learn More
              </a>
            </div>
          </div>

          <div className="blog-slider__item swiper-slide">
            <div className="blog-slider__img">
              <img
                src="images/events/nimbus.jpeg"
                alt=""
              />
            </div>
            <div className="blog-slider__content">
              <span className="blog-slider__code">26 December 2019</span>
              <div className="blog-slider__title">Nimbus 2k19</div>
              <div className="blog-slider__text">
                Nimbus is the annual technical fest of NIT Hamirpur. In 2k18, we
                showcased the following projects: Brain Controlled Wheelchair,
                Aim and Shoot, Self Balancing Robot, Humanoid.
              </div>
              <a href="https://robosocnith.com/index.html" className="blog-slider__button">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="blog-slider__pagination"></div>
</div>
    </>)
}

export default Highlights;