import { Button } from "react-bootstrap";
const Titleac= () => {
	return (
		<>
			<div
			className='text-center text-white'
			style={{
                background:'#16032E',
				backgroundSize: 'cover',
				height: '30vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
			}}
		><Button style ={{
            fontSize:'2rem',
            // padding:'20px',
            width:'20rem',
            background: '#B6F0FF',
            color:'#210028',
            borderRadius:'0px'
        }}><strong>ACCOMODATIONS</strong></Button>
			</div>
		</>
	);
};

export default Titleac;