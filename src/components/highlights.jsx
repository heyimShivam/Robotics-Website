import 'swiper/css';
import './components.css'

import 'swiper/css/pagination';
import { projectDetails } from '../websiteUserData/Activities and Highlights Data.jsx';


function Highlights(){
    return(<>
    <ul class="cardsNew">
    {projectDetails.map(data => (  
          <li key={data.id}>
          <a href={data.link} class="cardNew">
            <img src={data.mainImage} class="card__image" alt="" />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                <img class="card__thumb" src={data.image} alt="" />
                <div class="card__header-text">
                  <h3 class="card__title">{data.title}</h3>            
                  <span class="card__status">{data.shortDetails}</span>
                </div>
              </div>
              <p class="card__description">{data.content}</p>
            </div>
          </a>      
        </li>
    ))}
</ul>
    </>)
}

export default Highlights;