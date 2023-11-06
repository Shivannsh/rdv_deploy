import "./aboutcontainer.css";
import aboutList from "./data"
const AboutContainer = () => {
    return (
        <div className="about-container">
            <h1 className="about-header">About Us</h1>
            <p className="about-text">Rendezvous, the annual cultural fest of Indian Institute of Technology (IIT) Delhi, is North India’s largest Cultural Fest. It is three-day extravaganza held in October that fuses meticulous planning with a stellar turnout to creating an unforgettable experience. A convergence of diverse disciplines, draws over 160,000 attendees from 1000+ colleges to enjoy 500+ events.</p>
            <p className="about-text">The festival offers a diverse range of events, from engaging guest lectures to interactive workshops, forming a creative melting pot that celebrates various art forms and entertainment genres. Notably, Rendezvous has hosted renowned artists like Nucleya, KK, and Sunidhi Chauhan, alongside industry influencers like Ashneer Grover and Aman Gupta. This convergence of talent and commitment to excellence defines Rendezvous as a must-attend celebration.</p>
            <div className="about-list">
                {aboutList.map((item) => {
                    return (
                        <div key={item.key} className="about-list-item">
                            <img src={item.imgsrc} alt="about-list-item-img" className="about-list-img" />
                            <p className="num">{item.num}+</p>
                            <p className="title">{item.title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default AboutContainer;