/** @format */

import React from "react";
import "./projects.css";
import { LongProjectsData } from "../../websiteUserData/projects";
import { PastProjectsData } from "../../websiteUserData/projects";
import { RoboconProjectsData } from "../../websiteUserData/projects";

const Projects = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className='project-head'>
        <h1 className='activity-head'>Long Term Projects</h1>
      </div>
      <div className='container'>
        <div>
          <section>
            {/* blue red green */}

            {LongProjectsData.map((Data) => (
              <article className='postcard light blue' key={Data.id}>
                <a className='postcard__img_link' href='#empty'>
                  <img className='postcard__img' src={Data.img} alt='pic Title' />
                </a>
                <div className='postcard__text t-dark'>
                  <h1 className='postcard__title blue'>{Data.title}</h1>
                  {/* <div className="postcard__subtitle small">*/}
                  <div className='postcard__bar'></div>
                  <div className='postcard__preview-txt'>{Data.data}</div>
                </div>
              </article>
            ))}
          </section>
        </div>
      </div>
      <div className='project-head'>
        <h1 className='activity-head'>Past Projects</h1>
      </div>
      <div className='container'>
        <div>
          <section className='light'>
            {/* blue red green */}

            {PastProjectsData.map((Data) => (
              <article className='postcard light blue' key={Data.id}>
                <a className='postcard__img_link' href='#empty'>
                  <img className='postcard__img' src={Data.img} alt='pic Title' />
                </a>
                <div className='postcard__text t-dark'>
                  <h1 className='postcard__title blue'>{Data.title}</h1>
                  {/* <div className="postcard__subtitle small">*/}
                  <div className='postcard__bar'></div>
                  <div className='postcard__preview-txt'>{Data.data}</div>
                </div>
              </article>
            ))}
          </section>
        </div>
      </div>
      <div className='project-head'>
        <h1 className='activity-head'>ROBOCON Projects</h1>
      </div>
      <div className='container'>
        <div>
          <section className='light'>
            {/* blue red green */}

            {RoboconProjectsData.map((Data) => (
              <article className='postcard light blue' key={Data.id}>
                <a className='postcard__img_link' href='#empty'>
                  <img className='postcard__img' src={Data.img} alt='pic Title' />
                </a>
                <div className='postcard__text t-dark'>
                  <h1 className='postcard__title blue'>{Data.title}</h1>
                  {/* <div className="postcard__subtitle small">*/}
                  <div className='postcard__bar'></div>
                  <div className='postcard__preview-txt'>{Data.data}</div>
                </div>
              </article>
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default Projects;
