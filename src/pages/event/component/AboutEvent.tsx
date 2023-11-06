import React from 'react'
import "../event.css"
import { events } from '../data'
import yellowdot from '../../../assets/img/event/Group 3887.png'


function AboutEvent() {
  return (
    <div className='about-event-main'>
        <h2>All that you need to know about Datathon</h2>
        <div className='about-event'>
            {/* <Roundrules rules={rules}/> */}
            <p>{events[0]["content"]}<br/>{events[0]["content"]}</p>
        </div>
        <h2> Important Links</h2>
        <div className='about-event-boss'>
          <div className='about-event-items'>
            <img src={yellowdot} />
          </div>
          <div className='about-event-i'>
            <h3>Unstop Link</h3>
            {events[0]['unstoplink']}
          </div>
        </div>
        <div className='about-event-boss'>
          <div className='about-event-items'>
            <img src={yellowdot} />
          </div>
          <div className='about-event-i'>
            <h3>Rulebook Link</h3>
            {events[0]['rulebooklink']}
          </div>
        </div>
      
    </div>
  )
}

export default AboutEvent
