import "./pages.css";
import React from "react";
import {
    executiveMemebersDetails,
    volunteersMemebersDetails,
    coreMemebersDetails,
    codinatorsMemebersDetails
} from '../websiteUserData/members';

function Members() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);


    return (
        <>
        <div>
            <div className="container-members-heading d-flex justify-content-center">
                <h1>Faculty Coordinator</h1>
            </div>

            <div className="cards-list">
                <label className="card-wrap">
                    <div className="profile-card-4 text-center"><img alt="" src="../members/sant ram sir.jpeg" className="card-photo img img-responsive" />
                        <div className="profile-content">
                                <div className="profile-name">Sant Ram Chauhan
                                    <p className="profile-position">Faculty Coordinator</p>
                                </div>
                            <div className="profile-description">HOD MED, NITH</div>
                            <a href="https://in.linkedin.com/in/sant-chauhan-5223025b" className="bn5"><img src="../logo/linkedin.svg" alt="Linked In" style={{width : "20px", color : "white"}} /></a><a href="/" className="bn5"><img src="../logo/github.svg" alt="Github" style={{width : "25px", color : "white"}} /></a>
                        </div>
                    </div>
                </label>
            </div>

             {/*  Core members details*/}

             <div className="d-flex text-dark justify-content-center">
                <h1 className="mb-5">Core Members</h1>
            </div>

            <div className="cards-list">
                {coreMemebersDetails.map(userData => (
                    <label className="card-wrap" key={userData.id}>
                    <div className="profile-card-4 text-center"><img alt="" src={userData.image} style={{width: '200px',height: '300px'}} className="card-photo img img-responsive" />
                        <div className="profile-content">
                            <div className="profile-name">{userData.name}
                                <p className="profile-position"> {userData.role}</p>
                            </div>
                            <div className="profile-description">
                                {userData.field.map(data => (
                                    <li  key={data}>
                                        {data}
                                    </li>
                                ))}
                            </div>
                            <a href={userData.linkedin} className="bn5"><img src="../logo/linkedin.svg" alt="Linked In" style={{width : "20px", color : "white"}} /></a><a href={userData.github} className="bn5"><img src="../logo/github.svg" alt="Github" style={{width : "25px", color : "white"}} /></a>
                        </div>
                    </div>
                </label>
                ))}
            </div>

            {/*  Codinators Memebers */}

            <div className="d-flex text-dark justify-content-center">
                <h1 className="mb-5">Coordinate Members</h1>
            </div>

            <div className="cards-list">
                {codinatorsMemebersDetails.map(userData => (
                    <label className="card-wrap" key={userData.id}>
                    <div className="profile-card-4 text-center"><img alt="" src={userData.image} style={{width: '200px',height: '300px'}} className="card-photo img img-responsive" />
                        <div className="profile-content">
                            <div className="profile-name">{userData.name}
                                <p className="profile-position">Coordinator </p>
                            </div>
                            <div className="profile-description">
                                {userData.field.map(data => (
                                    <li  key={data}>
                                        {data}
                                    </li>
                                ))}
                            </div>
                            <a href={userData.linkedin} className="bn5"><img src="../logo/linkedin.svg" alt="Linked In" style={{width : "20px", color : "white"}} /></a><a href={userData.github} className="bn5"><img src="../logo/github.svg" alt="Github" style={{width : "25px", color : "white"}} /></a>
                        </div>
                    </div>
                </label>
                ))}
            </div>

            {/*  Executive Memebers */}

            <div className="d-flex text-dark justify-content-center">
                <h1 className="mb-5">Executive Members</h1>
            </div>

            <div className="cards-list">
                {executiveMemebersDetails.map(userData => (
                    <label className="card-wrap"  key={userData.id}>
                    <div className="profile-card-4 text-center"><img alt="" src={userData.image} style={{width: '200px',height: '300px'}} className="card-photo img img-responsive" />
                        <div className="profile-content">
                            <div className="profile-name">{userData.name}
                                <p className="profile-position">Executive</p>
                            </div>
                            <div className="profile-description">
                                {userData.field.map(data => (
                                    <li  key={data}>
                                        {data}
                                    </li>
                                ))}
                            </div>
                            <a href={userData.linkedin} className="bn5"><img src="../logo/linkedin.svg" alt="Linked In" style={{width : "20px", color : "white"}} /></a><a href={userData.github} className="bn5"><img src="../logo/github.svg" alt="Github" style={{width : "25px", color : "white"}} /></a>
                        </div>
                    </div>
                </label>
                ))}
            </div>

             {/* Volunteers Memebers */}
                
            {volunteersMemebersDetails.length > 0 ?<div className="d-flex text-dark justify-content-center">
                <h1 className="mb-5">Volunteer Members</h1>
            </div> : ''}

            <div className="cards-list">
                {volunteersMemebersDetails.length > 0 ? volunteersMemebersDetails.map(userData => (
                    <label className="card-wrap">
                    <div className="profile-card-4 text-center"><img alt="" src={userData.image} style={{width: '200px',height: '300px'}} className="card-photo img img-responsive" />
                        <div className="profile-content">
                            <div className="profile-name">{userData.name}
                                <p className="profile-position">Volunteer</p>
                            </div>
                            <div className="profile-description">
                                {userData.field.map(data => (
                                    <li  key={data}>
                                        {data}
                                    </li>
                                ))}
                            </div>
                            <a href={userData.linkedin} className="bn5"><img src="../logo/linkedin.svg" alt="Linked In" style={{width : "20px", color : "white"}} /></a><a href={userData.github} className="bn5"><img src="../logo/github.svg" alt="Github" style={{width : "25px", color : "white"}} /></a>
                        </div>
                    </div>
                </label>
                )) : ''}
            </div>
            </div>
        </>
    );
}

export default Members;