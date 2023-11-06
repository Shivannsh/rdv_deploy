import React from "react";
import { Button } from "react-bootstrap";

const Titlepr = () => {
	return (
		<>
			<div
				className="text-center text-white"
				style={{
					background: "#16032E",
					backgroundSize: "cover",
					height: "30vh",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<Button
					style={{
						fontSize: "2rem",
						width: "20rem",
						background: "#B6F0FF",
						color: "#210028",
						borderRadius: "0px",
					}}
				>
					<strong>PRONITE</strong>
				</Button>
			</div>
		</>
	);
};

export default Titlepr;
