
import { evecards } from './card'
import eveimage from '../../../assets/img/event/Rectangle 60.png'


function Evecard() {
  
  return (
    <>
    { evecards.map((evecard) =>(
      <div className='eve-card'>
        <div className='eve-card-img' >
          <img src={evecard.bgimage}/>
        </div>
        <div className='eve-card-title'>
          {evecard.eventname}
        </div>
      </div>
    ))}
    </>
  )
}

export default Evecard
