import { Link } from 'react-router-dom';
import React from "react"
import Aos from 'aos';
import './outline.scss'
import './Navbar.css';
import { navItems } from '../websiteUserData/navBar';

class Navbar extends React.Component { 
    
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            height: window.innerHeight,
        };
    }

    handleResize = (e) => {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  componentDidMount() {
      window.addEventListener("resize", this.handleResize);
      Aos.init({
          duration: 500,
      });
      // let currentPage = document.getElementById("page-name").textContent.toLowerCase();
      // this.setState({ page: currentPage });
  }

  componentWillUnmount() {
      window.addEventListener("resize", this.handleResize);
  }

    render(){
       
        return(<> 
                    <div className = { this.state.width <= 1100 ? "main-nav win-resize" : "main-nav" }>

                    {/* <div className="nav-logo">
                        <a href="./index.html" className="scrollto"><img src="./img/logo-2.png"></a>
                    </div> */}
                    <nav id="nav__nav" style={{ "padding-right": "1.8rem" }}>
                        {this.state.width <= 1100 ?
                        <>
                        <button className="navbar-toggler toggler-example" type="button" data-toggle="collapse"
                         data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="hamburger-icon"><i className="fa fa-bars" aria-hidden="true"></i></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent1">
                            <ul className="navbar-nav mr-auto">
                                {navItems.map((item, index) => {
                                return (
                                    <li key={index} className="nav-item"><a className="nav-link" href={item.url}>{item.title}</a></li>
                                )
                                })}  
                            </ul>
                        </div>
                        </>
                        :
                        <>
                        <div id="addNavLogo"></div>
                        <div className="nav-comps">
                            <ul>
                                {navItems.map((item, index) => {
                                    return (
                                    <li key={index} className={ item.title.toLowerCase() === this.state.page && "nav-active" }>
                                    <Link className='LinkesNav' to={item.url}>{item.title}</Link>
                                    </li>
                                )
                                })}
                            </ul>
                        </div>
                        </>
                        }
                    </nav>
                </div>        
            </>
         );
    }
}
 
export default Navbar;