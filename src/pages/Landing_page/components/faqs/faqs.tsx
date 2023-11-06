import "./faqs.css";
import Accordion from './Accordion'
import { NavLink } from "react-router-dom";
import React from 'react';
const Faqs = () => {
    
    const items = [
        {
            title: "Q. What are the dates for Rendezvous X?",
            content: "The 48th edition of Rendezvous will be held from 6th to 8th October. Join us for three days of non-stop fun!",
            id: "s1"
        },
        {
            title: "Q. Why is registration necessary?",
            content: "You will be given a unique Rendezvous ID once you register on our website. For participating in any Rendezvous events, you must have this ID. A valid Rendezvous ID and your ID are required for registering for events or collecting pronite passes. Your Rendezvous ID is essential to access all the things the fest has to offer.",
            id: "s2"
        },
        {
            title: "Q. How do I register for Rendezvous?",
            content: "Registration can be done here, on our website, by filling in your required personal details.",
            id: "s3"
        },
    ]
    
    return (

        <>
            <div className="faqs-container">
                <div className="faqs-head">
                    <div className="faqs-title">FAQs</div>
                    <NavLink className="faqs-more-button" to="/faq">View More</NavLink>
                </div>
                <div className="faqs-content">
                    <div className='faq-qs-section'>
                        <Accordion items={items} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faqs;