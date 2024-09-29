import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Login.css';

function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    return (
        <div className='container'>
            <div className='form-container'>
                <div className='form-toggle'>
                    <button className={isLogin ? 'active' : ""} onClick={() => setIsLogin(true)}>Login</button>
                    <button className={!isLogin ? 'active' : ""} onClick={() => setIsLogin(false)}>SignUp</button>
                </div>
                {isLogin ? (
                    <div className='form' id='my-popover' popover>
                        <h2>Login Form</h2>
                        <div className='input-container'>
                            <input type='email' required placeholder=" " />
                            <label>Email</label>
                        </div>
                        <div className='input-container'>
                            <input type='password' required placeholder=" " />
                            <label>Password</label>
                        </div>
                        <Link to='/forgotpassword'><span>Forgot Password?</span></Link>
                        <button onClick={() => navigate("/")}>Login</button>
                        <p>Not a Member? <Link onClick={() => setIsLogin(false)}>SignUp now</Link></p>
                    </div>
                ) : (
                    <div className='form'>
                        <h2>Signup Form</h2>
                        <div className='input-container'>
                            <input type='text' required placeholder=" " />
                            <label>Name</label>
                        </div>
                        <div className='input-container'>
                            <input type='email' required placeholder=" " />
                            <label>Email</label>
                        </div>
                        <div className='input-container'>
                            <input type='password' required placeholder=" " />
                            <label>Password</label>
                        </div>
                        <div className='input-container'>
                            <input type='password' required placeholder=" " />
                            <label>Confirm Password</label>
                        </div>
                        <Link to='/login' onClick={() => setIsLogin(true)}><span>Already have an account?</span></Link>
                        <button onClick={() => setIsLogin(true)}>SignUp</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Login;
