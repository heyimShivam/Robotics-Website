import "./about.css";
import React from "react";

function About() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    return (
      <>
      
      <h1 className="about__heading">ABOUT US</h1>

<p className="about__p">Robotics Society is a platform where students from various branches work together to nurture their technical understanding and culture their innovative ideas and dreams about robotics into reality.We would like to take all steps to excite and accelerate the interest of robotics among the students.</p>

<p className="about__p">We facilitate indispensable guidance through workshops and tutorials. It helps students to take up challenges from day to day life scenarios, orient the challenges to feasible solution form, stimulate the thought process of students and let them convert their ideas to prototypes by their technical skills, and creativity.</p>
</>
  );
}

export default About;