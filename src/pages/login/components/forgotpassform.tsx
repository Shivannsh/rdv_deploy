import React, { useState, useEffect, FormEvent } from 'react'
import { API_BASE } from '../../../utils/api'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './form.css'
import logoutGuard from '../../../utils/logoutgaurd'
import { setJWT2 } from '../../../utils/api'
const ForgotPassForm = () => {
    const [email, setEmail] = useState("")
    const [isButtonHovered, setIsButtonHovered] = useState(false)
    const navigate = useNavigate()
    React.useEffect(logoutGuard(useNavigate()), []);
    React.useEffect(() => { document.title = "Forget Password | RDV" }, []);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget
        setEmail(value)
    }



    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {

            alert('Please enter a valid email id!');
            return;
        }
        if (isSubmitting) {
            return;
        }

        setIsSubmitting(true);
        // TODO: Can use loginUser from api.ts but meh
        // @ts-ignore
        // const captcha = window.grecaptcha.getResponse();
        fetch(`${API_BASE}/users/forgot/send/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email }),
            mode: 'cors',
        }).then(async (response) => {

            if (response.status === 200) {
                const res = await response.json();
                setJWT2(res.token);
                navigate('/verifypass');
            }
            else if (response.status === 400) {
                response.json().then((resp) => alert('Invalid Email'));
            } else if (response.status === 401) {
                response.json().then((res) => alert(res.message));
            } else {
                alert('Oops! Some error occurred. Please wait while the developers work to fix it :)');
            }
        });
        setIsSubmitting(false);
    }
    return (
        <>
            <div className="login-form py-4">
                <h1 className='text-center mb-4 mt-4 fp-head'>
                    Forgot Password
                </h1>
                <h4 className='text-center mb-4 px-5 form-sub-head fp-det'>
                    An OTP will be sent to your registered email id
                </h4>
                <form
                    method={"post"}
                    onSubmit={handleSubmit}
                    className='form-group'>
                    <input
                        type="email"
                        placeholder="Email"
                        className='mb-5'
                        onChange={handleChange}
                        value={email} />
                    <button
                        className='btn btn-block btn-lg submit-button'
                        type="submit"
                        onMouseEnter={() => setIsButtonHovered(true)}
                        onMouseLeave={() => setIsButtonHovered(false)}
                        style={{ background: isButtonHovered ? "#04006d" : "#111935E5" }}
                    >Next</button>
                </form>
            </div>
        </>
    )
}

export default ForgotPassForm
