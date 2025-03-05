import React from 'react'
import "./Login.css";
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className='main-login'>
            <div className='login-card'>
                <form>
                    <h1>Login</h1>
                    <input placeholder='Email' id="Email" type="text"></input><br></br>
                    <input placeholder='password' id="password" type="password"></input><br></br>
                    <a href='Forgot'>Forgot password?</a><br></br>
                    <button className='btn-login-edu' type='submit'>Login</button>
                    <span><p>Don't have an account? <Link to="/Signup"> Signup</Link></p></span>
                    {/* <span><p>Don't have an account?<a href='Signup'> Signup</a></p></span> */}
                    <p>or login with </p>
                    <button className='btn-login-fac'><i class="fa-brands fa-facebook"></i> Login with Facebook</button><br></br>
                    <button className='btn-login-Goog'><i class="fa-brands fa-google"></i>  Login with Google</button>
                </form>
            </div>
        </div>
    )
}

export default Login