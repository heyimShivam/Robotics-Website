/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
const Navbar = () => {

  function animation() {
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top": itemPosNewAnimTop.top + "px",
      "left": itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top": itemPosNewAnimTop.top + "px",
        "left": itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }
  function handleResize() {
    if(window.innerWidth>991){
      setrightClass(true);
    }else{
      setrightClass(false);
    }
  }
  useEffect(() => {

    animation();
    $(window).on('resize', function () {
      setTimeout(function () { animation(); }, 500);
    });
    window.addEventListener('resize', handleResize);
  }, []);

  const [icon_menu, setCount] = useState(true);

  const [rightClass, setrightClass] = useState(window.innerWidth>991 ? true : false);

  function change() {

    if (icon_menu === true) {
      setCount(false);
    } else {
      setCount(true);
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg">

      <NavLink className="navbar-brand navbar-logo" to="/" exact>
        RoboSoc NIT-H
      </NavLink>


      <button
        className="navbar-toggler"
        onClick={function () {
          change();
          setTimeout(function () { animation(); });
        }}
        type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className={icon_menu ? "fas text-white fa-bars" : "fas text-white fa-times"}></i>
      </button>
     
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className={`navbar-nav ml-auto ${rightClass? 'navRight' : ''}`}>

          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>

          <li className="nav-item active">
            <NavLink className="nav-link" to="/" exact>
              <i className="fas fa-home">
              </i>Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/gallery" exact>
              <i
                className="far fa-chart-bar">
              </i>Gallery
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/about" exact>
              <i
                className="far fa-address-book">
              </i>About
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/manage" exact>
              <i
                className="far fa-copy">
              </i>Manage
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar;