import React, { useState } from "react";
import EventCard from "./event-card";
import { MyEvent } from "../type";

interface EventColumnProps {
  category: string;
  events: MyEvent[];
}

const EventColumn: React.FC<EventColumnProps> = ({ category, events }) => {
  const [isActiveViewAll, setIsActiveViewAll] = useState(false);

  const toggleShowAll = () => {
    setIsActiveViewAll(!isActiveViewAll);
  };

  return (
    <>
      <div className="event-cm-top">
        <h1 className="event-title">{category}</h1>
        <a className="event-vw-all" onClick={toggleShowAll}>
          {` ${isActiveViewAll ? "Hide All" : "View All"}`}
        </a>
      </div>
      <div
        className={`event-column ${isActiveViewAll ? "active-view-all" : ""}`}
      >
        {events.map((event, id) => (
          <EventCard key={id} event={event} />
        ))}
      </div>
    </>
  );
};

export default EventColumn;
