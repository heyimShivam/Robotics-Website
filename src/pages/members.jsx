import "./pages.css"
import { executiveMemebersDetails,
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

        <div class="cards-list">
            <label class="card-wrap">
                <input type="checkbox" class="flipcard" />
                <div class="card">
                    <div class="front card-face">
                        <img src="members/IMG_20210513_210655 - 20BEE095 Shivam.jpg" alt="" class="card-photo" />
                        <h4 className="cardText cardTextLead">Shivam<br/>
                            <span className="cardSubText">
                              Executive Memeber
                            </span>
                        </h4>
                    </div>
                    <div class="back card-face">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
            </label>
        </div>
{/*  Core Memebers */}

<div class="cards-list">
            {coreMemebersDetails.map(userData => (  
            <label class="card-wrap">
            <input type="checkbox" class="flipcard" />
            <div class="card">
                <div class="front card-face">
                    <img src={userData.image} alt="" class="card-photo" />
                    <h4 className="cardText cardTextSubLead">{userData.name}<br/>
                        <span className="cardSubText">
                          {userData.role}
                        </span>
                        </h4>
                    </div>
                    <div class="back card-face">
                        <div>
                            <br />
                            <h4 class="cardBackName">{userData.name}</h4>
                            <br />
                            <div class="fieldOFIBackName">
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
                                   <i class="fas fabcards fa-arrow-circle-left"></i>
                
                                   </a>
                               </div>
                               <div className="col">
                                   <a href="goole.com">
                                   <i class="fab fabcards fa-github"></i>
                                   </a>
                               </div>
                               <div className="col">
                                   <a href={userData.linkedin}>
                                   <i class="fab fabcards fa-linkedin-in"></i>
                                   
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

<div class="cards-list">
            {codinatorsMemebersDetails.map(userData => (  
            <label class="card-wrap">
            <input type="checkbox" class="flipcard" />
            <div class="card">
                <div class="front card-face">
                    <img src={userData.image} alt="" class="card-photo" />
                    <h4 className="cardText cardTextCoLead">{userData.name}<br/>
                        <span className="cardSubText">
                          Codinators
                        </span>
                        </h4>
                    </div>
                    <div class="back card-face">
                        <div>
                            <br />
                            <h4 class="cardBackName">{userData.name}</h4>
                            <br />
                            <div class="fieldOFIBackName">
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
                                   <i class="fas fabcards fa-arrow-circle-left"></i>
                
                                   </a>
                               </div>
                               <div className="col">
                                   <a href="goole.com">
                                   <i class="fab fabcards fa-github"></i>
                                   </a>
                               </div>
                               <div className="col">
                                   <a href={userData.linkedin}>
                                   <i class="fab fabcards fa-linkedin-in"></i>
                                   
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

        <div class="cards-list">
            {executiveMemebersDetails.map(userData => (  
            <label class="card-wrap">
            <input type="checkbox" class="flipcard" />
            <div class="card">
                <div class="front card-face">
                    <img src={userData.image} alt="" class="card-photo" />
                    <h4 className="cardText cardTextExeMem">{userData.name}<br/>
                        <span className="cardSubText">
                          Executive Memeber
                        </span>
                        </h4>
                    </div>
                    <div class="back card-face">
                        <div>
                            <br />
                            <h4 class="cardBackName">{userData.name}</h4>
                            <br />
                            <div class="fieldOFIBackName">
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
                                   <i class="fas fabcards fa-arrow-circle-left"></i>
                
                                   </a>
                               </div>
                               <div className="col">
                                   <a href="goole.com">
                                   <i class="fab fabcards fa-github"></i>
                                   </a>
                               </div>
                               <div className="col">
                                   <a href={userData.linkedin}>
                                   <i class="fab fabcards fa-linkedin-in"></i>
                                   
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

<div class="cards-list">
            {volunteersMemebersDetails.map(userData => (  
            <label class="card-wrap">
            <input type="checkbox" class="flipcard" />
            <div class="card">
                <div class="front card-face">
                    <img src={userData.image} alt="" class="card-photo" />
                    <h4 className="cardText cardTextVolunteers">{userData.name}<br/>
                        <span className="cardSubText">
                        Volunteer
                        </span>
                        </h4>
                    </div>
                    <div class="back card-face">
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