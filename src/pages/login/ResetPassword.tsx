import { useEffect, useState } from 'react'
import Header from '../../components/header'
import "./Resetpassword.css"
// import "./reset.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { API_BASE, checkJWT, getJWT } from '../../utils/api';
import loginGuard from '../../utils/logingaurd';
import React from "react";
const ResetPassword = () => {
    const navigate = useNavigate()

    React.useEffect(loginGuard(useNavigate()), []);
    React.useEffect(() => { document.title = "Reset Password | RDV" }, []);
    // useEffect(() => { if (!getJWT()) { navigate('/') } }, [])
    const [pass, setPass] = useState({ password: "", cpassword: "" })
    const [match, setMatch] = useState(true)
    const handleChange = (e: any) => {
        const temp = { ...pass, [e.target.name]: e.target.value }
        setPass(temp)
    }
    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (pass.password !== pass.cpassword) {

            alert('Invalid Input!');
            return;
        }
        // TODO: Can use loginUser from api.ts but meh
        // @ts-ignore
        // const captcha = window.grecaptcha.getResponse();
        fetch(`${API_BASE}/users/reset/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getJWT()}`,
            },

            body: JSON.stringify({ new_password: pass.password }),
            mode: 'cors',
        }).then(async (response) => {

            if (response.status === 200) {
                await response.json();
                // alert(res.message);
                navigate('/');
            }
            else if (response.status === 400) {
                response.json().then((resp) => alert('Invalid Email'));
            } else if (response.status === 401) {
                response.json().then((res) => alert(res.message));
            } else {
                alert('Oops! Some error occurred. Please wait while the developers work to fix it :)');
            }
        }).catch(error => {
            navigate('/login')
        });
    }
    return (
        <div className="reset-boss"
            style={{
                backgroundSize: "cover",
                justifyContent: "flex-end",
                alignItems: "center",
                fontFamily: "Quintessential",
                color: "#EFC36A",
            }}>

            <div className="reset-sub">
                <h1 className="reset-head">Reset Password</h1>
                <form onSubmit={handleSubmit}>
                    <div className="reset-form-group" style={{
                        display: "flex",
                        flexDirection: "column"
                    }}>
                        <input className="reset-password-input reset-input" type="password" name="password" id="password" value={pass.password} onChange={handleChange} placeholder="New Password" />
                        <input className="reset-password-input reset-input" type="password" name="cpassword" id="cpassword" value={pass.cpassword} onChange={handleChange} placeholder="Confirm Password" />
                        <p style={{ color: "red", textAlign: "left", width: "100%", marginBottom: "0", fontSize: "0.9rem", display: match ? "none" : "block" }}>Password doesn't match</p>
                        <div className="reset-center">
                            <button
                                disabled={pass.password === "" || pass.cpassword === ""}
                                style={{ cursor: pass.password === "" || pass.cpassword === "" ? "not-allowed" : "pointer" }}
                                className="reset-submit"
                            >Reset</button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default ResetPassword;
