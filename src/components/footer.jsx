import "./footer.css";
function Footer() {
  return (
    <>
      <div className="footer-dark" style={{paddingTop:"0px",paddingBottom:"0px"}}>
        <footer style={{paddingTop:"5%",paddingBottom:"5%"}}>
          <div className="container">
            <div className="row">
            
              
             
              <div className="col-md-12 item text">
                <h3 className="robosoc-footer-heading">Robotics Society NIT Hamirpur</h3>
                <p>
                  Build and sustain a culture to be self reliant to accomplish
                  our vision, by emphasizing on the development of individual
                  quality.
                </p>
              </div>
              <div className="col-md-12 item social">
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
