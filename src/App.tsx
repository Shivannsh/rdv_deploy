import React, { useEffect } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import Competition from "./pages/competition/competition";
import Sponser from "./pages/sponsers/sponsers";
import Events from "./pages/events/events";
import Pronite from "./pages/pronite/pronite";
import Register from "./pages/registration/register";
import Accomodation from "./pages/accomodation/accomodation";
import PreReg from "./pages/preregform/prereg";
import AboutUs from "./pages/about/about";
import Login from "./pages/login/login";
import CommingSoon from "./components/comingSoon";
import Gallery from "./pages/gallery/Gallery";
import Load from "./pages/gallery/Gallery";
import Informal from "./pages/Informal games/dist/informal";
import Event from "./pages/event/event";
import Schedule from "./pages/schedule/schedule"
// import './custom.scss';

import 'bootstrap/dist/css/bootstrap.min.css';
import Verify from './pages/preregform/components/verify';
import VerifyPage from './pages/preregform/verify_page';
import ForgotPass from './pages/login/forgotpass'
import Faqs from './pages/faq/faq';
import ResetPassword from './pages/login/ResetPassword';
import Home_new from './pages/Homepage_main/home_new';
import SidebarNav from './components/SidebarNav/SidebarNav';
import Aboutusmain from './pages/Landing_page/Aboutusmain';
import GLogin from './pages/GoogleLogin/prereg';
import { gapi } from 'gapi-script';
import { clientID } from './utils/api';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Dashboard from './pages/Dashboard/Dashboard';
import axios from 'axios';
import { API_BASE } from './utils/api';
import { getJWT, getRef, logout, setJWT } from './utils/api';
import refreshAccessToken from './utils/refresh';
import Merchandise from "./pages/merchandise/Merchandise";
import NonComp from "./pages/nonComp/noncomp";
import Team from "./pages/team/team";
import VerifyPass from "./pages/login/components/verify";
import Privacy from "./pages/privacy/privacy";


function App() {
  const fetchData = async () => {
    try {
      await axios.get(`${API_BASE}/users/profile/`, {
        headers: {
          Authorization: `Bearer ${getJWT()}`,
        },
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          try {
            const newAccessToken = await refreshAccessToken(getRef());
            setJWT(newAccessToken);
            window.location.reload();
          } catch (refreshError) {
            logout();
          }
        } else {
          console.error("Axios error:", error);
        }
      } else {
        console.error("Non-Axios error:", error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/aboutus" element={<AboutUs />} />
          {/* <Route path="/login" element={<GLogin />} /> */}
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faq" element={<Faqs />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/competition" element={<Competition />} /> */}
          <Route path="/" element={<Aboutusmain />} />
          <Route path="/noncomp" element={<NonComp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<PreReg />} />
          <Route path="/team" element={<Team />} />
          <Route path="/event/:id" element={<Event />} />
          <Route path="/events/:name" element={<Events />} />
          <Route path="/pronite" element={<Pronite />} />
          <Route path="/sponser" element={<Sponser />} />
          <Route path="/" element={<Aboutusmain />} />
          <Route path="/merch" element={<Merchandise />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/verifypass" element={<VerifyPass />} />
          <Route path="/verification" element={<VerifyPage />} />
          <Route path="/forgotpassword" element={<ForgotPass />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path='/privacy.html' element={<Privacy />} />
          <Route path="/informal" element={<Informal />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );

}

export default App;
