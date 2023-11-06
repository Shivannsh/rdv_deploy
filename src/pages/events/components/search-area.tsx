import "../events.css";

const search_area = () => {
  return (
    <div className="d-flex flex-column search_area">
      <div className="search_area_bg"></div>
      <div className="search_area_text flex-column d-flex align-items-center">
        <div className="search_area_text1">
          Welcome to <span className="yellow-text">Asia’s Largest</span>{" "}
          Cultural Fest
        </div>
        <div className="search_area_text2">
          Join us as we make history with this Rendezvous-X from 5th to
          8th October 2023!
        </div>
      </div>
      {/* <div className="searchBox">

          <input
            type="text"
            placeholder="Search">
          </input>
        </div> */}
    </div>
  );
};

export default search_area;
