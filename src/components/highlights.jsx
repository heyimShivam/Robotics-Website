import 'swiper/css';
import './components.css'

import 'swiper/css/pagination';
import { projectDetails } from '../websiteUserData/Activities and Highlights Data.jsx';


function Highlights() {
  return (<>
    <div className="container highlights__container my-5 py-5 ">
      <div className="cardsNew justify-content-around py-5">
        {projectDetails.map(data => (
          <div className="d-flex justify-content-center " key={data.id}>
            <a href={data.link} className="cardNew">
              <img src={data.mainImage} className="card__image" alt="" />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                  <img className="card__thumb" src={data.image} alt="" />
                  <div className="card__header-text">
                    <h3 className="card__title">{data.title}</h3>
                    <span className="card__status">{data.shortDetails}</span>
                  </div>
                </div>
                <p className="card__description">{data.content}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  </>)
}

export default Highlights;