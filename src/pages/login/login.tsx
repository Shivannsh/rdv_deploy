// import React from "react";
import Header from "../../components/header";
// import { Formik, Form, Field } from 'formik';
import "./login.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import SidebarNav from "../../components/SidebarNav/SidebarNav";
import { useNavigate } from "react-router-dom";
import logoutGuard from "../../utils/logoutgaurd";
import { setJWT, setRef, API_BASE } from "../../utils/api";
import React from "react";
import { useEffect } from "react";
import { GCAPTCHA_SITE_KEY } from "../../utils/api";
const Login = () => {
    const navigate = useNavigate();
    React.useEffect(logoutGuard(useNavigate()), []);
    React.useEffect(() => { document.title = "Login | RDV" }, []);
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.google.com/recaptcha/api.js';
        script.async = true;
        document.head.appendChild(script);
    }, []);
    const [userProfile, setPass] = useState({ password: "", email: "" })
    const handleChange = (e: any) => {
        const temp = { ...userProfile, [e.target.name]: e.target.value }
        setPass(temp)
        console.log(userProfile)

    }
    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (!userProfile.email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {

            alert('Please enter a valid email id!');
            return;
        }
        // TODO: Can use loginUser from api.ts but meh
        // @ts-ignore
        const captcha = window.grecaptcha.getResponse();
        console.log(captcha);

        fetch(`${API_BASE}/users/login/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'captcha-response': captcha,
            },
            body: JSON.stringify(userProfile),
            mode: 'cors',
        }).then(async (res) => {

            if (res.status === 200) {
                const response = await res.json();
                setJWT(response['access']);
                setRef(response['refresh']);
                // navigate('/dashboard');

                navigate('/dashboard')
            } else if (res.status === 400) {
                res.json().then((response) => alert('Invalid Password or Email'));
            } else if (res.status === 401) {
                res.json().then((response) => alert(response.message));
            } else {
                alert('Oops! Some error occurred. Please wait while the developers work to fix it :)');
            }
        });

    }
    return (
        <div className="login-boss"
            style={{
                backgroundSize: "cover",
                justifyContent: "flex-end",
                alignItems: "center",
                fontFamily: "Quintessential",
                color: "#EFC36A",
            }}>
            <SidebarNav />
            <div className="login-sub">
                <h1 className="login-head">Login</h1>

                <form onSubmit={handleSubmit}>
                    <div className="login-form-group">
                        <input className="login-username-input login-input" type="text" name="email" id="email" placeholder="Username" value={userProfile.email} onChange={handleChange} />
                        <input className="login-password-input login-input" type="password" name="password" id="password" placeholder="Password" value={userProfile.password} onChange={handleChange} />
                        <div className="login-flexend">

                        </div>
                        <NavLink to='/forgotpassword' >forgot Password?</NavLink>
                        <div className='g-recaptcha' data-sitekey={GCAPTCHA_SITE_KEY} data-theme='dark'></div>
                        <div className="login-center">
                            <button
                                type="submit"
                                className="login-submit"
                            >Login
                            </button>
                        </div>
                        <hr />
                        <div className="login-center" >
                            <NavLink
                                className="signup-submit login-center"
                                to="/signup" >
                                Signup
                            </NavLink>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Login;