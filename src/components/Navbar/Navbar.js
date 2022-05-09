import React, { useState } from "react";
import "./navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [sticky, setSticky] = useState(false);

  const scrollClass = () => {
    // console.log(window.scrollY);
    if (window.scrollY > 20) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", scrollClass);

  return (
    <div className="navbar-container">
      <div className={sticky ? "navbar sticky" : "navbar"}>
        <div className="logo" onClick={() => scroll.scrollToTop()}>
          fullerstack
          <i className="fas fa-dna" />
        </div>
        <div className="sidebar-button">
          {sidebar ? (
            <i className="fas fa-times" onClick={() => setSidebar(!sidebar)} />
          ) : (
            <i className="fas fa-bars" onClick={() => setSidebar(!sidebar)} />
          )}
        </div>
        <div className={sidebar ? "sidebar active" : "sidebar"}>
          <div className="sidebar-inner">
            <ul className="main-selection">
              <li className="home-li">
                <div
                  className="link"
                  onClick={() => {
                    scroll.scrollToTop();
                    setSidebar(!sidebar);
                  }}
                >
                  Home
                </div>
              </li>
              <li className="about-me-li">
                <Link
                  className="link"
                  to="about-me"
                  smooth={true}
                  duration={1000}
                  onClick={() => setSidebar(!sidebar)}
                >
                  About Me
                </Link>
              </li>
              <li className="projects-li">
                <Link
                  className="link"
                  to="projects"
                  smooth={true}
                  duration={1000}
                  onClick={() => setSidebar(!sidebar)}
                >
                  Projects
                </Link>
              </li>
              <ul className="projects-list">
                <li className="todo-list">
                  <Link
                    to="todo-list"
                    smooth={true}
                    duration={1000}
                    onClick={() => setSidebar(!sidebar)}
                  >
                    To-Do List
                  </Link>
                </li>
                <li className="capstone">
                  <Link
                    to="machine-learning"
                    smooth={true}
                    duration={1000}
                    onClick={() => setSidebar(!sidebar)}
                  >
                    Machine Learning
                  </Link>
                </li>
                <li className="google-maps">
                  <Link
                    to="google-maps"
                    smooth={true}
                    duration={1000}
                    onClick={() => setSidebar(!sidebar)}
                  >
                    Google Maps
                  </Link>
                </li>
                <li className="crypto-app">
                  <Link
                    to="crypto-app"
                    smooth={true}
                    duration={1000}
                    onClick={() => setSidebar(!sidebar)}
                  >
                    Crypto App
                  </Link>
                </li>
              </ul>
              <li className="contact-li">
                <div
                  className="link"
                  onClick={() => {
                    scroll.scrollToBottom();
                    setSidebar(!sidebar);
                  }}
                >
                  Contact
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
