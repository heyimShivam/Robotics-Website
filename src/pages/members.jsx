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
                                    <p>{userData.role}</p>
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

                        <input type="checkbox" className="flipcard" />
                        <div className="card">
                            <div className="front card-face">
                                <img alt="" className="card-photo" />
                                <h4 className="cardText cardTextSubLead"><br />
                                    <span className="cardSubText">

                                    </span>
                                </h4>
                            </div>
                            <div className="back card-face">
                                <div>
                                    <br />
                                    <h4 className="cardBackName">{userData.name}</h4>
                                    <br />
                                    <div className="fieldOFIBackName">
                                        Field Of Intreset
                                    </div>

                                    {userData.field.map(data => (
                                        <li>
                                            {data}
                                        </li>
                                    ))}
                                    <br></br>
                                    <div className="d-flex  cardButton">

                                        <div className="col">
                                            <a href={userData.linkedin}>
                                                <i className="fas fabcards fa-arrow-circle-left"></i>

                                            </a>
                                        </div>
                                        <div className="col">
                                            <a href="goole.com">
                                                <i className="fab fabcards fa-github"></i>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a href={userData.linkedin}>
                                                <i className="fab fabcards fa-linkedin-in"></i>

                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </label>
                ))}
            </div>

            {/*  Codinators Memebers */}

            <div className="cards-list">
                {codinatorsMemebersDetails.map(userData => (
                    <label className="card-wrap">
                        <input type="checkbox" className="flipcard" />
                        <div className="card">
                            <div className="front card-face">
                                <img src={userData.image} alt="" className="card-photo" />
                                <h4 className="cardText cardTextCoLead">{userData.name}<br />
                                    <span className="cardSubText">
                                        Codinators
                                    </span>
                                </h4>
                            </div>
                            <div className="back card-face">
                                <div>
                                    <br />
                                    <h4 className="cardBackName">{userData.name}</h4>
                                    <br />
                                    <div className="fieldOFIBackName">
                                        Field Of Intreset
                                    </div>

                                    {userData.field.map(data => (
                                        <li>
                                            {data}
                                        </li>
                                    ))}
                                    <br></br>
                                    <div className="d-flex  cardButton">

                                        <div className="col">
                                            <a href={userData.linkedin}>
                                                <i className="fas fabcards fa-arrow-circle-left"></i>

                                            </a>
                                        </div>
                                        <div className="col">
                                            <a href="goole.com">
                                                <i className="fab fabcards fa-github"></i>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a href={userData.linkedin}>
                                                <i className="fab fabcards fa-linkedin-in"></i>

                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </label>
                ))}
            </div>

            {/*  Executive Memebers */}

            <div className="cards-list">
                {executiveMemebersDetails.map(userData => (
                    <label className="card-wrap">
                        <input type="checkbox" className="flipcard" />
                        <div className="card">
                            <div className="front card-face">
                                <img src={userData.image} alt="" className="card-photo" />
                                <h4 className="cardText cardTextExeMem">{userData.name}<br />
                                    <span className="cardSubText">
                                        Executive Memeber
                                    </span>
                                </h4>
                            </div>
                            <div className="back card-face">
                                <div>
                                    <br />
                                    <h4 className="cardBackName">{userData.name}</h4>
                                    <br />
                                    <div className="fieldOFIBackName">
                                        Field Of Intreset
                                    </div>

                                    {userData.field.map(data => (
                                        <li>
                                            {data}
                                        </li>
                                    ))}
                                    <br></br>
                                    <div className="d-flex  cardButton">

                                        <div className="col">
                                            <a href={userData.linkedin}>
                                                <i className="fas fabcards fa-arrow-circle-left"></i>

                                            </a>
                                        </div>
                                        <div className="col">
                                            <a href="goole.com">
                                                <i className="fab fabcards fa-github"></i>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a href={userData.linkedin}>
                                                <i className="fab fabcards fa-linkedin-in"></i>

                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </label>
                ))}
            </div>

            {/*  Volunteers Memebers */}

            <div className="cards-list">
                {volunteersMemebersDetails.map(userData => (
                    <label className="card-wrap">
                        <input type="checkbox" className="flipcard" />
                        <div className="card">
                            <div className="front card-face">
                                <img src={userData.image} alt="" className="card-photo" />
                                <h4 className="cardText cardTextVolunteers">{userData.name}<br />
                                    <span className="cardSubText">
                                        Volunteer
                                    </span>
                                </h4>
                            </div>
                            <div className="back card-face">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </label>
                ))}
            </div>
        </>
    );
}

export default Members;