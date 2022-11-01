/** @format */

import { Link } from "react-router-dom";
import React from "react";
import Aos from "aos";
import "./outline.scss";
import "./Navbar.css";
import { navItems } from "../websiteUserData/navBar";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
      activePage: 'Home',
      scrollValue: 0,
    };
  }


  handleScroll = () => {
    const position = window.pageYOffset;
    this.setState({
      scrollValue: position
    })
  };

  handleResize = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  changeActivePage = (pageName) => {
    this.setState({
      activePage: pageName
    },
    )
  }



  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("scroll", this.handleScroll);
    Aos.init({
      duration: 500,
    });
    // let currentPage = document.getElementById("page-name").textContent.toLowerCase();
    // this.setState({ page: currentPage });
  }

  componentWillUnmount() {
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <>
        <div className={`${this.state.width <= 1100 ? "main-nav win-resize" : "main-nav"} ${this.state.scrollValue >= 400 ? 'nav-scrolled' : ''} ${this.props.loc === "/" ? "" : this.props.loc === "/gallery" ? '' : "nav-scrolled"} ${this.state.activePage === "Home" ? "" : this.state.activePage === "Gallery" ? '' : "nav-scrolled"}  `}>
          <nav id='nav__nav'  style={{ "paddingRight": "1.8rem" }}>

            {this.state.width <= 1100 ? (
              <>
                <button
                  className='navbar-toggler nav__button toggler-example'
                  type='button'
                  data-toggle='collapse'
                  data-target='#navbarSupportedContent1'
                  aria-controls='navbarSupportedContent1'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
                >
                  <span className='hamburger-icon'>
                    <i className='fa fa-bars' aria-hidden='true'></i>
                  </span>
                </button>
                <div className='collapse navbar-collapse' id='navbarSupportedContent1'>
                  <ul className='navbar-nav mr-auto'>
                    {navItems.map((item, index) => {
                      return item.length < 2 ? (
                        <li key={index} className='nav-item'>
                          <Link className='nav-link' to={item[0].url} onClick={()=> this.changeActivePage(item[0].title)}>
                            {item[0].title}
                          </Link>
                        </li>
                      ) : (
                        <div>
                          <li>
                            <Link
                              to={"#"}
                              className='LinkesNavDropdownMobile dropdown-toggle'
                              id='dropdownMenuButton'
                              data-toggle='dropdown'
                            >
                              {item[0].title} <i className='bi bi-arrow-down'></i>
                            </Link>
                            <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
                              {item.map((item, index) => {
                                return (
                                  <>
                                    <Link className='dropdown-item' to={item.url}  onClick={()=> this.changeActivePage(item.title)}>
                                      {item.title}
                                    </Link>
                                  </>
                                );
                              })}
                            </div>
                          </li>
                        </div>
                      );
                    })}
                  </ul>
                </div>
              </>
            ) : (
              <>
                <div id='addNavLogo' className="text-light"></div>
                <div className='nav-comps'>
                  <ul>
                    {navItems.map((item, index) => {
                      return item.length < 2 ? (
                        <li
                          key={index}
                          className={
                            item[0].title.toLowerCase() === this.state.page && "nav-active"
                          }
                          style={{padding: "0.5rem"}}
                        >
                          <Link className='LinkesNav' to={item[0].url} onClick={()=> this.changeActivePage(item[0].title)}>
                            {item[0].title}
                          </Link>
                        </li>
                      ) : (
                        <div>
                          <li>
                            <Link to={"#"} className='LinkesNavDropdown dropdown-toggle' id='dropdownMenuButton' data-toggle='dropdown'  onClick={()=> this.changeActivePage(item[0].title)}>
                              {item[0].title} <i className='bi bi-arrow-down'></i>

                            </Link>
                            <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
                              {item.map((item, index) => {
                                return (
                                  <>
                                    <Link className='dropdown-item' to={item.url}  onClick={()=> this.changeActivePage(item.title)}>
                                      {item.title}
                                    </Link>
                                  </>
                                );
                              })}
                            </div>
                          </li>
                        </div>
                      );
                    })}
                  </ul>
                </div>
              </>
            )}
          </nav>
        </div>
      </>
    );
  }
}

export default Navbar;
