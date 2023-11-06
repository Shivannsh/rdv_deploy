import Header from "../../components/header";
import "./home.css";
import logo from "../../assets/img/RDVfinal.svg";
import { NavLink } from "react-router-dom";
import SidebarNav from "../../components/SidebarNav/SidebarNav";
const Home = () => {

  return (
    <>
    <SidebarNav />
    <div
      className="cmgsson-boss"
      style={{
        backgroundSize: "cover",
        height: "100vh",
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "center",
        fontFamily: "Quintessential",
        color: "#EFC36A",
      }}
    >
      
      <div className="rdv-sub">
        <img src={logo} alt="comming soon" className="rdv-text" />

        <NavLink
          type="button"
          className="custom-button"
          to="/preregistration" >
          Join Us
        </NavLink>

      </div>
     
    </div>

    </>
  );
}

export default Home;