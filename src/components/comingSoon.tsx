import './comingSoon.css';
const CS = () => {
	return (
		<>
			<div
			className='text-center text-white'
			style={{
				backgroundImage: "url(https://rdv-bucket.s3.amazonaws.com/Website/bg.wep)",
				backgroundSize: 'cover',
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
			}}
		>
			<h1>
				<strong>Coming Soon!</strong>
			</h1>
			</div>
		</>
	);
};

export default CS;