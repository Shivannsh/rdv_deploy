import React, { useEffect, useState } from "react";
import "./event.css";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import trophy from "../../assets/img/event/trophy.png";
import location from "../../assets/img/event/location.png"
import marker from "../../assets/img/event/Frame (1).png";
import audi from "../../assets/img/event/Frame (2).png";
import alarm from "../../assets/img/event/Frame (3).png";
import clock from "../../assets/img/event/Frame (4).png";
import RDV_LOGO from "../../assets/img/logo.svg";
import RDV_LOGO_White from "../../assets/img/RDV_white.svg"
import LocationImg from "../../assets/img/icons/location.png"
import yellowdot from "../../assets/img/event/Group 3887.png";
import SidebarNav from "../../components/SidebarNav/SidebarNav";
import RelEvecard from "./component/RelEveCard";
interface Tags {
  id: string;
  name: string;
}
interface Events {
  id: number;
  name: string;
  description: string;
  mode: string;
  location: string;
  event_date_time: string;
  registration_link: string;
  rulebook_link: string;
  poster: string;
  application_deadline: string;
  team_size: string;
  tags: Tags[];
  price: string;
  eventtime: string;
  appdead: string;
  unstoplink: string;
  content: string;
}
interface relEvents {
  id: number;
  tags: Tags[];
  name: String;
  poster: String;
  description: String;
  prizes: String;
  mode: String;
  location: String;
  application_deadline: String;
  event_date_time: String;
  team_size: String;
  registration_link: String;
  rulebook_link: String;
}
const fromatDate = (str: String) => {
  let temp = str.split("-");
  return temp[2] + "/" + temp[1] + "/" + temp[0];
};
const getDate = (str: string) => {
  const utcTimestamp = new Date(str);

  const istOptions = {
    timeZone: "Asia/Kolkata",
    hour12: true,
  };
  const time = utcTimestamp.toLocaleString("en-US", istOptions);
  if (!time) {
    return str;
  }
  let temp = time.split("/");
  let tm = temp[2].split(":");
  let res =
    temp[1] +
    "/" +
    temp[0] +
    "/" +
    tm[0] +
    ":" +
    tm[1] +
    " " +
    tm[2].split(" ")[1];
  return res;
};

