import "./pages.css"
import {alumni_members} from '../websiteUserData/members';

function Alumni() {
    return(
        <>
        <div style={{backgroundColor : "#341c1c"}}>
        <div className="container-members-heading d-flex justify-content-center" style={{backgroundColor : "#rgb(8 27 36)"}}>
                <h1 style={{color : "#CBF1F5"}}>Alumni Members</h1>
        </div>

        <div className="cards-list">
                {alumni_members.map(userData => (
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
                                <a href="/" className="bn5 align-self-end"><img src="logo/linkedin.svg" alt="Linked In" style={{width : "20px", color : "white"}} /></a>
                                <a href="/" className="bn5 align-self-end"><img src="logo/github.svg" alt="Github" style={{width : "25px", color : "white"}} /></a>
                            </div>
                        </div>
                    </label>
                ))}
            </div>
            </div>
        </>
    )
}

export default Alumni;