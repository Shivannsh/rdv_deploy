
import React from 'react'
import img from "../../../assets/img/aboutus/accomodation_image.png"
import "./accomodation.css"
import { Link } from 'react-router-dom'

const Accomodation_lp = () => {
    return (
        <section className="con-accom">
            <div className="box-accom">
                <div className="accom-left">
                    <h2>ACCOMODATION</h2>
                    <p>Exciting news! We have arranged accommodations exclusively for RendezvousX participants. To secure your stay, kindly reach out to the designated Point of Contact for the event you are participating in. They will assist you in booking your accommodations for a comfortable and memorable experience.</p>
                    {/* <Link to="/login"> <button className='accom-book' > <strong>Book Now</strong> </button></Link> */}
                    
                    <p>We can't wait to host you at RendezvousX!</p>
                </div>
                <div className="accom-right">
                    <img src={img} alt="" />
                </div>
            </div>
        </section>
    );
}

export default Accomodation_lp