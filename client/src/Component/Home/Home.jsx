import React from 'react';
import './Home.css'; 
// import logo from '../../assets/edu_logo.png';
import home from '../../assets/Home.jpg';
import Marquee from "react-fast-marquee";
import Accordian from '../Accodian/Accordian';
import Category from '../Category/Category';
import Review from '../Review/Review';
import { Design } from './Design';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Why from './Why';
import Ban from '../design/Ban';

function Home() {
    return (
        <div>
            <div className="about" id="about">
                <div className="about_left">
                    <h1>
                        All our top programs include<br />
                        Generative AI Components
                    </h1>

                    <h2>
                        <strong>Explore Online Learning Hub+</strong>
                    </h2>

                    <h3>
                        20+ <span>Live classes monthly</span><br />
                        50+ <span>Learning solutions</span><br />
                        100+ <span>Hands-on projects with labs</span>
                    </h3>
                    <button><Link to="/Courses">Explore Program</Link></button>
                    {/* <button>Explore Program</button> */}
                </div>

                <div className="about_right">
                    <img src={home} alt="About Us" />
                </div>
            </div>

            <div class="company">
                <div class="company-header">
                    <h4>Partnering with world's leading universities and companies</h4>
                </div>
                <div class="company-logo">
                    <Marquee>
                        <img src="https://www.simplilearn.com/ice9/labels/Purdue_Home.svg?w=200&dpr=1.3" alt="Purdue University Logo" />
                        <img src="https://www.simplilearn.com/ice9/labels/Miscrosoft_Home.svg?w=240&dpr=1.3" alt="Microsoft Logo" />
                        <img src="https://www.simplilearn.com/ice9/university/University_Logo_Colored_48px.svgz?w=160&dpr=1.3" alt="University Logo" />
                        <img src="https://www.simplilearn.com/ice9/university/Umass_48_mega_menu.svgz?w=240&dpr=1.3" alt="UMass Logo" />
                        <img src="https://www.simplilearn.com/ice9/labels/iitRoorkee_Home.svg?w=320&dpr=1.3" alt="IIT Roorkee Logo" />
                        <img src="https://www.simplilearn.com/ice9/labels/AWS_Home.svg?w=128&dpr=1.3" alt="AWS Logo" />
                        <img src="https://www.simplilearn.com/ice9/university/UC_San_Diego_megamenu_48px.svgz?w=200&dpr=1.3" alt="UC San Diego Logo" />
                    </Marquee>
                </div>
            </div>
            <Category/>
            <Why/>
            <Design/>
            <Review/>
            <Accordian/>
            <Ban/>
            <Footer/>
           
        </div>
        
    );
}

export default Home;
