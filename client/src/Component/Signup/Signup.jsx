import React from 'react'
import { Link } from 'react-router-dom';
function Signup() {
    return (
        <div className='main-login'>
            <div className='login-card'>
                <form>
                    <h1 style={{marginTop:"30px"}}>Sign Up</h1>
                    <input placeholder='Full Name' id="name" type="text" required /><br />
                    <input placeholder='Email' id="email" type="email" required /><br />
                    <input placeholder='Password' id="password" type="password" required /><br />
                    <input placeholder='Confirm Password' id="confirm-password" type="password" required /><br />
                    
                    <button className='btn-login-edu' type='submit'>Sign Up</button>
                    
                    {/* <p>Already have an account? <a href='Login'>Login</a></p> */}
                    <p>Already have an account? <Link to="/Login">Login</Link></p>
                    
                    

                    {/* <p>or sign up with</p> */}
                    {/* <button className='btn-login-fac'>Sign Up with Facebook</button><br /> */}
                    {/* <button className='btn-login-Goog'>Sign Up with Google</button> */}
                </form>
            </div>
        </div>
    )
}

export default Signup