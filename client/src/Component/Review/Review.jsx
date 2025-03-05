
import React from "react";
import "./Review.css";

function Review() {
    return (
        <div className="rev-back">
            <div className="rev-name">
                <h4>See what others are achieving through learning</h4>
            </div>

            <div className="review-section">

                <div className="review-card">
                    <p> “ online courses rated the <strong>most popular online course or certification program</strong> for learning how to code according to”</p>
                    <div className="review-img">
                        <img src="https://simplilearn-reviews.gumlet.io/wp-content/uploads/2022/08/Profile-Icon.png?compress=true&quality=80&w=360&dpr=1.3"
                            alt="review1" />
                        <p>Kartik Jadhav</p>
                    </div>
                </div>
                <div className="review-card">
                    <p> “I have a full-time job and 3 kids. I needed the <strong>flexibility</strong> offered by Coursera Plus in order to achieve my goals.”</p>
                    <div className="review-img">
                        <img src="https://simplilearn-reviews.gumlet.io/wp-content/uploads/2022/08/Profile-Icon.png?compress=true&quality=80&w=360&dpr=1.3"
                            alt="review1" />
                        <p>Abigail P.</p>
                    </div>
                </div>

                <div className="review-card">
                    <p> “ Udemy was truly a <strong> game-changer</strong>  and a great guide for me as we brought Dimensional to life.”</p>
                    <div className="review-img">
                        <img src="https://simplilearn-reviews.gumlet.io/wp-content/uploads/2024/10/michael.jpeg?compress=true&quality=80&w=360&dpr=1.3"
                            alt="review1" />
                        <p>San Shinde</p>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Review;

