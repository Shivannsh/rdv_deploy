import "../events/events.css";
import Header from "../../components/header";
import Herocm from "../competition/components/hero";
import EventColumn from "../events/components/event-column";
import React, { useEffect, useState } from "react";
import Search from "../events/components/search-area";
import SidebarNav from "../../components/SidebarNav/SidebarNav";
import axios, { AxiosResponse } from "axios";

import { EventData } from "../events/type";
import Top_Header from "../events/Top_header";

const NonComp: React.FC = () => {
  const [data, setData] = useState<EventData>({});
  React.useEffect(()=>{document.title = "Non-Competitive | RDV"}, []);
  useEffect(() => {
    axios
      .get("https://orbit.rendezvousiitd.com/events/events/")
      .then(function (response) {
        console.log(JSON.stringify(response.data.Competitive));
        setData({
          "Flagship": response.data["Non-Competitive"]["Flagship"],
          // "Quizzing": response.data["Non-Competitive"]["Quizzing Club"],
          // "Fine Arts": response.data["Non-Competitive"]["Art"],
          // "Dance": response.data["Non-Competitive"]["Dance Club"],
          // "Music": response.data["Non-Competitive"]["Music"],
          // "Dramatics": response.data["Non-Competitive"]["Dramatics Club"],
          // "Hindi Samiti": response.data["Non-Competitive"]["Hindi Samiti"],
          // "Photography and Filmmaking": response.data["Non-Competitive"]["Photography and Films Club"],
          // "Literary": response.data["Non-Competitive"]["Literary Club"],
          // "Design": response.data["Non-Competitive"]["Design"],
          // "Debating": response.data["Non-Competitive"]["Debating"],
          "SPIC MACAY": response.data["Non-Competitive"]["SPIC MACAY"]
        });

      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  console.log(data)
  return (
    <div className="events-page d-flex flex-column">
      <SidebarNav />
      <div className="search-area">
        <Search />
      </div>
      <Top_Header />

      {Object.entries(data).map(([category, events]) => (
        <EventColumn key={category} category={category} events={events} />
        // {events. ? null :<EventColumn key={category} category={category} events={events} />}
      ))}
    </div>
  );
};

export default NonComp;