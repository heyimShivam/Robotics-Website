import "./pages.css"
import {
    executiveMemebersDetails,
    volunteersMemebersDetails,
    coreMemebersDetails,
    codinatorsMemebersDetails
} from '../websiteUserData/members';

function Members() {
    return (
        <>
        <div style={{backgroundColor:"#341c1c"}}>
            <div className="container-members-heading d-flex justify-content-center">
                <h1>Current Members</h1>
            </div>

            <div className="cards-list">
                <label className="card-wrap">
                    <div className="profile-card-4 text-center"><img alt="" src="members/sant ram sir.jpeg" className="card-photo img img-responsive" />
                        <div className="profile-content">
                                <div className="profile-name">Sant Ram Chauhan
                                    <p className="profile-position">Faculty Coordinator</p>
                                </div>
                            <div className="profile-description">HOD MED, NITH</div>
                            <a href="https://in.linkedin.com/in/sant-chauhan-5223025b" className="bn5"><img src="logo/linkedin.svg" alt="Linked In" style={{width : "20px", color : "white"}} /></a><a href="/" className="bn5"><img src="logo/github.svg" alt="Github" style={{width : "25px", color : "white"}} /></a>
                        </div>
                    </div>
                </label>
            </div>

            {/*  Core Memebers */}
            <div className="cards-list">
                {coreMemebersDetails.map(userData => (
                    <label className="card-wrap">
                        <div className="profile-card-4 text-center"><img alt="" src={userData.image} className="card-photo img img-responsive" />
                            <div className="profile-content">
                                <div className="profile-name">{userData.name}
                                    <p className="profile-position">{userData.role}</p>
                                </div>
                                <div className="profile-description">
                                    {userData.field.map(data => (
                                        <li>
                                            {data}
                                        </li>
                                    ))}
                                </div>
                                <a href="/" className="bn5"><img src="logo/linkedin.svg" alt="Linked In" style={{width : "20px", color : "white"}} /></a><a href="/" className="bn5"><img src="logo/github.svg" alt="Github" style={{width : "25px", color : "white"}} /></a>
                            </div>
                        </div>
                    </label>
                ))}
            </div>

            {/*  Codinators Memebers */}

            <div className="cards-list">
                {codinatorsMemebersDetails.map(userData => (
                    <label className="card-wrap">
                    <div className="profile-card-4 text-center"><img alt="" src={userData.image} className="card-photo img img-responsive" />
                        <div className="profile-content">
                            <div className="profile-name">{userData.name}
                                <p className="profile-position">{userData.role}</p>
                            </div>
                            <div className="profile-description">
                                {userData.field.map(data => (
                                    <li>
                                        {data}
                                    </li>
                                ))}
                            </div>
                            <a href="/" className="bn5"><img src="logo/linkedin.svg" alt="Linked In" style={{width : "20px", color : "white"}} /></a><a href="/" className="bn5"><img src="logo/github.svg" alt="Github" style={{width : "25px", color : "white"}} /></a>
                        </div>
                    </div>
                </label>
                ))}
            </div>

            {/*  Executive Memebers */}

            <div className="cards-list">
                {executiveMemebersDetails.map(userData => (
                   <label className="card-wrap">
                   <div className="profile-card-4 text-center"><img alt="" src={userData.image} className="card-photo img img-responsive" />
                       <div className="profile-content">
                           <div className="profile-name">{userData.name}
                               <p className="profile-position">{userData.role}</p>
                           </div>
                           <div className="profile-description">
                               {userData.field.map(data => (
                                   <li>
                                       {data}
                                   </li>
                               ))}
                           </div>
                           <a href="/" className="bn5"><img src="logo/linkedin.svg" alt="Linked In" style={{width : "20px", color : "white"}} /></a><a href="/" className="bn5"><img src="logo/github.svg" alt="Github" style={{width : "25px", color : "white"}} /></a>
                       </div>
                   </div>
               </label>
                ))}
            </div>

            {/*  Volunteers Memebers */}

            <div className="cards-list">
                {volunteersMemebersDetails.map(userData => (
                    <label className="card-wrap">
                    <div className="profile-card-4 text-center"><img alt="" src={userData.image} className="card-photo img img-responsive" />
                        <div className="profile-content">
                            <div className="profile-name">{userData.name}
                                <p className="profile-position">{userData.role}</p>
                            </div>
                            <div className="profile-description">
                                {userData.field.map(data => (
                                    <li>
                                        {data}
                                    </li>
                                ))}
                            </div>
                            <a href="/" className="bn5"><img src="logo/linkedin.svg" alt="Linked In" style={{width : "20px", color : "white"}} /></a><a href="/" className="bn5"><img src="logo/github.svg" alt="Github" style={{width : "25px", color : "white"}} /></a>
                        </div>
                    </div>
                </label>
                ))}
            </div>
            </div>
        </>
    );
}

export default Members;