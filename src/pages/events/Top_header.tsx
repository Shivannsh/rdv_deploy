import React from 'react';
import "./Top_header.css"
import { Link, useLocation } from 'react-router-dom';

export default function Top_Header() {
    const location = useLocation(); // Get the current location
    const activeTab = location.pathname.split('/').pop(); // Extract the last part of the URL

    return (
        <>
            <div className="tabs-container">
                <Link
                    to="/events/All"
                    className={`d-tab ${activeTab === 'All' ? 'active' : ''}`}
                >
                    COMPETITIVE
                </Link>
                <Link
                    to="/nonComp"
                    className={`d-tab ${activeTab === 'nonComp' ? 'active' : ''}`}
                >
                    NON-COMPETITIVE
                </Link>

            </div>
            <nav className="club-nav-main">
                <span className="head-top">The Clubs</span>
                <Link to="/events\All" className="tablink" ><div className="btn-box"><button className={`${activeTab === 'All' ? 'active-btn' : 'club-nav-button'}`} id="0">All</button></div></Link>
                <Link to="/events\boardevents" className="tablink" ><div className="btn-box"><button className={`${activeTab === 'boardevents' ? 'active-btn' : 'club-nav-button'}`} id="0">Board Events</button></div></Link>
                <Link to="/events\flagship" className="tablink" ><div className="btn-box"><button className={`${activeTab === 'flagship' ? 'active-btn' : 'club-nav-button'}`} id="0">Flagship</button></div></Link>
                <Link to="/events\design" className="tablink" ><div className="btn-box"><button className={`${activeTab === 'design' ? 'active-btn' : 'club-nav-button'}`} id="0">Design</button></div></Link>
                <Link to="/events\facc" className="tablink" ><div className="btn-box"><button className={`${activeTab === 'facc' ? 'active-btn' : 'club-nav-button'}`} id="2">FACC</button></div></Link>
                <Link to="/events\dance" className="tablink" ><div className="btn-box"><button className={`${activeTab === 'dance' ? 'active-btn' : 'club-nav-button'}`} id="3">Dance</button></div></Link>
                <Link to="/events\hindi" className="tablink" ><div className="btn-box"><button className={`${activeTab === 'hindi' ? 'active-btn' : 'club-nav-button'}`} id="4">Hindi Samiti</button></div></Link>
                <Link to="/events\pfc" className="tablink" ><div className="btn-box"><button className={`${activeTab === 'pfc' ? 'active-btn' : 'club-nav-button'}`} id="1">PFC</button></div></Link>
                <Link to="/events\literary" className="tablink" ><div className="btn-box"><button className={`${activeTab === 'literary' ? 'active-btn' : 'club-nav-button'}`} id="5">Literary</button></div></Link>
                <Link to="/events\debating" className="tablink" ><div className="btn-box"><button className={`${activeTab === 'debating' ? 'active-btn' : 'club-nav-button'}`} id="6">Debating</button></div></Link>
                <Link to="/events\dramatics" className="tablink" ><div className="btn-box"><button className={`${activeTab === 'dramatics' ? 'active-btn' : 'club-nav-button'}`} id="7">Dramatics</button></div></Link>
                <Link to="/events\quizzing" className="tablink" ><div className="btn-box"><button className={`${activeTab === 'quizzing' ? 'active-btn' : 'club-nav-button'}`} id="8">Quizzing</button></div></Link>
                <Link to="/events\music" className="tablink" ><div className="btn-box"><button className={`${activeTab === 'music' ? 'active-btn' : 'club-nav-button'}`} id="9">Music</button></div></Link>
                <Link to="/events/spicmacay" className="tablink" ><div className="btn-box"><button className={`${activeTab === 'spicmacay' ? 'active-btn' : 'club-nav-button'}`} id="10">SPIC MACAY</button></div></Link>
            </nav>
        </>
    );
}