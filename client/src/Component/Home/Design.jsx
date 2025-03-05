
import React, { useState } from "react";
import quiz from '../../assets/qui.png';
import cour from '../../assets/coursecont.png';
import web from '../../assets/webinar.jpg'

import './Design.css';

export function Design(props) {

  const [leftContent, setLeftContent] = useState({
    image: cour
  });

  const handleRightBoxClick = (image) => {
    setLeftContent({ image });
  };

  return (
    <div className="container-m">


      <div className="left-side">
        <div className="box">
          <img src={leftContent.image} width="550px" height="400px" alt="do" />
        </div>
      </div>


      <div className="right-side">

        <div
          className="right-box"
          onClick={() =>
            handleRightBoxClick(
              cour
            )
          }
        >
          <h3>200+ certification Courses</h3>
          <p>Click to learn more</p>

        </div>
        <div
          className="right-box"
          onClick={() =>
            handleRightBoxClick(
              web
            )
          }
        >
          <h3>Free webinars</h3>
          <p>Click to learn more</p>
        </div>
        <div
          className="right-box"
          onClick={() =>
            handleRightBoxClick(
              quiz
            )
          }
        >
          <h3>Quiz Compitition</h3>
          <p>Click to learn more</p>
        </div>
        <div
          className="right-box"
          onClick={() =>
            handleRightBoxClick(
              "https://d3m1rm8xuevz4q.cloudfront.net/wp-content/uploads/2022/07/projects_header-1.jpg.webp"
            )
          }
        >
          <h3>Hands-on Training</h3>
          <p>Click to learn more</p>
        </div>
      </div>
    </div>

  );
}

