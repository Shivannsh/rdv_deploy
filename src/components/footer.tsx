import Youtube from '../assets/img/yt.png';
import Facebook from '../assets/img/fb.png';
import Insta from '../assets/img/insta.png';
import Linked from '../assets/img/li.png';
import Logo from '../assets/img/footer-logo.png';
import Mail from '../assets/img/mail-icon.svg';
import './footer.css';

const Footer = () => {
	return (
		<>
		<div className='footer'>
			<div className='container'>
				<div className='row flex-column flex-md-row'>
					<div className='col mt-4 mt-md-4'>

						<div className='d-flex flex-column flex-lg-row align-items-center justify-content-start'>
							<img className='footer-logo' src={Logo} alt='RDV_Logo' />


						</div>
					</div>
					<div className='footer-info col mt-4 mt-md-4 d-flex flex-column justify-content-end justify-content-md-end'>
						<div className='footer-text-1 text-white d-flex justify-content-center justify-content-md-end'>TO STAY UPDATED FOLLOW US ON SOCIAL MEDIA PLATFORMS!</div>
						<div className='footer-social d-flex justify-content-md-end'>
							<div className='footer-social-child'>				
								<a href='https://www.instagram.com/rendezvous.iitd/?hl=en'>
									<img src={Insta} alt='Instagram' className='p-2 footer-img' />
								</a>
								<a href='https://www.facebook.com/rendezvous.iitd/'>
									<img src={Facebook} alt='Facebook' className='p-2 footer-img' />
								</a>
								<a href='https://www.youtube.com/channel/UCF4OzA5WwcgqDNKaQIhIEug'>
									<img src={Youtube} alt='Youtube' className='p-2 footer-img' />
								</a>
								<a href='https://www.linkedin.com/company/rendezvous-iit-del/'>
									<img src={Linked} alt='Linkedin' className='p-2 footer-img' />
								</a>
							</div>
						</div>
						<div className='text-white footer-text-2 d-flex justify-content-center justify-content-md-end'>FOR ANY QUERIES, CONTACT US AT: <img src={Mail}></img>&nbsp; <a href="mailto:tech@rendezvousiitd.com"> tech@rendezvousiitd.com</a></div>
						<div className='footer-text-3 d-flex justify-content-center justify-content-md-end'>
							<p className='text-white'>&copy; Rendezvous 2023 | IIT Delhi</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</>
	);
};

export default Footer;