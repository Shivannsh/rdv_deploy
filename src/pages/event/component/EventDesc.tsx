
import "../event.css"
import { Link } from 'react-router-dom'
import trophy from "../../../assets/img/event/Group.png"
import building from "../../../assets/img/event/Frame.png"
import marker from "../../../assets/img/event/Frame (1).png"
import { events } from '../data'

interface EventDescProps {
  title: string
  mode: string
  location: string
  poster: string
}

const EventDesc:React.FC<EventDescProps> = (event) => {
  return (
    <>
      <div className='event-desc-box'>
        <div className='event-desc'>
          <div className='event-image-box'>
            <img className='event-image' src={event.poster}  />
          </div>
          <div className='event-desc-text'>
            <h1>{event.title}</h1>
            <div className='event-desc-items'>
              <div><img className='event-img' src={trophy}/>Rendezvous X</div>
              <div><img className='event-img' src={building}/>{event.location}</div>
              <div><img className='event-img' src={marker}/>{event.mode}</div>
            </div>
          </div>
        </div>
        <div className='event-type-box'>
          <div className='event-type'>Case Study</div>
          <div className='event-type'>Design Club</div>
          <div className='event-type'>Case Study</div>
        </div>
      </div>
    </>
  )
}

export default EventDesc
