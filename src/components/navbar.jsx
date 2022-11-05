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
      activePage: "Home",
      scrollValue: 0,
      button: false,
      activeNav: true,
    };
  }

  handleScroll = () => {
    const position = window.pageYOffset;
    this.setState({
      scrollValue: position,
    });
  };

  handleResize = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  changeActivePage = (pageName) => {
    this.setState({
      activePage: pageName,
    });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("scroll", this.handleScroll);
    // window.addEventListener("scroll", this.handleNav);
    // window.addEventListener("click",this.handleNav);
    Aos.init({
      duration: 500,
    });
    // let currentPage = document.getElementById("page-name").textContent.toLowerCase();
    // this.setState({ page: currentPage });
  }

  componentWillUnmount() {
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("scroll", this.handleScroll);
    // window.addEventListener("scroll", this.handleNav);
    // window.addEventListener("click",this.handleNav);
  }

  buttonClick = () => {
    this.setState({activeNav: !this.state.activeNav});
    this.state.activePage === "Home" ?
    this.state.button === true ?
    this.setState({button: false}) :
    this.setState({button: true}) :
    this.setState({button: false})
    this.state.button ==false ?
      this.setState({
      button : true 
    }) :
    this.setState({
      button :false
    })
  }

  render() {
    return (
      <>
        <div
          style={{background: `${this.state.button === true ? '' : this.state.activePage === "Home" && this.state.button === false ? "transparent" : ''}`}} 
          className={`${this.state.width <= 1100 ? "main-nav win-resize" : "main-nav"} ${this.state.scrollValue >= 400 ? "nav-scrolled" : ""} ${
          this.props.loc === "/" ? "" : this.props.loc === "/gallery" ? "" : "nav-scrolled"} ${this.state.activePage === "Home" ? "" : this.state.activePage === "Gallery" ? "" : "nav-scrolled"}  `}
        >
          <nav id='nav__nav'>
            {this.state.width <= 1100 ? (
              <>
                <button
                  className='navbar-toggler nav__button collapsed toggler-example'
                  type='button'
                  onClick={this.buttonClick}
                  data-toggle='collapse'
                  data-target='#navbarSupportedContent1'
                  aria-controls='navbarSupportedContent1'
                  aria-expanded={this.state.button}
                  aria-label='Toggle navigation'
                >
                  <span className='hamburger-icon'>
                    <i className={`${this.state.activeNav === true ? 'fa fa-bars' : 'fa fa-times'}`} aria-hidden='true'></i>
                  </span>
                </button>
                <div className='navbar-collapse collapse'
                  id='navbarSupportedContent1'>
                  <ul className='navbar-nav mr-auto'>
                    {navItems.map((item, index) => {
                      return item.length < 2 ? (
                        <li key={index} className='nav-item'>
                          <Link className='nav-link' to={item[0].url} onClick={() => this.changeActivePage(item[0].title)}>
                            {item[0].title}
                          </Link>
                        </li>
                      ) : (
                          <li className="nav-item">
                            <Link to={"#"} className='nav-link LinkesNavDropdownMobile dropdown-toggle' id='dropdownMenuButton' data-toggle='dropdown'>
                              {item[0].title} <i className='bi bi-arrow-down'></i>
                            </Link>
                            <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
                              {item.map((item, index) => {
                                return (
                                  <>
                                    <Link className='dropdown-item' to={item.url} onClick={() => this.changeActivePage(item.title)}>
                                      {item.title}
                                    </Link>
                                  </>
                                );
                              })}
                            </div>
                          </li>
                      );
                    })}
                  </ul>
                </div>
              </>
            ) : (
              <>
                <div id='addNavLogo' className='text-light'></div>
                <div className='nav-comps'>
                  <ul>
                    {navItems.map((item, index) => {
                      return item.length < 2 ? (
                        <li key={index} className={item[0].title.toLowerCase() === this.state.page && "nav-active"} style={{ padding: "0.5rem" }}>
                          <Link className='LinkesNav' to={item[0].url} onClick={() => this.changeActivePage(item[0].title)}>
                            {item[0].title}
                          </Link>
                        </li>
                      ) : (
                          <li className="nav-item">
                            <Link to={"#"} className='nav-link LinkesNavDropdown dropdown-toggle' id='dropdownMenuButton' data-toggle='dropdown' onClick={() => this.changeActivePage(item[0].title)}>
                              {item[0].title} <i className='bi bi-arrow-down'></i>
                            </Link>
                            <div className='dropdown-menu' aria-labelledby='dropdownMenuButton' >
                              {item.map((item, index) => {
                                return (
                                  <>
                                    <Link className='dropdown-item' to={item.url} onClick={() => this.changeActivePage(item.title)}>
                                      {item.title}
                                    </Link>
                                  </>
                                );
                              })}
                            </div>
                          </li>
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
