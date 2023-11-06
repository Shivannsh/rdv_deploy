import "./events.css";
import Header from "../../components/header";
import Herocm from "./components/hero";
import EventColumn from "./components/event-column";
import React, { useEffect, useState } from "react";
import Search from "./components//search-area";
import Footer from "../../components/footer";
import SidebarNav from "../../components/SidebarNav/SidebarNav";
import axios, { AxiosResponse } from "axios";

import { EventData } from "./type";
import Top_Header from "./Top_header";
import { useParams } from "react-router-dom";

const Event: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  console.log(name);
  React.useEffect(() => { document.title = "Competitive | RDV" }, []);
  const [data, setData] = useState<EventData>({});
  useEffect(() => {

    axios
      .get("https://orbit.rendezvousiitd.com/events/events/")
      .then(function (response) {
        // console.log(JSON.stringify(response.data.Competitive));
        setData(response.data.Competitive)

        if (name === "flagship") {
          setData({ "Flagship": response.data.Competitive["Flagship"] })
        }
        else if (name === "boardevents") {
          setData({ "Board Events": response.data.Competitive["Board Events"] })
        }
        else if (name === "quizzing") {
          setData({ "Quizzing": response.data.Competitive["Quizzing Club"] })
        }
        else if (name === "facc") {
          setData({ "Fine Arts": response.data.Competitive["Fine Arts"] })
        }
        else if (name === "dance") {
          setData({ "Dance": response.data.Competitive["Dance Club"] })
        }
        else if (name === "music") {
          setData({ "Music": response.data.Competitive["Music"] })
        }
        else if (name === "dramatics") {
          setData({ "Dramatics": response.data.Competitive["Dramatics Club"] })
        }
        else if (name === "hindi") {
          setData({ "Hindi Samiti": response.data.Competitive["Hindi Samiti"] })
        }
        else if (name === "pfc") {
          setData({ "Photography and Filmmaking": response.data.Competitive["Photography and Films Club"] })
        }
        else if (name === "literary") {
          setData({ "Literary": response.data.Competitive["Literary Club"] })
        }
        else if (name === "design") {
          setData({ "Design": response.data.Competitive["Design"] })
        }
        else if (name === "debating") {
          setData({ "Debating": response.data.Competitive["Debating"] })
        }
        else if (name === "spicmacay") {
          setData({ "SPIC MACAY": response.data["Non-Competitive"]["SPIC MACAY"] })
        }

        else {
          setData({
            "Flagship": response.data.Competitive["Flagship"],
            "Board Events": response.data.Competitive["Board Events"],
            "Quizzing": response.data.Competitive["Quizzing Club"],
            "Fine Arts": response.data.Competitive["Fine Arts"],
            "Dance": response.data.Competitive["Dance Club"],
            "Music": response.data.Competitive["Music"],
            "Dramatics": response.data.Competitive["Dramatics Club"],
            "Hindi Samiti": response.data.Competitive["Hindi Samiti"],
            "Photography and Filmmaking": response.data.Competitive["Photography and Films Club"],
            "Literary": response.data.Competitive["Literary Club"],
            "Design": response.data.Competitive["Design"],
            "Debating": response.data.Competitive["Debating"],

          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });


  }, [name]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="events-page d-flex flex-column">
      <SidebarNav />
      <div className="search-area">
        <Search />
      </div>
      <Top_Header />

      {Object.entries(data).map(([category, events]) => (
        <EventColumn key={category} category={category} events={events} />
      ))}
    </div>
  );
};

export default Event;
