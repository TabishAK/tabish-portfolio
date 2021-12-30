import { Link as Goto } from "react-router-dom";
import Slide from "react-reveal/Slide";
import { Link } from "react-scroll";
import React from "react";
import "./navbar.scss";

const Navbar = () => {
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <br />

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                spy={true}
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                offset={-50}
                spy={true}
                to="services"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link
                spy={true}
                to="work"
                offset={100}
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Work
              </Link>
            </li>

            <li className="nav-item">
              <Link
                spy={true}
                offset={70}
                to="about"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                spy={true}
                to="blog"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Blog
              </Link>
            </li>

            <li className="nav-item no-hover">
              <Link
                spy={true}
                offset={-200}
                to="contact"
                activeClassName="active"
                className="nav-links contact-link"
                onClick={click ? handleClick : null}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
