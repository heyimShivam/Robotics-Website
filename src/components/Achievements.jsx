/** @format */

import "./Achievements.css";
import IMG1 from './../images/achievements/advita.jpg';
import IMG2 from './../images/achievements/robocon17.jpg';
import IMG3 from './../images/achievements/techkriti.png';
import IMG4 from './../images/achievements/robot.jpg';
import IMG5 from './../images/achievements/arm.jpg';

function Achievements() {
  return (
    <>
      <section>
        <div className='container py-5 my-5'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='main-timeline'>
                <div className='timeline'>
                  <div className='timeline-content'>
                    <div className='circle'>
                      <span className='homebox'>
                        <img src={IMG4} className='img achievement-img' />
                      </span>
                    </div>
                    <div className='content'>
                      <span className='year'>ROBOCON 2k16, Rank-116</span>
                      <h3 className='title h4'>March 2016</h3>
                      <p className='description'>
                        These were our first baby step after formation of society. Although we didn't get a good rank but our team put had put their 100% that is what matters.
                      </p>
                      <div className='icon'>
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='timeline'>
                  <div className='timeline-content'>
                    <div className='circle'>
                      <span className='homebox'>
                        <img src={IMG2} alt=" " className='img achievement-img' />
                      </span>
                    </div>
                    <div className='content'>
                      <span className='year'>ROBOCON 2k17, Rank-96</span>
                      <h3 className='title h4'>March 2017</h3>
                      <p className='description'>
                        This was our second ROBOCON and we were determined to improve. We were still an infant society but what we lacked in experience we more than make up in power of sheer will.
                      </p>
                      <div className='icon'>
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='timeline'>
                  <div className='timeline-content'>
                    <div className='circle'>
                      <span className='homebox'>
                        <img src={IMG5} alt=" " className='img achievement-img' />
                      </span>
                    </div>
                    <div className='content'>
                      <span className='year'>ROBOCON 2k18, Rank-25</span>
                      <h3 className='title h4'>March 2018</h3>
                      <p className='description'>
                        Our efforts finally brought fruit in 2018 and we got quite a big improvement in rank. We surpassed teams which had much more experience and resources and this was the year
                        Robotics Society NITH finally shine through.
                      </p>
                      <div className='icon'>
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='timeline'>
                  <div className='timeline-content'>
                    <div className='circle'>
                      <span className='homebox'>
                        <img src={IMG3} alt=" " className='img achievement-img' />
                      </span>
                    </div>
                    <div className='content'>
                      <span className='year'>Techkriti 2k19</span>
                      <h3 className='title h4'>March 2019</h3>
                      <p className='description'>
                        Techkriti is one of the biggest techfest in India which has many robotics related competitions and we made many projects for the same. Although some of our projects lost points
                        due to some technicalities but the organizers were so &nbsp;impreesed by our projects they awarded one team with a summer internship.
                      </p>
                      <div className='icon'>
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='timeline'>
                  <div className='timeline-content'>
                    <div className='circle'>
                      <span className='homebox'>
                        <img src={IMG1} alt=" " className='img achievement-img' />
                      </span>
                    </div>
                    <div className='content'>
                      <span className='year'>Advitiya 2k20 (IIT Ropar)</span>
                      <h3 className='title 4'>February 2020</h3>
                      <p className='description'>
                        In ADVITIYA, we participated in many events like Line follower, RoboSoccer, MicroMouse and many more and we got appreciation too. Although some of our projects lost points due
                        to some technicalities.
                      </p>
                      <div className='icon'>
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Achievements;
