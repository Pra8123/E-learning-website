import React, { useState } from "react";
import "./Webinar.css"; 

const Webinar = () => {
  const [webinars] = useState([
    {
      title: "Introduction to Python",
      date: "February 5, 2025",
      time: "6:00 PM IST",
      link: "https://example.com/python-webinar",
    },
    {
      title: "Mastering React.js",
      date: "February 6, 2025",
      time: "7:30 PM IST",
      link: "https://example.com/react-webinar",
    },
    {
      title: "Web Development  2025",
      date: "February 7, 2025",
      time: "5:00 PM IST",
      link: "https://example.com/web-dev-webinar",
    },
  ]);

  return (
    <div className="webinar-container">
      <h2 className="webinar-title">Upcoming Free Webinars</h2>
      <div className="webinar-grid">
        {webinars.map((webinar, index) => (
          <div key={index} className="webinar-card">
            <h3 className="webinar-name">{webinar.title}</h3>
            <p className="webinar-date">{webinar.date} | {webinar.time}</p>
            <a href={webinar.link} target="_blank" rel="noopener noreferrer" className="webinar-link">
              Join Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Webinar;
