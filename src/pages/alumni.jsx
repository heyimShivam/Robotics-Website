/** @format */

import "./pages.css";
import { alumni_members,alumni_members2 } from "../websiteUserData/members";
import React from "react";

function Alumni() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div>
        <div className='container-members-heading d-flex justify-content-center' style={{ backgroundColor: "#rgb(8 27 36)" }}>
          <h1>Former Members</h1>
        </div>

        <div className='d-flex text-dark justify-content-center'>
          <h1 className='mb-5'>2022</h1>
        </div>

         {/* Core Memebers
        // <div className='cards-list'>
        //   {alumni_members2.map((userData) => (
        //     <label className='card-wrap'>
        //       <div className='profile-card-4 text-center'>
        //         <img alt='' src={userData.image} className='card-photo img img-responsive' />
        //         <div className='profile-content'>
        //           <div className='profile-name'>
        //             {userData.name}
        //             <p className='profile-position'>{userData.role}</p>
        //           </div>
        //           <div className='profile-description'>
        //             {userData.field.map((data) => (
        //               <li>{data}</li>
        //             ))}
        //           </div>
        //           <a href='/' className='bn5'>
        //             <img src='logo/linkedin.svg' alt='Linked In' style={{ width: "20px", color: "white" }} />
        //           </a>
        //           <a href='/' className='bn5'>
        //             <img src='logo/github.svg' alt='Github' style={{ width: "25px", color: "white" }} />
        //           </a>
        //         </div>
        //       </div>
        //     </label>
        //   ))}
        // </div>

        // <div className='d-flex text-dark justify-content-center'>
        //   <h1 className='mb-5'>2021</h1>
        // / </div> */
        }

        <div className='cards-list'>
          {alumni_members.map((userData) => (
            <label className='card-wrap' key={userData.id}>
              <div className='profile-card-4 text-center'>
                <img alt='' src={userData.image} className='card-photo img img-responsive' />
                <div className='profile-content'>
                  <div className='profile-name'>
                    {userData.name}
                    <p className='profile-position'>{userData.role}</p>
                  </div>
                  <div className='profile-description'>
                    {userData.field.map((data) => (
                      <li  key={data}>{data}</li>
                    ))}
                  </div>
                  <a href={userData.linkedin} className='bn5 align-self-end'>
                    <img src='logo/linkedin.svg' alt='Linked In' style={{ width: "20px", color: "white" }} />
                  </a>
                  <a href={userData.github} className='bn5 align-self-end'>
                    <img src='logo/github.svg' alt='Github' style={{ width: "25px", color: "white" }} />
                  </a>
                </div>
              </div>
            </label>
          ))}
        </div>

        <div className='d-flex text-dark justify-content-center'>
          <h1 className='mb-5'>2021</h1>
        </div>

        <div className='cards-list'>
          {alumni_members2.map((userData) => (
            <label className='card-wrap'  key={userData.id}>
              <div className='profile-card-4 text-center'>
                <img alt='' src={userData.image} className='card-photo img img-responsive' />
                <div className='profile-content'>
                  <div className='profile-name'>
                    {userData.name}
                    <p className='profile-position'>{userData.role}</p>
                  </div>
                  <div className='profile-description'>
                    {userData.field.map((data) => (
                      <li  key={data}>{data}</li>
                    ))}
                  </div>
                  <a href={userData.linkedin} className='bn5 align-self-end'>
                    <img src='logo/linkedin.svg' alt='Linked In' style={{ width: "20px", color: "white" }} />
                  </a>
                  <a href={userData.github} className='bn5 align-self-end'>
                    <img src='logo/github.svg' alt='Github' style={{ width: "25px", color: "white" }} />
                  </a>
                </div>
              </div>
            </label>
          ))}
        </div>

      </div>
    </>
  );
}

export default Alumni;
