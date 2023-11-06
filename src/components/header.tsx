import React, { useState } from "react";
import logo from "../assets/img/logo.svg";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import rendezvous from "../assets/img/Rendezvous.svg";
import { Link } from "react-router-dom";
import "./header.css";
import { useLocation } from "react-router-dom";


function Header() {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const currentPage = location.pathname;
  let link = "";
  let name = "";
  let link2 = "";
  let name2 = "";

  if (currentPage === "/preregistration" || currentPage === "/aboutus") {
    name = "Home";
    link = "/";
  } else {
    name = "Pre Register";
    link = "/preregistration";
  }
  if (currentPage === "/preregistration" || currentPage === "/") {
    name2 = "About Us";
    link2 = "/aboutus";
  } else {
    name2 = "Pre Register";
    link2 = "/preregistration";
  }

  return (
    <div>
      <Navbar
        expand="lg"
        style={{
          color: "#FFFFFF",
          zIndex: "1",
          width: "100vw",
          position: "fixed",
          backgroundColor: "rgba(0, 0, 0, 0.65)",
          minHeight: "1.2em",
          top: "0",
          left: "0",
          backdropFilter: "blur(2px)",
        }}
        variant="dark"
      >
        <Container className="links">
          <div id="links-left">
            <Nav>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Navbar.Brand href="/">
                  <img
                    src={logo}
                    style={{ width: "60%", paddingRight: "0vw" }}
                    className="custom-logo"
                    alt="Logo"
                  />
                </Navbar.Brand>
              </Link>
            </Nav>
            <Nav>
              <Link to="/" style={{ textDecoration: "none" }}>
                {toggle ? null : (
                  <Navbar.Brand className="content-to-hide">
                    <img src={rendezvous} id="rdv-txt" />
                  </Navbar.Brand>
                )}
              </Link>
            </Nav>
          </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav" style={{flexGrow:0}}>
            <Nav
              className={`ms-auto h4 ${
                toggle ? "shifted-right" : ""
              } d-lg-inline-flex`}
              id="home"
              style={{
                fontFamily: "Quincy",
                marginRight: "2vw",
              }}
            >
              <Link
                to={link}
                className="nav-link"
                style={{ marginLeft: "auto", color: "#EFC36A" }}
              >
                {name}
              </Link>
            </Nav>
            <Nav
              className={`ms-auto h4 ${
                toggle ? "shifted-right" : ""
              } d-lg-inline-flex`}
              id="aboutus"
              style={{
                fontFamily: "Quincy",
                marginRight: "2vw",
              }}
            >
              <Link
                to={link2}
                className="nav-link"
                style={{ marginLeft: "auto", color: "#EFC36A" }}
              >
                {name2}
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
