// src/components/Nav.js
import React, {useEffect, useRef, useState} from "react";
// import "./Nav.css"; // split into own css file


const Nav = () => {
  const navRef = useRef(null);

  useEffect(() => {
    const navbar = navRef.current;

    if (navbar) {
      const stickyObserver = new IntersectionObserver(([e]) => {
        e.target.classList.toggle('stuck', e.intersectionRatio < 1);
      }, { threshold: [1] });

      stickyObserver.observe(navbar);

      // Clean up the observer when component unmounts
      return () => {
        stickyObserver.unobserve(navbar);
      };
    }
  }, []);

  // function toggleNavbarMenu() {
  //   navbar.classList.toggle("menu-open");
  // }
    
    
    return (
      <>
      <header id="hero">
        <div id="hero_heading">lIterator</div>
      </header>

      <nav id="navbar" ref={navRef}>
        <div id="navbar_hero_wrapper">
          <div id="navbar_hero">
            <span>lIterator</span>
          </div>
        </div>

        <img
          id="mobile_navbar_menu_button"
          className="clickable"
          src="./images/Icons/menu.svg"
          alt="menu"
          // onClick={() => toggleNavbarMenu()}
        />

        <div id="navbar_menu_wrapper">
          <div id="navbar_menu">
            <a className="unstyled navbar-link" href="">
              <span>Explore</span>
            </a>
            <a className="unstyled navbar-link" href="">
              <span>Library</span>
            </a>
            <a className="unstyled navbar-link" href="">
              <span>Profile</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
