import './sponsers.css';
import { sponsors } from './data';
import Header from '../../components/header';
import sponserTitle from '../../assets/img/sponsors/sponser-title.png'
import SidebarNav from '../../components/SidebarNav/SidebarNav';
const Sponser = () => {

	const sponsor_type = [
		'Title sponsor',
		'Co title sponsors',
		'',
		'',
		'Sponsors',
		'Media partner',
		'Food and Beverages partner',
	];

	return (
		<>
			<SidebarNav />
			<div className='sponser-div py-5'>

				<div className='' id='sponsor' >
					<div className='d-flex justify-content-center align-items-center py-5' >
						<img src={sponserTitle} className='img-fluid roshan' />
					</div>
					<h4 className='media-head text-white'>TITLE SPONSOR</h4>
					{sponsors[0].map((sponsor) => (
						<>
							<div className='d-flex justify-content-center flex-column align-items-center main ritul'>
								<div className='golden card satya'>
									<a href={sponsor.url} target='_blank' className='text-decoration-none'>
										<div className='img-boxer'>
											<img className='img-fluid roshan' src={sponsor.logo} alt='sponsor' />
										</div>
										<p className='name yellow-bor text-white'>{sponsor.name}</p>
									</a>
								</div>
							</div>
						</>
					))}

					<div className='sponsor' style={{ position: 'relative' }}>
						<div className='row spons-row justify-content-center'>
							<h4 className='media-head text-white'>CO-TITLE SPONSORS</h4>
							{sponsors[1].map((sponsor) => (
								<>
									<div className='col-6 col-md-4 d-flex justify-content-center flex-column align-items-center second ritul red-bor'>
										<div className='card satya'>
											<a href={sponsor.url} target='_blank' className='text-decoration-none'>
												<div className='img-boxer'>
													<img className='img-fluid roshan' src={sponsor.logo} alt='sponsor' />
												</div>
												<p className='name yellow-bor text-white'>{sponsor.name}</p>
											</a>
										</div>
										<br />
										<h4 className='head green-bor text-white'>{sponsor.category}</h4>
									</div>
								</>
							))}
						</div>
					</div>

					<div className='sponsor' style={{ position: 'relative' }}>
						<div className='row spons-row justify-content-center'>
						<h4 className='media-head text-white'>ASSOCIATE TITLE SPONSORS</h4>
						
							{sponsors[2].map((sponsor) => (
								<>
									<div className='col-6 col-md-4 d-flex justify-content-center flex-column align-items-center second ritul red-bor'>
										<div className='card satya'>
											<a href={sponsor.url} target='_blank' className='text-decoration-none'>
												<div className='img-boxer'>
													<img className='img-fluid roshan' src={sponsor.logo} alt='sponsor' />
												</div>
												<p className='name yellow-bor text-white'>{sponsor.name}</p>
											</a>
										</div>
										<br />
										<h4 className='head green-bor text-white'>{sponsor.category}</h4>
									</div>
								</>
							))}
						</div>
					</div>

					<div className='sponsor' style={{ position: 'relative' }}>
						<div className='row spons-row justify-content-center'>
						
							{sponsors[3].map((sponsor) => (
								<>
									<div className='col-6 col-md-4 d-flex justify-content-center flex-column align-items-center second ritul red-bor'>
										<div className='card satya'>
											<a href={sponsor.url} target='_blank' className='text-decoration-none'>
												<div className='img-boxer'>
													<img className='img-fluid roshan' src={sponsor.logo} alt='sponsor' />
												</div>
												<p className='name yellow-bor text-white'>{sponsor.name}</p>
											</a>
										</div>
										<br />
										<h4 className='head green-bor text-white'>{sponsor.category}</h4>
									</div>
								</>
							))}
						</div>
					</div>

					<div className='sponsor' style={{ position: 'relative' }}>
						<div className='row spons-row justify-content-center'>
						<h4 className='media-head text-white'>SPONSORS</h4>
							
							{sponsors[4].map((sponsor) => (
								<>
									<div className='col-6 col-md-4 d-flex justify-content-center flex-column align-items-center second ritul red-bor'>
										<div className='card satya'>
											<a href={sponsor.url} target='_blank' className='text-decoration-none'>
												<div className='img-boxer'>
													<img className='img-fluid roshan' src={sponsor.logo} alt='sponsor' />
												</div>
												<p className='name yellow-bor text-white'>{sponsor.name}</p>
											</a>
										</div>
										<br />
										<h4 className='head green-bor text-white'>{sponsor.category}</h4>
									</div>
								</>
							))}
						</div>
					</div>

					<div className='sponsor' style={{ position: 'relative' }}>
						<div className='row spons-row justify-content-center'>
							<h4 className='media-head text-white'>MEDIA PARTNERS</h4>
							{sponsors[5].map((sponsor) => (
								<>
									<div className='col-6 col-md-4 d-flex justify-content-center flex-column align-items-center second ritul red-bor'>
										<div className='card satya'>
											<a href={sponsor.url} target='_blank' className='text-decoration-none'>
												<div className='img-boxer'>
													<img className='img-fluid roshan' src={sponsor.logo} alt='sponsor' />
												</div>
												<p className='name yellow-bor text-white'>{sponsor.name}</p>
											</a>
										</div>
										<br />
										<h4 className='head green-bor text-white'>{sponsor.category}</h4>
									</div>
								</>
							))}
						</div>
					</div>

					<div className='sponsor' style={{ position: 'relative' }}>
						<div className='row spons-row justify-content-center'>
							<h4 className='media-head text-white'>FOOD AND BEVERAGES PARTNER</h4>
							{sponsors[6].map((sponsor) => (
								<>
									<div className='col-6 col-md-4 d-flex justify-content-center flex-column align-items-center second ritul red-bor'>
										<div className='card satya'>
											<a href={sponsor.url} target='_blank' className='text-decoration-none'>
												<div className='img-boxer'>
													<img className='img-fluid roshan' src={sponsor.logo} alt='sponsor' />
												</div>
												<p className='name yellow-bor text-white'>{sponsor.name}</p>
											</a>
										</div>
										<br />
										<h4 className='head green-bor text-white'>{sponsor.category}</h4>
									</div>
								</>
							))}
						</div>
					</div>
				</div>

			</div>

		</>
	);
};

export default Sponser;