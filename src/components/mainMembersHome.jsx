/** @format */

import "./components.css";

function MainMembersHome() {
  return (
    <>
      <div className='row'>
        <div className='col-lg-4 col-md-12 my-4'>
          <div className='cardMain'>
            <div className='imgBx'>
              <img src='members\sant ram sir.jpeg' />
            </div>
            <div className='details'>
              <h2>
                Dr. Sant Ram Chauhan<br></br>
                <span>Asst. Professor Mechanical </span>
              </h2>
            </div>
            <div className='position'>
              Faculty Coordinator
            </div>
          </div>
        </div>

        <div className='col-lg-4 col-md-6 my-4'>
          <div className='cardMain'>
            <div className='imgBx'>
              <img src='members\kashish sir.jpeg' />
            </div>
            <div className='details'>
              <h2>
                Kashish Verma<br></br>
                <span></span>
              </h2>
            </div>
            <div className='position'>Co-Founder</div>
          </div>
        </div>

        <div className='col-lg-4 col-md-6 my-4'>
          <div className='cardMain'>
            <div className='imgBx'>
              <img src='members\lamy sir.jpeg' />
            </div>
            <div className='details'>
              <h2>
                Late Lamyanba Heisnam<br></br>
                <span></span>
              </h2>
            </div>
            <div className='position'>Co-Founder</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainMembersHome;
