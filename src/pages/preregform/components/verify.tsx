import { useState, FormEvent } from "react";
import { delJWT, getJWT } from "../../../utils/api";
import "./form.css";
import { API_BASE } from "../../../utils/api";
import axios from "axios";
import "./verify.css"
import OtpInput from 'react-otp-input';
import { useNavigate } from "react-router-dom";
const Verify = () => {
    const navigate = useNavigate()
    const [otp, setOtp] = useState("")
    const [otpValid, setOtpValid] = useState(true)
    const [isButtonHovered, setIsButtonHovered] = useState(false);
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await axios.post(`${API_BASE}/users/verify/`, { token: getJWT(), otp: otp })
            .then((response) => {
                if (!response.status) {
                    throw new Error("Network response was not ok");
                }
                if (response.status === 400) {
                    setOtpValid(false)
                }
                if (response.status === 200) {
                    setOtpValid(true)
                    delJWT()
                    alert('You Have successfully Signed Up.')
                    navigate('/login')
                }
                return response.data;
            })
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                if(error.response.status === 404){
                    setOtpValid(false)
                }
                console.error("Error:", error);
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

export default Verify;








