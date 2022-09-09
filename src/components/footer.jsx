import "./footer.css";
function Footer() {
  return (
    <>
      <div className="footer-dark" style={{paddingTop:"0px",paddingBottom:"0px"}}>
        <footer style={{paddingTop:"1%",paddingBottom:"1%"}}>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li>
                    <a href="#">Web design</a>
                  </li>
                  <li>
                    <a href="#">Development</a>
                  </li>
                  <li>
                    <a href="#">Hosting</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li>
                    <a href="#">Company</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 item text">
                <h3>Robotics Society NIT Hamirpur</h3>
                <p>
                  Build and sustain a culture to be self reliant to accomplish
                  our vision, by emphasizing on the development of individual
                  quality.
                </p>
              </div>
              <div className="col item social">
                <a href="https://www.facebook.com/robo.soc.nith">
                  <i className="icon ion-social-facebook"></i>
                </a>
                <a href="#">
                  <i className="icon ion-social-twitter"></i>
                </a>
                <a href="https://www.instagram.com/robosocnith/">
                  <i className="icon ion-social-instagram"></i>
                </a>
              </div>
            </div>
            <p className="copyright">Robotics Society NIT Hamirpur © 2022</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
