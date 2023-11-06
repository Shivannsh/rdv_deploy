import audi from "../../../assets/img/event/Frame (2).png";
import alarm from "../../../assets/img/event/Frame (3).png";
import clock from "../../../assets/img/event/Frame (4).png";
import { events } from "../data";

function SideTemplate() {
  return (
    <div className="side-template">
      <div className="side-temp-head">
        <h4>Free</h4>
        <button> Launching Soon</button>
      </div>
      <div className="side-con-boss">
        <div className="side-con-items">
          <img src={audi} />
          <div className="side-con-c">
            <p>Prices Worth Rs.</p>
            <p>{events[0]["price"]}</p>
          </div>
        </div>
        <div className="side-con-items">
          <img src={alarm} />
          <div className="side-con-c">
            <p>Application Deadline</p>
            <p>{events[0]["appdead"]}</p>
          </div>
        </div>
        <div className="side-con-items">
          <img src={clock} />
          <div className="side-con-c">
            <p>Event Time</p>
            <p>{events[0]["eventtime"]}</p>
          </div>
        </div>
        <div className="side-con-items">
          <img src={audi} />
          <div className="side-con-c">
            <p>Team Size</p>
            <p>{events[0]["teamsize"]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideTemplate;
