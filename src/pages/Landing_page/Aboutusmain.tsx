
import Gallery from "./components/gallery/gallery";
import Aboutus_Section from "./components/Aboutus_section";
import "./Aboutusmain.css";
import Accomodation_lp from "./components/accomodation";
import Faqs from "./components/faqs/faqs";
import Hero from "./components/hero";
import Merchandise from "./components/merchandise/merchandise";
import News from "./components/News/News";
import SidebarNav from "../../components/SidebarNav/SidebarNav";
import React from "react";
const Aboutusmain = () => {
  React.useEffect(() => { document.title = "Home | RDV" }, []);
  return (
    <>
      <SidebarNav />
      <Hero />
      <Aboutus_Section />
      <News />

      <Gallery />
      <Merchandise />
      <Accomodation_lp />
      <Faqs />
    </>
  );


};
export default Aboutusmain;