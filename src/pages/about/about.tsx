import AboutContainer from './components/aboutcontainer';
import Header from "../../components/header"
import './about.css';
import SidebarNav from '../../components/SidebarNav/SidebarNav';
import { useEffect } from 'react';
import React from 'react';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Quincy&display=swap');
</style>

const AboutUs = () => {
  React.useEffect(() => { document.title = "AboutUs | RDV" }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='about-page'>
      <SidebarNav />
      <AboutContainer />
    </div>
  )
};

export default AboutUs;
