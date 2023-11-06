import Header from "../../components/header";
// import "./home.css";
import logo from "../../assets/img/RDVfinal.svg";
import { NavLink } from "react-router-dom";
import Events from "./components/events";
import Home_pronite from "./components/home_pronite";
import Aboutus from "./components/Aboutus";
import Merchandise from "./components/Mechandise";

const Home_new = () => {

  return (
    <>
      <Aboutus />
      <Events/>
      <Home_pronite/>
      <Merchandise />
    </>
  );
}

export default Home_new;