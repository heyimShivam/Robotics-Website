function ProjectHighLights() {
  return (
    <>

      <div class="project-head">
        <h1 class="activity-head">
          Project Highlights
        </h1>
      </div>
      <div className="container">
        <div>
          <section className="light">
            <article className="postcard light blue">
              <a className="postcard__img_link" href="#empty">
                <img
                  className="postcard__img"
                  src="Images/projects/humanoid.jpeg"
                  alt="pic Title"
                />
              </a>
              <div className="postcard__text t-dark">
                <h1 className="postcard__title blue">
                  <a href="https://robosocnith.com/index.html">
                    Humanoid Robot
                  </a>
                </h1>
                {/* <div className="postcard__subtitle small">*/}
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  A humanoid robot is a robot with its body shape built to
                  resemble the human body. The design may be for functional
                  purposes, such as interacting with human tools and
                  environments, for experimental purposes, such as the study of
                  bipedal locomotion or for other purposes
                </div>
                <div>
                  <button className="btn btn-outline-dark btn-small">
                    <a href="https://robosocnith.com/index.html">
                      <i className="fas fa-tag mr-2"></i>Learn More
                    </a>
                  </button>
                </div>
              </div>
            </article>
            <article className="postcard light red">
              <a className="postcard__img_link" href="#empty">
                <img
                  className="postcard__img"
                  src="Images/projects/wheelchair.jpeg"
                  alt="pic Title"
                />
              </a>
              <div className="postcard__text t-dark">
                <h1 className="postcard__title red">
                  <a href="#empty">Brain Controlled Wheelchair</a>
                </h1>
                {/* <div className="postcard__subtitle small">
                    <time datetime="2020-05-25 12:00:00">
                      <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th
                      2020
                    </time>
                  </div> */}
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  Brain Controlled Wheelchair uses Electroencephalogram (EEG)
                  band worn on the user’s forehead which detects neural impulses
                  that reach the scalp allowing the micro-controller on board to
                  detect user’s thought process, interpret it and control
                  wheelchair movements.
                </div>
                <div>
                  <button className="btn btn-outline-dark btn-small">
                    <a href="https://robosocnith.com/index.html">
                      <i className="fas fa-tag mr-2"></i>Learn More
                    </a>
                  </button>
                </div>
              </div>
            </article>
            <article className="postcard light green">
              <a className="postcard__img_link" href="#empty">
                <img
                  className="postcard__img"
                  src="Images/projects/balancingbot.jpeg"
                  alt="pic Title"
                />
              </a>
              <div className="postcard__text t-dark">
                <h1 className="postcard__title green">
                  <a href="#empty">Self-Balancing Bot</a>
                </h1>
                {/* <div className="postcard__subtitle small">    <time datetime="2020-05-25 12:00:00">
                      <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th
                      2020
                    </time>
                  </div> */}
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  A self-balancing robot is a classic
                  inverted pendulum control system that is solvable in two
                  degrees of freedom for the simplest models. The bot attempts
                  to correct for an induced lean angle by moving forward or
                  backward and the goal is to return itself to vertical.
                </div>
                <div>
                  <button className="btn btn-outline-dark btn-small">
                    <a href="https://robosocnith.com/index.html">
                      <i className="fas fa-tag mr-2"></i>Learn More
                    </a>
                  </button>
                </div>
              </div>
            </article>
          </section>
        </div>
      </div>
    </>
  )
}
export default ProjectHighLights;
