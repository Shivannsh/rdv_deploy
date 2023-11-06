import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import { pronite } from '../data';
import CardPro from './cards';
import head from '../../../assets/img/pronite/header.png';
import '../pronite.css';
import { GCAPTCHA_SITE_KEY, grecaptcha } from '../../../utils/api';
import Carousel from 'react-bootstrap/Carousel';
import { API_BASE, getJWT, } from '../../../utils/api';
import { Button } from 'react-bootstrap';
const GroupPro = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    document.head.appendChild(script);
  }, []);
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 500);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const handleSubmit = (e: any) => {
    const jwtToken = getJWT()

    const captcha = window.grecaptcha.getResponse();
    console.log(captcha);
    fetch(`${API_BASE}/pronite/book/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwtToken}`,
        'captcha-response': captcha,
      },
      body: JSON.stringify({ "pronite": "S" }),
      mode: 'cors',
    }).then(async (res) => {

      if (res.status === 200) {
        const response = await res.json();
        alert(response.message);
      } else if (res.status === 400) {
        res.json().then((response) => alert("No active slot for the user or Invalid Captcha"));
      } else if (res.status === 401) {
        res.json().then((response) => alert(response.message));
      } else if (res.status === 500) {
        alert("Pass Already Booked!");
      } else {
        alert('Oops! Some error occurred. Please wait while the developers work to fix it :)');
      }
    })
  }
  return (
    <>

      {/* <div className="pro-header-cont"></div> */}
      {/* <img src={head} alt="coming soon" className="pro-header" /> */}
      {isMobile ? (
        <div style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Carousel fade controls style={{ background: '#16032E', paddingTop: '2rem', paddingBottom: '2rem' }} prevIcon={<span className="carousel-control-prev-icon" />} nextIcon={<span className="carousel-control-next-icon" />}>
            {pronite.map((pronite) => (
              <Carousel.Item key={pronite.id}>
                <CardPro pronite={pronite} />
              </Carousel.Item>
            ))}
          </Carousel>

        </div>

      ) : (
        <div className="row-wrapper" style={{ color: '#FFFFFF', background: '#16032E', backdropFilter: 'blur(1px)' }}>
          <Row className='pro-row' style={{ width: '100%', padding: '50px', alignItems: 'center', justifyContent: 'center' }}>
            {pronite.map((pronite) => (
              <CardPro key={pronite.id} pronite={pronite} />
            ))}
          </Row>

        </div>
      )}
      <div className="row-wrapper" style={{ color: '#FFFFFF', background: '#16032E', backdropFilter: 'blur(1px)', paddingTop: "10px", paddingBottom: "10vh" }}>
        <div className='g-recaptcha captcha' data-sitekey={GCAPTCHA_SITE_KEY} data-theme='dark'></div>
        <Row style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
          <Button variant="primary" onClick={handleSubmit} style={{
            fontWeight: "700",
            height: "7vh",
            width: '18rem',
            background: '#EFC36A',
            color: '#210028',
            border: 'none',
            borderRadius: '0.3rem',
          }} className='book-button'>BOOK PASSES</Button>
        </Row>

      </div>




    </>
  );
}

export default GroupPro;
