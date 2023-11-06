import "bootstrap/dist/css/bootstrap.css";
import "./News.css";
import React from "react";


import Carousel from "../Carousel";
import { useNavigate } from "react-router-dom";

export default function News() {
  const navigate = useNavigate();
  return (
    <div className="conatiner">
      <h2 className="heading">In The News</h2>
      <hr className="line" />

      <div className="conatiner-2">
        <div className="corousel">
          <Carousel />
        </div>
        <div className="event-description">
          <div className="events-div">
            <h1 className="events">300+ Events</h1>
          </div>
          <div className="description">
            <p>
            Rendezvous showcases a kaleidoscope of talent, drawing thousands of participants and spectators from across the nation. The fest features a diverse range of activities, from electrifying concerts featuring renowned artists to spellbinding dance performances that leave the audience spellbound. The art exhibitions and literary competitions foster intellectual discourse, while workshops and talks by industry leaders provide valuable insights. Rendezvous is not just an event; it's an experience that celebrates the fusion of culture, arts, and technology, leaving an indelible mark on all who witness.
            </p>
          </div>
          <div className="button-1">
            <button className="button" onClick = {() => {navigate("/events/All")}}>Know More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
