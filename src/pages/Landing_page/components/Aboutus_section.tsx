import "./Aboutus_section.css"

import text from "../../../assets/img/aboutus/aboutus-text.svg"
import stats from "../../../assets/img/aboutus/stats.svg"

const Aboutus_Section = () => {
    return (
        <>
          <div className="aboutusmain-boss">
            <div className="aboutusmain__container">
                <img src={text} alt="aboutus-text" className="aboutusmain__text" />
                <span className="aboutusmain__text2">Welcome to Rendezvous! IIT Delhi’s annual and Asia’s largest cultural fest is a confluence of music, dance, poetry and the stalwart human spirit of creativity in the face of all adversity. After two years of operation with restricted capacity, we are truly and completely back! With our eyes set higher than ever, the events are going to grander - in spirit, scale, and execution! From world-renowned artists to the young budding talents battling it out - we have it all! Fashion shows, comic hunts, cosplay events, open mics, and even meme making - there is something for everyone in the 47th rendition of Rendezvous.</span>
                <img src={stats} alt="aboutus-stats" className="aboutusmain__stats" />
            </div>
        </div>
        </>
    );
};
export default Aboutus_Section;