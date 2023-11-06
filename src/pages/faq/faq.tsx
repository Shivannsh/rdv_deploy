import "./faq.css";
import faqimg from '../../assets/img/faqimg.png'
import Accordion from './components/Accordion'
import Header from "../../components/header";
import logo from "../../assets/img/ComingSoon.svg";
import { NavLink } from "react-router-dom";
import SidebarNav from "../../components/SidebarNav/SidebarNav";
import { useEffect } from "react";
import React from 'react';
const items = [
  {
     title: "Q. What are the dates for Rendezvous X?",
     content: "The 48th edition of Rendezvous will be held from 6th to 8th October. Join us for three days of non-stop fun!",
     id : "s1"
  },
  {
     title: "Q. Why is registration necessary?",
     content: "You will be given a unique Rendezvous ID once you register on our website. For participating in any Rendezvous events, you must have this ID. A valid Rendezvous ID and your ID are required for registering for events or collecting pronite passes. Your Rendezvous ID is essential to access all the things the fest has to offer.",
     id : "s2"
  },
  {
     title: "Q. How do I register for Rendezvous?",
     content: "Registration can be done here, on our website, by filling in your required personal details.",
     id : "s3"
  },
  {
    title: "Q. Why should I give my information in registration?",
    content: "The details we ask for are relevant and help us keep you informed about the happenings at Rendezvous. Rest assured, all your information is kept secure.",
    id : "s4"
  },
  {
    title: "Q. What is my Rendezvous ID?",
    content: "Once you’ve completed the registration process, a unique ID will appear on your screen. This ID is your Rendezvous ID, which will be used to identify you while attending Rendezvous. Kindly make a note of this number for future reference.",
    id : "s5"
  },
  {
    title: "Q. Is it necessary to have a Rendezvous ID to attend Rendezvous?",
    content: "Yes, it is mandatory.",
    id : "s6"
  },
  {
    title: "Q. Is there an entry fee?",
    content: "Entry has always been and will continue to be free for all college students.",
    id : "s7"
  },
  {
    title: "Q. What is the artist lineup for Rendezvous X?",
    content: "Stay tuned to our official pages for these details.",
    id : "s8"
  },
  {
    title: "Q. What to do after completing the registration?",
    content: "Once you’ve registered, an email confirming your registration will be sent to you. Be sure to stay updated by visiting our website and following our social media accounts while also checking your email regularly. Once you’ve completed these steps, all that’s left is to simply show up and enjoy Rendezvous!",
    id : "s9"
  },
  {
    title: "Q. Can people of any age group attend Rendezvous?",
    content: "We’ll announce the age restrictions with each event’s details. Check out the Events/Competitions page for more details.",
    id : "s10"
  },
  {
    title: "Q. Are cars allowed inside?",
    content: "No, vehicles are not allowed inside campus during the fest (barring cases with special permission)",
    id : "s11"
  },
  {
    title: "Q. What are the restrictions on entrance and exit of campus during Rendezvous?",
    content: "Access to the campus starts at 7 AM for participants and visitors throughout the three days. Keep a lookout for event timings for more detail",
    id : "s12"
  },
  {
    title: "Q. What accommodation facilities are available?",
    content: "There is no accommodation available on campus. However, you can avail services of the numerous BnBs and PGs around the campus in the Hauz Khas Area.",
    id : "s13"
  },
  {
    title: "Q. We are a group of friends not participating in any of the competitions and just coming to Rendezvous to have fun. Would we be allowed?",
    content: "Yes, you can attend Rendezvous by registering on our website.",
    id : "s14"
  },
  // {
  //   title: "Q. What are the nearest railway stations and airports to reach IIT Delhi?",
  //   content: "sa",
  //   id : "s15"
  // },
  {
    title: "Q. What about medical facilities?",
    content: "We have our own hospital here on campus, which is open 24/7. You can reach it by dialling 011-26591500 or 011-26596666. An ambulance service is also available to take you from your location on campus to the hospital. Call them directly or approach the nearest security guard to summon them. In case of an emergency that cannot be handled by the staff at the IIT hospital at that time, the students are referred to AIIMS or Safdarjung Hospital, which are located near the campus.",
    id : "s16"
  },
  {
    title: "Q. Should I carry some ID proof every time?",
    content: "Yes, having your ID card with you at all times while you’re on the campus premises is essential.",
    id : "s17"
  },
  {
    title: "Q. How will I learn about the timings and venues for the events during Rendezvous?",
    content: "Our website and Instagram informs you about event timings and venues during Rendezvous. Additionally, you’ll receive these details via email after registering for the event.",
    id : "s18"
  },
  {
    title: "Q. How to find a way to any venue for the event?",
    content: "To find the location of any venue, you can use Google Maps. You’ll also discover maps posted at various points within the institute. Additionally, our volunteers will be stationed throughout the campus to guide you to the right venues. Feel free to ask for directions if needed.",
    id : "s19"
  },
  {
    title: "Q. Are there ATMs available inside?",
    content: "There are ATMs conveniently located within the campus. You can find 3 State Bank of India ATMs near Neelkanth Shopping Complex, SBI Bank, and Nalanda Apartments Area. Additionally, 3 Canara Bank ATMs are near Karakoram Hostel, Udaigiri Hostel, and opposite Nescafe.",
    id : "s20"
  },
  {
    title: "Q. What food options are available during Rendezvous?",
    content: "Various food stalls are available on campus. We have the IITD staff canteen and ICH near the LHC. You can also find a CCD in the main building, near the seminar hall. Smaller outlets like Amul and Nescafe are located near the main building, close to CCD. Our campus also houses two small restaurants, Rajdhani and Delhi 16, opposite the Dronagiri and Aravali hostels. You can also avail the services of the Chaayos cafe adjacent to Rajdhani. Various food stalls and trucks will also be set up outside the LHC to cater to your cravings.",
    id : "s21"
  },
  {
    title: "Q. How do I register for Competitions at Rendezvous?",
    content: "If you still need a Rendezvous ID, head to the “Register” tab and provide your details to acquire one. Once you have your Rendezvous ID, proceed to the Events/Competitions page and sign up for the desired events. For those who already possess a Rendezvous ID, you can directly register for competitions by navigating to the Events/Competitions page.",
    id : "s22"
  },
  {
    title: "Q. Who can participate in these competitions? Is there any fee involved for registration?",
    content: "All these details will be available on the Events/Competitions page.",
    id : "s23"
  },
  {
    title: "Q. Are on-spot registrations allowed during the fest?",
    content: "On-spot registrations may or may not be allowed depending on the number of registered participants and the event rules. We recommend registering online at your earliest convenience to avoid any unexpected situations.",
    id : "s24"
  },
  {
    title: "Q. What is the date, time and venue for these competitions?",
    content: "The specific dates, times, and venues for the competitions will be communicated via our website, LinkedIn and Instagram. Kindly also check your mail regularly to stay updated.",
    id : "s25"
  },
  {
    title: "Q. Which competitions are going to be conducted online this year?",
    content: "The rules and formats for all the competitions are available here on our website.",
    id : "s26"
  },
  {
    title: "Q. Am I eligible to attend a concert?",
    content: "You’re eligible to attend the pro-nite concert if you possess a Rendezvous ID and a valid pass.",
    id : "s27"
  },
  {
    title: "Q. How can I attend pronite?",
    content: "Pronite passes will be served first come first through online registration a day before the pro-nite.",
    id : "s28"
  },
  {
    title: "Q. What are the timings of the pro-nite?",
    content: "7 PM to 10 PM; all four days.",
    id : "s29"
  },
  {
    title: "Q. Can I leave and enter again at the concert using the same pass?",
    content: "No",
    id : "s30"
  },
  {
    title: "Q. What things are not allowed in the pro-nite?",
    content: "Carry bags, cameras, cosmetics, and pointed objects like scissors, and knives are not allowed inside the venue. But do make sure to bring your friends along for an enjoyable time! Water and food will be available inside the venue, so you do not need to carry your own. Water bottles are not allowed inside the venue. You can purchase food from the food courts within the concert area.",
    id : "s31"
  },
  {
    title: "Q. Are the pronite passes paid? When and where are passes distributed?",
    content: "Pronite passes will be available on a first-come-first-serve basis. The specific schedule for the distribution of passes will be announced in due course. Please book passes only from the official website, note that Rendezvous DOES NOT employ any external vendor or 3rd party distributors to sell pronite passes. Only passes booked through our site will be valid for entry",
    id : "s32"
  },
  {
    title: "Q. I am currently studying at IITD. How do I get a pro-nite pass?",
    content: "If you’re a student of IIT Delhi, visit our website to get your pronite pass. The process is the same as for everyone else. Go to the Pronite section, follow the instructions and enjoy the event!",
    id : "s33"
  },
  {
    title: "Q. What is Pre-RDV?",
    content: "Pre-RDV is a two-day celebration that takes place before the main Rendezvous. It serves as a preview, offering you a sneak peek into the exciting array of experiences and activities we have in store for you.",
    id : "s34"
  },
  {
    title: "Q. When is Pre-RDV happening?",
    content: "Pre-RDV is going to be held on the 22nd and 23rd of September.",
    id : "s35"
  },
  {
    title: "Q. Are Pre-RDV events open to all?",
    content: "Pre-RDV events are open only to IIT Delhi students.",
    id : "s36"
  },
  {
    title: "Q. How can I register for Pre-RDV?",
    content: "Registration and other details for all Pre-RDV events will be available on our website, LinkedIn and Instagram page.",
    id : "s37"
  },
  {
    title: "Q. What are the timings of Pre-RDV events and competitions?",
    content: "All details about event timings and venues will be shared on our website and social media handles.",
    id : "s38"
  },

]


export default function Faqs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  React.useEffect(() => { document.title = "FAQs | RDV" }, []);
  return (
    <div className='faq-main'>
      <SidebarNav />
      
      <div className='faq-qs py-5'>
        <div className='faq-qs-header'>
          <p>Frequently Asked Questions
          <img className='faqimg'src={faqimg}></img></p>
        </div>
        <div className='faq-qs-section'>
          <Accordion items={items} />
        </div>
      </div>
    </div>
  )
}
