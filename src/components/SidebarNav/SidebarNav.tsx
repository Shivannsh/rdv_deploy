import React from "react";
import { useState } from "react";
import "./SidebarNav.css";
// import './SidePannel.css';
import { Link, NavLink, useNavigate } from "react-router-dom";
import RDV_TEXT from "../../assets/img/Rendezvous.svg";
import RDV_LOGO from "../../assets/img/logo.svg";
import Bars from "../../assets/img/icons/bars.png";
import Cross from "../../assets/img/icons/cross.png";
import IMG_DESKTOP from "../../assets/img/RDVfinal.svg";
import IMG_MOBILE from "../../assets/img/RDVfinal_mobile.svg";
import { Nav, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Home from "../../assets/img/icons/home.png";
import Games from "../../assets/img/icons/games.png";
import FAQs from "../../assets/img/icons/faq.png";
import GalleryImg from "../../assets/img/icons/gallery.png";
import EventsImg from "../../assets/img/icons/events.png";
import Team from '../../assets/img/icons/team.png'
import AboutImg from "../../assets/img/icons/about.png"
import ProImg from "../../assets/img/icons/pronite.png"
import MerchImg from "../../assets/img/icons/merch.png"
import SechImg from "../../assets/img/icons/schedule.png"
import SponImg from "../../assets/img/icons/sponsor.png"
import { delJWT, getJWT, logout } from "../../utils/api";

function SidebarNav() {
  const navigate = useNavigate();
  const [isToogle, setToogle] = useState(false);
  window.addEventListener("click", function (e: any) {
    if (
      !(
        document.getElementById("SidePanel")?.contains(e.target) ||
        document.getElementById("tooglebtn")?.contains(e.target)
      )
    ) {
      if (isToogle) {
        setToogle(false);
      }
    }
  });
  const handleOnClick = () => {
    setToogle(true);
  };
  const hidePannel = () => {
    setToogle(false);
  };

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const IMG = window.innerWidth > 820 ? IMG_DESKTOP : IMG_MOBILE;
  return (
    <>
      <Navbar
        expand="lg"
        style={{
          color: "#FFFFFF",
          zIndex: "98",
          width: "100%",
          position: "fixed",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          minHeight: "1.2em",
          top: "0",
          left: "0",
          backdropFilter: "blur(0.8px)",
          alignItems: "center",
        }}
        variant="dark"
      >
        <div className="links">
          <div id="links-left">
            <img
              src={Bars}
              width="22px"
              style={{ cursor: "pointer" }}
              id="tooglebtn"
              onClick={!isToogle ? handleOnClick : () => { }}
              alt="&#8801;"
            />
            {/* <Nav className= "content-to-hide">
              <Link to="/" style={{ textDecoration: "none" }}>
                <Navbar.Brand href="/" className = "content-to-hide">
                  <img
                    src={RDV_LOGO}
                    style={{ width: "60%", paddingRight: "0vw" }}
                    className="custom-logo"
                    alt="Logo"
                  />
                </Navbar.Brand>
              </Link>
            </Nav> */}
            <Nav className="content-to-hide">
              <Link to="/" style={{ textDecoration: "none" }}>
                <Navbar.Brand className="content-to-hide">
                  <img src={IMG_DESKTOP} id="rdv-txt" style={{ width: "60%" }} />
                </Navbar.Brand>

              </Link>
            </Nav>
          </div>
          <div
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
            }}
          >

            <Nav
              className={`ms-auto h5 d-inline-flex`}
              style={{
                fontFamily: "Quincy",
                marginRight: "2vw",
              }}
            >
              {getJWT() !== null ? (
                <NavLink
                  to={"/dashboard"}
                  className="navButton"
                  style={{ marginLeft: "auto", color: "black" }}
                >
                  Dashboard
                </NavLink>
              ) : (
                null
              )}
            </Nav>

            <Nav
              className={`ms-auto h5 d-inline-flex`}
              style={{
                fontFamily: "Quincy",
                marginRight: "2vw",
              }}
            >
              {getJWT() === null ? (
                <NavLink
                  to={"/login"}
                  className="navButton"
                  style={{ marginLeft: "auto", color: "black" }}
                >
                  Log In
                </NavLink>
              ) : (
                <button
                  className="navButton"
                  onClick={() => {
                    logout();
                    navigate("/");
                    hidePannel();
                  }}
                >
                  Logout
                </button>
              )}
            </Nav>
          </div>
        </div>
      </Navbar>
      <div
        className="BodyBlur"
        style={
          isToogle
            ? { backdropFilter: "blur(1px) opacity(1)", zIndex: "99" }
            : { width: 0 }
        }
      ></div>
      <div
        className="SidePanel"
        id="SidePanel"
        style={!isToogle ? { left: "-100%" } : {}}
      >
        <div className="SidePannel-toggle-Btn">
          <img
            src={Cross}
            width="22px"
            style={{ cursor: "pointer" }}
            onClick={hidePannel}
            alt="X"
          />
        </div>

        <img src={IMG} alt="" id="Template-RDV-Logo" />
        <div className="TemplateLinks">
          <ul id="PostLoginNavLinks">
            {/* Home Events competition pronite aboutus FAq gallery */}
            <li>
              <NavLink onClick={hidePannel} to="/">
                <img src={Home} alt="Home" />
                Home
              </NavLink>
            </li>
            {/* <li>
              <NavLink onClick={hidePannel} to="/schedule">
                <img src={SechImg} alt="Home" />
                Schedule
              </NavLink>
            </li> */}
            <li>
              <NavLink onClick={hidePannel} to="/events/All">
                <img src={EventsImg} alt="Home" />
                Events
              </NavLink>
            </li>
            {/* <li>
              <NavLink onClick={hidePannel} to="/informal">
                <img src={Games} alt="Home" />
                Informal Games
              </NavLink>
            </li> */}
            <li>
              <NavLink onClick={hidePannel} to="/pronite">
                <img src={ProImg} alt="Home" />
                Pronite
              </NavLink>
            </li>
            {/* <li>
              <NavLink onClick={hidePannel} to="/sponser">
                <img src={SponImg} alt="Home" />
                Sponsor
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink onClick={hidePannel} to="/merch">
                <img src={MerchImg} alt="Home" />
                Merchandise
              </NavLink>
            </li> */}

            <li>
              <NavLink onClick={hidePannel} to="/gallery">
                <img src={GalleryImg} alt="Home" />
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink onClick={hidePannel} to="/faq">
                <img src={FAQs} alt="Home" />
                FAQs
              </NavLink>
            </li>
            {/* <li>
              <NavLink onClick={hidePannel} to="/team">
                <img src={Team} alt="Home" />
                Team
              </NavLink>
            </li> */}
            <li>
              <NavLink onClick={hidePannel} to="/aboutus">
                <img src={AboutImg} alt="Home" />
                About Us
              </NavLink>
            </li>


            {/* <li>
              <NavLink onClick={hidePannel} to="/sponser">
                <img src={RDV_LOGO} alt="Home" />
                Sponsors
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
}

export default SidebarNav;
