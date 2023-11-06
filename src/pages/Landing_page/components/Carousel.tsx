import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

import p1 from "../../../assets/img/events/eventg2.jpg";
import p2 from "../../../assets/img/events/eventg3.jpg";
import p3 from "../../../assets/img/events/eventg4.jpg";
import p4 from "../../../assets/img/events/eventg5.jpg"
export default function App() {
  return (
    <div
      style={{
        display: "block",
        
        width: "100%",
        padding: "5",
        height: "90%",
      }}
    >
      <Carousel>
        <Carousel.Item interval={1500}>
          <img className="d-block w-100" src={p1} alt="Image One" />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className="d-block w-100" src={p2} alt="Image Two" />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className="d-block w-100" src={p3} alt="Image Two" />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className="d-block w-100" src={p4} alt="Image Two" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
