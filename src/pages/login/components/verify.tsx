import { useState, FormEvent } from "react";
import { delJWT, getJWT } from "../../../utils/api";
import "./form.css";
import { API_BASE } from "../../../utils/api";
import axios from "axios";
import "./verify.css"
import OtpInput from 'react-otp-input';
import { useNavigate } from "react-router-dom";
import logoutGuard from "../../../utils/logoutgaurd";
import { checkJWT2, delJWT2, setJWT, getJWT2 } from "../../../utils/api";
import React from "react";


const VerifyPass = () => {
    const navigate = useNavigate();
	const nav2 = useNavigate();
	React.useEffect(()=> {
		if (!checkJWT2()) {
			navigate('/');
			console.log("hello")
		}
		logoutGuard(nav2);
	},[	]);
    
    const [otp, setOtp] = useState("")
    const [otpValid, setOtpValid] = useState(true)
    const [isButtonHovered, setIsButtonHovered] = useState(false);
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetch(`${API_BASE}/users/forgot/verify/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token: getJWT2(), otp: otp}),
            mode: 'cors',
        }).then(async (response) => {
            
            if (response.status === 200) {
                const res = await response.json();
                // alert(res.message);
                delJWT2();
                setJWT(res['access']);
                navigate('/resetpassword');
            }
            else if (response.status === 400) {
                response.json().then((resp) => alert('Invalid OTP'));
            } else if (response.status === 401) {
                response.json().then((res) => alert(res.message));
            } else {
                alert('Oops! Some error occurred. Please wait while the developers work to fix it :)');
            }
        });
    };

    return (
        <div className="reg-form" style={{ backgroundColor: "transparent", color: "#EFC36A", borderRadius: "12px", border: "0.83px solid #FFCC76", }}>
            <form
                method={"post"}
                onSubmit={handleSubmit}
                style={{
                    display: "flex", width: "90%", margin: "1rem auto", flexDirection: "column", gap: "0.75rem",
                }}
                className="OTP_Form">
                <h1 style={{ alignSelf: "center", }}>Verify OTP</h1>
                <text style={{ textAlign: 'center' }}>An OTP has been sent to your email address</text>
                <br />
                <OtpInput
                    value={otp}
                    onChange={(e) => { setOtp(e); setOtpValid(true) }}
                    numInputs={6}
                    renderSeparator={<span>&nbsp;</span>}
                    inputStyle="tel"
                    renderInput={(props) => <input {...props} placeholder="-" type="number" pattern="\d*"  />}
                />
                {otpValid ? <br /> : <></>}
                <button
                    type="submit"
                    onMouseEnter={() => setIsButtonHovered(true)}
                    onMouseLeave={() => setIsButtonHovered(false)}
                    disabled={otp.length !== 6}
                    style={{
                        borderRadius: "4.15px", border: "0.83px solid #FFCC76",
                        cursor: otp.length !== 6 ? "not-allowed" : "pointer",
                        backgroundColor: isButtonHovered ? "#04006d" : "#111935E5",
                        alignSelf: "center", marginTop: "1rem",
                        width: "45%",
                        color: "#EFC36A",
                        fontSize: "25px",
                        transition: "background-color 0.3s ease-in-out",
                    }}
                > Verify </button>
                {otpValid ? <></> : <p style={{ textAlign: "center", color: 'red' }}>Invalid OTP</p>}
            </form>
        </div>
    );
};

export default VerifyPass;








