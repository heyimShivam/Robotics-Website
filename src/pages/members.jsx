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
                    <div className="profile-card-4 text-center"><img alt="" src="members/IMG_20210513_210655 - 20BEE095 Shivam.jpg" className="card-photo img img-responsive" />
                        <div className="profile-content">
                            <div className="profile-name">Shivam
                                <p>Executive Memeber</p>
                            </div>
                            <div className="profile-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</div>
                            <a href="/" className="bn5">LinkedIn</a><a href="/" className="bn5">Github</a>
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
                                <a href="/" className="bn5">LinkedIn</a><a href="/" className="bn5">Github</a>
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
                            <a href="/" className="bn5">LinkedIn</a><a href="/" className="bn5">Github</a>
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
                           <a href="/" className="bn5">LinkedIn</a><a href="/" className="bn5">Github</a>
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
                            <a href="/" className="bn5">LinkedIn</a><a href="/" className="bn5">Github</a>
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