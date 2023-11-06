
import './hero.css';

import Logo from '../../../assets/img/rdv_logo_lp.png';
import Down from '../../../assets/img/down.png'
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate()
    return (
        <div className="hero d-flex flex-column justify-content-center align-items-center">
            <div className='d-flex flex-column hero_lp justify-content-center align-items-center'>
                <img className="hero-logo" src={Logo}></img>
                <div className="hero_text">
                    Join in the fun with <span className='yellow-text'>Asia’s Largest Cultural Fest</span> from 5th to 8th October 2023!
                </div>
                <button onClick={()=>{navigate("/signup")}} className='join'>Join</button>
                {/* <button><img className='down' src={Down}></img></button> */}
            </div>
        </div>
    );
};
export default Hero;