const Event: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [Id, setId] = useState(id);
  React.useEffect(()=>{document.title = "Event | RDV"}, []);
  useEffect(() => {
    const lt = window.location.pathname.split("/");
    setId(lt[2]);
  }, [window.location.pathname]);
  const [Links, setLinks] = useState([]);
  const [inst, setInst] = useState([]);
  const [relEvent, setRelEvent] = useState<relEvents[]>([]);
  const [event, setEvent] = useState<Events>({
    id: 0,
    name: "",
    description: "",
    mode: "",
    event_date_time: "",
    location: "",
    registration_link: "",
    rulebook_link: "",
    poster: "",
    application_deadline: "",
    team_size: "",
    tags: [],
    price: "",
    eventtime: "",
    appdead: "",
    unstoplink: "",
    content: "",
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://orbit.rendezvousiitd.com/events/event_by_id/?event_id=${Id}`
      )
      .then((res) => {
        setEvent(res.data.event);
        setRelEvent(res.data.related_events);
        let temp = [];
        if (!res.data.event.registration_link.startsWith("https://null")) {
          temp.push({
            title: "Registration Link",
            link: res.data.event.registration_link,
          });
        }
        if (!res.data.event.rulebook_link.startsWith("https://null")) {
          temp.push({
            title: "Rulebook Link",
            link: res.data.event.rulebook_link,
          });
        }
        setLinks(temp);
        let ins = [];
        console.log(event);
        console.log(event[0]);

        if (
          res.data.event.prizes !== "XX" &&
          res.data.event.prizes !== "None" &&
          res.data.event.prizes
        ) {
          ins.push({
            image: trophy,
            title: "Prizes Worth Rs.",
            value: res.data.event.prizes,
          });
        }
        if (res.data.event.application_deadline) {
          ins.push({
            image: alarm,
            title: "Registration Deadline",
            value: fromatDate(res.data.event.application_deadline),
          });
        }
        if (res.data.event.event_date_time) {
          ins.push({
            image: clock,
            title: "Event Time",
            value: getDate(res.data.event.event_date_time),
          });
        }
        if (
          res.data.event.team_size !== "" &&
          res.data.event.team_size !== "NA" &&
          res.data.event.team_size
        ) {
          ins.push({
            image: audi,
            title: "Team Size",
            value: res.data.event.team_size,
          });
        }
        setInst(ins);
        console.log(res.data.event);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(event);
  }, [Id]);

  return (
    <div className="event-main">
      <SidebarNav />
      <div className="event-backg">
        <h1>{event.name}</h1>
      </div>

      <div className="event-main-boss">
        <div className="event-content-boss">
          <div className="event-content">
            <div className="event-desc-box">
              <div className="event-desc">
                <div className="event-image-box">
                  <img className="event-image" src={event.poster} />
                </div>
                <div className="event-desc-text">
                  <h3>{event.name}</h3>
                  <div className="event-desc-items">
                    <div>
                      <img className="event-img" src={RDV_LOGO_White} />
                      Rendezvous X
                    </div>
                    {event.location ? (
                      <div>
                        <img className="event-img location-icon" src={LocationImg} />
                        {event.location}
                      </div>
                    ) : (
                      <></>
                    )}
                    {event.mode ? (
                      <div>
                        <img className="event-img" src={marker} />
                        {event.mode}
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
              <div className="content-to-hide">
                <div className="event-type-box">
                  {event.tags.map((tag) => (
                    <div className="event-type">#{tag.name}</div>
                  ))}
                </div>
              </div>
            </div>
            {inst.length !== 0 ? (
              <div className="event-side-change">
                <div className="side-template">
                  {/* <div className="side-temp-head">
                    <h4>Free</h4>
                    <button> TimeLine</button>
                  </div> */}
                  <div className="side-con-boss">
                    {inst.map((data) => (
                      <div className="side-con-items">
                        <img src={data.image} />
                        <div className="side-con-c">
                          <p>{data.title}</p>
                          <p>{data.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}

            {event.name ? (
              <div className="about-event-main">
                <h2>All that you need to know about {event.name}</h2>
                <div className="about-event">
                  {/* <Roundrules rules={rules}/> */}
                  <p>{event.description}</p>
                </div>
                {Links.length !== 0 ? (
                  <>
                    <h2> Important Links</h2>
                    {Links.map((link) => (
                      <div className="about-event-boss">
                        <div className="about-event-items">
                          <img src={yellowdot} />
                        </div>
                        <div className="about-event-i">
                          <h3>{link.title}</h3>
                          <NavLink
                            to={link.link}
                            style={{ textDecoration: "none", color: "unset" }}
                          >
                            {link.link}
                          </NavLink>
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <></>
                )}
              </div>
            ) : (
              <></>
            )}
          </div>

          {inst.length !== 0 ? (
            <div className="event-side">
              <div className="side-template">
                {/* <div className="side-temp-head">
                  <h4>Free</h4>
                  <button> TimeLine</button>
                </div> */}
                <div className="side-con-boss">
                  {inst.map((data) => (
                    <div className="side-con-items">
                      <img src={data.image} />
                      <div className="side-con-c">
                        <p>{data.title}</p>
                        <p>{data.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
        {relEvent.length !== 0 ? (
          <div className="rel-eve">
            <div className="rel-eve-main">
              <div className="rel-eve-head">
                <h2>Related Events</h2>
              </div>
              <div className="rel-eve-content">
                <RelEvecard events={relEvent} chng={setId} />
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Event;
