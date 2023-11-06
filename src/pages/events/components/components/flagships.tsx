import music from "../../../../assets/img/events/Music.svg";
import bsp from "../../../../assets/img/events/Bsp.svg";
import ds from "../../../../assets/img/events/Design_Club.svg";
import "./flagship.css";

const flagships = () => {
  return (
    <div className="flagship-container">
      <div className="DesignClub" style={{ marginTop: "96px" }}>
        <div className="imageContainer">
          <img src="https://rdv-bucket.s3.amazonaws.com/Website/bg.webp" style={{ width: "100%" }} className="bg" />
          <img src={ds} className="top" />
        </div>
      </div>

      <div className="MusicClub" style={{ marginTop: "96px" }}>
        <div className="imageContainer">
          <img src="https://rdv-bucket.s3.amazonaws.com/Website/bg.webp" style={{ width: "100%" }} className="bg" />
          <img src={music} className="top" />
        </div>
      </div>

      <div className="Bsp" style={{ marginTop: "96px" }}>
        <div className="imageContainer">
          <img src="https://rdv-bucket.s3.amazonaws.com/Website/bg.webp" style={{ width: "100%" }} className="bg" />
          <img src={bsp} className="top bsp" />
        </div>
      </div>
    </div>
  );
};

export default flagships;
