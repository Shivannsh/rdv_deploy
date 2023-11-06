import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
interface relEvents {
  id: 0;
  tags: [];
  name: "";
  poster: "";
  description: "";
  prizes: "";
  mode: "";
  location: "";
  application_deadline: "";
  event_date_time: "";
  team_size: "";
  registration_link: "";
  rulebook_link: "";
}
const scrollTop = () => {
  window.scrollTo(0, 0);
};

function RelEvecard(props: any) {
  const Rel_Events: relEvents[] = props.events;
  const func = useNavigate();
  return (
    <>
      {Rel_Events.map((event) => (
        <div
          className="eve-card"
          style={{ cursor: "pointer" }}
          onClick={() => {
            func(`/event/${event.id}`);
            props.chng(event.id);
            scrollTop();
          }}
        >
          <div className="eve-card-img">
            <img src={event.poster} />
          </div>
          <p className="eve-card-title">{event.name}</p>
        </div>
      ))}
    </>
  );
}
RelEvecard.defaultProps = {
  events: [],
  chng: null,
};

export default RelEvecard;
