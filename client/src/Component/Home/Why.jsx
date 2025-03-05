import React from 'react';
import './Why.css';
import certi from '../../assets/cert-removebg-preview.png';
import techer from '../../assets/tech-removebg-preview.png';
import support from '../../assets/comm-removebg-preview.png';
const Why = () => {
  return (
    <div>
      <h1 className='more-contin'>----- Why choose edulearn -----</h1>
      <div className='main-container-more'>
        <div className='main-more-card'>
          <img src={support} alt='more' />
          <h1>Comunity Support</h1>
          <p>"Have questions? Get instant support from peers and mentors to make learning more engaging and effective!" 🚀</p>
        </div>
        <div className='main-more-card'>
          <img src={certi} alt='more' />
          <h1>Certification</h1>
          <p>"Earn industry-recognized certifications that boost your career and validate your skills!" 🎓</p>
        </div>
        <div className='main-more-card'>
          <img src={techer} alt='more' />
          <h1>Proficient Facilitators</h1>
          <p>"Trainers possess a blend of skills, knowledge, and personal qualities that enable them to effectively educate and support students in reaching their goals." 🚀</p>
        </div>
      </div>
    </div>
  )
};

export default Why;

