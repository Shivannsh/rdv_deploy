import React, { useState, useEffect } from "react";
import "../events.css";
import { MyEvent } from "../type";
import { useNavigate } from "react-router-dom";

interface EventCardProps {
  event: MyEvent;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const navigate = useNavigate();
 

 
  const handleClick = () => {
    navigate(`/event/${event.id}`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="event-card " onClick={handleClick}>
      <img className="event-card-image" src={event.poster} alt="event" />
      <h4 className="event-card-title">{event.name}</h4>
    </div>
  );
};

export default EventCard;
